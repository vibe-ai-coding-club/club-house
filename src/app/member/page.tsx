import { MemberHero } from "@/components/member/member-hero"
import { MembersGrid } from "@/components/member/members-grid"

export default function MembersPage() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="w-full px-4 py-4">
        <MemberHero />
        <div className="mt-12">
          <MembersGrid />
        </div>
      </div>
    </div>
  )
}
