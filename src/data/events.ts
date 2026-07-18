import { ClubEvent, EventStatus } from '@/types'

// 상태 배지 표기 (라벨 + 스타일 키)
export const eventStatusMeta: Record<
  EventStatus,
  { label: string; tone: 'brand' | 'info' | 'muted' }
> = {
  recruiting: { label: '모집중', tone: 'brand' },
  ongoing: { label: '진행중', tone: 'brand' },
  upcoming: { label: '예정', tone: 'info' },
  'coming-soon': { label: 'Coming Soon', tone: 'muted' },
}

export const events: ClubEvent[] = [
  {
    slug: 'hackathon',
    title: '딸깍톤',
    tagline: '딸깍 한 번으로 완성하는 만우절 해커톤',
    cadence: '연 1회 · 만우절',
    status: 'upcoming',
    externalUrl: 'https://ttalkkakthon.vibecodingclub.kr/',
    icon: '🃏',
    accent: '#ff8a5c', // 따뜻한 코랄/앰버
    cardImage: '/images/events/hackathon.png',
    summary:
      '딸깍톤은 만우절에 열리는 Vibe Coding Club의 해커톤입니다. AI와 함께라면 "딸깍" 한 번으로 아이디어가 결과물이 되는 경험을, 하루 동안 가볍고 즐겁게 나눕니다.',
    info: [
      { label: '형태', value: '해커톤' },
      { label: '시기', value: '매년 만우절 (4월 1일 전후)' },
      { label: '상세 일정', value: 'TBD' },
    ],
    sections: [
      {
        heading: '이런 행사예요',
        body: [
          '만우절의 장난스러운 분위기 속에서 AI 코딩 에이전트를 활용해 아이디어를 빠르게 구현해보는 해커톤입니다.',
          '기술의 완성도보다 아이디어와 재미를 중심으로 진행합니다.',
        ],
      },
      {
        heading: '진행 방식',
        body: [
          '세부 일정과 참여 방식은 준비 중입니다. 확정되는 대로 이 페이지와 Discord를 통해 공지할 예정입니다.',
        ],
      },
    ],
    cta: {
      label: 'Discord에서 소식 받기',
      href: 'https://discord.gg/JNZYWnSuK8',
      external: true,
    },
  },
  {
    slug: 'vibe-code-rush',
    title: '바이브 코드 러시',
    tagline: '월 1회 모여서 각자 바이브코딩',
    cadence: '월 1회',
    status: 'ongoing',
    icon: '⚡',
    accent: '#4d8dff', // 전기 블루
    cardImage: '/images/events/vibe-code-rush.png',
    heroImage: '/images/events/vibe-code-rush/card-news/01.png',
    gallery: Array.from({ length: 10 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0')
      return {
        src: `/images/events/vibe-code-rush/card-news/${n}.png`,
        alt: `바이브 코드 러시 카드뉴스 ${i + 1}`,
      }
    }),
    summary:
      '미뤄두었던 사이드 프로젝트, 이제는 몰입할 시간입니다. 한 달에 한 번 모여 각자의 바이브코딩에 집중하고, 서로의 노하우까지 나누는 시간을 함께 만들어요.',
    info: [
      { label: '형태', value: '정기 코딩 모임' },
      { label: '일정', value: '매월 셋째 주 토요일 14:00 ~ 18:00' },
      { label: '진행 방식', value: '온라인 또는 오프라인' },
    ],
    sections: [
      {
        heading: '이런 행사예요',
        body: [
          '각자 미뤄왔던 사이드 프로젝트를 가져와 같은 공간에서 집중해 코딩하는 모임입니다.',
          '혼자서는 자꾸 미루게 되는 작업도, 함께 모이면 끝까지 밀어붙이게 됩니다.',
        ],
      },
      {
        heading: '진행 방식',
        body: [
          '매월 셋째 주 토요일 오후 2시부터 6시까지 진행합니다.',
          '온라인과 오프라인 중 한 가지 방식으로 진행되며, 매월 방식과 참여 방법을 Discord에서 안내합니다.',
        ],
      },
    ],
    cta: {
      label: 'Discord에서 참여하기',
      href: 'https://discord.gg/JNZYWnSuK8',
      external: true,
    },
  },
  {
    slug: 'study',
    title: '스터디 및 소모임',
    tagline: 'Creative / Develop 두 트랙의 주간 스터디',
    cadence: '상반기 프로그램 · 주간',
    status: 'recruiting',
    icon: '📚',
    accent: '#b18cff', // 소프트 바이올렛
    cardImage: '/images/events/study.webp',
    heroImage: '/images/events/study.webp',
    summary:
      '스터디는 난이도에 따라 Creative / Develop 두 개의 트랙으로 운영되는 Vibe Coding Club의 대표 프로그램입니다. 매주 함께 학습하며 AI 시대의 개발을 익혀갑니다.',
    info: [
      { label: '형태', value: '주간 스터디 (Creative / Develop)' },
      { label: '기간', value: '2026 상반기 프로그램' },
      { label: '모집', value: '2026 상반기 클럽원 모집 (~1/13)' },
    ],
    sections: [
      {
        heading: '이런 행사예요',
        body: [
          '빠르게 변하는 AI 시대, 혼자보다 함께일 때 더 멀리, 그리고 즐겁게 나아갈 수 있습니다.',
          'Creative 트랙과 Develop 트랙으로 나뉘어 각자의 수준과 관심사에 맞춰 참여할 수 있습니다.',
        ],
      },
    ],
  },
  {
    slug: 'second-half',
    title: '공개 예정',
    tagline: '준비 중인 새로운 행사',
    cadence: '2026 하반기',
    status: 'coming-soon',
    icon: '✨',
    accent: '#9ca3af', // 뉴트럴 그레이
    summary:
      '2026 하반기를 위한 새로운 행사를 준비하고 있습니다. 공개되면 가장 먼저 알려드릴게요.',
    info: [{ label: '공개 시점', value: '2026 하반기 (예정)' }],
    sections: [
      {
        heading: 'Coming Soon',
        body: ['아직 공개 전이에요. 소식이 준비되면 이 페이지와 Discord에서 안내하겠습니다.'],
      },
    ],
    cta: {
      label: 'Discord에서 소식 받기',
      href: 'https://discord.gg/JNZYWnSuK8',
      external: true,
    },
  },
]

// 외부 사이트로 연결되는 행사는 내부 라우트를 생성하지 않는다
export const eventSlugs = events
  .filter((event) => !event.externalUrl)
  .map((event) => event.slug)

export function getEventBySlug(slug: string): ClubEvent | undefined {
  return events.find((event) => event.slug === slug)
}
