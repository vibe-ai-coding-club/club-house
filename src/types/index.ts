// 공통 타입 정의
export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
    instagram: string
  }
}

export type EventStatus = 'recruiting' | 'ongoing' | 'upcoming' | 'coming-soon'

export interface EventInfoItem {
  label: string
  value: string
}

export interface EventSection {
  heading: string
  body: string[]
}

export interface EventCTA {
  label: string
  href: string
  external?: boolean
}

export interface EventGalleryImage {
  src: string
  alt: string
}

export interface ClubEvent {
  slug: string
  title: string
  // 카드에 노출되는 한 줄 설명
  tagline: string
  // 주기 또는 시기 (예: '연 1회 · 만우절', '월 1회')
  cadence: string
  status: EventStatus
  // 별도 외부 사이트가 있는 행사는 내부 상세 페이지 대신 이 URL로 연결
  externalUrl?: string
  // 브랜드 기반 플레이스홀더 아이콘 (이미지 대체)
  icon: string
  // 행사별 포인트(BI) 컬러. 클럽 라임 액센트와 역할이 분리된 개별 행사 색상
  accent: string
  // 상세 히어로 소개 문단
  summary: string
  // 상세 페이지 핵심 정보 리스트
  info: EventInfoItem[]
  // 상세 페이지 본문 섹션
  sections: EventSection[]
  cta?: EventCTA
  // 추후 추가될 행사 배너 이미지 경로 (현재는 미사용)
  heroImage?: string
  // 상세 왼쪽 히어로 영역에서 넘기는 카드뉴스/갤러리
  gallery?: EventGalleryImage[]
  // 캐러셀 카드 배경으로 사용할 이미지 경로 (없으면 accent 그라데이션)
  cardImage?: string
}

export type { Member } from './member'
export type { Project, ProjectLink } from './project'
export type { Blog, BlogInput } from './blog'
export type { Notice } from './notice'
