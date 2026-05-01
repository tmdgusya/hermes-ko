# 기본 설정

Hermes 설정은 기본적으로 `~/.hermes/` 아래에 저장됩니다. 핵심은 두 파일을 구분하는 것입니다.

```text
~/.hermes/
├── config.yaml   # 일반 설정
└── .env          # API keys, tokens, secrets
```

## 파일 역할

| 파일 | 용도 | 예시 |
|---|---|---|
| `~/.hermes/config.yaml` | 일반 설정 | 모델, provider, 터미널 backend, compression, memory, tools |
| `~/.hermes/.env` | 시크릿 | `OPENROUTER_API_KEY`, `ANTHROPIC_API_KEY`, bot token, SSH 비밀번호 |
| `~/.hermes/auth.json` | OAuth/credential pool | Nous Portal, OAuth provider 토큰 |
| `~/.hermes/SOUL.md` | 에이전트 성격 | 말투, 정체성, 기본 행동 방식 |

`hermes config set`은 값의 성격에 따라 적절한 파일에 저장합니다. API 키처럼 대문자 환경 변수 형태의 값은 보통 `.env`로 들어갑니다.

```bash
hermes config set model.provider openrouter       # config.yaml
hermes config set model.default anthropic/claude-sonnet-4  # config.yaml
hermes config set OPENROUTER_API_KEY sk-or-...    # ~/.hermes/.env
```

## 설정 위치 확인

```bash
hermes config path
hermes config env-path
```

직접 편집하려면:

```bash
hermes config edit
```

## 설정 우선순위

공식 기준 우선순위는 다음과 같습니다.

1. CLI 인자: `hermes chat --model ...`
2. `~/.hermes/config.yaml`
3. `~/.hermes/.env`
4. Hermes 내장 기본값

일반적으로 **non-secret 설정은 `config.yaml`이 우선**이고, API 키 같은 secret은 `.env`에 둡니다.

## 환경 변수 치환

`config.yaml` 안에서 `${VAR_NAME}` 형태로 환경 변수를 참조할 수 있습니다.

```yaml
auxiliary:
  vision:
    api_key: ${GOOGLE_API_KEY}
    base_url: ${CUSTOM_VISION_URL}

delegation:
  api_key: ${DELEGATION_KEY}
```

주의할 점:

- `${VAR}` 문법만 지원합니다.
- `$VAR` 형태는 확장되지 않습니다.
- 값이 없으면 `${VAR}` 문자열이 그대로 남습니다.

## 자주 쓰는 설정 명령

```bash
hermes config              # 현재 설정 보기
hermes config edit         # config.yaml 편집
hermes config set KEY VAL  # 설정 값 변경
hermes config check        # 누락/오래된 설정 확인
hermes config migrate      # 새 옵션을 config에 반영
hermes model               # 모델/프로바이더 선택 UI
hermes tools               # 도구 활성화/비활성화 UI
```

## 대표 config.yaml 예시

```yaml
model:
  provider: openrouter
  default: anthropic/claude-sonnet-4
  base_url: ""

terminal:
  backend: local   # local | docker | ssh | modal | daytona | vercel_sandbox | singularity
  cwd: "."
  timeout: 180
  env_passthrough: []

compression:
  enabled: true
  threshold: 0.5
  target_ratio: 0.2

memory:
  memory_enabled: true
  user_profile_enabled: true
  provider: built-in

security:
  tirith_enabled: true
  website_blocklist: []
```

## 변경 적용 시점

| 변경 대상 | 적용 시점 |
|---|---|
| CLI 새 실행 | 다음 `hermes` 또는 `hermes chat` 실행부터 |
| 현재 대화 모델 | `/model` slash command 사용 가능 |
| toolset 변경 | 새 세션(`/reset`) 필요 |
| gateway 설정 | `hermes gateway restart` 권장 |
| config.yaml 직접 수정 | 새 세션/재시작 권장 |
