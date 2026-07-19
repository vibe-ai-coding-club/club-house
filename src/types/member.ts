export type MemberType = 'organizer' | 'member'

export interface Member {
  id: string
  name: string
  role: string
  /** 기여하고 있어요 / 함께하고 있어요 */
  type: MemberType
  bio?: string
  profileImage?: string // 프로필 이미지 파일명 (예: "1.webp")
  links?: {
    github?: string
    linkedin?: string
    blog?: string
    email?: string
  }
}
