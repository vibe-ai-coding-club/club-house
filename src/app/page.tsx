'use client'

import { HeroSection } from '@/components/home/hero-section'
import { EventMarquee } from '@/components/home/event-marquee'
import { RecruitPanel } from '@/components/home/recruit-panel'
import { ContactSection } from '@/components/home/contact-section'
import { SponsorSection } from '@/components/home/sponsor-section'

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="w-full px-4 pt-20 pb-16">
        <HeroSection />
      </div>

      {/* 행사 롤링 배너 (full-bleed) */}
      <div className="pb-20">
        <EventMarquee />
      </div>

      {/* 우리를 만나요 (흰 배경) */}
      <div className="w-full px-4 pb-24">
        <ContactSection />
      </div>

      {/* 운영진 상시 모집 (흰 배경, Meet Us와 같은 커뮤니티 존) */}
      <div className="w-full px-4 pt-16 pb-28">
        <RecruitPanel />
      </div>

      {/* 후원 문의 (검정 클로징) */}
      <div className="bg-black text-white">
        <div className="w-full px-4 py-24">
          <SponsorSection />
        </div>
      </div>
    </div>
  )
}
