'use client'

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'

interface FadeInProps extends HTMLMotionProps<'div'> {
  /** 등장 지연 (초) */
  delay?: number
  /** fade-up 이동 거리 (px). reduced-motion이면 무시됨 */
  y?: number
  /** 마운트 시 바로 재생할지, 뷰포트 진입 시 재생할지 */
  once?: boolean
}

/**
 * 스크롤 진입 시 opacity + 살짝 위로 올라오는 공통 reveal 래퍼.
 * prefers-reduced-motion 환경에서는 이동/지연 없이 opacity만 적용한다.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 20,
  once = true,
  transition,
  ...props
}: FadeInProps) {
  const reduce = useReducedMotion()

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y }
  const shown = { opacity: 1, y: 0 }

  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once, amount: 0.3 }}
      transition={
        transition ?? {
          duration: reduce ? 0.2 : 0.5,
          delay: reduce ? 0 : delay,
          ease: 'easeOut',
        }
      }
      {...props}
    >
      {children}
    </motion.div>
  )
}
