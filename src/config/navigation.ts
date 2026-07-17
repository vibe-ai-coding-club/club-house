import { NavItem } from "@/types"
import { events } from "@/data/events"

// 헤더에 노출할 행사 순서 (slug 기준)
const navEventOrder = ["vibe-code-rush", "study", "hackathon"]

const orderedEvents = [...events].sort((a, b) => {
  const indexA = navEventOrder.indexOf(a.slug)
  const indexB = navEventOrder.indexOf(b.slug)
  return (
    (indexA === -1 ? navEventOrder.length : indexA) -
    (indexB === -1 ? navEventOrder.length : indexB)
  )
})

export const mainNav: NavItem[] = [
  ...orderedEvents.map((event) => ({
    title: event.title,
    href: event.externalUrl ?? `/${event.slug}`,
    external: Boolean(event.externalUrl),
  })),
  {
    title: "Archive",
    href: "/archive",
  },
  {
    title: "Member",
    href: "/member",
  },
  {
    title: "Join",
    href: "https://forms.gle/3VfUQhWy9LrHyMPA6",
  },
]
