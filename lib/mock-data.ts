// Static mock data to avoid hydration issues
import { User, Product, Order, Transaction } from "./data"

// Fixed seed for consistent data generation
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export function getUsers(): User[] {
  const roles: User["role"][] = ["admin", "user", "moderator"]
  const statuses: User["status"][] = ["active", "inactive", "pending"]
  const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "James", "Emma", "Robert", "Olivia"]
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"]

  let seed = 12345 // Fixed seed

  return Array.from({ length: 100 }, (_, i) => {
    const firstName = firstNames[Math.floor(seededRandom(seed++) * firstNames.length)]
    const lastName = lastNames[Math.floor(seededRandom(seed++) * lastNames.length)]
    const date = new Date(2023, Math.floor(seededRandom(seed++) * 12), Math.floor(seededRandom(seed++) * 28) + 1)

    return {
      id: `USR-${String(i + 1).padStart(4, "0")}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      role: roles[Math.floor(seededRandom(seed++) * roles.length)],
      status: statuses[Math.floor(seededRandom(seed++) * statuses.length)],
      createdAt: date.toISOString(),
      lastLogin: new Date(date.getTime() + seededRandom(seed++) * 10000000000).toISOString(),
      revenue: Math.floor(seededRandom(seed++) * 10000) + 100,
    }
  })
}

export function getProducts(): Product[] {
  const categories = ["Electronics", "Clothing", "Books", "Home & Garden", "Sports", "Toys", "Food"]
  const products = [
    "Laptop", "Smartphone", "Headphones", "T-Shirt", "Jeans", "Novel", "Cookbook",
    "Chair", "Lamp", "Basketball", "Action Figure", "Organic Tea", "Coffee Maker"
  ]

  let seed = 54321 // Fixed seed

  return Array.from({ length: 50 }, (_, i) => {
    const stock = Math.floor(seededRandom(seed++) * 200)
    const status: Product["status"] = stock === 0 ? "out_of_stock" : stock < 20 ? "low_stock" : "in_stock"

    return {
      id: `PRD-${String(i + 1).padStart(4, "0")}`,
      name: `${products[Math.floor(seededRandom(seed++) * products.length)]} ${i + 1}`,
      category: categories[Math.floor(seededRandom(seed++) * categories.length)],
      price: Math.floor(seededRandom(seed++) * 500) + 10,
      stock,
      status,
      sales: Math.floor(seededRandom(seed++) * 1000),
    }
  })
}

export function getOrders(): Order[] {
  const statuses: Order["status"][] = ["pending", "processing", "completed", "cancelled"]
  const users = getUsers().slice(0, 20)
  const products = getProducts().slice(0, 10)

  let seed = 98765 // Fixed seed

  return Array.from({ length: 200 }, (_, i) => ({
    id: `ORD-${String(i + 1).padStart(4, "0")}`,
    customer: users[Math.floor(seededRandom(seed++) * users.length)].name,
    product: products[Math.floor(seededRandom(seed++) * products.length)].name,
    amount: Math.floor(seededRandom(seed++) * 500) + 20,
    status: statuses[Math.floor(seededRandom(seed++) * statuses.length)],
    date: new Date(2024, Math.floor(seededRandom(seed++) * 12), Math.floor(seededRandom(seed++) * 28) + 1).toISOString(),
  }))
}

export function getTransactions(): Transaction[] {
  const types: Transaction["type"][] = ["payment", "refund", "withdrawal", "deposit"]
  const methods: Transaction["method"][] = ["credit_card", "debit_card", "paypal", "bank_transfer", "crypto"]
  const statuses: Transaction["status"][] = ["completed", "pending", "failed", "cancelled"]
  const users = getUsers().slice(0, 30)

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

  let seed = 11111 // Fixed seed

  return Array.from({ length: 300 }, (_, i) => {
    const user = users[Math.floor(seededRandom(seed++) * users.length)]
    const type = types[Math.floor(seededRandom(seed++) * types.length)]
    const status = statuses[Math.floor(seededRandom(seed++) * statuses.length)]

    const baseAmount = Math.floor(seededRandom(seed++) * 2000) + 10
    const amount = (type === "refund" || type === "withdrawal") ? -baseAmount : baseAmount

    return {
      id: `TXN-${String(i + 1).padStart(5, "0")}`,
      user: user.name,
      email: user.email,
      type,
      method: methods[Math.floor(seededRandom(seed++) * methods.length)],
      amount,
      status,
      date: new Date(2024, Math.floor(seededRandom(seed++) * 12), Math.floor(seededRandom(seed++) * 28) + 1, Math.floor(seededRandom(seed++) * 24), Math.floor(seededRandom(seed++) * 60)).toISOString(),
      description: descriptions[Math.floor(seededRandom(seed++) * descriptions.length)],
    }
  })
}
