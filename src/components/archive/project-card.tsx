import type { Project } from '@/types'
import Link from "next/link"
import { Logo } from "@/components/ui/logo"

interface ProjectCardProps {
  project: Project
  showCategory?: boolean
}

export function ProjectCard({ project, showCategory = true }: ProjectCardProps) {
  const defaultLink = (() => {
    if (!Array.isArray(project.links) || project.links.length === 0) return undefined
    const priority = ["primary", "github", "docs", "post"] as const
    for (const p of priority) {
      const found = project.links.find((l) => l.type === p)
      if (found) return found
    }
    return project.links[0]
  })()

  return (
    <div className="relative w-full border overflow-hidden group flex flex-col">
      {defaultLink && (
        <Link
          href={defaultLink.href}
          className="absolute inset-0 z-10"
          aria-label={`${project.title} 열기`}
          target={defaultLink.href.startsWith("http") ? "_blank" : undefined}
          rel={defaultLink.href.startsWith("http") ? "noreferrer" : undefined}
        />
      )}
      <div className="relative overflow-hidden group">
        <div className="transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform origin-center">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="block w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-white/5 flex items-center justify-center select-none">
              <Logo />
            </div>
          )}
        </div>
        {(showCategory || project.vibeTime) && (
          <div className="absolute top-2 right-2 z-20 flex flex-row items-center gap-1.5">
            {showCategory && (
              <span className="inline-flex items-center h-5 px-2 rounded bg-gray-100 text-gray-700 text-[10px]">
                {project.category}
              </span>
            )}
            {project.vibeTime && (
              <span className="inline-flex items-center h-5 px-2 rounded bg-black/70 text-white text-[10px] font-medium">
                {project.vibeTime}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="relative z-20 p-2 flex flex-col flex-1">
        <div className="flex-1">
          <div className="mb-0">
            <h3 className="text-base font-bold text-foreground">
              {defaultLink ? (
                <Link
                  href={defaultLink.href}
                  className="hover:underline"
                  target={defaultLink.href.startsWith("http") ? "_blank" : undefined}
                  rel={defaultLink.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {project.title}
                </Link>
              ) : (
                project.title
              )}
            </h3>
          </div>
          <p className="text-muted-foreground mb-1 text-[12px]">{project.description}</p>

          {project.tech && (
            <div className="flex flex-wrap gap-1 mb-1">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-1.5 py-0.5 bg-info/10 text-info text-[11px] rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.tools && (
            <div className="flex flex-wrap gap-1 mb-1">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[11px] rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* category badge moved next to title */}

        {(project.links || project.author) && (
          <div className="mt-1.5 flex items-center justify-between gap-2">
            {project.links && project.links.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {project.links.map((link, idx) => {
                  const label = link.label ?? (link.type === "github" ? "GitHub" : link.type === "docs" ? "Docs" : link.type === "post" ? "Post" : "Visit")
                  const isPrimary = link.type === "primary"
                  return (
                    <Link
                      key={idx}
                      href={link.href}
                      className={
                        isPrimary
                          ? "px-2.5 py-1 bg-brand-primary text-[#0f172a] rounded-md text-[13px] hover:bg-brand-primary-dark transition-colors"
                          : "px-2.5 py-1 bg-white/10 text-foreground rounded-md text-[13px] hover:bg-white/20 transition-colors"
                      }
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {label}
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div></div>
            )}
            {project.author && (
              <span className="text-[11px] text-muted-foreground shrink-0">
                by {project.author}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


