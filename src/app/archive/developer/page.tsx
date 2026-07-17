"use client"

import { motion } from "framer-motion"

export default function DeveloperArchivePage() {
  const projects = [
    {
      id: 1,
      title: "AI 코딩 어시스턴트",
      description: "VDD 스터디에서 개발한 AI와 함께하는 코딩 도구",
      tech: ["React", "OpenAI API", "TypeScript"],
      github: "https://github.com/example/ai-coding-assistant",
      demo: "https://demo.example.com",
      image: "/images/projects/ai-assistant.jpg"
    },
    {
      id: 2,
      title: "바이브 코딩 플랫폼",
      description: "음악에 맞춰 코딩하는 새로운 개발 경험을 제공하는 플랫폼",
      tech: ["Next.js", "Web Audio API", "Tailwind CSS"],
      github: "https://github.com/example/vibe-coding",
      demo: "https://vibe-coding.example.com",
      image: "/images/projects/vibe-platform.jpg"
    },
    {
      id: 3,
      title: "AI 프로젝트 매니저",
      description: "AI가 프로젝트 관리를 도와주는 스마트 도구",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      github: "https://github.com/example/ai-project-manager",
      demo: "https://ai-pm.example.com",
      image: "/images/projects/ai-manager.jpg"
    }
  ]

  return (
    <div className="min-h-screen text-foreground">
      <div className="w-full px-4 py-4">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-bitcount mb-6">
            Vibe Coding Club
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI와 함께 개발한 다양한 프로젝트들을 확인해보세요
          </p>
        </motion.div>

        {/* 프로젝트들 */}
        <div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <p className="text-sm opacity-80">프로젝트 이미지</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  {/* 기술 스택 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-info/10 text-info text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 링크 */}
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-muted text-foreground text-center py-2 px-4 rounded-lg hover:bg-muted/80 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-brand-primary text-[#0f172a] text-center py-2 px-4 rounded-lg hover:bg-brand-primary-dark transition-colors text-sm"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
