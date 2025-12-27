<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Shahriar Ridom - Project Gallery</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Theme Configuration -->
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#3c83f6",
                        "background-light": "#f5f7f8",
                        "background-dark": "#050505", /* User requested #050505 */
                        "glass-border": "rgba(255, 255, 255, 0.08)",
                        "glass-surface": "rgba(255, 255, 255, 0.03)",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    }
                },
            },
        }
    </script>
<style>/* Custom Noise Overlay */
.noise-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 50;
    opacity: 0.03;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuAnUWlmUML9fRQEOv5oKxc29jzlLPzZWFhATjXwSFKj3W6l-PvsbYrPWQBiEuIYf28TYYIEs1b_N0bmdz7VFmn-Vih3yQKAqcegEAMCDuAe71TpZFkhdWfHzVmO6MQZCkQpuSV4etkwGZBJOAgfOeAvlb_rRcFryCDsQgvRlWrBqsmgGmMnesCJS8dak-8w84x7oBG6pigDWzG4Fh6tzxkSWTLNXOlrrxK4THPt9HLD5NUSXdOf6wJUjOoQnM0JFDa4cl-_Q1r51Hkd)
    }
/* Smooth scrolling */
html {
    scroll-behavior: smooth
    }
/* Hide scrollbar for clean look in webkit browsers */
::-webkit-scrollbar {
    width: 8px
    }
::-webkit-scrollbar-track {
    background: #050505
    }
::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px
    }</style>
</head>
<body class="bg-[#050505] text-[#EDEDED] font-display antialiased min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-white">
<!-- Noise Texture Overlay -->
<div class="noise-overlay"></div>
<!-- Ambient Background Glows -->
<div class="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
<div class="fixed bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3"></div>
<!-- Top Navigation -->
<nav class="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 px-4">
<div class="backdrop-blur-md bg-glass-surface border border-glass-border rounded-full px-6 py-3 flex items-center justify-between gap-8 shadow-2xl min-w-[320px] max-w-4xl w-full transition-all duration-300 hover:border-white/20 hover:bg-white/5">
<!-- Brand -->
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-[18px]">code</span>
</div>
<span class="font-bold tracking-tight text-white hidden sm:block">Shahriar Ridom</span>
</div>
<!-- Links -->
<div class="flex items-center gap-1 sm:gap-2">
<a class="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors" href="#">Work</a>
<a class="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors" href="#">About</a>
<a class="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors" href="#">Contact</a>
</div>
<!-- CTA -->
<a class="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all border border-transparent hover:border-white/10 group" href="#">
<span>Resume</span>
<span class="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
</a>
</div>
</nav>
<!-- Main Content -->
<main class="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full z-10">
<!-- Header Section -->
<header class="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div class="space-y-4 max-w-2xl">
<h1 class="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                    Selected Works
                </h1>
<p class="text-lg md:text-xl text-[#90a7cb] font-light leading-relaxed max-w-lg">
                    Exploring the intersection of design and engineering. Building digital experiences in the Deep Space.
                </p>
</div>
<!-- Scroll Indicator / Decorative -->
<div class="hidden md:flex flex-col items-end gap-2 text-white/30">
<span class="text-xs uppercase tracking-[0.2em]">Scroll</span>
<div class="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
</div>
</header>
<!-- Filters -->
<div class="mb-12 overflow-x-auto pb-4 hide-scrollbar">
<div class="flex gap-3 min-w-max">
<button class="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium shadow-lg shadow-primary/20 ring-2 ring-primary ring-offset-2 ring-offset-[#050505] transition-all">
                    All Projects
                </button>
<button class="px-6 py-2.5 rounded-full bg-glass-surface border border-glass-border hover:bg-white/10 hover:border-white/20 text-[#90a7cb] hover:text-white text-sm font-medium transition-all">
                    Fullstack
                </button>
<button class="px-6 py-2.5 rounded-full bg-glass-surface border border-glass-border hover:bg-white/10 hover:border-white/20 text-[#90a7cb] hover:text-white text-sm font-medium transition-all">
                    Frontend
                </button>
<button class="px-6 py-2.5 rounded-full bg-glass-surface border border-glass-border hover:bg-white/10 hover:border-white/20 text-[#90a7cb] hover:text-white text-sm font-medium transition-all">
                    Mobile Apps
                </button>
<button class="px-6 py-2.5 rounded-full bg-glass-surface border border-glass-border hover:bg-white/10 hover:border-white/20 text-[#90a7cb] hover:text-white text-sm font-medium transition-all">
                    Experimental
                </button>
</div>
</div>
<!-- Bento Grid -->
<div class="group/grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
<!-- Featured Card (Large 2x2) -->
<article class="group/card relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-[2rem] bg-glass-surface border border-glass-border overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.01] hover:z-10 group-hover/grid:opacity-40 hover:!opacity-100">
<!-- Background Image -->
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105" data-alt="Modern analytics dashboard interface on a dark screen" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD8BNe0qgoltBFNzW5Sjr2ZoWLQ9dNdnDIBZ8O9oKYERnBMHQDgpo2tV0c0nFWPVq2_ReIViRT5ONBfCDKdAKrORjsV0T__oOrsiIHxmNRXc4v6s4-2bO73XiHhEIQZUG2uiqxzvIyIvTeGCPPnV0GcYZEriW3_16MHSHrjckB62EWlyJdtGOC1x3WdrT6mNi7QmIVVBOoa_jEdaVzVKroEIoTnUDZI2ApvbqcBbI1fZ4IQ4GJfENE7xDegn-cKAdiG43UeOsav1Gv');">
</div>
<!-- Overlay Gradient -->
<div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover/card:opacity-60 transition-opacity duration-500"></div>
<!-- Content -->
<div class="absolute inset-0 p-8 flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="inline-flex items-center justify-center size-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white group-hover/card:bg-primary transition-colors duration-300">
<span class="material-symbols-outlined">arrow_outward</span>
</span>
<div class="flex gap-2">
<span class="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/90">React</span>
<span class="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/90">Next.js</span>
</div>
</div>
<div class="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
<h3 class="text-3xl font-bold text-white mb-2 leading-tight">E-Commerce Analytics Dashboard</h3>
<p class="text-white/70 line-clamp-2 max-w-md">A comprehensive SaaS platform for real-time sales tracking, inventory management, and predictive AI insights.</p>
</div>
</div>
</article>
<!-- Card 2 (Vertical 1x2) -->
<article class="group/card relative col-span-1 md:col-span-1 row-span-2 rounded-[2rem] bg-glass-surface border border-glass-border overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:scale-[1.01] hover:z-10 group-hover/grid:opacity-40 hover:!opacity-100">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105" data-alt="Mobile banking application interface showing charts and balance" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZvKEbztr9YlQZNVQz65FvCNkDxgw77VUXXvHNRn2mdSUE6vEclrTC_GRhQdMWvA62wHgziX1vXqYjwRiGnytiJU-JxGA0pFX_1c6u7knZKXIqRfID8EK1_PXdY9H-oKB65Lh9g6v1l2LeZV6KYg0DM4ButTdYZEYvLAvi8M5U5q5oeKrkVJDIdZ3nRZ3LMcrXl7C_JAqSZMFy5Nbm8ftAjOLdrkmNvT5cIRVXD7VU_Aeteubp7Jdhg4BU1QzZ6jFenpVVU97Apg1');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
<div class="absolute inset-0 p-6 flex flex-col justify-end">
<div class="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
<div class="flex flex-wrap gap-2 mb-3">
<span class="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-wider font-bold text-white/80">React Native</span>
</div>
<h3 class="text-xl font-bold text-white mb-1">NeoBank Mobile App</h3>
<p class="text-sm text-white/60">Secure, biometric-enabled fintech solution.</p>
</div>
</div>
</article>
<!-- Card 3 (Horizontal 2x1) -->
<article class="group/card relative col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 row-span-1 rounded-[2rem] bg-glass-surface border border-glass-border overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:scale-[1.01] hover:z-10 group-hover/grid:opacity-40 hover:!opacity-100">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105" data-alt="Abstract gradient waves representing AI data processing" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQgG0MtBd8RJQCcTy9lSt-35iJ6Gjdw164iw6FLU0LB_B9lkljP7Zn9gePsE25O-cpm9UMq1_b9VROvdu7i8QxucImFH9aYiCoI0MA6f7kPIfU0gunD-3GFDv58Jl1biv_LEN_egh5Et50ygaiNo79F9F6OSUdA_RzL4aB8bdXQrwaL6B9m4AM-QVWJToWQePKk2wELuB5Cp5t3uA4PiVaCwB10jl7Me_pSjqsuNrnokSP_AySGAUu3alxVzmJgZmLLxpuAjiQn2VP');">
</div>
<div class="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors"></div>
<div class="absolute inset-0 p-6 flex flex-col justify-between">
<div class="flex justify-end">
<span class="material-symbols-outlined text-white/50 group-hover/card:text-white transition-colors">open_in_new</span>
</div>
<div>
<h3 class="text-lg font-bold text-white">AI Image Generator</h3>
<p class="text-xs text-white/60 mt-1">OpenAI API Integration</p>
</div>
</div>
</article>
<!-- Card 4 (Horizontal 2x1) -->
<article class="group/card relative col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-[2rem] bg-glass-surface border border-glass-border overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:scale-[1.01] hover:z-10 group-hover/grid:opacity-40 hover:!opacity-100">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105" data-alt="Data visualization dashboard with dark theme graphs" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC4BkIHrVZZaXD6q-tDrDEqu2qxrqMMdoVRyWgOpCA_1nHwKNa_LyyoY5CgypT51FK08mTLJQXgvIdvENBV1cZMmzme9WtOYY1zxR6ARibKmt_zINlqfVlImMZkwMykG5GCvOSVbQNM0lto0kFXfmzK3YqxNNoMcv5iQKW4C6VAxTX8mubfUIV4HZeo9JMImCFL1OhlauLmVMr3Q5JXpz19mU8785qWEfuun-kQ0kARrDdOvVvoSGPGg08VvZM1Q-iQ3pOMU-pokLs');">
</div>
<div class="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent opacity-90"></div>
<div class="absolute inset-0 p-8 flex flex-row items-center justify-between">
<div class="max-w-xs">
<div class="flex gap-2 mb-3">
<span class="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 text-xs font-bold">Case Study</span>
</div>
<h3 class="text-2xl font-bold text-white mb-2">HealthTech Admin Portal</h3>
<p class="text-sm text-white/60">Streamlining patient data management for clinics.</p>
</div>
<div class="hidden sm:flex size-12 rounded-full border border-white/20 items-center justify-center text-white group-hover/card:bg-white group-hover/card:text-black transition-all">
<span class="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</article>
<!-- Card 5 (Small 1x1) -->
<article class="group/card relative col-span-1 row-span-1 rounded-[2rem] bg-glass-surface border border-glass-border overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:scale-[1.01] hover:z-10 group-hover/grid:opacity-40 hover:!opacity-100">
<div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
<!-- Abstract Pattern -->
<div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
<div class="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
<div class="mb-4 text-primary">
<span class="material-symbols-outlined text-4xl">terminal</span>
</div>
<h3 class="text-lg font-bold text-white">CLI Tools</h3>
<p class="text-xs text-white/50 mt-1">NPM Packages for devs</p>
</div>
</article>
<!-- Card 6 (Small 1x1) -->
<article class="group/card relative col-span-1 row-span-1 rounded-[2rem] bg-glass-surface border border-glass-border overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:scale-[1.01] hover:z-10 group-hover/grid:opacity-40 hover:!opacity-100">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105" data-alt="Close up of mechanical keyboard in neon light" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlKQdFtf7-Z9938sy25eUd4grtD2np1pI-F5CniHPVjsAOOWQPAM2T3oZBBJ8WV5X0mswN1tJYWDGE5rGb3EPXal3y1oicKElgkTABD-4_oDIHHWqaq469s1iSU1mLyOaKpNgoHM22gHWuhIfNa2hCtjmLHMo0ih5PHVx3SJVvl8-CCWEMQso3TLAUFu_tHityV0z44rDr3QeDcubAITKkYMY_npqTJiziUrW3iCBNHAjqYuDOhZR-Nm4UXhCYJcxUP54YPFL3kC7F');">
</div>
<div class="absolute inset-0 bg-black/60 group-hover/card:bg-black/40 transition-colors"></div>
<div class="absolute inset-0 p-6 flex flex-col justify-end">
<h3 class="text-lg font-bold text-white">Keyboard.io</h3>
<p class="text-xs text-white/50 mt-1">ThreeJS Configuration</p>
</div>
</article>
<!-- Card 7 (Horizontal 2x1) -->
<article class="group/card relative col-span-1 md:col-span-2 row-span-1 rounded-[2rem] bg-glass-surface border border-glass-border overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:scale-[1.01] hover:z-10 group-hover/grid:opacity-40 hover:!opacity-100">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105" data-alt="Retro computer setup with code on screen" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAilbEKQ_hNhXxUC_DCRSBxsEcXyXM4nO8ghBzZ-fDRbIAsdI92sKYEH_H4JwNGZZh8rT_SbSRAd7RZcL9SUajHd-2b5yjGnsCuj5PkRUOKsGjHseQUrNyq--QyG57g3_EbOAkqgndCP86cH8vrE681uvoGGiGA6zbgv9cQVuJlgvpWAIb-I9BfTKQAE2KFZriizBqK6tPSIHYZcMOnHQ0hAvpskp0a392n2b0n3dNYXHr0HhcbsNGl1F4-xlnq2GLA1yuCkX-AGUZy');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
<div class="absolute inset-0 p-6 flex flex-row items-end justify-between">
<div>
<h3 class="text-xl font-bold text-white">Legacy System Migration</h3>
<p class="text-sm text-white/60 mt-1">Modernizing enterprise architecture</p>
</div>
<div class="flex gap-2">
<span class="px-2 py-1 rounded-md bg-white/10 text-xs text-white border border-white/5">Docker</span>
<span class="px-2 py-1 rounded-md bg-white/10 text-xs text-white border border-white/5">K8s</span>
</div>
</div>
</article>
</div>
</main>
<!-- Footer -->
<footer class="relative z-10 border-t border-white/5 bg-[#050505] py-12">
<div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p class="text-[#90a7cb] text-sm">© 2024 Shahriar Ridom. Crafted in Deep Space.</p>
<div class="flex items-center gap-6">
<a class="text-[#90a7cb] hover:text-white transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:-translate-y-1 transition-transform">code</span>
<span class="sr-only">GitHub</span>
</a>
<a class="text-[#90a7cb] hover:text-white transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:-translate-y-1 transition-transform">work</span>
<span class="sr-only">LinkedIn</span>
</a>
<a class="text-[#90a7cb] hover:text-white transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:-translate-y-1 transition-transform">alternate_email</span>
<span class="sr-only">Email</span>
</a>
</div>
</div>
</footer>
</body></html>



