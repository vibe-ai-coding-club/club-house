import type { Project } from '@/types'
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  showCategory?: boolean
}

function defaultLink(project: Project) {
  if (!Array.isArray(project.links) || project.links.length === 0) return undefined
  const priority = ['primary', 'github', 'docs', 'post'] as const
  for (const p of priority) {
    const found = project.links.find((l) => l.type === p)
    if (found) return found
  }
  return project.links[0]
}

function linkLabel(type: string, label?: string) {
  if (label) return label
  if (type === 'github') return 'GitHub'
  if (type === 'docs') return 'Docs'
  if (type === 'post') return 'Post'
  return 'Visit'
}

export function ProjectCard({ project, showCategory = true }: ProjectCardProps) {
  const link = defaultLink(project)
  const isExternal = link?.href.startsWith('http')

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors hover:bg-background-elevated">
      {link && (
        <Link
          href={link.href}
          className="absolute inset-0 z-10"
          aria-label={`${project.title} 열기`}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        />
      )}

      <div className="relative aspect-[16/10] overflow-hidden bg-background-elevated">
        {project.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Logo />
          </div>
        )}

        {(showCategory || project.vibeTime) && (
          <div className="absolute top-2.5 right-2.5 z-20 flex flex-wrap justify-end gap-1.5">
            {showCategory && (
              <span className="rounded bg-background/90 px-2 py-0.5 text-[11px] text-muted-foreground backdrop-blur-sm">
                {project.category === 'develop' ? '개발' : '크리에이티브'}
              </span>
            )}
            {project.vibeTime && (
              <span className="rounded bg-foreground/85 px-2 py-0.5 text-[11px] font-medium text-background backdrop-blur-sm">
                {project.vibeTime}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative z-20 flex flex-1 flex-col gap-2 p-3.5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-foreground">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {(project.tech?.length || project.tools?.length) && (
          <div className="flex flex-wrap gap-1.5">
            {[...(project.tech ?? []), ...(project.tools ?? [])].slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded bg-background-elevated px-1.5 py-0.5 text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          {project.links && project.links.length > 0 ? (
            <div className="relative z-30 flex flex-wrap gap-x-2.5 gap-y-1">
              {project.links.map((item) => {
                const external = item.href.startsWith('http')
                return (
                  <Link
                    key={`${item.type}-${item.href}`}
                    href={item.href}
                    className={cn(
                      'text-[13px] transition-colors',
                      item.type === 'primary'
                        ? 'font-medium text-foreground underline-offset-4 hover:underline'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    {linkLabel(item.type, item.label)}
                  </Link>
                )
              })}
            </div>
          ) : (
            <span />
          )}
          {project.author && (
            <span className="shrink-0 text-[11px] text-muted-foreground">by {project.author}</span>
          )}
        </div>
      </div>
    </article>
  )
}
