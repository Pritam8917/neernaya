"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Activity,
  Zap,
  BarChart3,
  Shield,
  Cloud,
  Gauge,
  Wifi,
  Mail,
  Package,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Water Quality Monitoring",
    desc: "Real-time monitoring of pH, TDS, Turbidity, Hardness, Chlorine, DO, Ammonia and Salinity.",
  },
  {
    icon: Zap,
    title: "Smart Purifier Automation",
    desc: "Automatically control purifier operations based on water quality conditions.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Visualize trends and water quality performance metrics.",
  },
  {
    icon: Mail,
    title: "Email Alerts",
    desc: "Receive approval notifications and water safety alerts instantly.",
  },
  {
    icon: Package,
    title: "IoT Hardware Kit",
    desc: "Pre-configured sensor kit for easy installation.",
  },
  {
    icon: Cloud,
    title: "Cloud Data Storage",
    desc: "Secure cloud platform for monitoring data access anywhere.",
  },
  {
    icon: Shield,
    title: "Secure Data Protection",
    desc: "Encrypted water monitoring data with secure access.",
  },
  {
    icon: Gauge,
    title: "Performance Monitoring",
    desc: "Track purifier efficiency and water quality performance.",
  },
  {
    icon: Wifi,
    title: "Reliable Connectivity",
    desc: "Stable communication between sensors and dashboard.",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-linear-to-br from-black via-slate-950 to-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:py-24 py-15 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          Smart Water IoT Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 mt-6 max-w-2xl mx-auto"
        >
          Complete ecosystem for water monitoring, purification automation, IoT
          hardware integration and cloud analytics.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.01 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.04,
                  y: -6,
                }}
                className="
                relative
                p-8 rounded-xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                hover:border-cyan-400/40
                transition
                shadow-lg
                hover:shadow-cyan-500/20
              "
              >
                {/* ICON ANIMATION */}
                <div>
                  <Icon className="text-cyan-400 mb-4" size={30} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                <p className="text-slate-400 text-sm">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
