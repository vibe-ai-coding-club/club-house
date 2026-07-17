"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="px-4 py-6 md:py-0">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-center text-sm leading-loose text-white/50 md:text-left">
              © 2025 {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={siteConfig.links.github}
              className="text-sm text-white/60 hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
