'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'
export function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/10">

      {/* Glow Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14"
        >

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              NEERNAYA
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              Smart IoT based water monitoring and purification control platform.
              Monitor water quality in real-time using advanced sensor technology.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>

            <ul className="space-y-3 text-sm">
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
            <h4 className="font-semibold text-white mb-4">Support</h4>

            <ul className="space-y-3 text-sm">
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
            <h4 className="font-semibold text-white mb-4">Legal</h4>

            <ul className="space-y-3 text-sm">
              <li className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Terms of Service
              </li>

              <li className="text-slate-400 hover:text-cyan-400 transition cursor-pointer">
                Data Protection
              </li>
            </ul>
          </div>

        </motion.div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT TEXT */}
          <p className="text-slate-500 text-sm">
            © 2026 NeerNaya Water Intelligence Platform
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">

            <Link
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <Instagram size={20} />
            </Link>

            <Link
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <Linkedin size={20} />
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}
