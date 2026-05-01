# 스킬 만들기

스킬은 `~/.hermes/skills/<skill-name>/SKILL.md` 형태로 저장됩니다. 복잡한 작업을 반복하거나, 한 번 어렵게 해결한 절차를 다음에도 재사용하고 싶을 때 만듭니다.

## 만들면 좋은 경우

- 5단계 이상 반복되는 작업 절차
- 특정 프로젝트/환경에서 자주 막히는 문제 해결법
- 여러 도구를 조합해야 하는 workflow
- 설치/배포/검증처럼 실수하기 쉬운 절차
- 사용자가 특정 방식으로 하라고 정정한 작업

## 디렉터리 구조

```text
~/.hermes/skills/my-skill/
├── SKILL.md
├── references/
│   └── api.md
├── templates/
│   └── config.yaml
├── scripts/
│   └── validate.py
└── assets/
    └── diagram.png
```

## SKILL.md 예시

```markdown
---
name: nextjs-release-check
description: Next.js 앱 릴리즈 전 빌드, 타입체크, 시각 QA 절차
version: 1.0.0
metadata:
  hermes:
    tags: [nextjs, qa, release]
    category: software-development
---

# Next.js Release Check

## When to Use
Next.js 앱을 배포하기 전 최종 검증이 필요할 때.

## Procedure
1. `npm run build`를 실행한다.
2. dev server를 켠다.
3. 핵심 페이지를 브라우저로 연다.
4. `browser_vision`으로 레이아웃을 확인한다.
5. 콘솔 오류를 확인한다.

## Pitfalls
- Tailwind v4는 `@import "tailwindcss";`와 `@theme` 설정이 필요하다.
- UI 변경 후 스크린샷 검증 없이 완료 처리하지 않는다.

## Verification
- 빌드 exit code 0
- 브라우저 콘솔 오류 없음
- 주요 페이지 vision QA 통과
```

## 지원 파일 사용

긴 참고 문서나 템플릿은 `SKILL.md`에 모두 넣지 말고 supporting file로 분리합니다.

- `references/`: 긴 설명, API 문서, 체크리스트
- `templates/`: 복사해서 쓸 설정/코드 템플릿
- `scripts/`: 검증 또는 자동화 스크립트
- `assets/`: 이미지, 예시 파일

에이전트는 필요할 때 `skill_view(name, file_path)`로 특정 파일만 불러옵니다.

## 좋은 스킬의 기준

- trigger condition이 명확함
- 실행 순서가 번호로 정리됨
- 실패 사례와 해결책이 있음
- 검증 방법이 있음
- 환경 변수/필수 명령이 명시됨
- 너무 일반적인 설명보다 실제 command와 file path가 있음

## 피해야 할 것

- 임시 TODO나 진행 상황 저장
- 한 번만 쓴 로그 복사본
- secret/API key 원문 포함
- 너무 거대한 문서 한 파일에 몰아넣기
- 현재 프로젝트에만 필요한 코드를 전역 스킬로 저장하기
