export interface BlogInput {
  title: string
  category: 'develop' | 'creative'
  author: string
  excerpt: string
  date: string
  href: string
}

export interface Blog extends BlogInput {
  id: number
}
