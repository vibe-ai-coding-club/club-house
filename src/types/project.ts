export interface ProjectLink {
  type: 'primary' | 'github' | 'docs' | 'post'
  href: string
  label?: string
}

export interface Project {
  id: number
  title: string
  category: 'develop' | 'creative'
  description: string
  tech?: string[]
  vibeTime?: string
  thumbnail?: string
  author?: string // 프로젝트를 진행한 사람 (개발자/작가 모두)
  content?: string
  type?: string
  tools?: string[]
  links?: ProjectLink[]
}
