"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Activity, Cpu, Waves } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminUserDevices({
  params,
}: {
  params: { id: string };
}) {
  const user = {
    id: params.id,
    name: "Rahul Sharma",
    email: "rahul@example.com",
  };

  const devices = [
    {
      id: 1,
      name: "Smart Water Monitoring System",
      status: "active" as const,
      lastUpdated: "2 minutes ago",
      parameters: [
        { name: "pH", value: 6.8, unit: "" },
        { name: "Turbidity", value: 24, unit: "NTU" },
        { name: "TDS", value: 350, unit: "ppm" },
        { name: "Hardness", value: 75, unit: "mg/L" },
        { name: "Chlorine", value: 0.4, unit: "mg/L" },
        { name: "Ammonia (NH3/NH4)", value: 0.2, unit: "mg/L" },
        { name: "Dissolved Oxygen (DO)", value: 6.5, unit: "mg/L" },
        { name: "Salinity", value: 0.5, unit: "ppt" },
      ],
    },
    {
      id: 2,
      name: "Smart Air Quality Monitoring System",
      status: "active" as const,
      lastUpdated: "1 minute ago",
      parameters: [
        { name: "PM2.5", value: 32, unit: "µg/m³" },
        { name: "PM10", value: 58, unit: "µg/m³" },
        { name: "CO2", value: 620, unit: "ppm" },
        { name: "Temperature", value: 28, unit: "°C" },
        { name: "Humidity", value: 65, unit: "%" },
        { name: "VOC", value: 0.45, unit: "ppm" },
        { name: "AQI", value: 82, unit: "" },
        { name: "Pressure", value: 1008, unit: "hPa" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <div className="flex pt-20">
        {/* Sidebar */}
        <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-black z-40">
          <AdminSidebar />
        </div>

        {/* Main */}
        <div className="flex-1 ml-64">
          <div className="max-w-7xl mx-auto px-10 py-10 space-y-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between flex-wrap gap-6"
            >
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-white/10 hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  <Link href="/admin/users">
                    <ArrowLeft size={18} />
                  </Link>
                </Button>

                <div>
                  <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    {user.name}
                  </h1>
                  <p className="text-white/60">{user.email}</p>
                </div>
              </div>

              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm">
                Premium Monitoring Enabled
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Total Devices",
                  value: devices.length,
                  icon: Cpu,
                },
                {
                  label: "Active Devices",
                  value: devices.filter((d) => d.status === "active").length,
                  icon: Activity,
                },
                {
                  label: "Avg Water Quality",
                  value: "Good",
                  icon: Waves,
                },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                  >
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-cyan-500/10 blur-2xl" />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/60 text-sm mb-2">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-cyan-400">
                          {stat.value}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30">
                        <Icon className="text-cyan-400" size={22} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Devices Custom Cards */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  User Monitoring Devices
                </h2>

                <Button className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 hover:bg-cyan-500/30">
                  Add Device
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {devices.map((device) => (
                  <motion.div
                    key={device.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/40 transition"
                  >
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 blur-3xl" />

                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {device.name}
                        </h3>
                        <p className="text-xs text-white/50 mt-1">
                          Last updated: {device.lastUpdated}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs">
                        <Activity size={14} />
                        {device.status}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {device.parameters.map((param, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-white/10 bg-black/40 p-3"
                        >
                          <p className="text-xs text-white/50 mb-1">
                            {param.name}
                          </p>
                          <p className="text-lg font-semibold text-cyan-400">
                            {param.value} {param.unit}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">

                      <Button
                        size="sm"
                        className="bg-white/5 border border-white/10 hover:border-cyan-400/40"
                      >
                        Manage
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

              <h3 className="text-lg font-semibold mb-6 relative">
                Recent Device Activity
              </h3>

              <div className="space-y-5 relative">
                {[
                  {
                    time: "2 min ago",
                    action: "Device data updated",
                    device: "Smart Water Monitor",
                  },
                  {
                    time: "5 min ago",
                    action: "pH threshold alert",
                    device: "Water Tank Sensor",
                  },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-white/5 pb-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />

                      <div>
                        <p className="text-sm">{a.action}</p>
                        <p className="text-xs text-cyan-400">{a.device}</p>
                      </div>
                    </div>

                    <span className="text-xs text-white/50">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
