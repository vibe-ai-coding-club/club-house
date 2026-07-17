import { EventStatus } from '@/types'
import { eventStatusMeta } from '@/data/events'
import { cn } from '@/lib/utils'

const toneClasses: Record<'brand' | 'info' | 'muted', string> = {
  brand: 'bg-brand-primary/20 text-[#3f6212] border-brand-primary/50',
  info: 'bg-info/12 text-[#1d4ed8] border-info/30',
  muted: 'bg-black/[0.06] text-muted-foreground border-black/10',
}

interface EventStatusBadgeProps {
  status: EventStatus
  className?: string
}

export function EventStatusBadge({ status, className }: EventStatusBadgeProps) {
  const meta = eventStatusMeta[status]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        toneClasses[meta.tone],
        className
      )}
    >
      {meta.label}
    </span>
  )
}
