'use client'

import { Navbar } from '@/components/layout/navbar'
import { AdminSidebar } from '@/components/layout/admin-sidebar'
import { StatCard } from '@/components/cards/stat-card'
import { Users, FileText, Smartphone, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <div className="flex pt-20">

        {/* Sidebar Fixed */}
        <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-black z-40">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-70 pr-4">
          <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight">
                Admin Dashboard
              </h1>
              <p className="text-white/60 mt-2">
                Monitor platform activity, device usage and user onboarding status.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <StatCard
                icon={Users}
                label="Total Users"
                value={1250}
                description="Registered accounts"
              />

              <StatCard
                icon={FileText}
                label="Pending Requests"
                value={23}
                description="Awaiting approval"
              />

              <StatCard
                icon={Smartphone}
                label="Active Devices"
                value={892}
                description="Currently online"
              />

              <StatCard
                icon={TrendingUp}
                label="Monthly Revenue"
                value="₹45.2K"
                description="Last 30 days"
              />

            </div>

            {/* Recent Applications Table */}
            <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

              <h2 className="text-xl font-semibold mb-6">
                Recent Device Applications
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">

                  <thead>
                    <tr className="border-b border-white/10 text-white/60 text-sm">
                      <th className="text-left py-3 px-4">User</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Parameters</th>
                      <th className="text-left py-3 px-4">Time</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      { name: 'Rahul Sharma', email: 'rahul@example.com', params: '5', date: '2 hours ago', status: 'Pending' },
                      { name: 'Ajay Kumar', email: 'ajay@example.com', params: '3', date: '4 hours ago', status: 'Approved' },
                      { name: 'Birendra Singh', email: 'birendra@example.com', params: '4', date: '1 day ago', status: 'Pending' },
                      { name: 'Ramkrishna Das', email: 'ramkrishna@example.com', params: '4', date: '2 days ago', status: 'Approved' },
                    ].map((app, idx) => (

                      <tr
                        key={idx}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="py-4 px-4 font-medium">{app.name}</td>
                        <td className="py-4 px-4 text-white/60">{app.email}</td>
                        <td className="py-4 px-4">{app.params}</td>
                        <td className="py-4 px-4 text-white/60">{app.date}</td>

                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              app.status === 'Pending'
                                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                                : app.status === 'Approved'
                                  ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                                  : 'bg-red-500/20 text-red-400 border border-red-400/30'
                            }`}
                          >
                            {app.status}
                          </span>
                        </td>
                      </tr>

                    ))}
                  </tbody>

                </table>
              </div>

            </div>

            {/* Bottom Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* System Status */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-semibold mb-4">
                  System Health
                </h3>

                <div className="space-y-3">
                  {[
                    'API Server',
                    'Database',
                    'Cache Server',
                    'Email Service'
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-white/60">{item}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-green-400 text-sm font-medium">
                          Operational
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-semibold mb-4">
                  Activity Summary
                </h3>

                <div className="space-y-3">
                  {[
                    { label: 'New Users (24h)', value: '42' },
                    { label: 'Devices Approved', value: '28' },
                    { label: 'Devices Connected', value: '156' },
                    { label: 'Support Tickets', value: '5' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-white/60">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
