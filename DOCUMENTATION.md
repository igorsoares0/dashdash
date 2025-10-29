# DashDash - Complete Documentation

> A modern, professional admin dashboard template built with Next.js 16, React 19, TypeScript, and shadcn/ui.

---

## 📋 Table of Contents

1. [Quick Start](#-quick-start)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Features Overview](#-features-overview)
5. [Customization Guide](#-customization-guide)
6. [Components Reference](#-components-reference)
7. [Data Management](#-data-management)
8. [Theming System](#-theming-system)
9. [Adding New Pages](#-adding-new-pages)
10. [API Integration](#-api-integration)
11. [Deployment](#-deployment)
12. [Best Practices](#-best-practices)
13. [Troubleshooting](#-troubleshooting)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.9.0 or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- Basic knowledge of React and Next.js

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd dashdash

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.0 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Styling framework |
| **shadcn/ui** | Latest | UI component library (Radix UI based) |
| **Recharts** | 3.3.0 | Chart visualization |
| **TanStack Table** | 8.21.3 | Advanced data tables |
| **Lucide React** | 0.548.0 | Icon library |
| **next-themes** | 0.4.6 | Dark/light mode |
| **date-fns** | 4.1.0 | Date formatting |

---

## 📁 Project Structure

```
dashdash/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard routes
│   │   ├── analytics/          # Analytics page
│   │   ├── orders/             # Orders management
│   │   ├── products/           # Product inventory
│   │   ├── reports/            # Reports page
│   │   ├── settings/           # Settings page
│   │   ├── transactions/       # Transactions management
│   │   ├── users/              # User management
│   │   ├── layout.tsx          # Dashboard layout (Sidebar + Header)
│   │   └── page.tsx            # Dashboard overview page
│   ├── favicon.ico
│   ├── globals.css             # Global styles & theme variables
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Root page (redirects to /dashboard)
│
├── components/
│   ├── dashboard/              # Dashboard-specific components
│   │   ├── charts.tsx          # Chart components (Area, Bar, Line, Pie)
│   │   ├── data-table.tsx      # Reusable data table component
│   │   ├── header.tsx          # Dashboard header with search/notifications
│   │   ├── sidebar.tsx         # Navigation sidebar
│   │   ├── stats-cards.tsx     # Metric cards component
│   │   ├── user-columns.tsx    # User table column definitions
│   │   ├── product-columns.tsx # Product table column definitions
│   │   ├── order-columns.tsx   # Order table column definitions
│   │   └── transaction-columns.tsx # Transaction table columns
│   ├── ui/                     # shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   └── ... (other UI components)
│   ├── theme-provider.tsx      # Theme context provider
│   └── theme-toggle.tsx        # Dark/light mode toggle
│
├── lib/
│   ├── data.ts                 # Mock data generators & types
│   ├── mock-data.ts            # Mock data instances
│   └── utils.ts                # Utility functions (cn helper)
│
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

---

## ✨ Features Overview

### 1. **Dashboard Overview** (`/dashboard`)
- **4 Metric Cards**: Revenue, Users, Sales, Active Now
- **Revenue Chart**: Area chart showing revenue vs expenses
- **Recent Sales**: List of latest transactions
- **User Growth Chart**: Line chart of user acquisition
- **Category Chart**: Pie chart of sales by category

### 2. **Analytics** (`/dashboard/analytics`)
- Detailed analytics with tabbed interface
- Multiple chart types (Area, Bar, Line, Pie)
- Revenue, Sales, Users, and Products metrics
- Interactive charts with tooltips

### 3. **Users Management** (`/dashboard/users`)
- Advanced data table with:
  - Sorting by any column
  - Search/filtering
  - Pagination
  - Column visibility controls
  - Row selection
- User details: Name, Email, Role, Status, Revenue

### 4. **Products** (`/dashboard/products`)
- Product inventory management
- Data table with stock status indicators
- Categories, pricing, and sales tracking

### 5. **Orders** (`/dashboard/orders`)
- Order tracking system
- Status-based filtering (pending, processing, completed, cancelled)
- Customer and product information

### 6. **Transactions** (`/dashboard/transactions`)
- Financial transaction management
- Multiple payment methods
- Transaction types (payment, refund, withdrawal, deposit)
- Status tracking

### 7. **Reports** (`/dashboard/reports`)
- Comprehensive reporting dashboard
- Sales trends and performance metrics
- Revenue analysis

### 8. **Settings** (`/dashboard/settings`)
- Tabbed settings interface:
  - **General**: Company settings
  - **Account**: User profile management
  - **Notifications**: Notification preferences
  - **Security**: Password and 2FA settings

### 9. **Global Features**
- **Dark/Light Mode**: System-aware theme switching
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Search**: Global search in header
- **Notifications**: Notification center with badge counter
- **User Menu**: Profile dropdown with quick actions

---

## 🎨 Customization Guide

### Changing Brand Colors

Edit `app/globals.css`:

```css
@theme {
  /* Primary brand color (buttons, links, active states) */
  --color-primary: 221 83% 50%;          /* Blue - change HSL values */
  --color-primary-foreground: 0 0% 100%; /* White text on primary */
  
  /* Chart colors */
  --color-chart-1: 221 83% 50%;  /* Blue */
  --color-chart-2: 142 76% 36%;  /* Green */
  --color-chart-3: 262 83% 58%;  /* Purple */
  --color-chart-4: 173 58% 39%;  /* Teal */
  --color-chart-5: 43 74% 66%;   /* Yellow */
}
```

**Color Picker Tool**: Use [HSL Color Picker](https://hslpicker.com/) to find your brand colors in HSL format.

### Changing Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
```

### Customizing the Sidebar Logo

Edit `components/dashboard/sidebar.tsx` (line 66-69):

```typescript
<Link href="/dashboard" className="flex items-center gap-2 font-semibold">
  <YourLogoComponent className="h-6 w-6" /> {/* Replace icon */}
  <span className="">Your Brand</span>  {/* Replace text */}
</Link>
```

### Changing Application Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Dashboard Name",
  description: "Your dashboard description",
  // Add more metadata as needed
};
```

---

## 🧩 Components Reference

### StatsCard Component

**Location**: `components/dashboard/stats-cards.tsx`

**Usage**:
```typescript
import { StatsCard } from "@/components/dashboard/stats-cards"
import { DollarSign } from "lucide-react"

<StatsCard
  title="Total Revenue"
  value="$45,231.89"
  icon={DollarSign}
  trend={{ value: 20.1, isPositive: true }}
  iconColor="bg-green-500/10 text-green-600 dark:text-green-400"
/>
```

**Props**:
- `title` (string): Card title
- `value` (string): Main metric value
- `icon` (LucideIcon): Icon component
- `trend` (object): `{ value: number, isPositive: boolean }`
- `iconColor` (string): Tailwind classes for icon styling

### DataTable Component

**Location**: `components/dashboard/data-table.tsx`

**Usage**:
```typescript
import { DataTable } from "@/components/dashboard/data-table"
import { userColumns } from "@/components/dashboard/user-columns"
import { getUsers } from "@/lib/mock-data"

const users = getUsers()

<DataTable
  columns={userColumns}
  data={users}
  searchKey="name"
  searchPlaceholder="Search users..."
/>
```

**Props**:
- `columns` (ColumnDef[]): TanStack Table column definitions
- `data` (TData[]): Array of data objects
- `searchKey` (string, optional): Key to search by
- `searchPlaceholder` (string, optional): Search input placeholder

**Features**:
- ✅ Sorting (click column headers)
- ✅ Global search
- ✅ Column visibility toggle
- ✅ Pagination (10/20/30/40/50 items per page)
- ✅ Row selection with checkboxes

### Chart Components

**Location**: `components/dashboard/charts.tsx`

**Available Charts**:

1. **RevenueChart** - Area chart
```typescript
import { RevenueChart } from "@/components/dashboard/charts"
<RevenueChart />
```

2. **CategoryChart** - Pie chart
```typescript
import { CategoryChart } from "@/components/dashboard/charts"
<CategoryChart />
```

3. **UserGrowthChart** - Line chart
```typescript
import { UserGrowthChart } from "@/components/dashboard/charts"
<UserGrowthChart />
```

4. **SalesBarChart** - Bar chart
```typescript
import { SalesBarChart } from "@/components/dashboard/charts"
<SalesBarChart />
```

**Customizing Chart Data**:

Edit the data arrays in `components/dashboard/charts.tsx`:

```typescript
const revenueData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  // ... add more months
]
```

---

## 💾 Data Management

### Type Definitions

**Location**: `lib/data.ts`

```typescript
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
```

### Mock Data Generators

The template includes mock data generators in `lib/data.ts`:

```typescript
// Generate 100 mock users
export function generateUsers(count: number = 100): User[]

// Generate 50 mock products  
export function generateProducts(count: number = 50): Product[]

// Generate 200 mock orders
export function generateOrders(count: number = 200): Order[]

// Generate 150 mock transactions
export function generateTransactions(count: number = 150): Transaction[]
```

**Usage**:
```typescript
import { generateUsers } from "@/lib/data"

const users = generateUsers(100) // Generate 100 users
```

### Replacing Mock Data with Real API

**Step 1**: Create API routes in `app/api/`

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Fetch from your database
    const users = await db.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
```

**Step 2**: Update page to fetch data

```typescript
// app/dashboard/users/page.tsx
async function UsersPage() {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()

  return (
    <div className="flex flex-col gap-4">
      {/* ... */}
      <DataTable columns={userColumns} data={users} />
    </div>
  )
}
```

**Step 3**: Use Server Components for data fetching (recommended)

```typescript
// app/dashboard/users/page.tsx
import { db } from '@/lib/db' // Your database client

async function UsersPage() {
  const users = await db.user.findMany() // Direct database query

  return (
    <div className="flex flex-col gap-4">
      <DataTable columns={userColumns} data={users} />
    </div>
  )
}
```

---

## 🎭 Theming System

### How It Works

The template uses **CSS variables** for theming, defined in `app/globals.css`:

- Light mode colors: Defined in `@theme`
- Dark mode colors: Defined in `.dark` selector
- Components reference colors using `hsl(var(--color-*))`

### Theme Toggle

The theme toggle is implemented using `next-themes`:

**Location**: `components/theme-toggle.tsx`

**Features**:
- System preference detection
- Persistent selection (localStorage)
- Smooth transitions

### Adding Custom Theme Colors

1. Define color in `app/globals.css`:
```css
@theme {
  --color-success: 142 76% 36%;
  --color-success-foreground: 0 0% 100%;
}

.dark {
  --color-success: 142 71% 45%;
  --color-success-foreground: 0 0% 100%;
}
```

2. Add to Tailwind config `tailwind.config.ts`:
```typescript
export default {
  theme: {
    extend: {
      colors: {
        success: {
          DEFAULT: "hsl(var(--color-success))",
          foreground: "hsl(var(--color-success-foreground))",
        },
      },
    },
  },
}
```

3. Use in components:
```typescript
<Button className="bg-success text-success-foreground">
  Success Button
</Button>
```

---

## ➕ Adding New Pages

### Step-by-Step Guide

**1. Create Page File**

```typescript
// app/dashboard/customers/page.tsx
export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            Manage your customers
          </p>
        </div>
      </div>
      
      {/* Your page content */}
    </div>
  )
}
```

**2. Add Route to Sidebar**

Edit `components/dashboard/sidebar.tsx`:

```typescript
import { Users } from "lucide-react" // Import icon

const routes = [
  // ... existing routes
  {
    label: "Customers",
    icon: Users,
    href: "/dashboard/customers",
  },
]
```

**3. Add Route to Mobile Menu**

Edit `components/dashboard/header.tsx` (add to routes array):

```typescript
const routes = [
  // ... existing routes
  {
    label: "Customers",
    icon: Users,
    href: "/dashboard/customers",
  },
]
```

**4. Optional: Add Loading State**

```typescript
// app/dashboard/customers/loading.tsx
export default function Loading() {
  return <div>Loading customers...</div>
}
```

**5. Optional: Add Error Boundary**

```typescript
// app/dashboard/customers/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

---

## 🔌 API Integration

### Example: Integrating with REST API

**1. Create a service file**

```typescript
// lib/api/users.ts
export async function fetchUsers() {
  const response = await fetch('https://api.example.com/users', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  
  return response.json()
}

export async function createUser(data: CreateUserInput) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Failed to create user')
  }
  
  return response.json()
}
```

**2. Use in Server Component**

```typescript
// app/dashboard/users/page.tsx
import { fetchUsers } from '@/lib/api/users'

export default async function UsersPage() {
  const users = await fetchUsers()
  
  return (
    <DataTable columns={userColumns} data={users} />
  )
}
```

**3. Use in Client Component**

```typescript
'use client'

import { useEffect, useState } from 'react'
import { fetchUsers } from '@/lib/api/users'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .finally(() => setLoading(false))
  }, [])
  
  if (loading) return <div>Loading...</div>
  
  return <DataTable columns={userColumns} data={users} />
}
```

### Example: Using Next.js Server Actions

```typescript
// app/actions/users.ts
'use server'

import { revalidatePath } from 'next/cache'

export async function createUser(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  
  // Save to database
  await db.user.create({
    data: { name, email }
  })
  
  revalidatePath('/dashboard/users')
  return { success: true }
}
```

```typescript
// app/dashboard/users/page.tsx
import { createUser } from '@/app/actions/users'

export default function UsersPage() {
  return (
    <form action={createUser}>
      <input name="name" />
      <input name="email" />
      <button type="submit">Create User</button>
    </form>
  )
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Add in Vercel dashboard under Settings → Environment Variables

### Docker

**Create Dockerfile**:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**Build and run**:
```bash
docker build -t dashdash .
docker run -p 3000:3000 dashdash
```

### Static Hosting (if applicable)

For static export, update `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
}
```

Then:
```bash
npm run build
# Output will be in 'out' folder
```

---

## 📚 Best Practices

### 1. **Component Organization**
- Keep components small and focused
- Use Server Components by default
- Only use Client Components when needed ("use client")
- Extract reusable logic into custom hooks

### 2. **TypeScript**
- Always define types for your data
- Use strict mode
- Avoid `any` type
- Leverage type inference

### 3. **Performance**
- Use Next.js Image component for images
- Implement lazy loading for heavy components
- Use Server Components for data fetching
- Minimize client-side JavaScript

### 4. **Styling**
- Use Tailwind utility classes
- Follow the existing color system
- Keep custom CSS minimal
- Use CSS variables for theme colors

### 5. **Data Fetching**
- Prefer Server Components for initial data
- Use React Query/SWR for client-side caching
- Implement proper error handling
- Add loading states

### 6. **Security**
- Never expose API keys in client code
- Use environment variables for secrets
- Implement proper authentication
- Validate user input

---

## 🔧 Troubleshooting

### Common Issues

**1. Module not found errors**
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**2. Type errors after adding new components**
```bash
# Solution: Restart TypeScript server
# In VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

**3. Styles not updating**
```bash
# Solution: Clear Next.js cache
rm -rf .next
npm run dev
```

**4. Dark mode not working**
```typescript
// Ensure ThemeProvider is in root layout
// app/layout.tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

**5. Data table not showing data**
```typescript
// Check:
// 1. Data is being passed correctly
// 2. Columns are defined properly
// 3. searchKey matches a column accessor
console.log('Data:', data)
console.log('Columns:', columns)
```

### Getting Help

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas
- **Documentation**: Check this guide first
- **shadcn/ui docs**: [ui.shadcn.com](https://ui.shadcn.com)
- **Next.js docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

## 📝 Additional Resources

### Official Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Recharts Documentation](https://recharts.org/en-US)
- [TanStack Table Documentation](https://tanstack.com/table/latest)

### Recommended Extensions (VS Code)

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier**
- **TypeScript Error Translator**

### Example Projects

Check out these examples in different branches (if available):
- `with-auth` - Authentication with NextAuth.js
- `with-supabase` - Supabase integration
- `with-prisma` - Prisma ORM setup
- `with-trpc` - tRPC API routes

---

## 🎯 Next Steps

Now that you've read the documentation:

1. ✅ **Customize the branding** (colors, logo, fonts)
2. ✅ **Replace mock data** with your real data source
3. ✅ **Add authentication** (NextAuth, Clerk, Auth0)
4. ✅ **Create your custom pages** following the examples
5. ✅ **Implement your business logic**
6. ✅ **Deploy to production**

---

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ using Next.js and shadcn/ui**

For questions or support, please open an issue on GitHub.
