'use client'

import { motion } from 'framer-motion'
import { events } from '@/data/events'
import { EventCard } from '@/components/events/event-card'

export function EventHub() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-center"
      >
        <h2 className="mb-3 text-2xl font-bold text-foreground font-bitcount">Events</h2>
        <p className="text-muted-foreground">
          Vibe Coding Club의 네 가지 행사를 만나보세요
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {events.map((event, index) => (
          <EventCard key={event.slug} event={event} index={index} />
        ))}
      </div>
    </section>
  )
}
