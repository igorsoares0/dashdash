import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  iconColor?: string
}

export function StatsCard({ title, value, description, icon: Icon, trend, iconColor }: StatsCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn(
          "rounded-lg p-2",
          iconColor || "bg-primary/10"
        )}>
          <Icon className={cn(
            "h-4 w-4",
            iconColor ? iconColor.replace('bg-', 'text-').replace('/10', '') : "text-primary"
          )} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            "text-xs font-medium flex items-center gap-1",
            trend.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          )}>
            <span>{trend.isPositive ? "↗" : "↘"}</span>
            {trend.isPositive ? "+" : ""}{trend.value}% from last month
          </p>
        )}
        {description && !trend && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}
