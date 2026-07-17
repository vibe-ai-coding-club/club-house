'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'

/**
 * Squarespace "Blueprint AI" 프로모 섹션 형태를 차용한 운영진 상시 모집 패널.
 * 큰 헤드라인, 보조 문구, 두 개의 CTA 버튼을 세로 중앙 정렬로 배치한다.
 */
export function RecruitPanel() {
  const reduce = useReducedMotion()

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
      <motion.h2
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: reduce ? 0.2 : 0.5, ease: 'easeOut' }}
        className="max-w-2xl text-3xl leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        하고 싶은 게 있다면,
        <br />
        <strong>같이 만들어가요</strong>
      </motion.h2>

      <motion.p
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: reduce ? 0.2 : 0.5, delay: 0.05, ease: 'easeOut' }}
        className="max-w-xl text-sm leading-relaxed text-white/60"
      >
        AI로 재밌는 걸 기획하고, 커뮤니티를 함께 키워갈 운영진을 찾고 있어요.
        <br className="hidden sm:block" />
        분야는 상관없어요. 아이디어를 직접 실행에 옮겨볼 사람이면 충분해요.
      </motion.p>

      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: reduce ? 0.2 : 0.5, delay: 0.1, ease: 'easeOut' }}
        className="flex flex-col items-center gap-3 sm:flex-row"
      >
        <Button asChild variant="ctaInverted" size="cta">
          <a href="mailto:vibecodingclub.team@gmail.com?subject=운영진 지원">
            운영진 지원하기
          </a>
        </Button>
        <Button asChild variant="ctaOutline" size="cta">
          <a
            href="https://discord.gg/JNZYWnSuK8"
            target="_blank"
            rel="noopener noreferrer"
          >
            커뮤니티 둘러보기
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
