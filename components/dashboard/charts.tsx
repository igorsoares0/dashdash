"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const revenueData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
  { month: "Jul", revenue: 3490, expenses: 4300 },
  { month: "Aug", revenue: 4200, expenses: 3200 },
  { month: "Sep", revenue: 3800, expenses: 2900 },
  { month: "Oct", revenue: 4100, expenses: 3100 },
  { month: "Nov", revenue: 4500, expenses: 3400 },
  { month: "Dec", revenue: 5000, expenses: 3600 },
]

const categoryData = [
  { name: "Electronics", value: 400, color: "hsl(var(--color-chart-1))" },
  { name: "Clothing", value: 300, color: "hsl(var(--color-chart-2))" },
  { name: "Books", value: 200, color: "hsl(var(--color-chart-3))" },
  { name: "Home", value: 278, color: "hsl(var(--color-chart-4))" },
  { name: "Sports", value: 189, color: "hsl(var(--color-chart-5))" },
]

const userGrowthData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 150 },
  { month: "Mar", users: 200 },
  { month: "Apr", users: 280 },
  { month: "May", users: 350 },
  { month: "Jun", users: 420 },
  { month: "Jul", users: 490 },
  { month: "Aug", users: 580 },
  { month: "Sep", users: 650 },
  { month: "Oct", users: 730 },
  { month: "Nov", users: 820 },
  { month: "Dec", users: 950 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue vs expenses for the current year</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--color-chart-2))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--color-chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--color-chart-1))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="hsl(var(--color-chart-2))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function CategoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>Distribution of sales across product categories</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>Total users registered over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="hsl(var(--color-chart-3))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--color-chart-3))", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function SalesBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
        <CardDescription>Sales performance for the current year</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="hsl(var(--color-chart-1))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
