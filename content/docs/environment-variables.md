# 환경 변수

Hermes Agent의 환경 변수는 기본적으로 **`~/.hermes/.env`** 파일에 둡니다. 프로젝트 루트의 `.env`가 아닙니다.

```bash
hermes config env-path
# 예: /Users/you/.hermes/.env
```

값을 직접 편집해도 되지만, 권장 방식은 `hermes config set`입니다.

```bash
hermes config set OPENROUTER_API_KEY sk-or-...
hermes config set ANTHROPIC_API_KEY sk-ant-...
```

## 핵심 원칙

| 종류 | 위치 |
|---|---|
| API key, token, password | `~/.hermes/.env` |
| 모델명, provider, backend, timeout | `~/.hermes/config.yaml` |
| OAuth credential | `~/.hermes/auth.json` 또는 provider별 auth 파일 |

## 주요 LLM 프로바이더 변수

| 변수 | 설명 |
|---|---|
| `OPENROUTER_API_KEY` | OpenRouter API key |
| `OPENROUTER_BASE_URL` | OpenRouter 호환 base URL override |
| `ANTHROPIC_API_KEY` | Anthropic Console API key |
| `ANTHROPIC_TOKEN` | Anthropic OAuth/setup-token 수동 override |
| `OPENAI_API_KEY` | OpenAI 호환 endpoint API key |
| `OPENAI_BASE_URL` | vLLM, SGLang, Ollama 등 custom endpoint base URL |
| `GOOGLE_API_KEY` | Google AI Studio / Gemini API key |
| `GEMINI_API_KEY` | `GOOGLE_API_KEY` alias |
| `DEEPSEEK_API_KEY` | DeepSeek API key |
| `DASHSCOPE_API_KEY` | Alibaba Cloud DashScope / Qwen |
| `HF_TOKEN` | Hugging Face Inference Providers token |
| `AI_GATEWAY_API_KEY` | Vercel AI Gateway API key |
| `GLM_API_KEY` / `ZAI_API_KEY` | z.ai / Zhipu GLM API key |
| `KIMI_API_KEY` | Kimi / Moonshot API key |
| `KIMI_CN_API_KEY` | Kimi China endpoint API key |
| `MINIMAX_API_KEY` | MiniMax global endpoint |
| `MINIMAX_CN_API_KEY` | MiniMax China endpoint |
| `COPILOT_GITHUB_TOKEN` | GitHub Copilot API용 token 우선순위 1 |
| `GH_TOKEN` | Copilot fallback 및 GitHub CLI token |
| `GITHUB_TOKEN` | Copilot fallback token |

## 도구/통합 관련 변수 예시

| 변수 | 설명 |
|---|---|
| `FIRECRAWL_API_KEY` | 웹 검색/추출 provider에 따라 필요할 수 있음 |
| `FAL_KEY` | 이미지 생성 backend에 따라 필요 |
| `ELEVENLABS_API_KEY` | ElevenLabs TTS |
| `VOICE_TOOLS_OPENAI_KEY` | OpenAI Whisper/TTS 계열 |
| `GROQ_API_KEY` | Groq Whisper STT |
| `HASS_TOKEN` | Home Assistant 도구 |
| `HASS_URL` | Home Assistant 서버 URL |
| `DISCORD_BOT_TOKEN` | Discord gateway |
| `TELEGRAM_BOT_TOKEN` | Telegram gateway |
| `SLACK_BOT_TOKEN` | Slack gateway |
| `MATRIX_ACCESS_TOKEN` | Matrix gateway |

## 터미널 backend 관련 변수

SSH backend를 사용할 때는 secret을 `.env`에 둡니다.

```bash
TERMINAL_SSH_HOST=my-server.example.com
TERMINAL_SSH_USER=myuser
TERMINAL_SSH_KEY=~/.ssh/id_rsa
```

Vercel Sandbox backend는 다음 값이 필요합니다.

```bash
VERCEL_TOKEN=...
VERCEL_PROJECT_ID=...
VERCEL_TEAM_ID=...
```

## config.yaml에서 참조하기

`.env`에 저장한 값을 config에서 참조할 수 있습니다.

```yaml
model:
  provider: openrouter
  default: anthropic/claude-sonnet-4

auxiliary:
  vision:
    provider: gemini
    api_key: ${GOOGLE_API_KEY}
```

## 보안 주의

- `.env`는 git에 커밋하지 마세요.
- 문서, 스크린샷, 이슈에 API key를 붙여넣지 마세요.
- gateway 로그는 secret redaction을 적용하지만, 원본 secret을 채팅에 직접 보내지 않는 것이 좋습니다.
- mock key가 redaction에 걸리는 경우에도 실제 secret을 노출하지 말고 임시 placeholder를 쓰세요.
