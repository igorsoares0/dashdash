# Admin Dashboard

A complete, professional admin dashboard built with Next.js 16, React 19, TypeScript, and shadcn/ui.

## Features

### 🎨 UI/UX
- **Modern Design**: Clean, professional interface using shadcn/ui components
- **Vibrant Color Palette**: Beautiful blue and green tones throughout
- **Dark/Light Mode**: Full theme support with system preference detection
- **100% Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Polished transitions and interactions
- **Color-Coded Icons**: Each stat card features a unique color for better visual distinction

### 📊 Data Management
- **Complex Data Tables**:
  - Advanced sorting and filtering
  - Column visibility controls
  - Row selection
  - Pagination
  - Search functionality
  - Context menus with actions

### 📈 Analytics & Visualization
- **Interactive Charts**:
  - Area charts for revenue tracking
  - Bar charts for sales data
  - Line charts for user growth
  - Pie charts for category distribution
  - Responsive chart design with Recharts

### 🧭 Navigation
- **Sidebar Navigation**: Collapsible sidebar with intuitive icons
- **Mobile Menu**: Responsive sheet menu for mobile devices
- **Header**: Global search, notifications, and user menu

### 📱 Pages Included
1. **Dashboard Overview**: Stats cards, charts, and recent sales
2. **Analytics**: Detailed analytics with tabbed charts
3. **Users**: User management with filterable data table
4. **Products**: Product inventory management
5. **Orders**: Order tracking and management
6. **Settings**: Comprehensive settings with tabs for:
   - General settings
   - Account management
   - Notification preferences
   - Security settings

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Tables**: TanStack Table (React Table)
- **Theme**: next-themes
- **Date Formatting**: date-fns

## Getting Started

### Prerequisites
- Node.js 20.9.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd dashdash
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
dashdash/
├── app/
│   ├── dashboard/
│   │   ├── analytics/
│   │   ├── orders/
│   │   ├── products/
│   │   ├── settings/
│   │   ├── users/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── dashboard/
│   │   ├── charts.tsx
│   │   ├── data-table.tsx
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   ├── stats-cards.tsx
│   │   ├── user-columns.tsx
│   │   ├── product-columns.tsx
│   │   └── order-columns.tsx
│   ├── ui/
│   │   └── [shadcn components]
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
└── tailwind.config.ts
```

## Key Features Explained

### Data Tables
All data tables include:
- **Sorting**: Click column headers to sort
- **Filtering**: Search bar for quick filtering
- **Pagination**: Navigate through large datasets
- **Column Visibility**: Toggle which columns to display
- **Row Selection**: Select rows with checkboxes
- **Context Menus**: Right-click actions for each row

### Charts
Charts are built with Recharts and include:
- Responsive design
- Theme-aware colors
- Interactive tooltips
- Legends
- Customizable data

### Theme System
- Uses CSS variables for theming
- Supports system preference detection
- Smooth theme transitions
- Persistent theme selection

## Customization

### Adding New Pages
1. Create a new folder in `app/dashboard/[page-name]`
2. Add a `page.tsx` file
3. Update the sidebar navigation in `components/dashboard/sidebar.tsx`

### Modifying Colors
Edit the color variables in `app/globals.css` under the `@theme` directive.

### Adding New Data Tables
1. Create column definitions (see `components/dashboard/user-columns.tsx`)
2. Use the `DataTable` component with your columns and data
3. Add filtering, sorting, and pagination as needed

## Best Practices Used

- **TypeScript**: Full type safety throughout the application
- **Server Components**: Leveraging Next.js 16 server components where appropriate
- **Client Components**: Using "use client" directive only when needed
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Code splitting and lazy loading
- **Clean Code**: Modular components and clear separation of concerns

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
