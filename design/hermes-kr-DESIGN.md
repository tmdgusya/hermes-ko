---
version: alpha
name: Hermes Agent KR
description: >
  Hermes Agent 한국어 공식 문서를 위한 디자인 시스템.
  Nous Research의 헤르메스 에이전트 브랜드 아이덴티티를
  IBM Carbon Design System의 구조적 엄밀함으로 풀어낸 토큰 세트.
  다크 틸 배경 위의 따뜻한 크림 톤 텍스트 — 기술적 정밀함과 접근성의 균형.

logo:
  src: "./hermes_logo.png"
  alt: "Hermes Agent — Nous Research"
  width: 120px

colors:
  # ── Brand Core ──
  primary: "#0f62fe"          # IBM Blue 60 — interactive accent (links, buttons, focus)
  primary-hover: "#0353e9"    # Blue 60 Hover
  primary-active: "#002d9c"   # Blue 80 — pressed state

  # ── Hermes Dark Surface ──
  surface-dark: "#041C1C"     # Hermes deep teal — page background
  surface-dark-alt: "#0a2e2e" # Elevated dark surface (cards, containers)
  surface-dark-hover: "#0f3a3a"

  # ── Warm Neutral Scale ──
  cream: "#ffe6cb"            # Hermes warm cream — midground accent
  cream-muted: "#f5dcc6"      # Subdued cream for secondary elements
  cream-pale: "#faf0e6"       # Light tint for code block backgrounds

  # ── Text on Dark ──
  text-primary: "#f0e6d9"     # Warm off-white — main body text
  text-secondary: "#c4b8a8"   # Muted warm — helper text, captions
  text-disabled: "#8a7f72"    # Low-contrast warm — disabled/placeholder
  text-inverse: "#041C1C"     # Dark text on light surfaces

  # ── Gray Scale (IBM-style neutrals) ──
  gray-100: "#161616"
  gray-90: "#262626"
  gray-80: "#393939"
  gray-70: "#525252"
  gray-60: "#6f6f6f"
  gray-50: "#8d8d8d"
  gray-30: "#c6c6c6"
  gray-20: "#e0e0e0"
  gray-10: "#f4f4f4"

  # ── Status ──
  error: "#da1e28"
  error-surface: "#fceded"
  success: "#24a148"
  success-surface: "#defbe6"
  warning: "#f1c21b"
  warning-surface: "#fdf6dd"
  info: "#0f62fe"
  info-surface: "#edf5ff"

typography:
  font-family-sans: "IBM Plex Sans, Pretendard, -apple-system, BlinkMacSystemFont, sans-serif"
  font-family-mono: "IBM Plex Mono, D2Coding, monospace"
  font-family-ko: "Pretendard, Apple SD Gothic Neo, Noto Sans KR, sans-serif"

  h1:
    fontFamily: "{typography.font-family-sans}"
    fontSize: "2.63rem"
    fontWeight: 300
    lineHeight: 1.19
    letterSpacing: "0px"
  h2:
    fontFamily: "{typography.font-family-sans}"
    fontSize: "2.00rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0px"
  h3:
    fontFamily: "{typography.font-family-sans}"
    fontSize: "1.50rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0px"
  h4:
    fontFamily: "{typography.font-family-sans}"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: "0px"
  body:
    fontFamily: "{typography.font-family-ko}"
    fontSize: "1.00rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0px"
  body-bold:
    fontFamily: "{typography.font-family-ko}"
    fontSize: "1.00rem"
    fontWeight: 600
    lineHeight: 1.75
    letterSpacing: "0px"
  caption:
    fontFamily: "{typography.font-family-ko}"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: "0.01em"
  code:
    fontFamily: "{typography.font-family-mono}"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: "0.01em"

rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"

components:
  # ── Buttons ──
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-dark-alt}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-dark-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"

  # ── Cards ──
  card:
    backgroundColor: "{colors.surface-dark-alt}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.surface-dark-hover}"

  # ── Code Blocks ──
  code-block:
    backgroundColor: "#0d1117"
    textColor: "#e6edf3"
    rounded: "{rounded.md}"
    padding: "16px"
  code-inline:
    backgroundColor: "rgba(15,98,254,0.10)"
    textColor: "{colors.cream}"

  # ── Tags / Badges ──
  tag:
    backgroundColor: "{colors.info-surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"

  # ── Callout ──
  callout-info:
    backgroundColor: "{colors.info-surface}"
    textColor: "#161616"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  callout-warning:
    backgroundColor: "{colors.warning-surface}"
    textColor: "#161616"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  callout-success:
    backgroundColor: "{colors.success-surface}"
    textColor: "#161616"
    rounded: "{rounded.md}"
    padding: "16px 20px"
---

<p align="center">
  <img src="./hermes_logo.png" alt="Hermes Agent" width="120" />
</p>

<h1 align="center">Hermes Agent 한국어 가이드</h1>

<p align="center">
  <strong>오픈소스 AI 에이전트 프레임워크</strong><br/>
  Nous Research · MIT License
</p>

<p align="center">
  <code>curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash</code>
</p>

---

## Overview

Hermes Agent는 터미널, 메시징 플랫폼, IDE에서 실행되는 오픈소스 AI 에이전트 프레임워크입니다. Claude Code(Anthropic), Codex(OpenAI)와 같은 카테고리에 속하지만, **어떤 LLM 프로바이더든** 연결할 수 있다는 점이 다릅니다 — OpenRouter, Anthropic, OpenAI, DeepSeek, 로컬 모델 등 20개 이상을 지원합니다.

**Hermes가 특별한 이유:**

| 특징 | 설명 |
|------|------|
| **스킬 기반 자기 개선** | 복잡한 문제를 해결하면 reusable procedures를 스킬로 저장. 세션 간에 축적되어 점점 똑똑해집니다 |
| **영속적 메모리** | 사용자 선호, 환경 설정, 학습한 교훈을 세션 간 기억합니다 |
| **멀티 플랫폼 게이트웨이** | Telegram, Discord, Slack, WhatsApp, Signal 등 15개+ 플랫폼에서 동일 에이전트 실행 |
| **프로바이더 무관** | 모델/프로바이더를 워크플로우 중간에 교체 가능. 크레덴셜 풀이 자동 로테이션 |
| **프로필 시스템** | 독립적인 설정, 세션, 스킬, 메모리를 가진 복수 인스턴스 운영 |
| **확장성** | 플러그인, MCP 서버, 커스텀 도구, 웹훅 트리거, 크론 스케줄링 |

---

## Installation

### 빠른 시작

```bash
# 원커맨드 설치
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# 대화형 채팅 시작 (기본)
hermes

# 단일 쿼리
hermes chat -q "프랑스의 수도는 어디인가요?"

# 설정 마법사
hermes setup
```

### 설치 후 필수 설정

```bash
# 1. 모델/프로바이더 선택 (대화형)
hermes model

# 2. 또는 직접 설정
hermes config set model.default anthropic/claude-sonnet-4
hermes config set model.provider anthropic

# 3. API 키 설정
hermes config set model.api_key sk-ant-xxxxx
# 또는 .env 파일에 직접 추가
echo "ANTHROPIC_API_KEY=sk-ant-xxxxx" >> ~/.hermes/.env

# 4. 상태 확인
hermes doctor
```

### 프로바이더 목록

| 프로바이더 | 인증 | 환경변수 |
|-----------|------|---------|
| OpenRouter | API key | `OPENROUTER_API_KEY` |
| Anthropic | API key | `ANTHROPIC_API_KEY` |
| OpenAI | API key | `OPENAI_API_KEY` |
| Google Gemini | API key | `GOOGLE_API_KEY` |
| DeepSeek | API key | `DEEPSEEK_API_KEY` |
| xAI / Grok | API key | `XAI_API_KEY` |
| Hugging Face | Token | `HF_TOKEN` |
| GitHub Copilot | OAuth | `hermes model`에서 선택 |

> **팁:** `hermes model`을 실행하면 20개+ 프로바이더를 대화형으로 탐색하고 선택할 수 있습니다.

### 설정 파일 구조

```
~/.hermes/
├── config.yaml       # 메인 설정
├── .env              # API 키와 시크릿
├── skills/           # 설치된 스킬
├── sessions/         # 세션 트랜스크립트
├── logs/             # 게이트웨이 및 에러 로그
├── auth.json         # OAuth 토큰과 크레덴셜 풀
└── hermes-agent/     # 소스코드 (git 설치 시)
```

---

## Skill Management

스킬은 Hermes의 **절차적 기억**입니다. 복잡한 문제를 해결하거나, 워크플로우를 발견하거나, 사용자에게 교정을 받으면, 그 지식을 스킬 문서로 저장하여 미래 세션에서 재사용할 수 있습니다.

### 스킬 기본 명령어

```bash
# 설치된 스킬 목록
hermes skills list

# 스킬 허브에서 검색
hermes skills search "kubernetes"

# 스킬 설치 (허브 ID 또는 직접 URL)
hermes skills install youtube-content
hermes skills install https://raw.githubusercontent.com/.../SKILL.md

# 설치 전 미리보기
hermes skills inspect youtube-content

# 업데이트 확인 및 적용
hermes skills check
hermes skills update

# 스킬 제거
hermes skills uninstall youtube-content

# 플랫폼별 스킬 활성화/비활성화 설정
hermes skills config
```

### 세션 내 스킬 사용

```
/skill <name>        # 특정 스킬을 현재 세션에 로드
/skills              # 스킬 검색/설치 (CLI 인터페이스)
```

### 스킬 허브 탐색

```bash
# 모든 사용 가능한 스킬 브라우징
hermes skills browse

# GitHub 리포를 스킬 소스로 추가
hermes skills tap add NousResearch/hermes-skills
```

### 스킬 구조

스킬은 `SKILL.md` 파일 하나로 구성됩니다:

```markdown
---
name: my-skill
description: "이 스킬이 하는 것"
---

# 제목

## 언제 사용하는가
1. 조건 설명

## 단계
1. 구체적인 명령어
2. 검증 방법

## 주의사항
- 흔한 실수와 해결법
```

### 커리에이터 (Curator)

스킬 허브의 품질 관리 시스템입니다:

```bash
# 스킬 발행 (허브에 업로드)
hermes skills publish ./my-skill/

# 설치된 스킬의 품질 확인
hermes skills check
```

---

## Messaging Platform

Hermes의 게이트웨이는 하나의 에이전트를 여러 메시징 플랫폼에서 동시에 실행합니다. CLI에서만 쓰는 게 아닙니다 — Telegram, Discord, Slack 어디서든 동일한 에이전트가 동일한 도구와 스킬로 응답합니다.

### 게이트웨이 시작

```bash
# 포그라운드 실행 (디버깅용)
hermes gateway run

# 백그라운드 서비스로 설치
hermes gateway install

# 서비스 제어
hermes gateway start
hermes gateway stop
hermes gateway restart
hermes gateway status

# 플랫폼 설정 (대화형)
hermes gateway setup
```

### 지원 플랫폼

| 플랫폼 | 설정 방법 | 비고 |
|--------|----------|------|
| **Telegram** | BotFather에서 토큰 발급 → `hermes gateway setup` | 가장 빠른 설정 |
| **Discord** | Bot 생성 → Message Content Intent 활성화 | 퍼블릭 채널 지원 |
| **Slack** | App 생성 → `message.channels` 이벤트 구독 | DM + 채널 |
| **WhatsApp** | WhatsApp Business API | BlueBubbles 대안 가능 |
| **Signal** | signal-cli 연동 | |
| **Matrix** | homeserver 설정 | 셀프호스팅 |
| **Email** | IMAP/SMTP 설정 | |
| **DingTalk** | 웹훅 | 중국 사용자 |
| **Feishu (Lark)** | 앱 생성 | 바이트댄스 |
| **WeCom** | 기업 WeChat | 텐센트 |
| **Home Assistant** | REST API | 스마트 홈 |

### 플랫폼별 설정 예시

#### Telegram

```bash
# 1. @BotFather에게서 봇 토큰 받기
# 2. 설정
hermes config set gateway.platforms.telegram.bot_token "123456:ABC-DEF..."
hermes config set gateway.platforms.telegram.enabled true

# 3. 게이트웨이 시작
hermes gateway start
```

#### Discord

```bash
# 1. Discord Developer Portal에서 봇 생성
# 2. MESSAGE CONTENT INTENT 활성화 (필수!)
# 3. 설정
hermes config set gateway.platforms.discord.token "your-bot-token"
hermes config set gateway.platforms.discord.enabled true

# 4. 게이트웨이 시작
hermes gateway start
```

### 게이트웨이 로그 확인

```bash
# 최근 에러 확인
grep -i "failed to send\|error" ~/.hermes/logs/gateway.log | tail -20

# 전체 로그
tail -f ~/.hermes/logs/gateway.log
```

---

## 도구 (Tools)

Hermes는 20개 이상의 도구셋을 제공하며, `hermes tools`로 활성화/비활성화할 수 있습니다.

### 주요 도구셋

| 도구셋 | 기능 |
|--------|------|
| `terminal` | 쉘 명령어 실행 및 프로세스 관리 |
| `file` | 파일 읽기/쓰기/검색/패치 |
| `web` | 웹 검색 및 콘텐츠 추출 |
| `browser` | 브라우저 자동화 (Browserbase, Chromium) |
| `code_execution` | 샌드박스 Python 실행 |
| `vision` | 이미지 분석 |
| `image_gen` | AI 이미지 생성 |
| `tts` | 텍스트 → 음성 변환 |
| `memory` | 세션 간 영속적 메모리 |
| `session_search` | 과거 대화 검색 |
| `delegation` | 서브에이전트 작업 위임 |
| `cronjob` | 예약 작업 관리 |
| `messaging` | 크로스 플랫폼 메시지 전송 |
| `skills` | 스킬 탐색 및 관리 |

```bash
# 대화형 도구 관리 (curses UI)
hermes tools

# 특정 도구셋 활성화/비활성화
hermes tools enable browser
hermes tools disable image_gen

# 변경사항 적용: 세션에서 /reset
```

---

## 슬래시 명령어

세션 내에서 사용할 수 있는 명령어들입니다.

### 세션 제어

| 명령어 | 설명 |
|--------|------|
| `/new` | 새 세션 시작 |
| `/clear` | 화면 초기화 + 새 세션 |
| `/retry` | 마지막 메시지 재전송 |
| `/undo` | 마지막 교환 제거 |
| `/title <name>` | 세션 이름 지정 |
| `/compress` | 수동 컨텍스트 압축 |
| `/stop` | 백그라운드 프로세스 중지 |

### 설정

| 명령어 | 설명 |
|--------|------|
| `/model [name]` | 모델 표시/변경 |
| `/personality [name]` | 페르소나 설정 |
| `/reasoning [level]` | 추론 수준 (none~xhigh) |
| `/yolo` | 명령 승인 우회 토글 |
| `/voice [on\|off\|tts]` | 음성 모드 |

### 도구 & 스킬

| 명령어 | 설명 |
|--------|------|
| `/tools` | 도구 관리 (CLI) |
| `/skills` | 스킬 검색/설치 (CLI) |
| `/skill <name>` | 특정 스킬 로드 |
| `/cron` | 크론 작업 관리 |
| `/reload-mcp` | MCP 서버 리로드 |

---

## 핵심 경로 & 설정 참조

### 설정 섹션

| 섹션 | 주요 옵션 |
|------|----------|
| `model` | `default`, `provider`, `base_url`, `api_key` |
| `agent` | `max_turns` (90), `tool_use_enforcement` |
| `terminal` | `backend` (local/docker/ssh), `timeout` (180) |
| `compression` | `enabled`, `threshold` (0.50) |
| `memory` | `memory_enabled`, `provider` |
| `security` | `tirith_enabled`, `redact_secrets` |
| `delegation` | `model`, `max_iterations` (50) |

### 보안 & 프라이버시

```bash
# 시크릿 자동 마스킹 비활성화 (디버깅 시)
hermes config set security.redact_secrets false

# 명령 승인 모드 변경
hermes config set approvals.mode smart    # 저위험 자동 승인
hermes config set approvals.mode off      # 전체 우회 (권장하지 않음)
```

---

## 문제 해결

| 문제 | 해결 |
|------|------|
| 도구 사용 불가 | `hermes tools`에서 활성화 확인 → `/reset` |
| 모델 오류 | `hermes doctor` → `.env`의 API 키 확인 |
| 변경사항 미반영 | CLI: 재시작 / 게이트웨이: `/restart` / 도구: `/reset` |
| 스킬 미표시 | `hermes skills list` → `hermes skills config` |
| 게이트웨이 중단 | `~/.hermes/logs/gateway.log` 확인 |
| Discord 봇 무응답 | **Message Content Intent** 활성화 필요 |
| Slack 봇 DM만 | `message.channels` 이벤트 구독 필요 |

---

## 빠른 참조 치트시트

```bash
# ── 설치 & 시작 ──
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
hermes setup                    # 설정 마법사
hermes model                    # 모델 선택
hermes doctor                   # 상태 확인

# ── 대화 ──
hermes                          # 대화형 채팅
hermes chat -q "질문"           # 단일 쿼리
hermes --continue               # 최근 세션 재개
hermes --resume <session-id>    # 특정 세션 재개

# ── 스킬 ──
hermes skills list              # 설치된 스킬
hermes skills search "query"    # 허브 검색
hermes skills install <id>      # 설치
hermes skills update            # 업데이트

# ── 게이트웨이 ──
hermes gateway setup            # 플랫폼 설정
hermes gateway start            # 시작
hermes gateway status           # 상태 확인

# ── 설정 ──
hermes config edit              # config.yaml 편집
hermes config set KEY VALUE     # 값 설정
hermes config path              # 설정 파일 경로

# ── 세션 ──
hermes sessions list            # 최근 세션
hermes sessions browse          # 인터랙티브 선택기
hermes sessions stats           # 저장소 통계

# ── 크론 ──
hermes cron list                # 작업 목록
hermes cron create "0 9 * * *"  # 매일 오전 9시
hermes cron create "30m"        # 30분마다
```

---

<p align="center">
  <sub>
    <strong>Hermes Agent</strong> · Nous Research · MIT License<br/>
    <a href="https://hermes-agent.nousresearch.com/docs">공식 문서</a> ·
    <a href="https://github.com/NousResearch/hermes-agent">GitHub</a> ·
    <a href="https://discord.gg/nousresearch">Discord</a>
  </sub>
</p>
