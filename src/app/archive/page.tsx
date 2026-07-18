import { Suspense } from 'react'
import { ArchiveContent } from '@/components/archive/archive-content'

export default function ArchivePage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <ArchiveContent />
    </Suspense>
  )
}
