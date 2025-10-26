"use client"

import { DataTable } from "@/components/dashboard/data-table"
import { userColumns } from "@/components/dashboard/user-columns"
import { generateUsers } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function UsersPage() {
  const users = generateUsers(100)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage your users and their permissions
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            A list of all users in your system including their name, email, role, and status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={userColumns}
            data={users}
            searchKey="name"
            searchPlaceholder="Search users by name..."
          />
        </CardContent>
      </Card>
    </div>
  )
}
