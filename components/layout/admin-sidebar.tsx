'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  FileText,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface AdminSidebarProps {
  userRole?: string
}

export function AdminSidebar({ userRole = 'admin' }: AdminSidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname.startsWith(path)

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Users', href: '/admin/users' },
    { icon: FileText, label: 'Applications', href: '/admin/applications' },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          md:hidden fixed top-16 right-4 z-50
          bg-white/5 border border-white/10
          backdrop-blur-xl
          p-2 rounded-lg
          text-white
        "
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative
          top-20 md:top-0 left-0
          h-[calc(90vh-80px)] md:h-screen
          w-64
          bg-[#0A0A0A]
          backdrop-blur-xl
          transition-transform duration-300
          z-40 md:z-0 pt-6 px-3
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >

        <div className="flex flex-col h-[calc(90vh-5rem)]">

          {/* User Block */}
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div className="
                w-11 h-11 rounded-full
                bg-linear-to-br from-cyan-400 to-blue-500
                flex items-center justify-center
                text-black font-bold shadow-lg
              ">
                A
              </div>

              <div>
                <p className="font-semibold text-white text-sm">
                  Admin User
                </p>
                <p className="text-cyan-400/70 text-xs capitalize">
                  {userRole}
                </p>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">

            {menuItems.map(item => {
              const Icon = item.icon
              const active = isActive(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    transition-all duration-300
                    ${
                      active
                        ? `
                          bg-cyan-500/10
                          border border-cyan-400/30
                          text-cyan-300
                          shadow-[0_0_15px_rgba(34,211,238,0.15)]
                        `
                        : `
                          text-slate-400
                          hover:text-cyan-300
                          hover:bg-white/5
                        `
                    }
                  `}
                >

                  <Icon
                    size={20}
                    className={`
                      transition
                      ${active
                        ? 'text-cyan-300'
                        : 'text-slate-500 group-hover:text-cyan-300'}
                    `}
                  />

                  <span className="text-sm font-medium">
                    {item.label}
                  </span>

                </Link>
              )
            })}

          </nav>

          {/* Logout */}
          <div className="p-5 border-t border-white/10">

            <Button
              variant="outline"
              className="
                w-full justify-start gap-3
                border-white/10
                bg-white/5
                hover:bg-red-500/10
                hover:border-red-400/30
                hover:text-red-400
                text-slate-300 cursor-pointer
              "
              onClick={() => setIsOpen(false)}
            >
              <LogOut size={18} />
              Logout
            </Button>

          </div>

        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden z-30 top-16 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

    </>
  )
}
