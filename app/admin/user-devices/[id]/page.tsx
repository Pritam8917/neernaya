'use client'

import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { AdminSidebar } from '@/components/layout/admin-sidebar'
import { DeviceCard } from '@/components/cards/device-card'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function AdminUserDevices({ params }: { params: { id: string } }) {

  const user = {
    id: params.id,
    name: 'John Doe',
    email: 'john@example.com',
  }

  const devices = [
    {
      id: 1,
      name: 'Smart Garden Monitor',
      status: 'active' as const,
      lastUpdated: '2 minutes ago',
      parameters: [
        { name: 'Temperature', value: 24, unit: '°C' },
        { name: 'Humidity', value: 65, unit: '%' },
        { name: 'Soil Quality', value: 'Good', unit: '' },
        { name: 'Water Level', value: 75, unit: '%' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <div className="flex pt-20">

        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-black z-40">
          <AdminSidebar />
        </div>

        {/* Main */}
        <div className="flex-1 ml-64">
          <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Header */}
            <div className="mb-10 flex items-center gap-4">

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
                <h1 className="text-4xl font-bold">{user.name}</h1>
                <p className="text-white/60">{user.email}</p>
              </div>

            </div>

            {/* User Stats */}
            <div className="
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-6 mb-10 shadow-xl
            ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div>
                  <p className="text-white/60 text-sm mb-1">Total Devices</p>
                  <p className="text-3xl font-bold text-cyan-400">{devices.length}</p>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-1">Active Devices</p>
                  <p className="text-3xl font-bold text-cyan-400">
                    {devices.filter(d => d.status === 'active').length}
                  </p>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-1">Member Since</p>
                  <p className="text-3xl font-bold">Jan 15, 2024</p>
                </div>

              </div>
            </div>

            {/* Devices */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                User Monitoring Devices
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {devices.map(device => (
                  <DeviceCard
                    key={device.id}
                    deviceName={device.name}
                    status={device.status}
                    lastUpdated={device.lastUpdated}
                    parameters={device.parameters}
                  >
                    <div className="flex gap-2">

                      <Button
                        size="sm"
                        className="flex-1 bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 hover:bg-cyan-500/30"
                      >
                        View Details
                      </Button>

                      <Button
                        size="sm"
                        className="bg-white/5 border border-white/10 hover:border-cyan-400/40"
                      >
                        Manage
                      </Button>

                    </div>
                  </DeviceCard>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="
              mt-12 bg-white/5 backdrop-blur-xl
              border border-white/10 rounded-2xl p-6 shadow-xl
            ">
              <h3 className="text-lg font-semibold mb-6">
                Recent Device Activity
              </h3>

              <div className="space-y-4">

                {[
                  { time: '2 min ago', action: 'Device data updated', device: 'Smart Garden Monitor' },
                  { time: '5 min ago', action: 'Temperature alert triggered', device: 'Greenhouse Controller' },
                ].map((a, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-3">

                    <div>
                      <p className="text-sm">{a.action}</p>
                      <p className="text-xs text-cyan-400">{a.device}</p>
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
  )
}
