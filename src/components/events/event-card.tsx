'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ClubEvent } from '@/types'
import { EventStatusBadge } from './event-status-badge'

interface EventCardProps {
  event: ClubEvent
  index?: number
}

const cardClassName =
  'group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-muted p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

export function EventCard({ event, index = 0 }: EventCardProps) {
  const isExternal = Boolean(event.externalUrl)

  const cardContent = (
    <>
      {/* 행사 BI 컬러 좌측 바 */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 opacity-70 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: 'var(--event-accent)' }}
      />

      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--event-accent) 16%, transparent)',
          }}
          aria-hidden
        >
          {event.icon}
        </span>
        <EventStatusBadge status={event.status} />
      </div>

      <h3 className="mb-2 text-xl font-bold text-foreground">{event.title}</h3>
      <p className="mb-6 text-sm text-muted-foreground">{event.tagline}</p>

      <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted-foreground">{event.cadence}</span>
        <span
          className="text-sm font-medium transition-transform group-hover:translate-x-0.5"
          style={{ color: 'var(--event-accent)' }}
        >
          {isExternal ? '사이트 바로가기 ↗' : '자세히 보기 →'}
        </span>
      </div>
    </>
  )

  const accentStyle = { '--event-accent': event.accent } as React.CSSProperties

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {isExternal ? (
        <a
          href={event.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
          style={accentStyle}
        >
          {cardContent}
        </a>
      ) : (
        <Link href={`/${event.slug}`} className={cardClassName} style={accentStyle}>
          {cardContent}
        </Link>
      )}
    </motion.div>
  )
}
