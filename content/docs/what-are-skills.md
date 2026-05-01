# 스킬이란?

스킬은 Hermes가 필요할 때 불러오는 “작업 절차 문서”입니다. 특정 도구 사용법, 프로젝트 관례, 반복 업무 절차, 시행착오 해결법을 담습니다.

## 저장 위치

모든 로컬 스킬의 기본 위치는 다음입니다.

```text
~/.hermes/skills/
```

설치된 bundled skill, hub에서 설치한 skill, 에이전트가 만든 skill 모두 이 디렉터리를 기준으로 관리됩니다. 외부 skill directory를 추가로 스캔하도록 설정할 수도 있습니다.

## 왜 필요한가요?

모델이 모든 절차를 항상 context에 들고 있으면 토큰이 낭비됩니다. 스킬은 필요할 때만 로드됩니다.

```text
Level 0: skills_list()          # 이름/설명 목록
Level 1: skill_view(name)       # SKILL.md 전체
Level 2: skill_view(name, path) # references/templates/scripts 일부 파일
```

이 progressive disclosure 방식 덕분에 수십~수백 개 스킬이 있어도 실제 작업에 필요한 지식만 context에 들어옵니다.

## 사용 방법

```bash
hermes skills list
hermes skills search docker
hermes skills browse
hermes skills install <id>
hermes skills inspect <id>
```

대화 안에서는 slash command처럼 사용할 수 있습니다.

```text
/plan 인증 시스템 마이그레이션 계획을 작성해줘
/github-pr-workflow 이 변경사항으로 PR 만들어줘
/excalidraw 서비스 아키텍처 다이어그램 그려줘
```

또는 자연어로 “이 작업은 plan 스킬을 써서 해줘”처럼 요청할 수 있습니다.

## SKILL.md 기본 구조

```markdown
---
name: my-skill
description: Brief description
version: 1.0.0
platforms: [macos, linux]
metadata:
  hermes:
    tags: [python, automation]
    category: devops
---

# Skill Title

## When to Use
Trigger conditions.

## Procedure
1. Step one
2. Step two

## Pitfalls
- Known failure modes.

## Verification
How to confirm it worked.
```

## 조건부 활성화

스킬은 특정 OS나 도구 availability에 따라 보이거나 숨겨질 수 있습니다.

```yaml
platforms: [macos]
metadata:
  hermes:
    requires_toolsets: [terminal]
    fallback_for_toolsets: [web]
```

- `requires_toolsets`: 해당 도구셋이 있을 때만 표시
- `fallback_for_toolsets`: 해당 도구셋이 없을 때만 표시

## 시크릿 요구 스킬

스킬은 필요한 환경 변수를 선언할 수 있습니다.

```yaml
required_environment_variables:
  - name: TENOR_API_KEY
    prompt: Tenor API key
    help: Get a key from https://developers.google.com/tenor
    required_for: full functionality
```

필요한 값은 로컬 CLI에서 안전하게 입력받고, 값은 `~/.hermes/.env`에 저장됩니다. 메시징 플랫폼에서는 채팅으로 secret을 요구하지 않는 것이 원칙입니다.
