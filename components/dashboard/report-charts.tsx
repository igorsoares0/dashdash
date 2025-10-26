"use client"

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const salesByRegionData = [
  { region: "North America", sales: 4500, growth: 12 },
  { region: "Europe", sales: 3800, growth: 8 },
  { region: "Asia Pacific", sales: 5200, growth: 25 },
  { region: "Latin America", sales: 2100, growth: 15 },
  { region: "Middle East", sales: 1800, growth: 10 },
  { region: "Africa", sales: 1200, growth: 18 },
]

const performanceData = [
  { metric: "Sales", value: 85 },
  { metric: "Customer Satisfaction", value: 92 },
  { metric: "Delivery Time", value: 78 },
  { metric: "Product Quality", value: 88 },
  { metric: "Support Response", value: 95 },
  { metric: "Market Reach", value: 72 },
]

const revenueByProductData = [
  { month: "Jan", electronics: 4000, clothing: 2400, books: 1200 },
  { month: "Feb", electronics: 3000, clothing: 1398, books: 1100 },
  { month: "Mar", electronics: 2000, clothing: 9800, books: 2290 },
  { month: "Apr", electronics: 2780, clothing: 3908, books: 2000 },
  { month: "May", electronics: 1890, clothing: 4800, books: 2181 },
  { month: "Jun", electronics: 2390, clothing: 3800, books: 2500 },
  { month: "Jul", electronics: 3490, clothing: 4300, books: 2100 },
]

const customerAcquisitionData = [
  { month: "Jan", organic: 120, paid: 80, referral: 40 },
  { month: "Feb", organic: 150, paid: 100, referral: 50 },
  { month: "Mar", organic: 180, paid: 120, referral: 60 },
  { month: "Apr", organic: 200, paid: 140, referral: 70 },
  { month: "May", organic: 220, paid: 150, referral: 80 },
  { month: "Jun", organic: 250, paid: 180, referral: 90 },
  { month: "Jul", organic: 280, paid: 200, referral: 100 },
]

export function SalesByRegionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Region</CardTitle>
        <CardDescription>Regional sales performance and growth rate</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={salesByRegionData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis type="number" className="text-xs" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
            <YAxis
              dataKey="region"
              type="category"
              width={120}
              className="text-xs"
              tick={{ fill: "hsl(var(--color-muted-foreground))" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--color-popover))",
                border: "1px solid hsl(var(--color-border))",
                borderRadius: "var(--radius-lg)",
              }}
            />
            <Legend />
            <Bar dataKey="sales" fill="hsl(var(--color-chart-1))" radius={[0, 8, 8, 0]} name="Sales ($K)" />
            <Bar dataKey="growth" fill="hsl(var(--color-chart-2))" radius={[0, 8, 8, 0]} name="Growth (%)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function PerformanceRadarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>Overall business performance indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={performanceData}>
            <PolarGrid stroke="hsl(var(--color-border))" />
            <PolarAngleAxis
              dataKey="metric"
              tick={{ fill: "hsl(var(--color-muted-foreground))", fontSize: 12 }}
            />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
            <Radar
              name="Performance"
              dataKey="value"
              stroke="hsl(var(--color-chart-3))"
              fill="hsl(var(--color-chart-3))"
              fillOpacity={0.6}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--color-popover))",
                border: "1px solid hsl(var(--color-border))",
                borderRadius: "var(--radius-lg)",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function RevenueByProductChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Product Category</CardTitle>
        <CardDescription>Monthly revenue breakdown by product category</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueByProductData}>
            <defs>
              <linearGradient id="electronics" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="clothing" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--color-chart-2))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--color-chart-2))" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="books" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--color-chart-3))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--color-chart-3))" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
            <YAxis className="text-xs" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--color-popover))",
                border: "1px solid hsl(var(--color-border))",
                borderRadius: "var(--radius-lg)",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="electronics"
              stackId="1"
              stroke="hsl(var(--color-chart-1))"
              fill="url(#electronics)"
              name="Electronics"
            />
            <Area
              type="monotone"
              dataKey="clothing"
              stackId="1"
              stroke="hsl(var(--color-chart-2))"
              fill="url(#clothing)"
              name="Clothing"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="hsl(var(--color-chart-3))"
              fill="url(#books)"
              name="Books"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function CustomerAcquisitionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Acquisition Channels</CardTitle>
        <CardDescription>New customers by acquisition source</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={customerAcquisitionData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
            <YAxis className="text-xs" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--color-popover))",
                border: "1px solid hsl(var(--color-border))",
                borderRadius: "var(--radius-lg)",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="organic"
              stroke="hsl(var(--color-chart-2))"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Organic"
            />
            <Line
              type="monotone"
              dataKey="paid"
              stroke="hsl(var(--color-chart-1))"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Paid Ads"
            />
            <Line
              type="monotone"
              dataKey="referral"
              stroke="hsl(var(--color-chart-3))"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Referral"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
