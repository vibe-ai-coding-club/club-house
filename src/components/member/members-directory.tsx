'use client'

import { FadeIn } from '@/components/ui/motion'
import { memberSections, getMembersByType } from '@/data/members'
import type { Member, MemberType } from '@/types'

function memberImageUrl(member: Member) {
  if (member.profileImage) {
    return `/images/members/${member.profileImage}`
  }
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}&backgroundColor=b6f3d4,84cc16,65a30d,4d7c0f&hairColor=0e0e0e,2c1b18,724133,a55728,b58143&skinColor=edb98a,fd9841,f8d25c,ffdbac`
}

function MemberLinks({ member }: { member: Member }) {
  if (!member.links) return null

  const linkClass =
    'text-muted-foreground transition-colors hover:text-foreground'

  return (
    <div className="flex gap-2.5">
      {member.links.github && (
        <a
          href={member.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${member.name} GitHub`}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      )}
      {member.links.linkedin && (
        <a
          href={member.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${member.name} LinkedIn`}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      )}
      {member.links.blog && (
        <a
          href={member.links.blog}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${member.name} Blog`}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zm-1-6.5c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm6.5 6.5h-2v-2.5c0-1.5-1.5-1.5-1.5-1.5s-1.5 0-1.5 1.5V16h-2v-6h2v1c.5-1 1.5-1.5 2.5-1.5s2.5.5 2.5 2.5V16z" />
          </svg>
        </a>
      )}
      {member.links.email && (
        <a
          href={`mailto:${member.links.email}`}
          className={linkClass}
          aria-label={`${member.name} Email`}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
      )}
    </div>
  )
}

function MemberItem({ member }: { member: Member }) {
  return (
    <div className="group relative">
      <div
        className="size-12 overflow-hidden rounded-full sm:size-14"
        role="img"
        aria-label={member.name}
        style={{
          backgroundImage: `url('${memberImageUrl(member)}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 타이틀 영역과 겹치지 않도록 아바타 아래에 표시 */}
      <div
        role="tooltip"
        className="pointer-events-none invisible absolute top-full left-1/2 w-52 -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
      >
        <div className="rounded-lg border border-border bg-background p-3 text-left shadow-md">
          <p className="text-sm font-medium text-foreground">{member.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{member.role}</p>
          {member.bio && (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
          )}
          {member.links && (
            <div className="mt-2.5">
              <MemberLinks member={member} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function MemberSection({
  type,
  title,
}: {
  type: MemberType
  title: string
}) {
  const people = getMembersByType(type)
  if (people.length === 0) return null

  return (
    <FadeIn>
      <section className="space-y-5 text-center">
        <header>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
        </header>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {people.map((member) => (
            <MemberItem key={member.id} member={member} />
          ))}
        </div>
      </section>
    </FadeIn>
  )
}

export function MembersDirectory() {
  return (
    <div className="mx-auto mt-14 max-w-3xl space-y-32">
      {memberSections.map((section) => (
        <MemberSection key={section.type} {...section} />
      ))}
    </div>
  )
}
