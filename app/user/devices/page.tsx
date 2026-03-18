"use client";

import { Navbar } from "@/components/layout/navbar";
import { UserSidebar } from "@/components/layout/user-sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { LoaderOne } from "@/components/ui/loader";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";
type DeviceData = {
  name: string;
  value: number;
};
export default function Devices() {
  const [currentValues, setCurrentValues] = useState<DeviceData[]>([]);
  const [trendValues, setTrendValues] = useState<DeviceData[]>([]);
  const [loading, setLoading] = useState(true);
  const api = process.env.NEXT_PUBLIC_API_URL!;

  useEffect(() => {
    const fetchdeviceData = async () => {
      try {
        const res = await axios.get(`${api}/telemetry/latest?device_id=1`);
        const value = res.data;
        console.log("API DATA:", value);

        setCurrentValues([
          { name: "pH", value: value.ph ?? 0 },
          { name: "Turbidity", value: value.turb ?? 0 },
          { name: "TDS", value: value.tds ?? 0 },
          { name: "Hardness", value: value.hardness ?? 0 },
          { name: "Temperature", value: value.temp ?? 0 },
          {name: "Electrical Conductivity", value: value.ec ?? 0},
          { name: "DO", value: value.do ?? 0 },
          { name: "Salinity", value: value.salinity ?? 0 },
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching device data:", error);
        setLoading(false);
      }
    };

    fetchdeviceData();
  }, [api]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <LoaderOne />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
        <div className="flex">
          <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-black z-40">
            <UserSidebar />
          </div>

          <div className="flex-1 ml-72 px-8 py-10">
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Water Monitoring Dashboard
                </h1>
                <p className="text-gray-400">
                  Real-time IoT water quality analytics
                </p>
              </div>

              {/* <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-black cursor-pointer flex items-center gap-2"
                variant="default"
              >
                <Plus size={18} className="mr-2" />
                Add Device
              </Button> */}
            </motion.div>

            {/* KPI CARDS */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              {currentValues.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center border border-white/10 rounded-xl bg-white/5">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500/10 mb-4">
                    <Plus className="text-cyan-400" size={28} />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    No Device Connected
                  </h2>
                  <p className="text-gray-400 max-w-md mb-6">
                    You haven&apos;t added any IoT water monitoring device yet.
                    Connect your first device to start tracking real-time water
                    quality.
                  </p>

                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-black flex items-center gap-2">
                    <Plus size={14} />
                    Add Device
                  </Button>
                </div>
              ) : (
                currentValues.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.04 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-5"
                  >
                    <p className="text-sm text-gray-400">{item.name}</p>
                    <p className="text-2xl font-semibold text-cyan-300">
                      {item.value ?? "--"}
                    </p>
                  </motion.div>
                ))
              )}
            </motion.div>

            {/* CHART SECTION */}
            <div>
              {/* LINE CHART */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="mb-4 text-lg font-semibold">
                  Water Quality Trend
                </h3>

                <div className="h-72">
                  {trendValues.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-500/10 mb-4">
                        <Plus className="text-cyan-400" size={24} />
                      </div>

                      <h4 className="text-md font-semibold mb-1">
                        No Trend Data Available
                      </h4>

                      <p className="text-gray-400 text-sm max-w-xs mb-4">
                        We couldn&apos;t find any historical data. Connect your
                        device or wait for data collection.
                      </p>

                      <Button className="bg-cyan-500 hover:bg-cyan-600 text-black flex items-center gap-2">
                        <Plus size={14} />
                        Add Device
                      </Button>
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trendValues}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                        <XAxis dataKey="time" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="ph"
                          stroke="#22d3ee"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="tds"
                          stroke="#38bdf8"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </motion.div> */}

              {/* BAR CHART */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="mb-4 text-lg font-semibold">
                  Current Parameter Snapshot
                </h3>

                {currentValues.length === 0 ? (
                  <div className="h-72 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-500/10 mb-4">
                      <Plus className="text-cyan-400" size={24} />
                    </div>

                    <h4 className="text-md font-semibold mb-1">
                      No Data Available
                    </h4>

                    <p className="text-gray-400 text-sm max-w-xs mb-4">
                      Connect a device to visualize water parameters in
                      real-time.
                    </p>

                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-black flex items-center gap-2">
                      <Plus size={14} />
                      Add Device
                    </Button>
                  </div>
                ) : (
                  // CHART
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={currentValues}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#22d3ee" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
