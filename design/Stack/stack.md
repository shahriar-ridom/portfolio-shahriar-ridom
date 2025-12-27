<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tech Stack &amp; About - Shahriar Ridom</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Geist+Mono:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<!-- Material Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#3c83f6",
                        "background-light": "#f5f7f8", // Kept for config consistency, but not used in this specific dark design
                        "background-dark": "#050505", // Deep Space Black
                        "surface-dark": "#0F0F0F",
                        "text-main": "#EDEDED",
                        "text-muted": "#A1A1AA",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "mono": ["Geist Mono", "monospace"],
                    },
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                    animation: {
                        'scroll': 'scroll 40s linear infinite',
                    },
                    keyframes: {
                        scroll: {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' },
                        }
                    }
                },
            },
        }
    </script>
<style>/* Noise Grain Overlay */
.noise-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 50;
    opacity: 0.05;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDjrGpN2PWCbYKMU8swUN8fbJ68ZPnwVyaQN00zF9l5btQ4OGzaWvNP5WBTyTlpFQZ6i-uH5NxsEdNmZGeCdZk7T-KQ1sXPtsDtDi9VqqBndH402Od52aclV1oIf7JiBumZ4TZUwyePUDDIxKMsmGZIQENcMmThQOEzbrL4IfCliKKQjteRKQElvGRZzDkMNWbvJkkcy3WQlAXT2IyB5vFywvw2pEyR-cGTq_3PrRRuaCkPQ-H2ZeoFmrPDRN5You_6vp3U4_ETIe-X)
    }
/* Custom Scrollbar for skills if needed */
.custom-scrollbar::-webkit-scrollbar {
    width: 4px
    }
.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05)
    }
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #3c83f6;
    border-radius: 4px
    }
/* Marquee masking */
.marquee-mask {
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)
    }</style>
</head>
<body class="bg-background-dark text-text-main font-display antialiased selection:bg-primary/30 selection:text-white">
<!-- Noise Overlay -->
<div class="noise-overlay"></div>
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-10 pb-20">
<!-- Main Content Layout -->
<div class="layout-container flex h-full grow flex-col px-4 md:px-8 lg:px-20 xl:px-40">
<!-- Grid Layout: Split Screen -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-10">
<!-- Left Column: Biography -->
<div class="lg:col-span-5 flex flex-col justify-center">
<!-- Section Header -->
<div class="mb-6">
<span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-medium tracking-wide text-primary shadow-[0_0_15px_-3px_rgba(60,131,246,0.3)]">
<span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                            02. ABOUT &amp; SKILLS
                        </span>
</div>
<!-- Headline -->
<h1 class="text-text-main tracking-tight text-[32px] md:text-5xl font-bold leading-[1.1] mb-8">
                        Building digital products with <span class="text-primary">purpose</span>.
                    </h1>
<!-- Body Text -->
<div class="space-y-6 text-text-muted text-lg leading-relaxed font-light">
<p>
                            I am a full-stack developer passionate about creating seamless digital experiences. With a background in design and engineering, I bridge the gap between aesthetics and functionality.
                        </p>
<p>
                            Currently obsessed with scalable architecture and pixel-perfect UIs. My approach combines deep technical expertise with a keen eye for user interaction, ensuring that every line of code contributes to a delightful end-user journey.
                        </p>
</div>
<!-- Stats Row -->
<div class="grid grid-cols-3 gap-4 border-y border-white/5 py-8 my-8">
<div>
<div class="text-3xl font-bold text-white mb-1 font-mono">5+</div>
<div class="text-xs text-text-muted uppercase tracking-wider">Years Exp.</div>
</div>
<div>
<div class="text-3xl font-bold text-white mb-1 font-mono">40+</div>
<div class="text-xs text-text-muted uppercase tracking-wider">Projects</div>
</div>
<div>
<div class="text-3xl font-bold text-white mb-1 font-mono">∞</div>
<div class="text-xs text-text-muted uppercase tracking-wider">Coffees</div>
</div>
</div>
<!-- CTA Button -->
<div class="flex justify-start">
<button class="group relative flex items-center justify-center overflow-hidden rounded-full bg-primary h-12 px-8 text-white shadow-[0_0_20px_-5px_#3c83f6] transition-all hover:bg-blue-600 hover:scale-105 active:scale-95">
<span class="material-symbols-outlined mr-2 text-[20px] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">download</span>
<span class="text-sm font-bold tracking-wide">Download Resume</span>
<div class="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shimmer"></div>
</button>
</div>
</div>
<!-- Right Column: Skills Visualization -->
<div class="lg:col-span-7 flex flex-col justify-center relative">
<!-- Decorative Background Glow -->
<div class="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
<div class="relative bg-surface-dark/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 shadow-2xl">
<!-- Tabs -->
<div class="flex mb-8 overflow-x-auto pb-2 scrollbar-hide">
<div class="flex items-center rounded-full bg-[#1A1A1A] p-1 border border-white/5">
<label class="cursor-pointer relative z-10">
<input checked="" class="peer sr-only" name="skill-tab" type="radio"/>
<span class="flex items-center px-5 py-2 rounded-full text-sm font-medium text-text-muted transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-lg hover:text-white">
                                        Frontend
                                    </span>
</label>
<label class="cursor-pointer relative z-10">
<input class="peer sr-only" name="skill-tab" type="radio"/>
<span class="flex items-center px-5 py-2 rounded-full text-sm font-medium text-text-muted transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-lg hover:text-white">
                                        Backend
                                    </span>
</label>
<label class="cursor-pointer relative z-10">
<input class="peer sr-only" name="skill-tab" type="radio"/>
<span class="flex items-center px-5 py-2 rounded-full text-sm font-medium text-text-muted transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-lg hover:text-white">
                                        DevOps
                                    </span>
</label>
</div>
</div>
<!-- Skill Bars -->
<div class="space-y-6">
<!-- Skill Item 1 -->
<div class="group">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<div class="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary text-[20px]">code</span>
</div>
<span class="font-medium text-white group-hover:text-primary transition-colors">React / Next.js</span>
</div>
<span class="font-mono text-sm text-primary">95%</span>
</div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-blue-600 to-primary w-[95%] rounded-full shadow-[0_0_10px_rgba(60,131,246,0.5)] relative overflow-hidden">
<div class="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
<!-- Skill Item 2 -->
<div class="group">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<div class="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary text-[20px]">brush</span>
</div>
<span class="font-medium text-white group-hover:text-primary transition-colors">Tailwind CSS</span>
</div>
<span class="font-mono text-sm text-primary">90%</span>
</div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-blue-600 to-primary w-[90%] rounded-full shadow-[0_0_10px_rgba(60,131,246,0.5)]"></div>
</div>
</div>
<!-- Skill Item 3 -->
<div class="group">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<div class="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary text-[20px]">javascript</span>
</div>
<span class="font-medium text-white group-hover:text-primary transition-colors">TypeScript</span>
</div>
<span class="font-mono text-sm text-primary">85%</span>
</div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-blue-600 to-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(60,131,246,0.5)]"></div>
</div>
</div>
<!-- Skill Item 4 -->
<div class="group">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<div class="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary text-[20px]">animation</span>
</div>
<span class="font-medium text-white group-hover:text-primary transition-colors">Framer Motion</span>
</div>
<span class="font-mono text-sm text-primary">80%</span>
</div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-blue-600 to-primary w-[80%] rounded-full shadow-[0_0_10px_rgba(60,131,246,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Infinite Marquee Section -->
<div class="mt-20 lg:mt-32 w-full relative">
<div class="text-center mb-6">
<p class="text-sm font-mono text-text-muted uppercase tracking-widest">Technologies &amp; Tools</p>
</div>
<div class="marquee-mask relative w-full overflow-hidden py-4">
<div class="flex w-max animate-scroll gap-16 items-center hover:[animation-play-state:paused]">
<!-- Logos Batch 1 -->
<div class="flex items-center gap-16">
<!-- React -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#61DAFB] transition-colors duration-300">science</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">React</span>
</div>
<!-- Node -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#339933] transition-colors duration-300">dns</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Node.js</span>
</div>
<!-- Database -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#336791] transition-colors duration-300">database</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">PostgreSQL</span>
</div>
<!-- Cloud -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#FF9900] transition-colors duration-300">cloud</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">AWS</span>
</div>
<!-- Docker -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#2496ED] transition-colors duration-300">view_in_ar</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Docker</span>
</div>
<!-- Figma -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#F24E1E] transition-colors duration-300">design_services</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Figma</span>
</div>
<!-- Git -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#F05032] transition-colors duration-300">call_merge</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Git</span>
</div>
<!-- Redis -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#DC382D] transition-colors duration-300">storage</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Redis</span>
</div>
</div>
<!-- Logos Batch 2 (Duplicate for Seamless Loop) -->
<div class="flex items-center gap-16 pl-16">
<!-- React -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#61DAFB] transition-colors duration-300">science</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">React</span>
</div>
<!-- Node -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#339933] transition-colors duration-300">dns</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Node.js</span>
</div>
<!-- Database -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#336791] transition-colors duration-300">database</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">PostgreSQL</span>
</div>
<!-- Cloud -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#FF9900] transition-colors duration-300">cloud</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">AWS</span>
</div>
<!-- Docker -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#2496ED] transition-colors duration-300">view_in_ar</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Docker</span>
</div>
<!-- Figma -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#F24E1E] transition-colors duration-300">design_services</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Figma</span>
</div>
<!-- Git -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#F05032] transition-colors duration-300">call_merge</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Git</span>
</div>
<!-- Redis -->
<div class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
<span class="material-symbols-outlined text-4xl text-gray-600 group-hover:text-[#DC382D] transition-colors duration-300">storage</span>
<span class="text-xs text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Redis</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body></html>
