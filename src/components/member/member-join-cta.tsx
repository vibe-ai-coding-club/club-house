/** members.ts 편집 → PR 생성으로 이어지는 GitHub 링크 */
const MEMBERS_EDIT_URL =
  'https://github.com/early-developer-club/club-house/edit/main/src/data/members.ts'

export function MemberJoinCta() {
  return (
    <p className="text-center text-sm text-muted-foreground">
      멤버 추가 요청을 환영합니다. {' '}
      <a
        href={MEMBERS_EDIT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 transition-colors hover:text-foreground"
      >
        PR을 열어 주세요.
      </a>
    </p>
  )
}
