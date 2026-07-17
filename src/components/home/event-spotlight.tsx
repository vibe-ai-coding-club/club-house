'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from 'framer-motion'
import { events } from '@/data/events'
import { EventStatusBadge } from '@/components/events/event-status-badge'

export function EventSpotlight() {
  const reduce = useReducedMotion()
  // direction: 1 = 다음, -1 = 이전 (슬라이드 방향)
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])

  const count = events.length
  const active = events[index]
  const isExternal = Boolean(active.externalUrl)
  const href = active.externalUrl ?? `/${active.slug}`

  const paginate = (dir: number) => {
    setIndex(([prev]) => [(prev + dir + count) % count, dir])
  }
  const goTo = (next: number) => {
    setIndex(([prev]) => [next, next > prev ? 1 : -1])
  }

  const slideOffset = reduce ? 0 : 32
  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * slideOffset }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -slideOffset }),
  }

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x < -60) paginate(1)
    else if (info.offset.x > 60) paginate(-1)
  }

  const accentStyle = { '--event-accent': active.accent } as React.CSSProperties

  return (
    <section>
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-10 text-center"
      >
        <h2 className="mb-3 font-bitcount text-2xl font-bold text-foreground">Events</h2>
        <p className="text-muted-foreground">
          Vibe Coding Club의 네 가지 행사를 만나보세요
        </p>
      </motion.div>

      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-white/[0.03]"
        style={accentStyle}
      >
        {/* 상단 행사 BI 컬러 바 */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 z-10 h-1"
          style={{ backgroundColor: 'var(--event-accent)' }}
        />

        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={active.slug}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduce ? 0.2 : 0.35, ease: 'easeOut' }}
            drag={reduce ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            className="grid gap-6 p-8 sm:grid-cols-[auto_1fr] sm:items-center sm:p-12"
          >
            <div
              className="flex h-24 w-24 items-center justify-center rounded-3xl text-5xl"
              style={{
                backgroundColor:
                  'color-mix(in srgb, var(--event-accent) 16%, transparent)',
              }}
              aria-hidden
            >
              {active.icon}
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3">
                <EventStatusBadge status={active.status} />
                <span className="text-xs text-muted-foreground">{active.cadence}</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">{active.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{active.tagline}</p>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground/90">
                {active.summary}
              </p>

              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold transition-transform hover:translate-x-0.5"
                  style={{ color: 'var(--event-accent)' }}
                >
                  사이트 바로가기 ↗
                </a>
              ) : (
                <Link
                  href={href}
                  className="inline-flex items-center text-sm font-semibold transition-transform hover:translate-x-0.5"
                  style={{ color: 'var(--event-accent)' }}
                >
                  자세히 보기 →
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 이전/다음 컨트롤 */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="이전 행사"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:border-brand-primary/50 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="다음 행사"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:border-brand-primary/50 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 인디케이터 */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {events.map((event, i) => (
          <button
            key={event.slug}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${event.title} 보기`}
            aria-current={i === index}
            className="h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{
              width: i === index ? 28 : 8,
              backgroundColor:
                i === index ? active.accent : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
