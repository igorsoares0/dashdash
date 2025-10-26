"use client"

import { DataTable } from "@/components/dashboard/data-table"
import { transactionColumns } from "@/components/dashboard/transaction-columns"
import { generateTransactions } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-cards"
import { DollarSign, TrendingUp, TrendingDown, Activity, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TransactionsPage() {
  const allTransactions = generateTransactions(300)

  // Calculate stats
  const completedTransactions = allTransactions.filter(t => t.status === "completed")
  const pendingTransactions = allTransactions.filter(t => t.status === "pending")
  const failedTransactions = allTransactions.filter(t => t.status === "failed")

  const totalIncome = completedTransactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = completedTransactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  const netBalance = totalIncome - totalExpenses

  const transactionVolume = completedTransactions.length

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">
            Track and manage all financial transactions
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Income"
          value={`$${totalIncome.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={TrendingUp}
          trend={{ value: 12.5, isPositive: true }}
          iconColor="bg-green-500/10 text-green-600 dark:text-green-400"
        />
        <StatsCard
          title="Total Expenses"
          value={`$${totalExpenses.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={TrendingDown}
          trend={{ value: 8.2, isPositive: false }}
          iconColor="bg-red-500/10 text-red-600 dark:text-red-400"
        />
        <StatsCard
          title="Net Balance"
          value={`$${netBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={DollarSign}
          trend={{ value: 4.3, isPositive: true }}
          iconColor="bg-blue-500/10 text-blue-600 dark:text-blue-400"
        />
        <StatsCard
          title="Transaction Volume"
          value={transactionVolume}
          icon={Activity}
          description="Completed transactions"
          iconColor="bg-purple-500/10 text-purple-600 dark:text-purple-400"
        />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">
            All Transactions
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
              {allTransactions.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
              {completedTransactions.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pending
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
              {pendingTransactions.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="failed">
            Failed
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
              {failedTransactions.length}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>
                    Complete transaction history including payments, refunds, withdrawals, and deposits.
                  </CardDescription>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Transaction type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="payment">Payment</SelectItem>
                    <SelectItem value="refund">Refund</SelectItem>
                    <SelectItem value="withdrawal">Withdrawal</SelectItem>
                    <SelectItem value="deposit">Deposit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={transactionColumns}
                data={allTransactions}
                searchKey="user"
                searchPlaceholder="Search by user name..."
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Transactions</CardTitle>
              <CardDescription>
                All successfully processed transactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={transactionColumns}
                data={completedTransactions}
                searchKey="user"
                searchPlaceholder="Search by user name..."
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Transactions</CardTitle>
              <CardDescription>
                Transactions awaiting processing or confirmation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={transactionColumns}
                data={pendingTransactions}
                searchKey="user"
                searchPlaceholder="Search by user name..."
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="failed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Failed Transactions</CardTitle>
              <CardDescription>
                Transactions that failed to process. Review and retry if needed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={transactionColumns}
                data={failedTransactions}
                searchKey="user"
                searchPlaceholder="Search by user name..."
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Breakdown</CardTitle>
            <CardDescription>Summary by transaction type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["payment", "deposit", "withdrawal", "refund"].map((type) => {
                const typeTransactions = allTransactions.filter(t => t.type === type)
                const total = typeTransactions.reduce((sum, t) => sum + Math.abs(t.amount), 0)
                const percentage = (typeTransactions.length / allTransactions.length) * 100

                return (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${
                        type === "payment" ? "bg-blue-500" :
                        type === "deposit" ? "bg-green-500" :
                        type === "withdrawal" ? "bg-orange-500" :
                        "bg-purple-500"
                      }`} />
                      <span className="text-sm font-medium capitalize">{type}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {typeTransactions.length} ({percentage.toFixed(1)}%)
                      </span>
                      <span className="text-sm font-semibold">
                        ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Summary by payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["credit_card", "debit_card", "paypal", "bank_transfer", "crypto"].map((method) => {
                const methodTransactions = allTransactions.filter(t => t.method === method)
                const total = methodTransactions.reduce((sum, t) => sum + Math.abs(t.amount), 0)
                const percentage = (methodTransactions.length / allTransactions.length) * 100

                const methodLabels = {
                  credit_card: "Credit Card",
                  debit_card: "Debit Card",
                  paypal: "PayPal",
                  bank_transfer: "Bank Transfer",
                  crypto: "Cryptocurrency",
                }

                return (
                  <div key={method} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{methodLabels[method as keyof typeof methodLabels]}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {methodTransactions.length} ({percentage.toFixed(1)}%)
                      </span>
                      <span className="text-sm font-semibold">
                        ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
