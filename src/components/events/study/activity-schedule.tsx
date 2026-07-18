'use client'

import { motion } from 'framer-motion'
import planData from '@/data/2026-plan.json'

export function ActivitySchedule() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.25 }}
      className="mt-10"
    >
      <h2 className="mb-3 text-xl font-bold text-foreground">이전 스터디</h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        Creative / Develop 트랙별 주간 주제와 일정입니다.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border">
          <thead>
            <tr className="border-b border-border">
              <th className="border-r border-border px-4 py-3 text-center font-semibold text-foreground">
                Week
              </th>
              <th className="border-r border-border px-4 py-3 text-center font-semibold text-foreground">
                Creative
              </th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Develop</th>
            </tr>
          </thead>
          <tbody>
            {planData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-border transition-colors hover:bg-white/10"
              >
                <td className="border-r border-border px-4 py-3 text-center text-foreground">
                  {item.week}
                </td>
                {item.type === 'merged' ? (
                  <td colSpan={2} className="px-4 py-3 text-center text-foreground">
                    <span>{item.content}</span>
                    {item.date && (
                      <span className="ml-2 text-xs text-muted-foreground">({item.date})</span>
                    )}
                  </td>
                ) : (
                  <>
                    <td className="border-r border-border px-4 py-3 text-center text-foreground">
                      <span>{item.creative}</span>
                      {item.creativeDate && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          ({item.creativeDate})
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-foreground">
                      <span>{item.develop}</span>
                      {item.developDate && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          ({item.developDate})
                        </span>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  )
}
