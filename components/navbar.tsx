"use client";

import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/app/favicon.ico";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <m.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-[1200px] mx-auto p-6 md:p-10 pointer-events-none"
      >
        {/* Logo Section */}
        <div className="pointer-events-auto flex items-center gap-2 select-none group cursor-pointer">
          <Link href="/">
            <div className="flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
              <Image
                src={logo}
                width={25}
                height={25}
                alt="Shahriar Ridom Logo"
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md shadow-lg shadow-black/5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="pointer-events-auto w-10 flex items-center justify-end">
          <button
            onClick={toggleMenu}
            aria-label="Open Menu"
            className="md:hidden text-white/70 hover:text-white pointer-events-auto p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </m.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="absolute top-6 right-6 text-white/70 hover:text-white p-4"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
