# Shahriar Ridom - Full Stack Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

<br />

**Next.js 16 (App Router) • TypeScript • Tailwind CSS v4 • Supabase**

</div>

## 📖 About The Project

This is not just a static landing page. This is a comprehensive, full-stack application designed to showcase engineering capabilities, focusing on performance, accessibility, and dynamic content management.

While a static site generator would suffice for a basic portfolio, this project was architected to demonstrate:

- **Server-Side Rendering (SSR) and Server Actions** using Next.js 16.
- **Relational Data Modeling** with PostgreSQL.
- **Secure Authentication/Authorization flows** for administrative access.
- **Bleeding-edge CSS implementations** using Tailwind v4.

## 🏗️ Tech Stack & Trade-offs

| Component      | Technology              | Reasoning                                                                                                                                              |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework**  | Next.js 16 (App Router) | Leverages React Server Components (RSC) to minimize client-side bundle size. Chosen over Pages router for better streaming and data fetching patterns. |
| **Language**   | TypeScript              | Strict typing ensures maintainability and reduces runtime errors. No `any` types allowed.                                                              |
| **Styling**    | Tailwind CSS v4         | Utility-first CSS for rapid UI development. v4 used to leverage the new high-performance engine.                                                       |
| **Animations** | Framer Motion           | Provides declarative animations. Trade-off: slightly larger bundle size, but necessary for the desired fluid UX.                                       |
| **Database**   | PostgreSQL (Supabase)   | Chosen for relational integrity. Supabase provides a production-ready Postgres instance with built-in Auth integration.                                |
| **ORM**        | Prisma                  | Type-safe database access. The schema acts as the single source of truth for the data model.                                                           |

## 🚀 Key Features

- ⚡ **Zero-Bundle Data Fetching**: Utilizes React Server Components to fetch data on the server, sending only HTML to the client.
- 🔒 **Role-Based Access Control**: Admin dashboard is protected via Supabase Auth middleware, ensuring only authorized users can mutate data.
- 📝 **Integrated CMS**: A custom-built admin panel allows for CRUD operations on Projects, Skills, and Profile data without touching the code.
- 🎨 **Optimistic UI**: Mutations (like updating a project) reflect immediately on the UI before the server confirms, ensuring a snappy experience.
- 📱 **Responsive & Accessible**: Heavily tested on various viewports and follows semantic HTML5 guidelines.

## 📸 Interface

### Public View

_(Add screenshot here)_

### Admin Dashboard

_(Add screenshot here)_

## 🛠️ Local Development Setup

### Prerequisites

- **Node.js** (v20 or higher required for Next.js 16)
- **pnpm** (Recommended) or npm
- **PostgreSQL database** (Local or Supabase)

### 1. Clone & Install

```bash
git clone https://github.com/shahriar-ridom/portfolio-shahriar-ridom.git
cd portfolio-shahriar-ridom

# Install dependencies
pnpm install
```

### 2. Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Fill in your credentials. Note: Since this project uses Supabase with Prisma, you must configure the connection pool correctly.

```env
# Database (Transaction & Session Mode)
# Use port 6543 (pooler) for the main app
DATABASE_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"

# Use port 5432 (direct) for migrations
DIRECT_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"

# Auth
NEXT_PUBLIC_SUPABASE_URL="https://[project-ref].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[your-anon-key]"
```

### 3. Database Migration

Apply the Prisma schema to your database to create the necessary tables:

```bash
npx prisma migrate dev --name init
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 Database Schema

The data model is defined in `prisma/schema.prisma`. Primary entities include:

- **Profile**: Singleton model for bio/hero section information.
- **Project**: Portfolio items with rich text descriptions and image URLs.
- **Skill**: Categorized technical skills (Frontend, Backend, Tools).
- **Experience**: Work history timeline.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
