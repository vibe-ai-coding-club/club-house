import { MemberHero } from '@/components/member/member-hero'
import { MembersDirectory } from '@/components/member/members-directory'
import { MemberJoinCta } from '@/components/member/member-join-cta'

export default function MembersPage() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="w-full px-4 pt-20 pb-16">
        <MemberHero />
        <MembersDirectory />
        <div className="mt-16">
          <MemberJoinCta />
        </div>
      </div>
    </div>
  )
}
