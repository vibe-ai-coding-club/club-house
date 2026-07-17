'use client'

import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { events } from '@/data/events'
import type { ClubEvent } from '@/types'
import { FadeIn } from '@/components/ui/motion'

// SSR에서 useLayoutEffect 경고를 피하기 위한 동형 훅
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

function EventBanner({
  event,
  duplicate = false,
}: {
  event: ClubEvent
  duplicate?: boolean
}) {
  const isExternal = Boolean(event.externalUrl)
  const href = event.externalUrl ?? `/${event.slug}`

  const cardClassName =
    'group relative flex h-[380px] w-[300px] shrink-0 flex-col justify-end overflow-hidden rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-[440px] sm:w-[360px]'

  const style = {
    '--event-accent': event.accent,
    background: event.cardImage
      ? `url(${event.cardImage}) center / cover no-repeat`
      : 'linear-gradient(150deg, color-mix(in srgb, var(--event-accent) 92%, #ffffff) 0%, var(--event-accent) 45%, color-mix(in srgb, var(--event-accent) 74%, #000000) 100%)',
  } as React.CSSProperties

  const inner = (
    <>
      {/* 텍스트 가독성용 하단 오버레이 */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 78%)',
        }}
      />

      <div className="relative z-10">
        <p className="mb-1 text-xs text-white/80">{event.cadence}</p>
        <h3 className="text-2xl font-bold text-white">{event.title}</h3>
        <div className="mt-2 flex items-end justify-between gap-3">
          <p className="line-clamp-2 max-w-[80%] text-sm text-white/85">
            {event.tagline}
          </p>
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#0f172a] transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </div>
      </div>
    </>
  )

  const a11y = duplicate
    ? { 'aria-hidden': true as const, tabIndex: -1 }
    : {}

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        style={style}
        aria-label={`${event.title} 사이트 바로가기`}
        {...a11y}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={cardClassName}
      style={style}
      aria-label={`${event.title} 자세히 보기`}
      {...a11y}
    >
      {inner}
    </Link>
  )
}

export function EventMarquee() {
  const n = events.length

  // 뷰포트 폭(축소/줌 포함)에 맞춰 카드 세트를 충분히 복제해 끝이 비지 않게 한다.
  const [copies, setCopies] = useState(3)
  // 인덱스는 항상 두 번째 세트 밴드 [n, 2n) 안에서 관리하고, 경계를 넘으면
  // 트랜지션 없이 한 세트만큼 스냅해 무한 루프처럼 보이게 한다.
  const [index, setIndex] = useState(n)
  const [animate, setAnimate] = useState(true)
  const [step, setStep] = useState(0)
  // 활성 카드를 뷰포트 정중앙에 두기 위한 카드 폭/뷰포트 폭
  const [cardW, setCardW] = useState(0)
  const [viewW, setViewW] = useState(0)

  const slides = Array.from({ length: n * copies }, (_, i) => events[i % n])

  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const lockRef = useRef(false)

  // 카드 한 칸(너비 + gap) 측정 + 뷰포트를 채우기 위한 복제 세트 수 계산
  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track || track.children.length < 2) return
      const a = track.children[0] as HTMLElement
      const b = track.children[1] as HTMLElement
      const cardStep = b.offsetLeft - a.offsetLeft
      if (cardStep > 0) setStep(cardStep)
      if (a.offsetWidth > 0) setCardW(a.offsetWidth)

      const vw = viewportRef.current?.clientWidth ?? window.innerWidth
      setViewW(vw)
      const visible = cardStep > 0 ? Math.ceil(vw / cardStep) + 1 : 1
      // 밴드 양끝(최대 index 2n)에서도 화면을 채우도록 여유 세트를 둔다.
      const needed = Math.max(3, Math.ceil(visible / n) + 3)
      setCopies((prev) => (prev === needed ? prev : needed))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const next = useCallback(() => {
    if (lockRef.current) return
    lockRef.current = true
    setIndex((v) => v + 1)
  }, [])

  const prev = useCallback(() => {
    if (lockRef.current) return
    lockRef.current = true
    setIndex((v) => v - 1)
  }, [])

  // 자동 재생 (한 칸씩 이동 후 대기). reduced-motion이면 멈춤
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      if (!pausedRef.current) next()
    }, 3200)
    return () => clearInterval(id)
  }, [next])

  // 밴드 [n, 2n)를 벗어나면 트랜지션 없이 한 세트만큼 스냅
  const handleTransitionEnd = () => {
    lockRef.current = false
    if (index >= 2 * n) {
      setAnimate(false)
      setIndex((v) => v - n)
    } else if (index < n) {
      setAnimate(false)
      setIndex((v) => v + n)
    }
  }

  // 스냅 후 다음 프레임에 트랜지션 재활성화
  useEffect(() => {
    if (animate) return
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true))
    )
    return () => cancelAnimationFrame(id)
  }, [animate])

  // 실제 활성 인덱스(0..n-1) — 인디케이터용
  const activeDot = ((index - n) % n + n) % n

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Vibe Coding Club 행사"
    >
      <div
        ref={viewportRef}
        className="w-full overflow-hidden py-3"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex w-max gap-5"
          style={{
            transform: `translateX(${viewW / 2 - cardW / 2 - index * step}px)`,
            transition: animate ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
          }}
        >
          {slides.map((event, i) => (
            <EventBanner
              key={`${event.slug}-${i}`}
              event={event}
              duplicate={!(i >= n && i < 2 * n)}
            />
          ))}
        </div>
      </div>

      {/* 인디케이터 + 좌우 버튼 (도트는 가운데, 버튼은 우측 하단) */}
      <div className="mt-6 flex items-center justify-between px-4">
        {/* 좌측 스페이서 (도트를 중앙에 유지) */}
        <div className="w-[88px] shrink-0" aria-hidden />

        <div className="flex items-center gap-2">
          {events.map((event, i) => (
            <span
              key={event.slug}
              aria-hidden
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeDot ? 24 : 6,
                backgroundColor: i === activeDot ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.2)',
              }}
            />
          ))}
        </div>

        <div className="flex w-[88px] shrink-0 items-center justify-end gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="이전 행사"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="다음 행사"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
