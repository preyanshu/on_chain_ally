from datetime import datetime
from typing import Optional

import httpx
from langchain_core.tools import ToolException, tool
from pydantic import BaseModel, Field


class CryptoName(BaseModel):
    crypto_name: str = Field(description="The crypto name in CoinGecko")
    days: int = Field(default=1, description="The data up to number of days ago")
    interval: Optional[str] = Field(
        default=None,
        description="Data interval like '5m', 'hourly', or 'daily'. Leave empty for auto.",
    )


def process_data(data):
    return [
        {
            "datetime": datetime.fromtimestamp(row[0] / 1000).strftime(
                "%Y-%m-%d %H:%M:%S"
            ),
            "price": row[1],
        }
        for row in data
    ]


@tool("get-historical-chart-data", args_schema=CryptoName)
async def get_historical_chart_data(
    crypto_name: str, days: int = 1, interval: Optional[str] = None
):
    """Get historical chart data (automatically limits days to 365 for free-tier CoinGecko API users)"""

    # Cap days at 365 if higher
    if days > 365:
        print(f"[INFO] Requested days={days}, capping to 365 due to API limits.")
        days = 364

    url = f"https://api.coingecko.com/api/v3/coins/{crypto_name.lower()}/market_chart?vs_currency=usd&days={days}"
    if interval:
        url += f"&interval={interval}"

    async with httpx.AsyncClient(timeout=httpx.Timeout(timeout=10)) as client:
        try:
            response = await client.get(url)
            response.raise_for_status()
            data = response.json()
            prices = data["prices"]
            return {"record": process_data(prices)}
        except httpx.HTTPStatusError as e:
            print(f"[ERROR] HTTP Status Error: {e.response.status_code}")
            print(f"[ERROR] Response: {e.response.text}")
            raise ToolException("Error fetching historical chart data")
        except Exception as e:
            print(f"[ERROR] Unexpected Error: {str(e)}")
            raise ToolException("Unexpected error occurred while fetching data")

