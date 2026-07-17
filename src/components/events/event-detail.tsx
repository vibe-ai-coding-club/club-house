'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ClubEvent } from '@/types'
import { Button } from '@/components/ui/button'

interface EventDetailProps {
  event: ClubEvent
  children?: React.ReactNode
}

export function EventDetail({ event, children }: EventDetailProps) {
  const accentStyle = { '--event-accent': event.accent } as React.CSSProperties

  const hasHero = Boolean(event.heroImage)

  const content = (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
          {event.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{event.summary}</p>
      </motion.div>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
      >
        {event.info.map((item) => (
          <div key={item.label} className="bg-background/60 p-4">
            <dt className="text-xs text-muted-foreground">{item.label}</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{item.value}</dd>
          </div>
        ))}
      </motion.dl>

      {event.cta && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`mt-8 ${hasHero ? '' : 'text-center'}`}
        >
          <Button asChild variant="cta" size="cta">
            <a
              href={event.cta.href}
              target={event.cta.external ? '_blank' : undefined}
              rel={event.cta.external ? 'noopener noreferrer' : undefined}
            >
              {event.cta.label}
            </a>
          </Button>
        </motion.div>
      )}

      <div className="mt-12 space-y-10">
        {event.sections.map((section, index) => (
          <motion.section
            key={section.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
          >
            <h2 className="mb-3 text-xl font-bold text-foreground">{section.heading}</h2>
            <div className="space-y-2">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {children}
    </div>
  )

  return (
    <div className="min-h-screen text-foreground" style={accentStyle}>
      {hasHero ? (
        <div className="w-full px-4 pt-20 pb-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-border lg:sticky lg:top-28"
            >
              <Image
                src={event.heroImage as string}
                alt={event.title}
                width={1081}
                height={1440}
                className="h-[32vh] w-full object-cover object-center lg:h-auto lg:object-contain"
              />
            </motion.div>
            {content}
          </div>
        </div>
      ) : (
        <div className="w-full px-4 pt-20 pb-16">{content}</div>
      )}
    </div>
  )
}
