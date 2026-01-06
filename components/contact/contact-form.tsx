"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMessage } from "@/app/actions";
import { Send, Loader2, AlertCircle } from "lucide-react";
import { m } from "framer-motion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const initialState = { success: false, message: "", errors: {} };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      toast.success("Message sent successfully!");
    } else if (state.success === false && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">
          Send me a message
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and I'll get back to you within 24 hours.
        </p>
      </div>

      <form ref={formRef} action={formAction} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup
            name="name"
            label="Name"
            placeholder="John Doe"
            error={state.errors?.name?.[0]}
          />
          <InputGroup
            name="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
            error={state.errors?.email?.[0]}
          />
        </div>

        <div className="relative group">
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder=" "
            required
            className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-base text-white focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-transparent resize-none transition-all duration-300 outline-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-4 text-muted-foreground/60 text-sm pointer-events-none transition-all duration-300 origin-left
            peer-focus:-translate-y-7 peer-focus:bg-black peer-focus:px-2 peer-focus:text-primary peer-focus:scale-90
            peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:scale-90"
          >
            Your Message
          </label>
          {state.errors?.message && (
            <ErrorMessage message={state.errors.message[0]} />
          )}
        </div>

        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-primary px-8 font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-50"
          >
            <div className="absolute inset-0 flex items-center justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>

            <span className="flex items-center gap-2 relative z-10">
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </m.div>
  );
}

function InputGroup({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="relative group">
      <input
        name={name}
        type={type}
        id={name}
        placeholder=" "
        required
        className={cn(
          "peer w-full bg-white/5 border rounded-xl px-4 py-4 text-base text-white focus:ring-2 focus:ring-primary/50 placeholder-transparent transition-all duration-300 outline-none",
          error
            ? "border-red-500/50 focus:border-red-500"
            : "border-white/10 focus:border-primary"
        )}
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-muted-foreground/60 text-sm pointer-events-none transition-all duration-300 origin-left
        peer-focus:-translate-y-7 peer-focus:bg-black peer-focus:px-2 peer-focus:text-primary peer-focus:scale-90
        peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:scale-90"
      >
        {label}
      </label>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <m.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 text-red-400 text-xs mt-2 ml-1"
    >
      <AlertCircle className="w-3.5 h-3.5" />
      <span>{message}</span>
    </m.div>
  );
}
