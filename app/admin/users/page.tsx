"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Shield, Search } from "lucide-react";
import Link from "next/link";
export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      role: "user",
      status: "Active",
      joinedDate: "2024-01-15",
      devices: 2,
    },
    {
      id: 2,
      name: "Satyabrata Das",
      email: "satyabrata@example.com",
      role: "admin",
      status: "Active",
      joinedDate: "2023-11-20",
      devices: 5,
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit@example.com",
      role: "user",
      status: "Inactive",
      joinedDate: "2024-02-01",
      devices: 1,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha@example.com",
      role: "user",
      status: "Active",
      joinedDate: "2024-01-10",
      devices: 3,
    },
    {
      id: 5,
      name: "Arjun Patel",
      email: "arjun@example.com",
      role: "user",
      status: "Active",
      joinedDate: "2024-02-05",
      devices: 2,
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
              <h1 className="text-4xl font-bold">Users Management</h1>
              <p className="text-white/60 mt-2">
                Manage platform users, permissions and device access.
              </p>
            </div>

            {/* Search */}
            <div className="mb-8 relative max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                size={18}
              />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  pl-10
                  bg-white/5
                  border-white/10
                  text-white
                  placeholder:text-white/40
                  focus:border-cyan-400/50
                  focus:ring-cyan-400/20
                "
              />
            </div>

            {/* Users Table */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-white/60 text-sm">
                      <th className="text-left py-4 px-6">User</th>
                      <th className="text-left py-4 px-6">Email</th>
                      <th className="text-left py-4 px-6">Role</th>
                      <th className="text-left py-4 px-6">Status</th>
                      <th className="text-left py-4 px-6">Devices</th>
                      <th className="text-left py-4 px-6">Joined</th>
                      <th className="text-left py-4 px-6">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        {/* User */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div
                              className="
                              w-10 h-10 rounded-full
                              bg-cyan-500/20
                              flex items-center justify-center
                              text-cyan-400 font-semibold
                            "
                            >
                              {user.name.charAt(0)}
                            </div>
                            <Link
                              href={`/admin/user-devices/${user.id}`}
                              className="font-medium hover:text-cyan-400 transition"
                            >
                              {user.name}
                            </Link>
                          </div>
                        </td>

                        {/* Email */}
                        <td className="py-4 px-6 text-white/60">
                          {user.email}
                        </td>

                        {/* Role */}
                        <td className="py-4 px-6">
                          <Badge
                            className={
                              user.role === "admin"
                                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/40"
                                : "border-white/10 text-white/70"
                            }
                          >
                            {user.role}
                          </Badge>
                        </td>

                        {/* Status */}
                        <td className="py-4 px-6">
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-green-500/20 text-green-400 border border-green-400/30"
                                : "bg-red-500/20 text-red-400 border border-red-400/30"
                            }
                          >
                            {user.status}
                          </Badge>
                        </td>

                        {/* Devices */}
                        <td className="py-4 px-6 text-cyan-400 font-semibold">
                          {user.devices}
                        </td>

                        {/* Joined */}
                        <td className="py-4 px-6 text-white/60 text-sm">
                          {new Date(user.joinedDate).toLocaleDateString()}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6">
                          <div className="flex gap-2">
                            {user.role !== "admin" && (
                              <Button
                                size="sm"
                                className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 hover:bg-cyan-500/30"
                              >
                                <Shield size={16} />
                              </Button>
                            )}

                            <Button
                              size="sm"
                              className="bg-red-500/20 text-red-400 border border-red-400/40 hover:bg-red-500/30"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Empty */}
              {filteredUsers.length === 0 && (
                <div className="py-16 text-center text-white/50">
                  No users found.
                </div>
              )}
            </div>

            {/* Footer Info */}
            <div className="mt-6 text-white/60 text-sm">
              Showing{" "}
              <span className="text-cyan-400">{filteredUsers.length}</span> of{" "}
              {users.length} users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
