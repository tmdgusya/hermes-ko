# 스킬 공유

Hermes 스킬은 로컬에서만 쓸 수도 있고, 팀이나 커뮤니티와 공유할 수도 있습니다.

## 공유 전 점검

공유하기 전 다음을 반드시 확인하세요.

- API key, token, password가 들어 있지 않은가?
- 개인 경로(`/Users/name/...`)가 그대로 들어 있지 않은가?
- 특정 회사/프로젝트 내부 정보가 포함되어 있지 않은가?
- 실행 명령이 위험하지 않은가?
- 설치 조건과 검증 방법이 명확한가?

## 설치/조회 명령

```bash
hermes skills list
hermes skills browse
hermes skills search <query>
hermes skills inspect <id>
hermes skills install <id>
hermes skills uninstall <name>
```

GitHub의 `SKILL.md` URL을 직접 설치할 수도 있습니다.

```bash
hermes skills install https://raw.githubusercontent.com/org/repo/main/SKILL.md
```

## 좋은 공유 스킬 구조

```text
my-skill/
├── SKILL.md
├── references/
├── templates/
└── scripts/
```

`SKILL.md`에는 사용 시점, 절차, pitfalls, verification을 넣고 긴 자료는 references로 분리합니다.

## 버전 관리

frontmatter에 `version`을 넣고 변경사항을 명확히 기록합니다.

```yaml
---
name: my-skill
description: Short description
version: 1.1.0
---
```

## 시크릿이 필요한 스킬

시크릿은 문서에 직접 쓰지 말고 `required_environment_variables`로 선언합니다.

```yaml
required_environment_variables:
  - name: EXAMPLE_API_KEY
    prompt: Example API key
    help: Create one from https://example.com
    required_for: API calls
```

값은 사용자의 `~/.hermes/.env`에 저장되어야 합니다.
