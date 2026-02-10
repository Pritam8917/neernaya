"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Zap,
  BarChart3,
  Shield,
  Cloud,
  Settings,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  const services = [
    {
      icon: Activity,
      title: "Real-Time Water Monitoring",
      description:
        "Continuously monitor pH, Turbidity, TDS, Hardness, Chlorine, Ammonia, Dissolved Oxygen, and Salinity using IoT sensors.",
    },
    {
      icon: Zap,
      title: "Smart Purification Automation",
      description:
        "Automatically control purification systems based on live water quality data and safety thresholds.",
    },
    {
      icon: BarChart3,
      title: "Water Quality Analytics Dashboard",
      description:
        "Visualize real-time trends, historical data, and water quality insights through an interactive dashboard.",
    },
    {
      icon: Shield,
      title: "Intelligent Alerts & Notifications",
      description:
        "Receive instant email alerts when water quality crosses safe limits or requires purification action.",
    },
    {
      icon: Settings,
      title: "Custom IoT Monitoring Kits",
      description:
        "Get personalized monitoring kits based on selected water parameters and usage requirements.",
    },
    {
      icon: Cloud,
      title: "Multi-Source Water Monitoring",
      description:
        "Monitor drinking water, borewell water, industrial water, or aquaculture water using one platform.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Select Water Parameters",
      description:
        "User signs up and selects which water parameters they want to monitor.",
    },
    {
      number: "02",
      title: "Request Review & Approval",
      description: "Your request is sent to the admin team.",
    },
    {
      number: "03",
      title: "Confirmation & Payment Notification",
      description:
        "User receives an email notification when request is approved.",
    },
    {
      number: "04",
      title: "Kit Collection & Device Activation",
      description: "User collects or receives IoT monitoring kit.",
    },
  ];
  const words =
    "Monitor pH, Turbidity, TDS, Hardness, Chlorine, Ammonia, Dissolved Oxygen, and Salinity using advanced IoT sensors.";

  return (
    <main className="min-h-screen bg-linear-to-br  text-white ">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-28 text-center">
        <Spotlight />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Smart Water Quality
          <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Monitoring & Purification
          </span>
        </h1>

        <p className="mt-6 text-sm text-slate-300 max-w-2xl mx-auto">
          <TextGenerateEffect duration={2} filter={false} words={words} />
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-3 py-6"
          >
            <Link
              href="/auth/signup"
              className="text-xl flex items-center gap-2 group"
            >
              Start Monitoring
              <ArrowRight
                size={20}
                className=" transition-transform duration-300 group-hover:-rotate-30 group-hover:-translate-y-0.5"
              />
            </Link>
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Water Quality Monitoring Features
          </h2>

          <div className="mt-3 flex justify-center">
            <div className="h-1 w-56 rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-teal-400"></div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition shadow-lg hover:shadow-cyan-500/20"
              >
                <Icon className="text-cyan-400 mb-4" size={30} />

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                <p className="text-slate-300 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative max-w-5xl mx-auto px-4 py-24 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/20 blur-[140px] rounded-full" />
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">How NeerNaya Works</h2>

          <div className="mt-3 flex justify-center">
            <div className="h-1 w-36 rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-teal-400"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400 via-blue-400 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] -translate-x-1/2" />

                {/* Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-9 md:px-10">
                  <div
                    className="
                p-6 rounded-xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-cyan-400/40
                transition shadow-lg
              "
                  >
                    <div className="text-sm font-semibold mb-2 text-cyan-400">
                      Step {step.number}
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
      relative
      p-12 md:p-16
      rounded-3xl
      text-center
      bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent
      backdrop-blur-xl
      border border-cyan-400/20
      shadow-[0_0_60px_rgba(34,211,238,0.08)]
      overflow-hidden
    "
        >
          {/* Animated Glow */}
          <motion.div
            animate={{ opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="
        absolute inset-0 rounded-3xl
        bg-linear-to-r from-cyan-400/10 via-blue-400/10 to-cyan-400/10
        blur-3xl -z-10
      "
          />

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Reliable • Real-Time • Trusted Smart Water Monitoring
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Secure Your Water Quality
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              With Smart Monitoring & Instant Alerts
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-slate-300 mb-10 max-w-2xl mx-auto text-base md:text-lg"
          >
            Start monitoring your water quality in real time using intelligent
            IoT sensors. Get instant alerts when water becomes unsafe and ensure
            safe usage with automated purification support — all from one smart
            platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="
            bg-cyan-500 hover:bg-cyan-600
            text-black font-semibold
            shadow-lg hover:shadow-cyan-500/30
            transition px-8
          "
              >
                <Link href="/auth/signup">Start Protecting Your Water</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10 px-8"
              >
                <Link href="/services">View Monitoring Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Points */}
          <div className="mt-8 text-sm text-slate-400 flex flex-wrap justify-center gap-6">
            <span>✓ Easy Installation</span>
            <span>✓ Real-Time Alerts</span>
            <span>✓ Smart Automation Support</span>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
