"use client"

import { StatsCard } from "@/components/dashboard/stats-cards"
import {
  SalesByRegionChart,
  PerformanceRadarChart,
  RevenueByProductChart,
  CustomerAcquisitionChart,
} from "@/components/dashboard/report-charts"
import { RevenueChart, CategoryChart } from "@/components/dashboard/charts"
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  Filter,
  RefreshCcw,
  FileSpreadsheet,
  FileBarChart,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function ReportsPage() {
  const topProducts = [
    { name: "Wireless Headphones", sales: 1234, revenue: 98720, growth: 15 },
    { name: "Smart Watch Pro", sales: 987, revenue: 147450, growth: 22 },
    { name: "Laptop Stand", sales: 856, revenue: 42800, growth: -5 },
    { name: "USB-C Hub", sales: 743, revenue: 37150, growth: 8 },
    { name: "Mechanical Keyboard", sales: 654, revenue: 98100, growth: 12 },
  ]

  const topCustomers = [
    { name: "Acme Corporation", orders: 45, revenue: 125000, tier: "Enterprise" },
    { name: "TechStart Inc", orders: 38, revenue: 98500, tier: "Business" },
    { name: "Global Retail Co", orders: 32, revenue: 87200, tier: "Enterprise" },
    { name: "Innovation Labs", orders: 28, revenue: 76300, tier: "Business" },
    { name: "Digital Dynamics", orders: 24, revenue: 65400, tier: "Professional" },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive business intelligence and analytics reports
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="12months">Last 12 months</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Export Format</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                PDF Report
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Excel Spreadsheet
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileBarChart className="mr-2 h-4 w-4" />
                CSV Data
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$284,560"
          icon={DollarSign}
          trend={{ value: 18.5, isPositive: true }}
          iconColor="bg-green-500/10 text-green-600 dark:text-green-400"
        />
        <StatsCard
          title="Total Orders"
          value="3,456"
          icon={ShoppingBag}
          trend={{ value: 12.3, isPositive: true }}
          iconColor="bg-blue-500/10 text-blue-600 dark:text-blue-400"
        />
        <StatsCard
          title="New Customers"
          value="892"
          icon={Users}
          trend={{ value: 8.7, isPositive: true }}
          iconColor="bg-purple-500/10 text-purple-600 dark:text-purple-400"
        />
        <StatsCard
          title="Growth Rate"
          value="24.8%"
          icon={TrendingUp}
          trend={{ value: 5.2, isPositive: true }}
          iconColor="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales Analysis</TabsTrigger>
          <TabsTrigger value="customers">Customer Insights</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <RevenueChart />
            <CategoryChart />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SalesByRegionChart />
            <PerformanceRadarChart />
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-1">
            <RevenueByProductChart />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
                <CardDescription>Products with highest sales and revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-none">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={product.growth >= 0 ? "default" : "destructive"}
                          className="gap-1"
                        >
                          {product.growth >= 0 ? "↗" : "↘"}
                          {Math.abs(product.growth)}%
                        </Badge>
                        <p className="text-sm font-semibold">
                          ${product.revenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales Trends</CardTitle>
                <CardDescription>Key sales metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Average Order Value</p>
                      <p className="text-xs text-muted-foreground">Per transaction</p>
                    </div>
                    <p className="text-2xl font-bold">$82.34</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Conversion Rate</p>
                      <p className="text-xs text-muted-foreground">Visitors to customers</p>
                    </div>
                    <p className="text-2xl font-bold">3.45%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Customer Lifetime Value</p>
                      <p className="text-xs text-muted-foreground">Average CLV</p>
                    </div>
                    <p className="text-2xl font-bold">$1,248</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Repeat Purchase Rate</p>
                      <p className="text-xs text-muted-foreground">Returning customers</p>
                    </div>
                    <p className="text-2xl font-bold">42.8%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-1">
            <CustomerAcquisitionChart />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Customers</CardTitle>
                <CardDescription>Highest value customers by revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCustomers.map((customer, index) => (
                    <div key={customer.name} className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-none">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">{customer.orders} orders</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{customer.tier}</Badge>
                        <p className="text-sm font-semibold">
                          ${customer.revenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Demographics</CardTitle>
                <CardDescription>Customer distribution by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { segment: "Enterprise", count: 124, percentage: 12, color: "bg-blue-500" },
                    { segment: "Business", count: 346, percentage: 34, color: "bg-green-500" },
                    { segment: "Professional", count: 289, percentage: 28, color: "bg-purple-500" },
                    { segment: "Individual", count: 267, percentage: 26, color: "bg-orange-500" },
                  ].map((segment) => (
                    <div key={segment.segment} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${segment.color}`} />
                          <span className="text-sm font-medium">{segment.segment}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{segment.count} customers</span>
                          <span className="text-sm font-semibold">{segment.percentage}%</span>
                        </div>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full ${segment.color}`}
                          style={{ width: `${segment.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <PerformanceRadarChart />
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
                <CardDescription>Critical business metrics and targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Revenue Target", current: 284560, target: 300000, unit: "$" },
                    { label: "Customer Acquisition", current: 892, target: 1000, unit: "" },
                    { label: "Order Fulfillment", current: 96, target: 98, unit: "%" },
                    { label: "Customer Satisfaction", current: 4.7, target: 4.8, unit: "/5" },
                  ].map((kpi) => {
                    const percentage = (kpi.current / kpi.target) * 100
                    const isOnTrack = percentage >= 90

                    return (
                      <div key={kpi.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{kpi.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">
                              {kpi.unit === "$" ? kpi.unit : ""}
                              {kpi.current.toLocaleString()}
                              {kpi.unit !== "$" ? kpi.unit : ""}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              / {kpi.unit === "$" ? kpi.unit : ""}
                              {kpi.target.toLocaleString()}
                              {kpi.unit !== "$" ? kpi.unit : ""}
                            </span>
                          </div>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full ${
                              isOnTrack ? "bg-green-500" : "bg-orange-500"
                            }`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance Summary</CardTitle>
              <CardDescription>Comparative analysis of key metrics month-over-month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-3 text-left text-sm font-medium">Metric</th>
                      <th className="pb-3 text-right text-sm font-medium">Current Month</th>
                      <th className="pb-3 text-right text-sm font-medium">Previous Month</th>
                      <th className="pb-3 text-right text-sm font-medium">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { metric: "Revenue", current: 284560, previous: 241200, format: "currency" },
                      { metric: "Orders", current: 3456, previous: 3089, format: "number" },
                      { metric: "Avg Order Value", current: 82.34, previous: 78.12, format: "currency" },
                      { metric: "New Customers", current: 892, previous: 821, format: "number" },
                    ].map((row) => {
                      const change = ((row.current - row.previous) / row.previous) * 100
                      const isPositive = change >= 0

                      return (
                        <tr key={row.metric}>
                          <td className="py-3 text-sm font-medium">{row.metric}</td>
                          <td className="py-3 text-right text-sm">
                            {row.format === "currency" ? "$" : ""}
                            {row.current.toLocaleString()}
                          </td>
                          <td className="py-3 text-right text-sm text-muted-foreground">
                            {row.format === "currency" ? "$" : ""}
                            {row.previous.toLocaleString()}
                          </td>
                          <td className="py-3 text-right">
                            <Badge
                              variant={isPositive ? "default" : "destructive"}
                              className="gap-1"
                            >
                              {isPositive ? "↗" : "↘"}
                              {Math.abs(change).toFixed(1)}%
                            </Badge>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
