"use client"

import { DataTable } from "@/components/dashboard/data-table"
import { productColumns } from "@/components/dashboard/product-columns"
import { generateProducts } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProductsPage() {
  const products = generateProducts(50)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">
            Manage your product inventory and pricing
          </p>
        </div>
        <Button>
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
