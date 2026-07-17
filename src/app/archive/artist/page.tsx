"use client"

import { motion } from "framer-motion"

export default function ArtistArchivePage() {
  const poems = [
    {
      id: 1,
      title: "코드와 꿈",
      author: "참여자 A",
      content: "if (dream == true) {\n  console.log('새로운 세상이 열린다');\n  return hope;\n}",
      date: "2024-12-15"
    },
    {
      id: 2,
      title: "AI와의 대화",
      author: "참여자 B", 
      content: "너는 무엇을 생각하니?\n나는 코드를 생각해\n그리고 세상을 바꾸는 꿈을 꿔",
      date: "2024-12-20"
    },
    {
      id: 3,
      title: "바이브 코딩",
      author: "참여자 C",
      content: "리듬에 맞춰 타이핑하면\n코드가 춤을 춘다\nAI와 함께하는\n새로운 개발의 세계",
      date: "2024-12-25"
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
            Early Artist Club
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI와 함께 창작한 시와 문학 작품들을 감상해보세요
          </p>
        </motion.div>

        {/* 시 작품들 */}
        <div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem, index) => (
              <motion.div
                key={poem.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{poem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">작가: {poem.author}</p>
                  <p className="text-xs text-muted-foreground">{poem.date}</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-border">
                  <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">
                    {poem.content}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
