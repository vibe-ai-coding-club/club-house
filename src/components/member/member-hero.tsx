'use client'

import { motion } from 'framer-motion'

export function MemberHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground lg:text-5xl">
        함께하는 사람들이에요
      </h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        바이브 코딩 클럽 멤버를 소개해요.
      </p>
    </motion.div>
  )
}
