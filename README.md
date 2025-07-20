# On Chain Ally

OnChain Ally is an autonomous AI crypto agent built using IO Intelligence.
It helps users learn blockchain, track prices, view charts, and buy crypto all through chat.
Powered by real-time APIs like CoinGecko and secure transaction endpoints, it operates with minimal human input.
The agent understands intent, invokes tools, and executes end-to-end actions in real time.
OnChain Ally showcases how IO-powered agents can make crypto accessible, actionable, and intelligent.

### Problem Statement

<img width="1389" height="870" alt="image" src="https://github.com/user-attachments/assets/45f21f39-8dd6-4503-8b9a-83f33a20e720" />

###  Features

-   **Get Crypto Prices**: Fetch real-time price data for any cryptocurrency using the CoinGecko API.
-   **View Historical Charts**: Retrieve and visualize historical price data for selected coins.
-   **Discover Trending Coins** : See what’s hot in the crypto space right now.
-   **Receive Smart Advice**: Get personalized crypto investment guidance powered by AI.
-   **Search Crypto Topics**: Perform general searches to explore blockchain concepts or coin info.
-   **Buy Coins**: Simulate or execute crypto purchases securely via API.
-   **Visual Charts**: Interactive area charts using `recharts` for beautiful, responsive UI.
-   **Always Available**: Works 24/7 to answer questions and assist with transactions.

### Images

<img width="1916" height="895" alt="image" src="https://github.com/user-attachments/assets/685a47f6-593a-4fdf-b59e-6663656ef6f0" />

<img width="1918" height="900" alt="image" src="https://github.com/user-attachments/assets/7cee63c6-ab84-4138-933b-be9f9f94b648" />

<img width="1902" height="873" alt="image" src="https://github.com/user-attachments/assets/e7decc41-58a4-46a1-bad5-6e8f9d6c9d40" />

###  Architecutre

<img width="899" height="738" alt="image" src="https://github.com/user-attachments/assets/ad20dd16-1ffc-477e-b0f2-7f14eaa57a8c" />

## Setup

To setup, install dependencies from the root of the monorepo:

```bash
npm install
```

This will install all dependencies required by both the frontend and backend projects. You can also run shared commands from the root of the project:

```bash
npm run build

npm start
```

## Environment variables

### Backend

The backend requires Tavily and OpenAI API keys to run. Sign up here:

- Tavily: [https://tavily.com/](https://tavily.com/)
- IoNet: [https://ai.io.net/ai/api-keys](https://ai.io.net/ai/api-keys)
- Etherscan: [https://etherscan.io/apidashboard](https://etherscan.io/apidashboard)

Once you have your API keys, create a `.env` file in the [`./backend`](`./backend`) directory and add the following:

```bash
TAVILY_API_KEY=YOUR_API_KEY
IO_NET_KEY=YOUR_API_KEY
ETHERSCAN_API_KEY=YOUR_API_KEY

```

### Frontend

Set the variables in a `.env` file inside [`./frontend`](./frontend):

```bash
NEXT_PUBLIC_API_URL="http://localhost:8080"
```
