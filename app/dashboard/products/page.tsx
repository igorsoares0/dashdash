"use client"

import { DataTable } from "@/components/dashboard/data-table"
import { productColumns } from "@/components/dashboard/product-columns"
import { getProducts } from "@/lib/mock-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProductsPage() {
  const products = getProducts()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Manage your product inventory and pricing
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Products</CardTitle>
          <CardDescription>
            A list of all products in your inventory including pricing, stock levels, and sales.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={productColumns}
            data={products}
            searchKey="name"
            searchPlaceholder="Search products by name..."
          />
        </CardContent>
      </Card>
    </div>
  )
}
