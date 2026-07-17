import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { eventSlugs, getEventBySlug } from '@/data/events'
import { siteConfig } from '@/config/site'
import { EventDetail } from '@/components/events/event-detail'
import { StudyExtras } from '@/components/events/study-extras'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return eventSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return {}
  }

  return {
    title: event.title,
    description: event.tagline,
    openGraph: {
      title: `${event.title} | ${siteConfig.name}`,
      description: event.tagline,
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  // 외부 사이트로 연결되는 행사는 내부 상세 페이지를 제공하지 않는다
  if (!event || event.externalUrl) {
    notFound()
  }

  return (
    <EventDetail event={event}>
      {event.slug === 'study' && <StudyExtras />}
    </EventDetail>
  )
}
