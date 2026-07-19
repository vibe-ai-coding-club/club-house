import Link from 'next/link'
import type { Blog } from '@/types'
import { cn } from '@/lib/utils'

interface BlogItemProps {
  blog: Blog
  className?: string
}

export function BlogItem({ blog, className }: BlogItemProps) {
  const external = blog.href.startsWith('http')

  return (
    <Link
      href={blog.href}
      className={cn(
        'group block py-4 transition-colors hover:bg-background-elevated/60',
        className
      )}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-base font-bold text-foreground transition-colors group-hover:underline group-hover:underline-offset-4">
          {blog.title}
        </h3>
        <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
          <span>{blog.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={blog.date}>{blog.date}</time>
          {blog.category && (
            <>
              <span aria-hidden>·</span>
              <span>{blog.category === 'develop' ? '개발' : '크리에이티브'}</span>
            </>
          )}
        </div>
      </div>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {blog.excerpt}
      </p>
    </Link>
  )
}
