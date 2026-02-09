import { LucideIcon } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  description?: string
}

export function StatCard({
  icon: Icon,
  label,
  value,
  description
}: StatCardProps) {
  return (
    <div className="
      bg-white/5 backdrop-blur-xl
      border border-white/10
      rounded-2xl p-6
      shadow-xl
      hover:border-cyan-400/30
      transition
    ">

      {/* Icon */}
      <div className="mb-4">
        <Icon className="text-cyan-400" size={28} />
      </div>

      {/* Label */}
      <p className="text-white/60 text-sm mb-1">
        {label}
      </p>

      {/* VALUE (CYAN + Glow) */}
      <p className="
        text-3xl font-bold
        text-cyan-400
        drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]
      ">
        {value}
      </p>

      {/* Description */}
      {description && (
        <p className="text-white/50 text-sm mt-1">
          {description}
        </p>
      )}

    </div>
  )
}
