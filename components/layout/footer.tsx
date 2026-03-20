'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/10">

      {/* Glow Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">

        {/* GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 md:mb-14 text-center sm:text-left"
        >

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3
              className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "CinzelCustom" }}
            >
              NEERNAYA
            </h3>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
              Smart IoT based water monitoring and purification control platform.
              Monitor water quality in real-time using advanced sensor technology.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">
              Platform
            </h4>

            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition">
                  Water Monitoring Services
                </Link>
              </li>

              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">
                  Parameter Monitoring
                </Link>
              </li>

              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">
                  IoT Device Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">
              Support
            </h4>

            <ul className="space-y-3 text-sm sm:text-base">
              <li className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Setup Guide
              </li>

              <li className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Contact Support
              </li>

              <li className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Email Assistance
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">
              Legal
            </h4>

            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/footer-components/privacy-policy" className="text-slate-400 hover:text-cyan-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/footer-components/terms-of-services" className="text-slate-400 hover:text-cyan-400 transition">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link href="/footer-components/data-protection" className="text-slate-400 hover:text-cyan-400 transition">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left ">

          {/* LEFT TEXT */}
          <p className="text-slate-500 text-xs sm:text-sm">
            © 2026 NeerNaya Water Intelligence Platform
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">
            <Link href="#" className="text-slate-400 hover:text-cyan-400 transition hover:scale-110">
              <Instagram size={20} />
            </Link>

            <Link href="#" className="text-slate-400 hover:text-cyan-400 transition hover:scale-110">
              <Linkedin size={20} />
            </Link>
          </div>

        </div>

      </div>

    </footer>
  )
}