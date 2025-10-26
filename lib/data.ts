export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "user" | "moderator"
  status: "active" | "inactive" | "pending"
  createdAt: string
  lastLogin: string
  revenue: number
}

export type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "in_stock" | "low_stock" | "out_of_stock"
  sales: number
}

export type Order = {
  id: string
  customer: string
  product: string
  amount: number
  status: "pending" | "processing" | "completed" | "cancelled"
  date: string
}

export type Transaction = {
  id: string
  user: string
  email: string
  type: "payment" | "refund" | "withdrawal" | "deposit"
  method: "credit_card" | "debit_card" | "paypal" | "bank_transfer" | "crypto"
  amount: number
  status: "completed" | "pending" | "failed" | "cancelled"
  date: string
  description: string
}

// Generate mock data
export function generateUsers(count: number = 100): User[] {
  const roles: User["role"][] = ["admin", "user", "moderator"]
  const statuses: User["status"][] = ["active", "inactive", "pending"]
  const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "James", "Emma", "Robert", "Olivia"]
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"]

  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const date = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)

    return {
      id: `USR-${String(i + 1).padStart(4, "0")}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      role: roles[Math.floor(Math.random() * roles.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: date.toISOString(),
      lastLogin: new Date(date.getTime() + Math.random() * 10000000000).toISOString(),
      revenue: Math.floor(Math.random() * 10000) + 100,
    }
  })
}

export function generateProducts(count: number = 50): Product[] {
  const categories = ["Electronics", "Clothing", "Books", "Home & Garden", "Sports", "Toys", "Food"]
  const products = [
    "Laptop", "Smartphone", "Headphones", "T-Shirt", "Jeans", "Novel", "Cookbook",
    "Chair", "Lamp", "Basketball", "Action Figure", "Organic Tea", "Coffee Maker"
  ]

  return Array.from({ length: count }, (_, i) => {
    const stock = Math.floor(Math.random() * 200)
    const status: Product["status"] = stock === 0 ? "out_of_stock" : stock < 20 ? "low_stock" : "in_stock"

    return {
      id: `PRD-${String(i + 1).padStart(4, "0")}`,
      name: `${products[Math.floor(Math.random() * products.length)]} ${i + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      price: Math.floor(Math.random() * 500) + 10,
      stock,
      status,
      sales: Math.floor(Math.random() * 1000),
    }
  })
}

export function generateOrders(count: number = 200): Order[] {
  const statuses: Order["status"][] = ["pending", "processing", "completed", "cancelled"]
  const customers = generateUsers(20).map(u => u.name)
  const products = generateProducts(10).map(p => p.name)

  return Array.from({ length: count }, (_, i) => ({
    id: `ORD-${String(i + 1).padStart(4, "0")}`,
    customer: customers[Math.floor(Math.random() * customers.length)],
    product: products[Math.floor(Math.random() * products.length)],
    amount: Math.floor(Math.random() * 500) + 20,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
  }))
}

export function generateTransactions(count: number = 300): Transaction[] {
  const types: Transaction["type"][] = ["payment", "refund", "withdrawal", "deposit"]
  const methods: Transaction["method"][] = ["credit_card", "debit_card", "paypal", "bank_transfer", "crypto"]
  const statuses: Transaction["status"][] = ["completed", "pending", "failed", "cancelled"]
  const users = generateUsers(30)

  const descriptions = [
    "Product purchase",
    "Subscription payment",
    "Service fee",
    "Refund request",
    "Account top-up",
    "Withdrawal to bank",
    "Monthly subscription",
    "One-time payment",
    "Premium upgrade",
    "Annual membership",
  ]

  return Array.from({ length: count }, (_, i) => {
    const user = users[Math.floor(Math.random() * users.length)]
    const type = types[Math.floor(Math.random() * types.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]

    // Refunds and withdrawals are negative amounts
    const baseAmount = Math.floor(Math.random() * 2000) + 10
    const amount = (type === "refund" || type === "withdrawal") ? -baseAmount : baseAmount

    return {
      id: `TXN-${String(i + 1).padStart(5, "0")}`,
      user: user.name,
      email: user.email,
      type,
      method: methods[Math.floor(Math.random() * methods.length)],
      amount,
      status,
      date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)).toISOString(),
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
    }
  })
}
