# 모델 & 프로바이더

Hermes는 provider-agnostic 구조입니다. OpenRouter, Anthropic, Nous Portal, OpenAI Codex, Google Gemini, GitHub Copilot, DeepSeek, Hugging Face, custom endpoint 등 여러 프로바이더를 바꿔가며 사용할 수 있습니다.

## 가장 쉬운 설정

```bash
hermes model
```

이 명령은 provider 선택, 로그인/OAuth, API key 입력, 모델 선택을 대화형으로 처리합니다.

## 설정 파일에 저장되는 값

일반적으로 모델 설정은 `~/.hermes/config.yaml`의 `model` 섹션에 저장됩니다.

```yaml
model:
  provider: openrouter
  default: anthropic/claude-sonnet-4
  base_url: ""
  api_mode: chat_completions
```

API key는 `~/.hermes/.env`에 저장합니다.

```bash
OPENROUTER_API_KEY=sk-or-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...
```

## 대표 프로바이더

| Provider | 설정 방식 |
|---|---|
| Nous Portal | `hermes model`에서 OAuth 로그인 |
| OpenAI Codex | `hermes model`에서 OAuth/device code |
| Anthropic | `hermes model` OAuth 또는 `ANTHROPIC_API_KEY` |
| OpenRouter | `OPENROUTER_API_KEY` |
| Google Gemini | `GOOGLE_API_KEY` 또는 Gemini OAuth |
| GitHub Copilot | `hermes model` OAuth, `COPILOT_GITHUB_TOKEN`, `GH_TOKEN` |
| DeepSeek | `DEEPSEEK_API_KEY` |
| Hugging Face | `HF_TOKEN` |
| Alibaba/Qwen | `DASHSCOPE_API_KEY` |
| z.ai/GLM | `GLM_API_KEY` 또는 `ZAI_API_KEY` |
| Kimi/Moonshot | `KIMI_API_KEY` |
| MiniMax | `MINIMAX_API_KEY` 또는 OAuth provider |
| Vercel AI Gateway | `AI_GATEWAY_API_KEY` |
| Custom Endpoint | OpenAI-compatible base URL + model ID |

## Main model과 Auxiliary model

Hermes는 두 종류의 모델 슬롯을 사용합니다.

| 슬롯 | 용도 |
|---|---|
| Main model | 실제 대화, 추론, tool-calling loop |
| Auxiliary models | vision, compression, session search, title generation, approval scoring, web extract 등 보조 작업 |

보조 모델은 `auto`로 두면 main model을 그대로 사용합니다. 비용을 줄이고 싶으면 일부 작업만 저렴한 모델로 분리할 수 있습니다.

```yaml
auxiliary:
  compression:
    provider: auto
    model: ""
  vision:
    provider: openrouter
    model: google/gemini-2.5-flash
```

## 적용 시점

| 상황 | 적용 방식 |
|---|---|
| 새 CLI 세션 | 다음 `hermes` 실행부터 적용 |
| 현재 CLI 세션 | `/model` slash command 사용 |
| gateway | 새 세션부터 적용, 필요시 `hermes gateway restart` |
| dashboard | 모델 설정 페이지에서 변경 |

## 최소 컨텍스트

공식 문서는 Hermes가 agentic tool-calling workflow를 안정적으로 수행하려면 **64K tokens 이상 context**를 권장/요구한다고 설명합니다. 로컬 모델을 사용할 때는 Ollama, llama.cpp, vLLM 등의 context size를 충분히 키워야 합니다.

예시:

```bash
# llama.cpp 계열 예시
--ctx-size 65536
```

## Custom endpoint

OpenAI 호환 endpoint를 쓰는 경우:

```yaml
model:
  provider: custom
  default: your-model-id
  base_url: http://localhost:8000/v1
  api_key: ${OPENAI_API_KEY}
```

가능하면 `hermes model`에서 Custom endpoint를 선택해 저장하는 방식을 권장합니다.
