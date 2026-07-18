'use client'

import { motion } from 'framer-motion'
import planData from '@/data/2026-plan.json'

export function ActivitySchedule() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className="max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-foreground mb-4 text-center">활동 계획</h3>
        <p className="text-sm text-muted-foreground text-center mb-6">
          난이도에 따라 Creative / Develop 두 개의 트랙으로 진행됩니다
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="text-center py-3 px-4 font-semibold text-foreground border-r border-border">
                  Week
                </th>
                <th className="text-center py-3 px-4 font-semibold text-foreground border-r border-border">
                  Creative
                </th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Develop</th>
              </tr>
            </thead>
            <tbody>
              {planData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/10 transition-colors border-b border-border"
                >
                  <td className="py-3 px-4 text-foreground text-center border-r border-border">{item.week}</td>
                  {item.type === 'merged' ? (
                    <td colSpan={2} className="py-3 px-4 text-foreground text-center">
                      <span>{item.content}</span>
                      {item.date && <span className="text-xs text-muted-foreground ml-2">({item.date})</span>}
                    </td>
                  ) : (
                    <>
                      <td className="py-3 px-4 text-foreground text-center border-r border-border">
                        <span>{item.creative}</span>
                        {item.creativeDate && <span className="text-xs text-muted-foreground ml-2">({item.creativeDate})</span>}
                      </td>
                      <td className="py-3 px-4 text-foreground text-center">
                        <span>{item.develop}</span>
                        {item.developDate && <span className="text-xs text-muted-foreground ml-2">({item.developDate})</span>}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  )
}

