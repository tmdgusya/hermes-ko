# 빠른 시작

이 문서는 Hermes Agent를 설치한 뒤 실제로 동작하는 첫 대화까지 가는 최소 경로를 설명합니다.

## 1. 설치

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc   # 또는 source ~/.zshrc
```

Windows 사용자는 먼저 WSL2를 설치한 뒤 WSL2 터미널 안에서 실행해야 합니다.

## 2. 모델/프로바이더 선택

Hermes는 최소 하나의 LLM 프로바이더가 필요합니다. 가장 안전한 방법은 대화형 설정입니다.

```bash
hermes model
```

대표 선택지는 다음과 같습니다.

| 프로바이더 | 설정 방식 |
|---|---|
| Nous Portal | `hermes model`에서 OAuth 로그인 |
| OpenAI Codex | `hermes model`에서 OAuth/device code 로그인 |
| Anthropic | OAuth 또는 `ANTHROPIC_API_KEY` |
| OpenRouter | `OPENROUTER_API_KEY` |
| Google Gemini | `GOOGLE_API_KEY` 또는 Gemini OAuth |
| GitHub Copilot | OAuth/device code 또는 Copilot 토큰 |
| Custom Endpoint | OpenAI 호환 base URL + model ID |

> Hermes는 모델 컨텍스트가 충분히 큰 환경을 전제로 합니다. 공식 문서 기준 최소 권장 컨텍스트는 **64K tokens**입니다.

## 3. 설정이 어디에 저장되는지 확인

Hermes는 시크릿과 일반 설정을 분리합니다.

```bash
hermes config path      # ~/.hermes/config.yaml
hermes config env-path  # ~/.hermes/.env
```

- API 키, 토큰, 비밀번호 → `~/.hermes/.env`
- 모델명, provider, 터미널 backend, 도구셋 설정 → `~/.hermes/config.yaml`

예시:

```bash
# 일반 설정은 config.yaml에 저장
hermes config set model.provider openrouter
hermes config set model.default anthropic/claude-sonnet-4
hermes config set terminal.backend local

# 대문자 API key류는 ~/.hermes/.env에 저장
hermes config set OPENROUTER_API_KEY sk-or-...
```

## 4. 첫 대화 실행

```bash
hermes
```

또는 한 번만 질문하려면:

```bash
hermes chat -q "현재 디렉토리의 파일 구조를 요약해줘"
```

## 5. 기본 점검

```bash
hermes doctor
hermes status
hermes tools list
hermes skills list
```

## 6. 문제가 생겼을 때의 순서

1. `hermes doctor`로 의존성/설정 확인
2. `hermes config path`, `hermes config env-path`로 실제 파일 위치 확인
3. `hermes model`로 provider/model 재설정
4. 도구가 안 보이면 `hermes tools` 실행 후 새 세션 시작
5. Gateway 사용 중이면 `hermes gateway restart`

## 기억할 규칙

> 일반 채팅이 깨끗하게 동작하기 전에는 gateway, cron, voice, fallback provider 같은 추가 기능을 얹지 않는 것이 좋습니다. 먼저 `hermes` CLI에서 정상 대화가 되는지 확인하세요.
