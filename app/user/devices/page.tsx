'use client'

import { Navbar } from '@/components/layout/navbar'
import { UserSidebar } from '@/components/layout/user-sidebar'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

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
} from 'recharts'

export default function Devices() {

  // KPI DATA
  const currentValues = [
    { name: 'pH', value: 7.2 },
    { name: 'Turbidity', value: 1.1 },
    { name: 'TDS', value: 320 },
    { name: 'Hardness', value: 180 },
    { name: 'Chlorine', value: 0.3 },
    { name: 'Ammonia', value: 0.02 },
    { name: 'DO', value: 6.4 },
    { name: 'Salinity', value: 0.6 },
  ]

  // TIME SERIES DATA
  const trendData = [
    { time: '10:00', ph: 7.1, tds: 300 },
    { time: '10:05', ph: 7.2, tds: 310 },
    { time: '10:10', ph: 7.3, tds: 315 },
    { time: '10:15', ph: 7.2, tds: 320 },
    { time: '10:20', ph: 7.4, tds: 325 },
    { time: '10:25', ph: 7.2, tds: 320 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <main className="pt-20">

        <div className="flex">

          <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-black z-40">
            <UserSidebar />
          </div>

          <div className="flex-1 ml-86 pr-8 py-12">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Water Monitoring Dashboard
                </h1>
                <p className="text-gray-400">
                  Real-time IoT water quality analytics
                </p>
              </div>

              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
                <Plus size={18} className="mr-2" />
                Add Device
              </Button>
            </div>

            {/* KPI CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {currentValues.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <p className="text-sm text-gray-400">{item.name}</p>
                  <p className="text-2xl font-semibold text-cyan-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CHART SECTION */}
            <div className="grid lg:grid-cols-2 gap-8">

              {/* LINE CHART */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Water Quality Trend
                </h3>

                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
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
                </div>
              </div>

              {/* BAR CHART */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Current Parameter Snapshot
                </h3>

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
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  )
}
