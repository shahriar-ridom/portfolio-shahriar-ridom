"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMessage } from "@/app/actions";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const initialState = { success: false, message: "", errors: {} };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      toast("Message sent! I'll get back to you soon.");
    }
  }, [state.success]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full pt-4 lg:pt-12"
    >
      <form ref={formRef} action={formAction} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="relative group">
            <input
              name="name"
              type="text"
              id="name"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-lg text-foreground focus:ring-0 focus:border-primary placeholder-transparent transition-all duration-300 outline-none"
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-3 text-muted-foreground/40 text-lg pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
            >
              Your Name
            </label>
            {state.errors?.name && (
              <span className="text-red-500 text-sm absolute mt-1">
                {state.errors.name[0]}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              name="email"
              type="email"
              id="email"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-lg text-foreground focus:ring-0 focus:border-primary placeholder-transparent transition-all duration-300 outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-3 text-muted-foreground/40 text-lg pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
            >
              Your Email
            </label>
            {state.errors?.email && (
              <span className="text-red-500 text-sm absolute mt-1">
                {state.errors.email[0]}
              </span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="relative group">
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder=" "
            required
            className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-lg text-foreground focus:ring-0 focus:border-primary placeholder-transparent resize-none transition-all duration-300 outline-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 top-3 text-muted-foreground/40 text-lg pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
          >
            Tell me about your project
          </label>
          {state.errors?.message && (
            <span className="text-red-500 text-sm absolute mt-1">
              {state.errors.message[0]}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 md:px-10 md:py-5 text-primary-foreground transition-transform active:scale-95 w-full md:w-auto disabled:opacity-70 cursor-pointer"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></span>
            <span className="relative text-lg md:text-xl font-bold tracking-tight flex items-center gap-2">
              {isPending ? (
                <>
                  Sending <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                "Let's Talk"
              )}
            </span>
            {!isPending && (
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
            href="mailto:shahriarridom.info@gmail.com"
            className="text-xl font-medium hover:text-primary transition-colors text-foreground break-all"
          >
            shahriarridom.info@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}
