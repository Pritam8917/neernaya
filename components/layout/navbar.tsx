"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-10 z-50 px-16">
      <div className="relative max-w-8xl mx-auto">


        {/* NAV CONTENT */}
        <div className="relative flex items-center justify-between">
          {/* LEFT LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-2xl text-white z-10"
          >
            <span className="">NEERNAYA</span>
          </Link>

          {/* TRUE CENTER MENU */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 px-8 py-4 rounded-full bg-black/90 border border-white/10 shadow-lg backdrop-blur-xl">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition font-medium"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-white hover:text-blue-400 transition font-medium"
            >
              Services
            </Link>

            <Link
              href="#how-it-works"
              className="text-white hover:text-blue-400 transition font-medium"
            >
             How it Works
            </Link>

            <Button
              asChild
              className="rounded-full bg-white  text-black shadow-md transition px-5 py-2 hover:bg-white/90 font-medium"
            >
              <Link href="/admin/dashboard">Login</Link>
            </Button>
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

          <a
            href="#how-it-works"
            className="block text-white hover:text-blue-400 transition"
          >
            How It Works
          </a>

          <div className="flex gap-2 pt-2">
            <Button
              variant="ghost"
              asChild
              className="flex-1 rounded-full text-white hover:bg-white/10"
            >
              <Link href="/auth/login">Login</Link>
            </Button>

            <Button
              asChild
              className="flex-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/auth/signup">Apply Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
