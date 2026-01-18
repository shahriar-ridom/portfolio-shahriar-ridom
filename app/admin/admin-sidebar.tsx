"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  FolderKanban,
  LogOut,
  Cpu,
  Menu,
  X,
  LucideIcon,
  Inbox,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/profile", label: "Profile", icon: User },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/skills", label: "Skills", icon: Cpu },
  { href: "/admin/messages", label: "Inbox", icon: Inbox },
];

interface NavContentProps {
  pathname: string;
  onClose: () => void;
  onLogout: () => void;
}

const NavContent = ({ pathname, onClose, onLogout }: NavContentProps) => (
  <div className="flex flex-col h-full">
    <div className="p-6 border-b border-white/10 flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-tighter">Admin Panel</h1>
      <button
        className="md:hidden p-1 hover:bg-white/10 rounded-md transition-colors"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X className="w-6 h-6" />
      </button>
    </div>

    <nav className="flex-1 p-4 space-y-2">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium",
              isActive
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="w-5 h-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>

    <div className="p-4 border-t border-white/10">
      <button
        onClick={onLogout}
        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-red-500/10 text-red-500 transition-colors font-medium"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </div>
  </div>
);

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="bg-background"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-50 w-64 bg-background/95 backdrop-blur-xl border-r border-white/10 transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <NavContent
          pathname={pathname}
          onClose={() => setIsOpen(false)}
          onLogout={handleLogout}
        />
      </aside>
    </>
  );
}
