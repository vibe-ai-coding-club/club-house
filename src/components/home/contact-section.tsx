import { FadeIn } from '@/components/ui/motion'
import { siteConfig } from '@/config/site'

const contactLinks = [
  {
    label: 'Email',
    value: 'vibecodingclub.team@gmail.com',
    href: 'mailto:vibecodingclub.team@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    value: '@vibe-ai-coding-club',
    href: siteConfig.links.github,
    external: true,
  },
  {
    label: 'Instagram',
    value: '@vibe.coding.club',
    href: siteConfig.links.instagram,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Vibe Coding Club',
    href: siteConfig.links.linkedin,
    external: true,
  },
]

export function ContactSection() {
  return (
    <section>
      <FadeIn>
        <h2 className="mb-4 text-center text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl">
          우리를 만나요
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
          여러 채널에서 활동 소식을 나누고 있어요.
        </p>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-6 text-center">
          {contactLinks.map((link) => (
            <div key={link.label} className="w-56">
              <h3 className="text-lg font-semibold text-foreground">{link.label}</h3>
              <a
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.value}
              </a>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
