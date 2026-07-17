'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { mainNav } from '@/config/navigation'
import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'

export function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (!mounted) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border bg-white"
    >
      <div className="flex px-4 items-center justify-between h-16">
        <Link href="/" className="hover:text-muted-foreground transition-colors">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {mainNav
            .filter((item) => item.title !== 'Join')
            .map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    'hover:text-foreground',
                    isActive(item.href)
                      ? 'text-foreground font-semibold'
                      : 'text-foreground/70 font-medium'
                  )}
                >
                  {item.title}
                </Link>
              )
            )}
          <Button asChild variant="cta" size="cta">
            <a
              href="https://discord.gg/JNZYWnSuK8"
              target="_blank"
              rel="noopener noreferrer"
            >
              커뮤니티 참여하기
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-foreground/70 hover:text-foreground transition-colors"
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-border bg-background"
        >
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {mainNav
              .filter((item) => item.title !== 'Join')
              .map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      'text-sm font-medium transition-colors py-2',
                      'hover:text-foreground',
                      isActive(item.href)
                        ? 'text-foreground font-semibold'
                        : 'text-foreground/70 font-medium'
                    )}
                  >
                    {item.title}
                  </Link>
                )
              )}
            <Button asChild variant="cta" size="cta" className="w-full">
              <a
                href="https://discord.gg/JNZYWnSuK8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                커뮤니티 참여하기
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
