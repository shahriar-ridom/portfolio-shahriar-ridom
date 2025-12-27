<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Contact Footer - Deep Space</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#3caff6",
                        "background-light": "#f5f7f8",
                        "background-dark": "#050505", /* User specified deep black */
                        "secondary-dark": "#101c23",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>/* Custom styles for interactions that Tailwind doesn't cover by default */
.magnetic-btn:hover {
    box-shadow: 0 0 30px rgba(60, 175, 246, 0.3)
    }
/* Subtle noise simulation using CSS gradients */
.bg-noise {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuBNT1UCYx2sRLqyqqdeiUsGCWV2Z1uKbcGlFPk19EXfezC_BK-mXRMSZ1h66bCKgAOBkNwokgzg1LrNS9I_ay9YVN1UicgOpJY4jZ310TBJ3HXcrK3s6Nw7iE10AsE0kS-ih63jbjdrch2UhhFPKgOaFw6LdJAMjc2s-mzrBC61OTNVUINreqcFfT68aWFWAg1KKNkPpAkAkmMtnXgpSfZ6yoHltnUGGsbpUo9AF9cKdIIjiSF-BDq0LrsU94LS4aseYS026qnPlFmK)
    }
/* Floating label transition */
.form-group input:focus ~ label, .form-group input:not(:placeholder-shown) ~ label, .form-group textarea:focus ~ label, .form-group textarea:not(:placeholder-shown) ~ label {
    transform: translatey(-1.5rem) scale(0.85);
    color: #3caff6
    }</style>
</head>
<body class="bg-background-dark text-[#EDEDED] font-display min-h-screen flex flex-col antialiased selection:bg-primary/30 selection:text-white">
<!-- Noise Overlay -->
<div class="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 bg-noise"></div>
<main class="relative flex-grow flex flex-col justify-center w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24 z-10">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<!-- Left Column: Heading & Info -->
<div class="flex flex-col h-full justify-between space-y-12">
<div>
<!-- Section Tag -->
<div class="flex items-center gap-2 mb-6 text-primary/80">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="uppercase tracking-widest text-xs font-bold">Contact</span>
</div>
<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
                        Project <br/>
<span class="text-white/40">in mind?</span>
</h1>
<p class="text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
                        I'm always interested in hearing about new projects and opportunities. Drop me a line and let's create something specific.
                    </p>
</div>
<!-- Contact Details (Desktop) -->
<div class="hidden lg:flex flex-col gap-8 mt-auto">
<div>
<p class="text-sm text-white/40 mb-2 uppercase tracking-wider">Email me at</p>
<a class="text-2xl font-medium hover:text-primary transition-colors flex items-center gap-2 group" href="mailto:hello@shahriar.dev">
                            hello@shahriar.dev
                            <span class="material-symbols-outlined text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_outward</span>
</a>
</div>
<!-- Socials -->
<div class="flex gap-4">
<a class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-background-dark transition-all duration-300 hover:scale-110" href="#">
<!-- GitHub Icon placeholder via Material Symbols (using code as proxy) -->
<span class="material-symbols-outlined text-[20px]">code</span>
</a>
<a class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110" href="#">
<!-- LinkedIn proxy -->
<span class="material-symbols-outlined text-[20px]">work</span>
</a>
<a class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-background-dark transition-all duration-300 hover:scale-110" href="#">
<!-- Twitter/X proxy -->
<span class="material-symbols-outlined text-[20px]">alternate_email</span>
</a>
</div>
</div>
</div>
<!-- Right Column: Minimalist Form -->
<div class="w-full pt-4 lg:pt-12">
<form class="flex flex-col gap-10">
<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
<!-- Name Input -->
<div class="form-group relative">
<input class="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-4 text-xl text-white focus:ring-0 focus:border-primary placeholder-transparent transition-all duration-300" id="name" placeholder="John Doe" type="text"/>
<label class="absolute left-0 top-4 text-white/40 text-xl pointer-events-none transition-all duration-300 origin-left" for="name">
                                Your Name
                            </label>
</div>
<!-- Email Input -->
<div class="form-group relative">
<input class="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-4 text-xl text-white focus:ring-0 focus:border-primary placeholder-transparent transition-all duration-300" id="email" placeholder="john@example.com" type="email"/>
<label class="absolute left-0 top-4 text-white/40 text-xl pointer-events-none transition-all duration-300 origin-left" for="email">
                                Your Email
                            </label>
</div>
</div>
<!-- Message Textarea -->
<div class="form-group relative">
<textarea class="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-4 text-xl text-white focus:ring-0 focus:border-primary placeholder-transparent resize-none transition-all duration-300" id="message" placeholder="Tell me about your project" rows="4"></textarea>
<label class="absolute left-0 top-4 text-white/40 text-xl pointer-events-none transition-all duration-300 origin-left" for="message">
                            Tell me about your project
                        </label>
</div>
<!-- Huge Magnetic Button -->
<div class="mt-8 flex justify-end">
<button class="magnetic-btn group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-8 md:px-14 md:py-10 text-background-dark transition-transform active:scale-95 w-full md:w-auto" type="button">
<span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></span>
<span class="relative text-xl md:text-2xl font-bold tracking-tight">Let's Talk</span>
<span class="material-symbols-outlined relative text-2xl font-bold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
</button>
</div>
</form>
<!-- Mobile Contact Info (Visible only on small screens) -->
<div class="lg:hidden mt-16 flex flex-col gap-8 border-t border-white/10 pt-8">
<div>
<p class="text-sm text-white/40 mb-2 uppercase tracking-wider">Email me at</p>
<a class="text-xl font-medium hover:text-primary transition-colors" href="mailto:hello@shahriar.dev">
                            hello@shahriar.dev
                        </a>
</div>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60" href="#">
<span class="material-symbols-outlined text-[18px]">code</span>
</a>
<a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60" href="#">
<span class="material-symbols-outlined text-[18px]">work</span>
</a>
<a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60" href="#">
<span class="material-symbols-outlined text-[18px]">alternate_email</span>
</a>
</div>
</div>
</div>
</div>
</main>
<!-- Footer Meta -->
<footer class="w-full border-t border-white/5 bg-[#050505] relative z-10">
<div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30 font-mono">
<div class="flex flex-col md:flex-row items-center gap-2 md:gap-6">
<span>© 2024 Shahriar Ridom</span>
<span class="hidden md:inline w-1 h-1 bg-white/30 rounded-full"></span>
<span>Crafted with code &amp; deep space vibes</span>
</div>
<button class="group flex items-center gap-2 hover:text-primary transition-colors cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<span>Back to top</span>
<span class="material-symbols-outlined text-[16px] group-hover:-translate-y-1 transition-transform">arrow_upward</span>
</button>
</div>
</footer>
</body></html>
