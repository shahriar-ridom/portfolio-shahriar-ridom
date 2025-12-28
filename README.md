<div align="center">

![Project Banner](https://mkelrgepyvmrqxxmmvix.supabase.co/storage/v1/object/public/image/banner-portfolio.png)

# Shahriar Ridom - Portfolio

  <p align="center">
    A high-performance, minimalist portfolio built for speed, accessibility, and dynamic content management.
  </p>

  <div align="center">
    <!-- Frameworks -->
    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />

    <!-- Styling -->
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />

    <!-- Backend & Tools -->
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />

  </div>
</div>

<br />

## 🚀 Features

- **⚡ High Performance**: Built with Next.js 16 (App Router) for optimal speed and SEO.
- **🎨 Modern UI/UX**: Styled with Tailwind CSS v4 and animated with Framer Motion.
- **📱 Fully Responsive**: Mobile-first design ensuring a seamless experience across all devices.
- **🛠️ Admin Dashboard**: Integrated CMS to manage projects, skills, and profile information dynamically.
- **🔒 Secure Authentication**: Protected admin routes and secure database interactions.
- **🗄️ Robust Backend**: Powered by Prisma ORM with Supabase (PostgreSQL) for reliable data persistence.

## 🛠️ Installation & Setup

Follow these steps to get the project running locally.

### Prerequisites

- **Node.js** (v20 or higher)
- **npm** or **pnpm**
- **PostgreSQL** database (or a Supabase project)

### 1. Clone the Repository

```bash
git clone https://github.com/shahriar-ridom/portfolio-shahriar-ridom.git
cd portfolio-shahriar-ridom
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory. You can use `.env.example` as a reference if available.

```env
# Database Connection
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
DIRECT_URL="postgresql://user:password@host:port/database?schema=public"


# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

### 4. Database Setup

Run the Prisma migrations to set up your database schema.

```bash
npx prisma migrate dev --name init
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>
<br>

|                                               Desktop View                                               |                                            Mobile View                                             |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| ![Desktop](https://mkelrgepyvmrqxxmmvix.supabase.co/storage/v1/object/public/image/banner-portfolio.png) | ![Mobile](https://mkelrgepyvmrqxxmmvix.supabase.co/storage/v1/object/public/image/mobile-view.png) |

|                                         Admin Dashboard                                          |                                         Project Details                                         |
| :----------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
| ![Admin](https://mkelrgepyvmrqxxmmvix.supabase.co/storage/v1/object/public/image/admin-view.png) | ![Project](https://mkelrgepyvmrqxxmmvix.supabase.co/storage/v1/object/public/image/project.png) |

</details>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
