"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Format date to be more readable
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Format price with thousands separator and two decimal places
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

interface HistoricalChartDataProps {
  crypto_name: string
  days: number
  record: { datetime: string; price: number }[]
}

export function HistoricalChartData({ crypto_name, days, record }: HistoricalChartDataProps) {
  const formattedData = record.map((item) => ({
    ...item,
    formattedDate: formatDate(item.datetime),
  }))

  return (
    <Card
      className="w-full"
      style={{
        backgroundColor: "#1a1a1a",
        borderColor: "#333333",
        color: "#ffffff",
      }}
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold capitalize" style={{ color: "#ffffff" }}>
          Historical Price Chart Of {crypto_name}
        </CardTitle>
        <CardDescription className="text-sm" style={{ color: "#888888" }}>
          Historical price data for the last {days} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formattedData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" opacity={0.3} />
              <XAxis
                dataKey="formattedDate"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tick={{
                  fontSize: 12,
                  fill: "#888888",
                }}
                tickFormatter={(value) => value.split(",")[0]}
              />
              <YAxis
                dataKey="price"
                tickLine={false}
                axisLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#888888",
                }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                width={60}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div
                        className="rounded-lg border p-3 shadow-lg backdrop-blur-sm"
                        style={{
                          backgroundColor: "rgba(26, 26, 26, 0.95)",
                          borderColor: "#333333",
                          color: "#ffffff",
                        }}
                      >
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="font-medium" style={{ color: "#888888" }}>
                            Date
                          </div>
                          <div className="font-mono" style={{ color: "#ffffff" }}>
                            {payload[0].payload.formattedDate}
                          </div>
                          <div className="font-medium" style={{ color: "#888888" }}>
                            Price
                          </div>
                          <div className="font-bold font-mono" style={{ color: "#3b82f6" }}>
                            ${formatPrice(payload[0].value as number)}
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorPrice)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
