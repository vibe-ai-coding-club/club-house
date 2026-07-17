'use client'

import { JoinHero } from '@/components/home/join-hero'
import { ActivitySchedule } from '@/components/home/activity-schedule'

// 스터디 상세로 이전된 기존 메인의 모집 CTA + 주차별 일정
export function StudyExtras() {
  return (
    <div className="mt-14 space-y-16">
      <JoinHero />
      <ActivitySchedule />
    </div>
  )
}
