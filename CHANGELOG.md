# Changelog

## Unreleased

### Changed

- 커뮤니티 운영 방식을 자체 게시판에서 GitHub Issues 기반으로 전환했습니다.
- 배포 대상을 Vercel에서 GitHub Pages 정적 배포로 변경했습니다.
- 랜딩 페이지와 `/community` 페이지를 GitHub Issues 참여 흐름에 맞게 개편했습니다.

### Removed

- NextAuth/GitHub OAuth 로그인 제거
- Turso/Drizzle DB 게시판 제거
- Resend 뉴스레터 API 제거
- App Router API routes 제거
- Vercel 배포 문서 제거

### Added

- GitHub Issue templates
  - 질문
  - 팁 공유
  - 문서 개선
  - 버그 제보
  - 제안
  - 쇼케이스
- GitHub Pages 배포 workflow
