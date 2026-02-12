<div align="center">

# 🌐 shahriardev.me

**A full-stack developer portfolio — not a template, an engineered product.**

[![Live Site](https://img.shields.io/badge/🔗_Live-shahriardev.me-000?style=for-the-badge)](https://www.shahriardev.me)

<br />

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_7-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare_R2-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

</div>

---

## ✨ Why This Exists

Most developer portfolios are static HTML pages deployed once and forgotten. This is different — it's a **fully dynamic, database-driven web application** with its own admin panel, file storage pipeline, contact system, and content management.

It was built to demonstrate real-world engineering decisions: server-side rendering, relational data modeling, secure auth flows, object storage integration, and modern CSS architecture — all in a single, production-deployed codebase.

---

## 🏛️ Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│                        Client (Browser)                      │
│  React 19 · Framer Motion · Tailwind v4 · Markdown Renderer │
└──────────────────┬───────────────────────────────────────────┘
                   │  RSC Streaming / Server Actions
┌──────────────────▼───────────────────────────────────────────┐
│                     Next.js 16 (App Router)                  │
│   Server Components · Route Handlers · Middleware · Cache    │
└────────┬──────────────────────┬──────────────────┬───────────┘
         │                      │                  │
┌────────▼────────┐  ┌──────────▼────────┐  ┌─────▼──────────┐
│  PostgreSQL     │  │  Supabase Auth    │  │  Cloudflare R2 │
│  (Supabase)     │  │  (Session-based)  │  │  (Object Store)│
│  via Prisma 7   │  │                   │  │  via S3 SDK    │
└─────────────────┘  └───────────────────┘  └────────────────┘
```

---

## 🧩 Tech Stack

| Layer          | Technology                                      | Why                                                                                                 |
| -------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Framework**  | Next.js 16 (App Router)                         | React Server Components, `"use cache"` directive, streaming SSR, server actions — minimal client JS |
| **Language**   | TypeScript (strict)                             | End-to-end type safety from database schema to UI props                                             |
| **UI**         | React 19 + Tailwind CSS v4                      | `useActionState` for forms, CSS-first Tailwind config with `@plugin` syntax                         |
| **Animations** | Framer Motion                                   | Declarative motion primitives for scroll-triggered reveals and hover effects                        |
| **Database**   | PostgreSQL via Supabase                         | Managed Postgres with connection pooling (PgBouncer)                                                |
| **ORM**        | Prisma 7                                        | Type-safe queries, declarative schema, automatic migrations                                         |
| **Auth**       | Supabase Auth + SSR                             | Cookie-based sessions, middleware-protected admin routes                                            |
| **Storage**    | Cloudflare R2                                   | S3-compatible object storage for images — drag-and-drop upload via API route                        |
| **Email**      | Resend + React Email                            | Transactional contact-form emails with JSX templates                                                |
| **Validation** | Zod 4                                           | Runtime schema validation for every server action                                                   |
| **Markdown**   | react-markdown + remark-gfm                     | Project descriptions support full GFM (tables, strikethrough, task lists)                           |
| **SEO**        | Dynamic OG images, sitemap, robots.txt, JSON-LD | Per-page metadata with programmatic Open Graph image generation                                     |
| **Hosting**    | Vercel                                          | Edge-optimized deploys with ISR and on-demand revalidation                                          |

---

## 🚀 Features

### Public Site

| Feature                  | Description                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| **Hero Section**         | Full-viewport intro with animated text, social links, and call-to-action                                  |
| **Review Carousel**      | Auto-playing infinite carousel of client/peer testimonials with star ratings                              |
| **Bento Project Grid**   | Responsive masonry-style grid with a repeating 6-item layout pattern (hero cards, tall cards, wide cards) |
| **Project Detail Pages** | Full project writeups with markdown rendering, screenshot gallery, tech tags, and external links          |
| **Skill Tabs & Marquee** | Categorized skill display (Frontend / Backend / DevOps / Tools) with a continuous scrolling ticker        |
| **Contact Form**         | Zod-validated form that sends emails via Resend and stores messages in the database                       |
| **SEO Optimized**        | Dynamic sitemaps, robots.txt, JSON-LD structured data, and per-page OG image generation                   |

### Admin Dashboard (`/admin`)

| Feature                | Description                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| **Project CRUD**       | Create, edit, delete projects with live markdown preview and multi-image screenshot uploads |
| **Profile Management** | Update hero section content, bio, avatar, resume link, and social links                     |
| **Skill Management**   | Add/remove categorized skills with custom icons and optional marquee display                |
| **Review Management**  | Add/delete client testimonials with avatars and star ratings                                |
| **Message Inbox**      | View and manage contact-form submissions                                                    |
| **Image Uploads**      | Drag-and-drop file uploads to Cloudflare R2 with instant preview                            |

---

## 📐 Data Model

Six core entities defined in `prisma/schema.prisma`:

```
Profile ──── Singleton bio/hero data, social links, avatar
Project ──── Portfolio items with markdown descriptions, tags, screenshots
Skill ────── Categorized tech skills (Frontend/Backend/DevOps/Tool)
Review ───── Client testimonials with ratings and avatars
Messages ─── Contact form submissions
User ─────── Admin authentication records
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **PostgreSQL** database (local or [Supabase](https://supabase.com))
- **Cloudflare R2** bucket (for image uploads)

### 1. Clone & Install

```bash
git clone https://github.com/shahriar-ridom/portfolio-shahriar-ridom.git
cd portfolio-shahriar-ridom
npm install
```

### 2. Configure Environment

Create a `.env` file in the project root:

```env
# ── Database ──────────────────────────────────────────────
# Pooled connection (PgBouncer) — used by the application
DATABASE_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection — used by Prisma migrations
DIRECT_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"

# ── Supabase Auth ─────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL="https://[project-ref].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"

# ── Cloudflare R2 ─────────────────────────────────────────
R2_ENDPOINT="https://[account-id].r2.cloudflarestorage.com"
R2_ACCESS_KEY_ID="your-r2-access-key"
R2_SECRET_ACCESS_KEY="your-r2-secret-key"
R2_BUCKET_NAME="your-bucket-name"
R2_PUBLIC_URL="https://pub-[hash].r2.dev"

# ── Email (Resend) ────────────────────────────────────────
RESEND_API_KEY="re_xxxxxxxxxx"
CONTACT_EMAIL="you@example.com"

# ── App ───────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL="https://www.shahriardev.me"
```

### 3. Initialize Database

```bash
# Push the Prisma schema to your database
npx prisma db push

# (Optional) Open Prisma Studio to inspect data
npx prisma studio
```

### 4. Run

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — the site is live.

Navigate to **[http://localhost:3000/admin](http://localhost:3000/admin)** to access the dashboard (requires Supabase auth login).

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                  # Homepage (Hero → Reviews → About → Projects → Contact)
│   ├── actions.ts                # All server actions (CRUD for every entity)
│   ├── project/[slug]/           # Dynamic project detail pages with OG images
│   ├── admin/                    # Protected admin dashboard
│   │   ├── profile/              # Edit profile / bio
│   │   ├── projects/             # Project CRUD + edit pages
│   │   ├── skills/               # Skill management
│   │   ├── reviews/              # Review management
│   │   └── messages/             # Contact inbox
│   ├── api/upload/               # R2 file upload API route
│   └── login/                    # Auth login page
│
├── components/
│   ├── hero.tsx                  # Animated hero section
│   ├── project-card.tsx          # Bento grid project card with ARIA roles
│   ├── project-grid.tsx          # Bento layout with 6-item repeating pattern
│   ├── markdown-renderer.tsx     # Custom markdown component overrides
│   ├── navbar.tsx                # Responsive navigation
│   ├── reviews/                  # Carousel, card, section components
│   ├── about/                    # Skill tabs, tech marquee, stack display
│   ├── contact/                  # Contact form + section
│   └── ui/                       # Reusable primitives (Button, Input, ImageUpload, etc.)
│
├── prisma/
│   └── schema.prisma             # Single source of truth for data model
│
└── lib/
    ├── prisma.ts                 # Prisma client singleton
    ├── supabase.ts               # Supabase client helpers
    ├── r2.ts                     # Cloudflare R2 S3 client
    ├── icons.ts                  # Icon registry
    └── utils.ts                  # Shared utilities (cn, etc.)
```

---

## ⚡ Performance Highlights

- **React Server Components** — Data fetching happens on the server; zero client-side fetch waterfalls
- **`"use cache"` + `cacheLife()`** — Fine-grained caching with tag-based on-demand revalidation
- **Image Optimization** — AVIF/WebP with `next/image`, responsive `sizes`, immutable cache headers
- **Streaming SSR** — Suspense boundaries with loading states for non-blocking page renders
- **Minimal Client Bundle** — Only interactive components (`"use client"`) ship JavaScript to the browser

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

**Built by [Shahriar Ridom](https://www.shahriardev.me)**

</div>
