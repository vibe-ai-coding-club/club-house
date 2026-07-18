import type { Blog, BlogInput } from '@/types'

const blogsData: BlogInput[] = [
  {
    title: "Technical Writing with Claude와 함께하는 첫 포스트",
    category: "develop",
    author: "HamInKyou",
    excerpt: "3주차 스터디에서는 '절대색감 게임'을 주제로 간단한 바이브 코딩 실습을 진행했습니다. 각자 게임을 구현하고 배포하여 서로의 결과물을 공유하며 즐겼습니다.",
    date: "2025-10-16",
    href: "https://technical-writing-with-claude-blog.vercel.app/posts/hello-world"
  },
  {
    title: "Vibe Coding Club VDD 스터디 3주차 활동 기록 - 간단한 바이브 코딩 실습",
    category: "develop",
    author: "da-in",
    excerpt: "3주차 스터디에서는 '절대색감 게임'을 주제로 간단한 바이브 코딩 실습을 진행했습니다. 각자 게임을 구현하고 배포하여 서로의 결과물을 공유하며 즐겼습니다.",
    date: "2025-10-04",
    href: "https://da-in.github.io/posts/early-developer-club-vdd-3/"
  },
  {
    title: "Vibe Coding Club VDD 스터디 2주차 활동 기록 - 프로젝트 아이디어 브레인스토밍",
    category: "develop",
    author: "da-in",
    excerpt: "2주차 스터디에서는 각자 진행할 프로젝트 아이디어를 브레인스토밍하고, 피드백을 주고받는 시간을 가졌습니다. 다양한 분야의 아이디어가 나왔습니다.",
    date: "2025-09-27",
    href: "https://da-in.github.io/posts/early-developer-club-vdd-2/"
  },
  {
    title: "Vibe Coding Club VDD 스터디 1주차 활동 기록 - Onboarding",
    category: "develop",
    author: "da-in",
    excerpt: "드디어 Vibe Coding Club VDD 스터디의 첫 번째 모임이 시작되었습니다! 12명의 스터디원들이 Discord 음성채널에 모여서 첫 만남을 가졌습니다.",
    date: "2025-09-20",
    href: "https://da-in.github.io/posts/early-developer-club-vdd-1/"
  },
  {
    title: "Vibe Coding Club과 VDD(Vibe Driven Development) 스터디",
    category: "develop",
    author: "da-in",
    excerpt: "요즘 AI가 정말 빠르게 발전하고 있다. ChatGPT, Claude, Cursor... 매일 새로운 도구들이 나오는데, 정작 나는 제대로 활용하지 못하고 있다는 생각이 들었다.",
    date: "2025-09-19",
    href: "https://da-in.github.io/posts/early-developer-club-vdd/"
  }
]

// id를 자동으로 부여
export const blogs: Blog[] = blogsData.map((blog, index) => ({
  ...blog,
  id: index + 1
}))
