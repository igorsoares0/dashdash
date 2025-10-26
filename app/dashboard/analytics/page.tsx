import { RevenueChart, CategoryChart, UserGrowthChart, SalesBarChart } from "@/components/dashboard/charts"
import { StatsCard } from "@/components/dashboard/stats-cards"
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Package } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Detailed analytics and insights for your business
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          trend={{ value: 20.1, isPositive: true }}
          iconColor="bg-green-500/10 text-green-600 dark:text-green-400"
        />
        <StatsCard
          title="Total Users"
          value="2,350"
          icon={Users}
          trend={{ value: 18.1, isPositive: true }}
          iconColor="bg-blue-500/10 text-blue-600 dark:text-blue-400"
        />
        <StatsCard
          title="Total Sales"
          value="12,234"
          icon={ShoppingCart}
          trend={{ value: 19, isPositive: true }}
          iconColor="bg-purple-500/10 text-purple-600 dark:text-purple-400"
        />
        <StatsCard
          title="Products Sold"
          value="8,234"
          icon={Package}
          trend={{ value: 5.2, isPositive: false }}
          iconColor="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
        />
      </div>

      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-1">
            <RevenueChart />
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-1">
            <SalesBarChart />
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-1">
            <UserGrowthChart />
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-1">
            <CategoryChart />
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <RevenueChart />
        <CategoryChart />
      </div>
    </div>
  )
}
