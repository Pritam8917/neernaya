'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { AdminSidebar } from '@/components/layout/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, X } from 'lucide-react'

export default function AdminApplications() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      userName: 'Rahul Sharma',
      email: 'rahul@example.com',
      parameters: ['PH', 'Turbidity', 'Chlorine'],
      dateApplied: '2024-02-08',
      status: 'Pending',
    },
    {
      id: 2,
      userName: 'Ajay Kumar',
      email: 'ajay@example.com',
      parameters: ['TDS', 'Hardness'],
      dateApplied: '2024-02-07',
      status: 'Pending',
    },
    {
      id: 3,
      userName: 'Birendra Singh',
      email: 'birendra@example.com',
      parameters: ['Ammonia', 'Turbidity', 'DO', 'Hardness', 'PH'],
      dateApplied: '2024-02-06',
      status: 'Approved',
    },
    {
      id: 4,
      userName: 'Ramkrishna Das',
      email: 'ramkrishna@example.com',
      parameters: ['Hardness', 'PH', 'TDS', 'Turbidity'],
      dateApplied: '2024-02-05',
      status: 'Approved',
    },
    {
      id: 5,
      userName: 'Harshita Verma',
      email: 'harshita@example.com',
      parameters: ['Chlorine', 'Salinity', 'Ammonia'],
      dateApplied: '2024-02-04',
      status: 'Rejected',
    },
  ])

  const handleApprove = (id: number) => {
    setApplications(applications.map((app) =>
      app.id === id ? { ...app, status: 'Approved' } : app
    ))
  }

  const handleReject = (id: number) => {
    setApplications(applications.map((app) =>
      app.id === id ? { ...app, status: 'Rejected' } : app
    ))
  }

  const pendingCount = applications.filter((app) => app.status === 'Pending').length

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <div className="flex pt-20">

        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-black z-40">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-70 pr-4">
          <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold">Applications</h1>
              <p className="text-white/60 mt-2">
                <span className="text-cyan-400 font-semibold">{pendingCount}</span> pending application
                {pendingCount !== 1 ? 's' : ''} awaiting approval
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-3 mb-8">
              {['All', 'Pending', 'Approved', 'Rejected'].map((filter) => (
                <Button
                  key={filter}
                  variant="outline"
                  className="border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/40"
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl">

              <div className="overflow-x-auto">
                <table className="w-full">

                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-white/60 text-sm">
                      <th className="text-left py-4 px-6">User</th>
                      <th className="text-left py-4 px-6">Parameters</th>
                      <th className="text-left py-4 px-6">Date</th>
                      <th className="text-left py-4 px-6">Status</th>
                      <th className="text-left py-4 px-6">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {applications.map((app) => (
                      <tr
                        key={app.id}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="py-4 px-6">
                          <p className="font-medium">{app.userName}</p>
                          <p className="text-white/60 text-sm">{app.email}</p>
                        </td>

                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-2">
                            {app.parameters.map((param, idx) => (
                              <Badge
                                key={idx}
                                className="border-cyan-400/30 text-cyan-300 bg-cyan-500/10 text-xs"
                              >
                                {param}
                              </Badge>
                            ))}
                          </div>
                        </td>

                        <td className="py-4 px-6 text-white/60 text-sm">
                          {new Date(app.dateApplied).toLocaleDateString()}
                        </td>

                        {/* Status */}
                        <td className="py-4 px-6">
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

                        {/* Actions */}
                        <td className="py-4 px-6">
                          {app.status === 'Pending' ? (
                            <div className="flex gap-2">

                              <Button
                                size="sm"
                                className="bg-green-500/20 text-green-400 border border-green-400/40 hover:bg-green-500/30"
                                onClick={() => handleApprove(app.id)}
                              >
                                <Check size={16} className="mr-1" />
                                Approve
                              </Button>

                              <Button
                                size="sm"
                                className="bg-red-500/20 text-red-400 border border-red-400/40 hover:bg-red-500/30"
                                onClick={() => handleReject(app.id)}
                              >
                                <X size={16} className="mr-1" />
                                Reject
                              </Button>

                            </div>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              disabled
                              className="border-white/10 text-white/40"
                            >
                              {app.status}
                            </Button>
                          )}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Applications', value: applications.length },
                { label: 'Pending', value: applications.filter(a => a.status === 'Pending').length },
                { label: 'Approved', value: applications.filter(a => a.status === 'Approved').length },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
                >
                  <p className="text-white/60 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] mt-2">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
