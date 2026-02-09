'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { type LucideIcon } from 'lucide-react'

interface ParameterCardProps {
  icon: LucideIcon
  name: string
  description: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export function ParameterCard({
  icon: Icon,
  name,
  description,
  checked = false,
  onCheckedChange,
}: ParameterCardProps) {
  return (
    <div
      className={`glassmorphism rounded-lg p-6 cursor-pointer transition hover:border-primary/50 ${
        checked ? 'border-primary/50 bg-primary/5' : ''
      }`}
      onClick={() => onCheckedChange?.(!checked)}
    >
      <div className="flex items-start gap-4">
        <Checkbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="mt-1"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="text-primary" size={20} />
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          </div>
          <p className="text-foreground/60 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
