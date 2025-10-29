"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer items-center rounded-full border-2 transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-blue-600 data-[state=checked]:border-transparent",
      "dark:data-[state=checked]:from-blue-500 dark:data-[state=checked]:to-blue-600",
      "data-[state=unchecked]:bg-slate-200 data-[state=unchecked]:border-slate-300",
      // Dark mode OFF state: maximum contrast track
      "dark:data-[state=unchecked]:bg-slate-800 dark:data-[state=unchecked]:border-slate-700",
      "hover:data-[state=checked]:from-blue-600 hover:data-[state=checked]:to-blue-700",
      "hover:data-[state=unchecked]:bg-slate-300 hover:data-[state=unchecked]:border-slate-400",
      // Dark mode OFF hover: slightly lighter to indicate hover without losing contrast
      "dark:hover:data-[state=unchecked]:bg-slate-700 dark:hover:data-[state=unchecked]:border-slate-600",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[22px] w-[22px] rounded-full shadow-lg ring-0 transition-all duration-300 ease-in-out",
        "data-[state=checked]:translate-x-[26px] data-[state=unchecked]:translate-x-[2px]",
        "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
        "data-[state=checked]:shadow-[0_2px_8px_rgba(59,130,246,0.5)]",
        // Dark mode OFF state: white thumb for maximum contrast
        "dark:data-[state=unchecked]:bg-white dark:data-[state=unchecked]:shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
        "dark:data-[state=checked]:bg-white dark:data-[state=checked]:shadow-[0_2px_8px_rgba(59,130,246,0.5)]"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
