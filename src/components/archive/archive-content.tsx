'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { blogs } from '@/data/blogs'
import { BlogItem } from '@/components/archive/blog-item'
import { ProjectCard } from '@/components/archive/project-card'
import { FadeIn } from '@/components/ui/motion'

export function ArchiveContent() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="w-full px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground lg:text-5xl">
            아카이브
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            클럽에서 만든 프로젝트와 기록을 모아 두었어요.
          </p>
        </motion.div>

        <FadeIn className="mt-14">
          <section>
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-bold text-foreground">프로젝트</h2>
              <span className="text-sm text-muted-foreground">{projects.length}</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20" delay={0.05}>
          <section>
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-bold text-foreground">블로그</h2>
              <span className="text-sm text-muted-foreground">{blogs.length}</span>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}
