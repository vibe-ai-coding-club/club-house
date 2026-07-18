import Link from "next/link"
import type { Blog } from '@/types'

interface BlogItemProps {
  blog: Blog
  className?: string
}

export function BlogItem({ blog, className = "" }: BlogItemProps) {
  return (
    <Link
      href={blog.href}
      className={`block p-4 border ${className} hover:bg-white/10 transition-colors`}
      target={blog.href.startsWith("http") ? "_blank" : undefined}
      rel={blog.href.startsWith("http") ? "noreferrer" : undefined}
    >
      <h3 className="font-bold">{blog.title}</h3>
      <p className="text-muted-foreground truncate">{blog.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
        {blog.category && (
          <span className="px-2 py-1 bg-white/10 text-foreground text-xs rounded">
            {blog.category}
          </span>
        )}
      </div>
    </Link>
  )
}
