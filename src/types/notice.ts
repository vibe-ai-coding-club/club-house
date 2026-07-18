export interface Notice {
  id: number
  title: string
  category: 'develop' | 'creative' | 'general'
  startDate: string
  endDate?: string
  content: string
  status: 'ongoing' | 'upcoming' | 'completed'
}
