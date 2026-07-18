'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { EventGalleryImage } from '@/types'

interface EventHeroGalleryProps {
  images: EventGalleryImage[]
  title: string
}

export function EventHeroGallery({ images, title }: EventHeroGalleryProps) {
  const reduce = useReducedMotion()
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([])
  const count = images.length
  const current = images[index]

  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [index, reduce])

  if (count === 0 || !current) return null

  const goTo = (next: number) => {
    setIndex(([prev]) => [next, next > prev ? 1 : next < prev ? -1 : 0])
  }

  const paginate = (dir: number) => {
    goTo((index + dir + count) % count)
  }

  const slideOffset = reduce ? 0 : 40
  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * slideOffset }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -slideOffset }),
  }

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x < -60) paginate(1)
    else if (info.offset.x > 60) paginate(-1)
  }

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-background/40">
        <div className="relative aspect-[1080/1440] w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={current.src}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduce ? 0.15 : 0.3, ease: 'easeOut' }}
              drag={reduce || count < 2 ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={onDragEnd}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <Image
                src={current.src}
                alt={current.alt || `${title} ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 24rem"
                priority={index === 0}
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="이전 카드뉴스"
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="다음 카드뉴스"
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="listbox"
          aria-label="카드뉴스 목록"
        >
          {images.map((image, i) => {
            const selected = i === index
            return (
              <button
                key={image.src}
                ref={(el) => {
                  thumbRefs.current[i] = el
                }}
                type="button"
                role="option"
                aria-selected={selected}
                aria-label={`${i + 1}번째 카드뉴스`}
                onClick={() => goTo(i)}
                className={`relative h-16 w-12 shrink-0 overflow-hidden rounded-md border transition-opacity ${
                  selected
                    ? 'border-foreground opacity-100'
                    : 'border-border opacity-55 hover:opacity-80'
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
