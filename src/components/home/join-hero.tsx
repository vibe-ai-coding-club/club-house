'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function JoinHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <div className="space-y-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            2026 상반기 클럽원 모집 (~1/13)
          </p>
          <p className="text-muted-foreground leading-relaxed">
            빠르게 변하는 AI 시대, 혼자보다는 함께일 때 더 멀리, 그리고 즐겁게 나아갈 수 있습니다.
            <br />
            지금 <strong className="text-foreground">Vibe Coding Club</strong>의 새로운 여정에
            합류하세요.
          </p>
        </div>
        <div className="mt-8">
          <Button variant="cta" size="cta" disabled>
            26년 멤버 신청하기
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
