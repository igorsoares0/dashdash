"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  ShoppingCart,
  Package,
  CreditCard,
} from "lucide-react"

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    label: "Users",
    icon: Users,
    href: "/dashboard/users",
  },
  {
    label: "Products",
    icon: Package,
    href: "/dashboard/products",
  },
  {
    label: "Orders",
    icon: ShoppingCart,
    href: "/dashboard/orders",
  },
  {
    label: "Transactions",
    icon: CreditCard,
    href: "/dashboard/transactions",
  },
  {
    label: "Reports",
    icon: FileText,
    href: "/dashboard/reports",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <LayoutDashboard className="h-6 w-6" />
            <span className="">Dashboard</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname === route.href
                    ? "bg-muted text-primary"
                    : "transparent"
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
