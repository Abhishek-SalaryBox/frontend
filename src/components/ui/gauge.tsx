import { cn } from "../../lib/utils"

interface GaugeProps {
  value: number
  size?: "small" | "medium" | "large"
  showValue?: boolean
  label?: string
  color?: "green" | "amber" | "red" | "blue"
}

export function Gauge({ value, size = "medium", showValue = true, label, color = "blue" }: GaugeProps) {
  // Ensure value is between 0 and 100
  const safeValue = Math.max(0, Math.min(100, value))

  // Calculate the stroke dash offset
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (safeValue / 100) * circumference

  // Determine size
  const sizeClasses = {
    small: "w-20 h-20",
    medium: "w-28 h-28",
    large: "w-36 h-36",
  }

  // Determine color
  const colorClasses = {
    green: "text-green-500",
    amber: "text-amber-500",
    red: "text-red-500",
    blue: "text-blue-500",
  }

  const strokeColor = {
    green: "#22c55e",
    amber: "#f59e0b",
    red: "#ef4444",
    blue: "#3b82f6",
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={cn("relative", sizeClasses[size])}>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="10"
            className="dark:stroke-gray-700"
          />

          {/* Foreground circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={strokeColor[color]}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {showValue && <span className={cn("text-2xl font-bold", colorClasses[color])}>{Math.round(safeValue)}%</span>}
          {label && <span className={cn("text-sm font-medium", colorClasses[color])}>{label}</span>}
        </div>
      </div>
    </div>
  )
}
