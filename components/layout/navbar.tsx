"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (user || token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      const section = document.getElementById("how-it-works");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection("how-it-works");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="sticky top-0 z-60 px-4 md:px-16">
      <div className="relative w-full max-w-8xl mx-auto">
        {/* NAV CONTENT */}
        <div className="relative flex items-center justify-between py-4 md:py-0 bg-black/40 backdrop-blur-xl border md:bg-transparent border-white/10 md:border-none top-3 rounded-full z-50 px-5 md:top-8 md:backdrop-blur-none">
          {/* LEFT LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold md:text-3xl text-xl text-white z-10"
          >
            <span style={{ fontFamily: "CinzelCustom" }}>NEERNAYA</span>
          </Link>

          {/* TRUE CENTER MENU */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 px-8 py-4 rounded-full bg-black border border-white/20 shadow-lg backdrop-blur-2xl">
            {/* Home */}
            <Link
              href="/"
              className={`transition font-medium ${
                pathname === "/" && activeSection === "home"
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition font-medium ${
                pathname === "/about"
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              About
            </Link>
            {/* Services */}
            <Link
              href="/services"
              className={`transition font-medium ${
                pathname === "/services"
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Services
            </Link>

            {/* How it Works */}
            <Link
              href="/#how-it-works"
              className={`transition font-medium ${
                pathname === "/" && activeSection === "how-it-works"
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              How it Works
            </Link>

            {!isLoggedIn ? (
              <Button
                asChild
                className="rounded-full bg-white text-black shadow-md px-5 py-2 hover:bg-white/90 font-medium"
              >
                <Link href="/auth/login">Login</Link>
              </Button>
            ) : null}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-10 cursor-pointer"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 🌫️ BACKGROUND BLUR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* 💎 MENU CONTAINER */}
            <motion.div
              initial={{ opacity: 0, y: -40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[92%] max-w-sm rounded-3xl 
        bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.08)] 
        p-6 space-y-5 z-50"
            >
              {/* 🔥 NAV ITEMS */}
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "How It Works", href: "/#how-it-works" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium px-4 py-2 rounded-xl transition-all duration-300
              ${
                pathname === item.href
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "text-white hover:bg-white/10 hover:text-cyan-400"
              }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* 🔘 LOGIN BUTTON */}
              {!isLoggedIn && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    asChild
                    className="w-full rounded-full bg-linear-to-r from-cyan-400 to-blue-400 text-black font-semibold py-5 hover:opacity-90 transition"
                  >
                    <Link href="/auth/login">Login</Link>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
