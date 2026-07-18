'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { forwardRef } from 'react'
import { Button } from '@/components/ui/button'

type FloatingObject = {
  src: string
  /** 위치 + 크기 (Tailwind) */
  position: string
  /** 세로 중앙 기준 오프셋 (Tailwind margin) */
  offset?: string
  /** 기본 회전 각도 (Tailwind rotate) */
  baseRotate?: string
  /** 부유 애니메이션 y 키프레임 */
  y: number[]
  /** 살짝 기우는 회전 키프레임 */
  rotate: number[]
  /** 한 사이클 길이(초) */
  duration: number
  /** 등장 딜레이 */
  delay: number
}

const objects: FloatingObject[] = [
  {
    src: '/images/obj-blob-w.png',
    position: 'left-[-10%] w-[40%]',
    offset: '-mt-20 lg:-mt-32',
    y: [0, 22, 0],
    rotate: [0, 4, 0],
    duration: 14,
    delay: 0.1,
  },
  {
    src: '/images/obj-spiral-w.png',
    position: 'right-[-10%] w-[40%]',
    offset: 'mt-20 lg:mt-32',
    baseRotate: 'rotate-45',
    y: [0, -20, 0],
    rotate: [0, -4, 0],
    duration: 12,
    delay: 0.25,
  },
]

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  }

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex flex-col items-center gap-6 pt-2 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[165%] w-screen max-w-none -translate-x-1/2 -translate-y-1/2 overflow-hidden select-none"
      >
        {objects.map((obj) => (
          <div
            key={obj.src}
            className={`absolute top-1/2 -translate-y-1/2 ${obj.baseRotate ?? ''} ${obj.offset ?? ''} ${obj.position}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduce ? 0.3 : 0.8, delay: obj.delay, ease: 'easeOut' }}
            >
              <motion.div
                animate={reduce ? undefined : { y: obj.y, rotate: obj.rotate }}
                transition={
                  reduce
                    ? undefined
                    : {
                        duration: obj.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
              >
                <Image
                  src={obj.src}
                  alt=""
                  width={672}
                  height={672}
                  priority
                  className="h-auto w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.h1
        variants={item}
        className="max-w-3xl text-4xl leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        이제는 AI로
        <br />
        <strong>다</strong> 하는 시대니까
      </motion.h1>

      <motion.p
        variants={item}
        className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg"
      >
        AI 치트키 쓰는 사람들의 모임, 바이브코딩클럽
      </motion.p>

      <motion.div variants={item} className="flex flex-col items-center gap-3">
        <Button asChild variant="cta" size="cta">
          <a
            href="https://discord.gg/JNZYWnSuK8"
            target="_blank"
            rel="noopener noreferrer"
          >
            커뮤니티 참여하기
          </a>
        </Button>
        <span className="text-xs text-muted-foreground">
          누구나 무료로 참여할 수 있어요.
        </span>
      </motion.div>
    </motion.section>
  )
})

HeroSection.displayName = 'HeroSection'
