"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Download, Eye, RefreshCcw, Ban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Transaction } from "@/lib/data"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const getTypeColor = (type: Transaction["type"]) => {
  switch (type) {
    case "payment":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    case "deposit":
      return "bg-green-500/10 text-green-600 dark:text-green-400"
    case "withdrawal":
      return "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    case "refund":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    default:
      return "bg-gray-500/10 text-gray-600 dark:text-gray-400"
  }
}

const getMethodBadge = (method: Transaction["method"]) => {
  const badges = {
    credit_card: "Credit Card",
    debit_card: "Debit Card",
    paypal: "PayPal",
    bank_transfer: "Bank Transfer",
    crypto: "Crypto",
  }
  return badges[method] || method
}

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transaction ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-mono text-sm font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const transaction = row.original
      return (
        <div className="flex flex-col">
          <div className="font-medium">{transaction.user}</div>
          <div className="text-xs text-muted-foreground">{transaction.email}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string
      return (
        <Badge variant="outline" className={cn("capitalize", getTypeColor(row.getValue("type") as Transaction["type"]))}>
          {type}
        </Badge>
      )
    },
  },
  {
    accessorKey: "method",
    header: "Method",
    cell: ({ row }) => {
      const method = row.getValue("method") as Transaction["method"]
      return (
        <Badge variant="secondary" className="font-normal">
          {getMethodBadge(method)}
        </Badge>
      )
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const isNegative = amount < 0
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Math.abs(amount))

      return (
        <div className={cn(
          "font-semibold",
          isNegative ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
        )}>
          {isNegative ? "-" : "+"}{formatted}
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "completed"
              ? "default"
              : status === "pending"
              ? "secondary"
              : status === "failed"
              ? "destructive"
              : "outline"
          }
          className="capitalize"
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] truncate text-sm text-muted-foreground">
          {row.getValue("description")}
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <div className="font-medium">
            {format(new Date(row.getValue("date")), "MMM dd, yyyy")}
          </div>
          <div className="text-xs text-muted-foreground">
            {format(new Date(row.getValue("date")), "HH:mm")}
          </div>
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(transaction.id)}
            >
              Copy transaction ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              View details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Download receipt
            </DropdownMenuItem>
            {transaction.status === "pending" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Retry transaction
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Ban className="mr-2 h-4 w-4" />
                  Cancel transaction
                </DropdownMenuItem>
              </>
            )}
            {transaction.status === "completed" && transaction.type === "payment" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Process refund
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
