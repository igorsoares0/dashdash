"use client"

import { DataTable } from "@/components/dashboard/data-table"
import { orderColumns } from "@/components/dashboard/order-columns"
import { getOrders } from "@/lib/mock-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-cards"
import { ShoppingCart, Clock, CheckCircle, XCircle } from "lucide-react"

export default function OrdersPage() {
  const orders = getOrders()

  const pendingOrders = orders.filter(o => o.status === "pending").length
  const processingOrders = orders.filter(o => o.status === "processing").length
  const completedOrders = orders.filter(o => o.status === "completed").length
  const cancelledOrders = orders.filter(o => o.status === "cancelled").length

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Orders</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage and track all customer orders
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Orders"
          value={orders.length}
          icon={ShoppingCart}
          description="All time orders"
          iconColor="bg-blue-500/10 text-blue-600 dark:text-blue-400"
        />
        <StatsCard
          title="Pending"
          value={pendingOrders}
          icon={Clock}
          description="Awaiting processing"
          iconColor="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
        />
        <StatsCard
          title="Completed"
          value={completedOrders}
          icon={CheckCircle}
          description="Successfully delivered"
          iconColor="bg-green-500/10 text-green-600 dark:text-green-400"
        />
        <StatsCard
          title="Cancelled"
          value={cancelledOrders}
          icon={XCircle}
          description="Cancelled orders"
          iconColor="bg-red-500/10 text-red-600 dark:text-red-400"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
          <CardDescription>
            A comprehensive list of all orders with customer details and status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={orderColumns}
            data={orders}
            searchKey="customer"
            searchPlaceholder="Search orders by customer..."
          />
        </CardContent>
      </Card>
    </div>
  )
}
