"use client";

import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./logo";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <m.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-6xl mx-auto p-6 md:p-8 pointer-events-none"
      >
        {/* Logo */}
        <div className="pointer-events-auto cursor-pointer z-50">
          <Link href="/">
            <div className="flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10">
              <Logo className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="pointer-events-auto md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="text-neutral-400 hover:text-white transition-colors p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </m.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="absolute top-6 right-6 text-neutral-400 hover:text-white p-4"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <m.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-light tracking-tight text-white/90 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </m.div>
              ))}
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
