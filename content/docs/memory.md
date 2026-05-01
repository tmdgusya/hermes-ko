# 메모리 시스템

Hermes 메모리는 세션을 넘어 유지되는 장기 기억입니다. 사용자의 선호도, 환경 정보, 반복해서 필요한 사실을 저장합니다.

## 저장 위치

기본 홈은 `~/.hermes/`이며, 메모리 관련 파일은 provider 설정에 따라 `memories/` 아래 또는 외부 memory provider에 저장됩니다.

```text
~/.hermes/memories/
├── MEMORY.md
└── USER.md
```

## 저장하면 좋은 것

| 종류 | 예시 |
|---|---|
| 사용자 선호 | “사용자는 한국어 해요체를 선호한다.” |
| 환경 정보 | “프로젝트 X는 `/Users/you/project`에 있고 pnpm을 쓴다.” |
| 안정적 관례 | “이 repo는 PR 전에 `npm run build`를 통과해야 한다.” |
| 반복되는 correction | “사용자는 UI 변경 후 항상 vision 검증을 원한다.” |

## 저장하지 말아야 할 것

- 임시 진행 상황
- 한 번만 필요한 TODO
- 긴 로그 전문
- secret/API key
- 현재 대화의 중간 산출물

진행 상황 회상은 메모리보다 `session_search`가 적합합니다.

## 설정

```yaml
memory:
  memory_enabled: true
  user_profile_enabled: true
  provider: built-in
```

CLI에서 확인/설정:

```bash
hermes memory status
hermes memory setup
hermes memory off
```

## Memory provider

기본 provider 외에도 Honcho, Mem0 같은 provider를 사용할 수 있습니다. provider별 설정은 `config.yaml`과 필요한 `.env` 값으로 나뉩니다.

## 메모리와 스킬의 차이

| 항목 | 메모리 | 스킬 |
|---|---|---|
| 목적 | 짧고 지속적인 사실 | 재사용 가능한 절차/워크플로우 |
| 예시 | “사용자는 한국어를 선호” | “Next.js 릴리즈 전 검증 절차” |
| 길이 | 짧게 | 절차, 명령, pitfalls 포함 가능 |

복잡한 절차는 메모리가 아니라 스킬에 저장하는 것이 좋습니다.
