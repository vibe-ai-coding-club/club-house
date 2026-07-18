import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "쇼핑몰 상세 페이지 에디터 (an-html-editor)",
    category: "develop",
    description: "비개발자도 사용하기 쉬운 시맨틱 HTML 상세 페이지 에디터",
    tech: ["Claude Sonnet 4.5", "Claude Code CLI"],
    vibeTime: "20h",
    thumbnail: "",
    author: "anveloper",
    links: [
      { type: "primary", href: "https://vibe-ai-coding-club.github.io/an-html-editor", label: "Demo" },
      { type: "github", href: "https://github.com/vibe-ai-coding-club/an-html-editor" }
    ]
  },
  {
    id: 2,
    title: "Promptory",
    category: "develop",
    description: "개발자를 위한 AI 대화 아카이빙 및 자산화 서비스",
    tech: ["gemini-2.5-pro", "gemini-cli"],
    vibeTime: "12h",
    thumbnail: "",
    author: "jinyoung0711",
    links: [
      { type: "github", href: "https://github.com/vibe-ai-coding-club/promptory" }
    ]
  },
  {
    id: 3,
    title: "스마트 절세 플래너",
    category: "develop",
    description: "변하는 정책에 맞는 저축 최적화 금액 서포트",
    tech: ["gemini-2.5-pro", "gemini-cli"],
    vibeTime: "12h",
    thumbnail: "",
    author: "jonghunlee98",
    links: [
      { type: "github", href: "https://github.com/vibe-ai-coding-club/JH-LEE" }
    ]
  },
  {
    id: 4,
    title: "Club House",
    category: "develop",
    description: "Vibe Coding Club 홈페이지 클럽 하우스 웹 제작",
    tech: ["cursor"],
    vibeTime: "6h",
    thumbnail: "/images/projects/4.png",
    author: "da-in",
    links: [
      { type: "primary", href: "https://club-house-sigma.vercel.app/", label: "Demo" },
      { type: "github", href: "https://github.com/vibe-ai-coding-club/club-house" }
    ]
  },
  {
    id: 5,
    title: "mood time capsule",
    category: "develop",
    description: "나의 하루 기록지",
    tech: ["claude code", "cursor"],
    vibeTime: "20m",
    thumbnail: "",
    author: "3people",
    links: [
      { type: "primary", href: "https://mood-time-capsule.vercel.app/", label: "Demo"  },
      { type: "github", href: "https://github.com/vibe-ai-coding-club/Mood-Time-Capsule" }
    ]
  },
  {
    id: 6,
    title: "LLM Health Monitor",
    category: "develop",
    description: "AI 서비스 헬스 체크 사이트",
    tech: ["claude code", "sonnet 4.1"],
    vibeTime: "30m",
    thumbnail: "",
    author: "Lee-DoHa",
    links: [
      { type: "primary", href: "https://helthchecker-doha-git-main-dohas-projects-98c7c2ca.vercel.app/", label: "Demo"  },
    ]
  },
  {
    id: 7,
    title: "Pomodoro Timer (뽀모도로 타이머)",
    category: "develop",
    description: "Flutter 기반 크로스플랫폼 뽀모도로 타이머. 소셜 로그인, Supabase 연동, Web/Mobile/Desktop 지원 (실시간 연동)",
    tech: ["claude code"],
    vibeTime: "5d",
    thumbnail: "",
    author: "DiamondMonkeyCAt",
    links: [
      { type: "primary", href: "https://pomodoro-timer-hur7y3x32-monkeys-projects-15df0205.vercel.app/", label: "Demo"  },
    ]
  },
  {
    id: 8,
    title: "시료 크기에 맞는 항온항습기 찾기",
    category: "develop",
    description: "시료의 크기를 입력하면 회사에서 보유하고 있는 항온항습기 중에 적합한 장비를 찾아주는 어플입니다.",
    tech: ["gemini cli"],
    vibeTime: "2d",
    thumbnail: "",
    author: "yeoseoha",
    links: [
      { type: "primary", href: "https://neon-lamington-cbed2b.netlify.app/", label: "Demo"  },
    ]
  },
  {
    id: 9,
    title: "technical-writing-with-claude",
    category: "develop",
    description: "토스의 technical writing에 대한 규칙들을 agent로 만들어서 각 단계를 거쳐 기술 문서를 작성하는 개인 생산성 도구에서 발전해서 실제 블로그로 보여지는 것까지 가능하게 만든 프로젝트입니다.",
    tech: ["claude code", "Sonnet 4.5"],
    vibeTime: "3h 15m",
    thumbnail: "",
    author: "HamInKyou",
    links: [
      { type: "primary", href: "https://technical-writing-with-claude-blog.vercel.app/", label: "Demo" },
      { type: "github", href: "https://github.com/vibe-ai-coding-club/technical-writing-with-claude" },
    ]
  },
  {
    id: 10,
    title: "EV charging demand forecasting for new stations using simulation-based augmentation",
    category: "develop",
    description: "신규 EV 충전소 수요를 외생변수(시뮬레이션)로 보강하여 예측하는 실험 코드입니다.",
    tech: ["Sonnet 4.5", "claude code", "ChatGPT", "Copilot"],
    vibeTime: "6d",
    thumbnail: "",
    author: "minjikim24",
    links: [
      { type: "github", href: "https://github.com/minjikim24/ev-new-edc" },
    ]
  },
  {
    id: 11,
    title: "Ai-Resume-Mentor",
    category: "develop",
    description: "합격 자기소개서를 학습하여 새로운 자기소개서를 평가하는 웹 애플리케이션입니다.",
    tech: ["cursor", "ChatGPT"],
    vibeTime: "3d",
    thumbnail: "",
    author: "Seokzzoo",
    links: [
      { type: "github", href: "https://github.com/vibe-ai-coding-club/Ai-Resume-Mentor" },
    ]
  },
  {
    id: 12,
    title: "지능의 파동",
    category: "creative",
    description: "AI가 열어주는 새로운 세상에 대한 시",
    author: "dain",
    content: "새벽처럼 맑은 알고리즘의 눈..."
  },
]
