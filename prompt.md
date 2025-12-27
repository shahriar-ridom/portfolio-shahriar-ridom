Role: Senior Fullstack Engineer & Creative Technologist.

Task: Build a high-performance, dark-mode portfolio website with a custom Admin Dashboard.

Project Name: portfolio-shahriar-ridom

1. The Tech Stack (Strict Requirement):

Framework: Next.js 16 (App Router, Server Components).

Language: TypeScript (Strict mode).

Styling: Tailwind CSS (4) (Mobile-first).

UI Library: Shadcn/ui (for base components like Dialogs, Inputs, Toasts) - Customized to deep dark theme.

Animations: Framer Motion (Complex orchestrations, scroll-linked animations).

Backend/DB: Supabase (PostgreSQL) + Prisma ORM (for type safety).

Auth: Supabase Auth (for Admin access only).

Forms: React Hook Form + Zod validation.

Icons: Lucide React.

2. Design Tokens & Theme:

Background: #050505 (Deep Obsidian).

Foreground: #FAFAFA (Off-white).

Accents: Subtle gradients using Blue/Violet, but mainly relying on glassmorphism (backdrop-blur-xl, bg-white/5).

Font: Inter (sans) and JetBrains Mono (for code/tech elements).

3. Database Schema (Prisma Models):

Profile: id, fullName (default: "Shahriar Ridom"), title (default: "Web Developer"), bio, resumeLink, socialLinks (JSON).

Project: id, title, slug, description, thumbnailUrl, videoUrl (optional), liveUrl, repoUrl, tags (Array), featured (Boolean), order (Int).

User: (For Admin login).

4. Core Features & Implementation Guide:

A. Public Frontend (Client):

Single Page Feel: Use smooth scrolling between sections (#hero, #projects, #about).

Hero Section: Fetch Profile data from DB. Render Name/Title with a stagger animation on load.

Project Grid:

Fetch projects via Server Component.

Use a Masonry or Grid layout.

Interaction: On hover, the card should scale slightly (1.02) and play the video/GIF preview if available.

Scroll Animations: Elements should fade in/slide up as they enter the viewport using framer-motion's useInView.

B. The Admin Panel (/admin):

Protection: Middleware to redirect unauthenticated users to /login.

Layout: Sidebar + Main Content Area. Must share the same "Sleek Dark" aesthetic as the frontend (do not make it look like a default dashboard).

Profile Editor: A form to update the Name, Title, and Bio displayed on the Hero section.

Project Manager:

Table view of current projects.

"Add New" Modal.

Drag-and-drop capability to update the order field in the DB.

Image upload handling (connect to Supabase Storage buckets).

5. Specific Animation Requirements:

Page Load: A quick, sleek curtain reveal or text-unmasking effect.

Navigation: Floating dock or sticky minimalist navbar that blurs the background content.

Buttons: "Magnetic" button effect (button moves slightly towards the cursor on hover).

6. Development Steps:

Initialize Next.js project with Shadcn/ui.

Set up Supabase and define the Prisma schema; run migrations.

Build the global Layout and Typography system.

Develop the Hero component with dynamic data fetching.

Build the Admin authentication flow.

Create the CRUD interface for Projects.

Assemble the Public Portfolio page with Framer Motion polish.

Action: Start by generating the project structure, the schema.prisma file, and the Tailwind configuration.
