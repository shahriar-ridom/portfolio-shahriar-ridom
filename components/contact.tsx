"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    alert("Message sent! (Simulated)");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-background pt-20 pb-10 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full justify-between space-y-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 text-primary/80">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="uppercase tracking-widest text-xs font-bold">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
                Project <br />
                <span className="text-muted-foreground/40">in mind?</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground/60 max-w-md leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Drop me a line and let's create something
                specific.
              </p>
            </div>

            {/* Contact Details (Desktop) */}
            <div className="hidden lg:flex flex-col gap-8 mt-auto">
              <div>
                <p className="text-sm text-muted-foreground/40 mb-2 uppercase tracking-wider">
                  Email me at
                </p>
                <a
                  href="mailto:hello@shahriar.dev"
                  className="text-2xl font-medium hover:text-primary transition-colors flex items-center gap-2 group text-foreground"
                >
                  hello@shahriar.dev
                  <ArrowUpRight className="w-6 h-6 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 text-foreground"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 text-foreground"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 text-foreground"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full pt-4 lg:pt-12"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="relative group">
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-lg text-foreground focus:ring-0 focus:border-primary placeholder-transparent transition-all duration-300 outline-none"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 text-muted-foreground/40 text-lg pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1 absolute">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-lg text-foreground focus:ring-0 focus:border-primary placeholder-transparent transition-all duration-300 outline-none"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 text-muted-foreground/40 text-lg pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1 absolute">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-lg text-foreground focus:ring-0 focus:border-primary placeholder-transparent resize-none transition-all duration-300 outline-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-muted-foreground/40 text-lg pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                >
                  Tell me about your project
                </label>
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 absolute">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 md:px-10 md:py-5 text-primary-foreground transition-transform active:scale-95 w-full md:w-auto disabled:opacity-70 cursor-pointer"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></span>
                  <span className="relative text-lg md:text-xl font-bold tracking-tight">
                    {isSubmitting ? "Sending..." : "Let's Talk"}
                  </span>
                  {!isSubmitting && (
                    <ArrowUpRight className="relative w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </button>
              </div>
            </form>

            {/* Mobile Contact Info */}
            <div className="lg:hidden mt-16 flex flex-col gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-sm text-muted-foreground/40 mb-2 uppercase tracking-wider">
                  Email me at
                </p>
                <a
                  href="mailto:hello@shahriar.dev"
                  className="text-xl font-medium hover:text-primary transition-colors text-foreground"
                >
                  hello@shahriar.dev
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Meta */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/30 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>© 2024 Shahriar Ridom</span>
            <span className="hidden md:inline w-1 h-1 bg-white/30 rounded-full"></span>
            <span>Crafted with code & deep space vibes</span>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
