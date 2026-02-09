'use client'

import { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'

interface DeviceCardProps {
  deviceName: string
  status: 'active' | 'inactive' | 'pending'
  lastUpdated: string
  parameters: {
    name: string
    value: string | number
    unit: string
  }[]
  children?: ReactNode
}

export function DeviceCard({
  deviceName,
  status,
  lastUpdated,
  parameters,
  children,
}: DeviceCardProps) {
  const statusConfig = {
    active: { label: 'Active', variant: 'default' as const },
    inactive: { label: 'Inactive', variant: 'secondary' as const },
    pending: { label: 'Pending', variant: 'outline' as const },
  }

  const config = statusConfig[status]

  return (
    <div className="glassmorphism rounded-lg p-6 hover:border-primary/50 transition">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{deviceName}</h3>
          <p className="text-foreground/60 text-sm">Updated {lastUpdated}</p>
        </div>
        <Badge variant={config.variant}>{config.label}</Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {parameters.map((param) => (
          <div key={param.name}>
            <p className="text-foreground/60 text-xs mb-1">{param.name}</p>
            <p className="text-lg font-semibold text-foreground">
              {param.value}
              <span className="text-sm text-foreground/60 ml-1">{param.unit}</span>
            </p>
          </div>
        ))}
      </div>

      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
