"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

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
    <nav className="sticky top-10 z-50 px-16">
      <div className="relative max-w-8xl mx-auto">
        {/* NAV CONTENT */}
        <div className="relative flex items-center justify-between">
          {/* LEFT LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-3xl text-white z-10"
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
            ) : (
              null
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-10"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-auto max-w-sm rounded-2xl bg-black border border-white/10 shadow-xl p-4 space-y-3">
          <Link
            href="/"
            className="block text-white hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="block text-white hover:text-blue-400 transition"
          >
            Services
          </Link>

          <Link
            href="#how-it-works"
            className="block text-white hover:text-blue-400 transition"
          >
            How It Works
          </Link>

          <div className="flex gap-2 pt-2">
              {!isLoggedIn ? (
                <>
                  <Button
                    variant="ghost"
                    asChild
                    className="flex-1 rounded-full text-white hover:bg-white/10"
                  >
                    <Link href="/auth/login">Login</Link>
                  </Button>
                </>
              ) : (null)}
          </div>
        </div>
      )}
    </nav>
  );
}
