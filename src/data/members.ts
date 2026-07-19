import type { Member, MemberType } from '@/types'

/** 선 긋지 않는 온건한 섹션 카피 */
export const memberSections: {
  type: MemberType
  title: string
}[] = [
  {
    type: 'organizer',
    title: '기여하고 있어요',
  },
  {
    type: 'member',
    title: '함께하고 있어요',
  },
]

export const members: Member[] = [
  // organizers — from ttalkkakthon STAFF_ITEMS (기존 4명은 staff 외 필드 보존)
  {
    id: 'cheddar',
    name: '체다',
    role: '프론트엔드',
    type: 'organizer',
    bio: '오늘은 대충 합시다(는 어림없지)',
    profileImage: 'cheddar.jpg',
    links: {
      github: 'https://github.com/da-in',
      linkedin: 'https://www.linkedin.com/in/다인-최-09baa6311/',
      blog: 'https://da-in.github.io',
      email: 'talown@naver.com',
    },
  },
  {
    id: 'unteo',
    name: '운터',
    role: '엔드',
    type: 'organizer',
    bio: '오늘의 쓸모를 다 하는 사람',
    profileImage: 'unteo.jpg',
    links: {
      github: 'https://github.com/anveloper/',
      linkedin: 'https://linkedin.com/in/anveloper/',
    },
  },
  {
    id: 'quokka',
    name: '쿼카',
    role: '프로덕트 디자이너',
    type: 'organizer',
    bio: '유대하강, 캥거루과에 속하는 소형 포유류 동물',
    profileImage: 'quokka.png',
    links: {
      github: 'https://github.com/a-quokka',
      linkedin: 'https://www.linkedin.com/in/dahee-yoon-145852393/',
    },
  },
  {
    id: 'jyan',
    name: '쟌',
    role: '프론트엔드',
    type: 'organizer',
    bio: '매일매일이 고점인 사람',
    profileImage: 'jyan.jpg',
    links: {
      github: 'https://github.com/bbbjihan',
      linkedin: 'https://www.linkedin.com/in/bbbjihan/',
    },
  },
  {
    id: 'gaeko',
    name: '게코',
    role: '엔지니어',
    type: 'organizer',
    bio: '도마뱀 밥벌이 뛰는 사람',
    profileImage: 'gaeko.jpg',
    links: {
      github: 'https://github.com/jonghunlee98',
      linkedin: 'https://www.linkedin.com/in/%EC%A2%85%ED%9B%88-%EC%9D%B4-ba2a403a4',
    },
  },
  {
    id: 'david',
    name: '데이빗',
    role: '자루',
    type: 'organizer',
    bio: '잠 잘자(고 싶다)는 로봇',
    profileImage: 'david.jpg',
    links: {
      github: 'https://github.com/davidyang2149',
      linkedin: 'https://www.linkedin.com/in/홍석-양-54786b241/',
    },
  },
  {
    id: 'uza',
    name: '유자',
    role: '프론트엔드',
    type: 'organizer',
    bio: '하고 싶은 거 짱 많은 개발자',
    profileImage: 'uza.png',
    links: {
      github: 'https://github.com/song-chaeyoung',
      linkedin: 'https://www.linkedin.com/in/chaeyoung-song-948995368',
    },
  },
  {
    id: 'monkey',
    name: '몽키',
    role: '잡부',
    type: 'organizer',
    bio: '팔 길어요',
    profileImage: 'monkey.jpg',
    links: {
      github: 'https://github.com/de-monkey-v',
    },
  },
  {
    id: '3',
    name: '토벤',
    role: 'Frontend Developer',
    type: 'organizer',
    bio: '운동과 게임을 좋아하는 사람',
    profileImage: '3.jpg',
    links: {
      github: 'https://github.com/3people',
    },
  },
  {
    id: 'brian',
    name: '브라이언',
    role: 'Full-stack Developer',
    type: 'organizer',
    bio: 'Full-stack JavaScript + Functional Programming',
    profileImage: 'brian.jpg',
    links: {
      github: 'https://github.com/bichikim',
    },
  },

  // members — 기존 type: member 유지
  {
    id: '2',
    name: '이도하(Lee-DoHa)',
    role: 'Backend Developer(AI, Search)',
    type: 'member',
    bio: 'T1과 밴드를 좋아하는 검색 개발자입니다.',
    profileImage: '2.webp',
    links: {
      linkedin: 'https://www.linkedin.com/in/도하-이-607a37259',
    },
  },

  {
    id: '5',
    name: '함인규(HamInKyou)',
    role: 'Frontend Developer',
    type: 'member',
    bio: '수영을 취미로 하는 개발자 ㅎ',
    profileImage: '5.webp',
    links: {
      github: 'https://github.com/HamInKyou',
    },
  },
  {
    id: '6',
    name: '서석주(Seokzzoo)',
    role: 'Backend Developer',
    type: 'member',
    bio: '굼융권에서 개발하고 있습니다~',
    profileImage: '6.webp',
    links: {
      github: 'https://github.com/Seokzzoo/Seokzzoo',
    },
  },
  {
    id: '7',
    name: '천진영(jinyoung0711)',
    role: 'Student',
    type: 'member',
    bio: '집에 있는걸 좋아하는 학생입니다.',
    profileImage: '7.webp',
    links: {
      github: 'https://github.com/jinyoung0711',
    },
  },
  {
    id: '9',
    name: '박정근(JGeun)',
    role: 'Android Developer',
    type: 'member',
    bio: '네트워킹을 좋아하는 개발자입니다.',
    profileImage: '9.jpg',
    links: {
      github: 'https://github.com/JGeun',
    },
  },
  {
    id: '11',
    name: '여서하(yeoseoha)',
    role: 'Engineer',
    type: 'member',
    profileImage: '11.png',
    bio: '다양한 걸 체험해보고 싶은 여서하입니다.',
  },
  {
    id: '12',
    name: '김민지(minjikim24)',
    role: 'AI Engineer',
    type: 'member',
    profileImage: '12.png',
  },
]

export function getMembersByType(type: MemberType) {
  return members.filter((member) => member.type === type)
}
