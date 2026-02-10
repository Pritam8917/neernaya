'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Smartphone,
  FileText,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface UserSidebarProps {
  userName?: string
}

export function UserSidebar({ userName = 'Rahul Sharma' }: UserSidebarProps) {

  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname.startsWith(path)

  const menuItems = [
    { icon: FileText, label: 'Apply for Device', href: '/user/apply' },
    { icon: Smartphone, label: 'Monitoring Devices', href: '/user/devices' },
  ]

  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          md:hidden fixed top-20 left-4 z-50
          p-2 rounded-lg
          bg-black/70 backdrop-blur-xl
          border border-cyan-500/20
          text-cyan-300
        "
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:relative
          top-25 md:top-0
          left-0
          h-[calc(90vh-80px)] md:h-screen
          w-72
          bg-[#0A0A0A]
          backdrop-blur-2xl
          transition-transform duration-300
          z-40 md:z-0 pt-13 px-3
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >

        <div className="flex flex-col h-[calc(90vh-5rem)]  ">

          {/* USER BLOCK */}
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div className="
                w-11 h-11 rounded-full
                bg-linear-to-br from-cyan-400 to-blue-500
                flex items-center justify-center
                text-black font-bold shadow-lg
              ">
                {userName.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="font-semibold text-white text-sm">
                  {userName}
                </p>
                <p className="text-cyan-400/70 text-xs">
                  rahul@gmail.com
                </p>
              </div>

            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 px-4 py-6 space-y-2">

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
                      ${active ? 'text-cyan-300' : 'text-slate-500 group-hover:text-cyan-300'}
                    `}
                  />

                  <span className="text-sm font-medium">
                    {item.label}
                  </span>

                </Link>
              )
            })}

          </nav>
          {/* LOGOUT */}
          <div className="pt-5 pb-4 border-t border-white/10">

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

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden top-20"
          onClick={() => setIsOpen(false)}
        />
      )}

    </>
  )
}
