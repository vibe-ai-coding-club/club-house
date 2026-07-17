import { FadeIn } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'

export function SponsorSection() {
  return (
    <FadeIn>
      <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
        함께할
        <br />
        후원사를 찾습니다
      </h2>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button asChild variant="ctaInverted" size="cta">
          <a href="mailto:vibecodingclub.team@gmail.com">후원 문의하기</a>
        </Button>
        <span className="text-sm leading-snug text-white/60">
          행사와 커뮤니티 운영을 함께
          <br />
          만들어갈 파트너를 기다립니다.
        </span>
      </div>
    </FadeIn>
  )
}
