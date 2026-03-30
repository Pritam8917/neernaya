"use client";

import { Navbar } from "@/components/layout/navbar";
import { UserSidebar } from "@/components/layout/user-sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { LoaderOne } from "@/components/ui/loader";
import { useRef } from "react";
import Link from "next/link";
import {
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
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
type DeviceData = {
  name: string;
  value: number;
};

type Rule = {
  max: number;
  label: string;
  color: string;
};

export default function Devices() {
  const router = useRouter();
  const units: Record<string, string> = {
    pH: "",
    Turbidity: "NTU",
    TDS: "ppm",
    Hardness: "mg/L",
    Temperature: "°C",
    "Electrical Conductivity": "µS/cm",
    DO: "mg/L",
    Salinity: "ppt",
  };

  const getStatus = (name: string, value: number) => {
    const rules: Record<string, Rule[]> = {
      Turbidity: [
        { max: 10, label: "Too Low", color: "bg-black" },
        { max: 30, label: "Not Good", color: "bg-orange-500" },
        { max: 80, label: "Good", color: "bg-green-500" },
        { max: 150, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],

      Temperature: [
        { max: 12, label: "Too Low", color: "bg-black" },
        { max: 24, label: "Not Good", color: "bg-orange-500" },
        { max: 32, label: "Good", color: "bg-green-500" },
        { max: 35, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],

      TDS: [
        { max: 50, label: "Not Good", color: "bg-orange-500" },
        { max: 400, label: "Good", color: "bg-green-500" },
        { max: 1000, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],

      Hardness: [
        { max: 10, label: "Too Low", color: "bg-black" },
        { max: 40, label: "Not Good", color: "bg-orange-500" },
        { max: 150, label: "Good", color: "bg-green-500" },
        { max: 300, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],

      Salinity: [
        { max: 0.2, label: "Not Good", color: "bg-orange-500" },
        { max: 5, label: "Good", color: "bg-green-500" },
        { max: 10, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],

      "Electrical Conductivity": [
        { max: 50, label: "Too Low", color: "bg-black" },
        { max: 150, label: "Not Good", color: "bg-orange-500" },
        { max: 1500, label: "Good", color: "bg-green-500" },
        { max: 3000, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],

      DO: [
        { max: 1, label: "Too Low", color: "bg-black" },
        { max: 4, label: "Not Good", color: "bg-orange-500" },
        { max: 8, label: "Good", color: "bg-green-500" },
        { max: 14, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],

      pH: [
        { max: 4, label: "Too Low", color: "bg-black" },
        { max: 6.4, label: "Not Good", color: "bg-orange-500" },
        { max: 8.5, label: "Good", color: "bg-green-500" },
        { max: 10, label: "Acceptable", color: "bg-yellow-400" },
        { max: Infinity, label: "Too High", color: "bg-red-500" },
      ],
    };

    const paramRules = rules[name];

    if (!paramRules) {
      return { label: "Unknown", color: "bg-gray-500" };
    }

    const status = paramRules.find((r) => value <= r.max) ?? {
      label: "Unknown",
      color: "bg-gray-500",
    };

    return status;
  };

  const [currentValues, setCurrentValues] = useState<DeviceData[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("prevDeviceData");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const [lastUpdated, setLastUpdated] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lastUpdated");
    }
    return null;
  });

  const [loading, setLoading] = useState(false);
  const prevDataRef = useRef<DeviceData[]>(currentValues);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const fetchdeviceData = async () => {
      try {
        const api = process.env.NEXT_PUBLIC_API_URL!;
        if (isFirstLoad.current) {
          setLoading(true);
        }

        const res = await axios.get(`${api}/telemetry/latest?device_id=1`);
        const value = res.data;
        console.log("API DATA:", value);

        const newData = [
          { name: "pH", value: value.ph ?? 0 },
          { name: "Turbidity", value: value.turb ?? 0 },
          { name: "TDS", value: value.tds ?? 0 },
          { name: "Hardness", value: value.hardness ?? 0 },
          { name: "Temperature", value: value.temp ?? 0 },
          { name: "Electrical Conductivity", value: value.ec ?? 0 },
          { name: "DO", value: value.do ?? 0 },
          { name: "Salinity", value: value.salinity ?? 0 },
        ];
        const isSame =
          JSON.stringify(prevDataRef.current) === JSON.stringify(newData);

        const now = new Date().toLocaleString();

        if (isFirstLoad.current) {
          setCurrentValues(newData);
          isFirstLoad.current = false;
        }

        if (!isSame) {
          setCurrentValues(newData);
          setLastUpdated(now);
          prevDataRef.current = newData;

          localStorage.setItem("prevDeviceData", JSON.stringify(newData));
          localStorage.setItem("lastUpdated", now);
        }
        setLoading(false);
        isFirstLoad.current = false;
      } catch (error) {
        console.error("Error fetching device data:", error);
        setLoading(false);
      }
    };

    fetchdeviceData();
    const interval = setInterval(fetchdeviceData, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]"> 
        <Navbar />
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <LoaderOne />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="hidden lg:block fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="lg:hidden fixed top-2 rounded-full left-2 right-3 w- z-50 bg-black border border-white/15 px-7 py-4 flex items-center justify-between ">
        <Link href="/" className="text-xl font-bold" style={{ fontFamily: "CinzelCustom" }}>NEERNAYA</Link>

        {/* This button will trigger your existing sidebar */}
        <button
          onClick={() => {
            const event = new CustomEvent("toggleSidebar");
            window.dispatchEvent(event);
          }}
        >
          <Menu className="hover:scale-110 transition cursor-pointer" size={24} />
        </button>
      </div>

      <div className="min-h-screen bg-[#0A0A0A] text-white pt-22 ">
        <div className="relative">
          <UserSidebar />

          <div className="px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:ml-72">
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4"
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
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>

                {/* Text */}
                {lastUpdated ? (
                  <span>
                    Last Updated:{" "}
                    <span className="text-cyan-400 font-medium">
                      {lastUpdated}
                    </span>
                  </span>
                ) : (
                  "Fetching..."
                )}
              </div>
            </motion.div>

            {/* KPI CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
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

                  <Button
                    className="bg-cyan-500 hover:bg-cyan-600 text-black flex items-center gap-2"
                    onClick={() => router.push("/user/apply")}
                  >
                    <Plus size={14} />
                    Add Device
                  </Button>
                </div>
              ) : (
                currentValues.map((item, i) => {
                  const status = getStatus(item.name, item.value);
                  const unit = units[item.name] || "";

                  return (
                    <motion.div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 hover:border-cyan-400/30 transition"
                    >
                      {/* Parameter Name */}
                      <p className="text-sm text-gray-400">{item.name}</p>

                      {/* Value + Unit */}
                      <p className="text-2xl font-semibold text-cyan-300 flex items-end gap-1">
                        {item.value ?? "--"}
                        <span className="text-xs text-gray-500">{unit}</span>
                      </p>

                      {/* Status Indicator */}
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${status.color}`}
                        ></span>
                        <span className="text-xs text-gray-400">
                          {status.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
            {/* </motion.div> */}

            {/* CHART SECTION */}
            <div>
              {/* BAR CHART */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hidden lg:block"
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

                    <Button
                      className="bg-cyan-500 hover:bg-cyan-600 text-black flex items-center gap-2"
                      onClick={() => router.push("/user/apply")}
                    >
                      <Plus size={14} />
                      Add Device
                    </Button>
                  </div>
                ) : (
                  // CHART
                  <div className="h-64 sm:h-72 md:h-80">
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
      </div>
    </main>
  );
}
