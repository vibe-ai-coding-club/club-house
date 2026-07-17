'use client'

import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  r: number
  baseAlpha: number
  drift: number
  phase: number
  lime: boolean
}

/**
 * Discord/Join 섹션 배경 전용의 은은한 도트 필드.
 * 느린 drift로 살아 있는 느낌만 주고, prefers-reduced-motion이면 정적으로 렌더한다.
 * 콘텐츠 위에 겹치는 절대 배치용이므로 pointer-events는 없다.
 */
export function DotField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let dots: Dot[] = []
    let width = 0
    let height = 0
    let raf = 0

    const build = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const gap = 34
      const cols = Math.ceil(width / gap) + 1
      const rows = Math.ceil(height / gap) + 1
      dots = []
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * gap,
            y: j * gap,
            r: Math.random() * 1.1 + 0.6,
            baseAlpha: Math.random() * 0.12 + 0.06,
            drift: Math.random() * 6 + 3,
            phase: Math.random() * Math.PI * 2,
            lime: Math.random() < 0.14,
          })
        }
      }
    }

    const paint = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      for (const d of dots) {
        const offset = reduce ? 0 : Math.sin(t / 2200 + d.phase) * d.drift
        const alpha = reduce
          ? d.baseAlpha
          : d.baseAlpha + Math.sin(t / 1800 + d.phase) * 0.05
        ctx.beginPath()
        ctx.arc(d.x, d.y + offset, d.r, 0, Math.PI * 2)
        ctx.fillStyle = d.lime
          ? `rgba(135, 190, 20, ${Math.max(alpha, 0.06) + 0.12})`
          : `rgba(0, 0, 0, ${Math.max(alpha, 0.05) + 0.03})`
        ctx.fill()
      }
    }

    build()

    if (reduce) {
      paint(0)
    } else {
      const loop = (t: number) => {
        paint(t)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    const onResize = () => {
      build()
      if (reduce) paint(0)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
    />
  )
}
