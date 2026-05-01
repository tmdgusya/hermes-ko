# Hermes Agent 소개

Hermes Agent는 Nous Research가 만든 오픈소스 AI 에이전트입니다. 터미널에서 대화형 CLI로 사용할 수 있고, Telegram·Discord·Slack 같은 메시징 플랫폼, 브라우저 자동화, 파일 편집, 터미널 실행, 스킬, 메모리, cron 작업까지 하나의 에이전트 런타임에서 다룹니다.

## 핵심 개념

| 개념 | 설명 |
|---|---|
| **대화형 에이전트** | `hermes` 또는 `hermes chat`으로 시작하는 CLI 에이전트입니다. |
| **도구(Tools)** | 파일 읽기/쓰기, 터미널 실행, 웹 검색, 브라우저 조작, 이미지 분석 같은 실제 작업 함수입니다. |
| **도구셋(Toolsets)** | 관련 도구 묶음입니다. 예: `file`, `terminal`, `web`, `browser`, `skills`. |
| **스킬(Skills)** | 특정 작업 절차를 담은 지식 문서입니다. 필요할 때만 로드되어 토큰을 아낍니다. |
| **메모리(Memory)** | 세션을 넘어 유지되는 사용자 선호도, 환경 정보, 재사용 가능한 사실입니다. |
| **게이트웨이(Gateway)** | Telegram, Discord, Slack 등 외부 메시징 플랫폼에서 Hermes를 실행하는 기능입니다. |
| **프로필(Profiles)** | 여러 Hermes 환경을 서로 분리해서 운영하는 기능입니다. |

## 어디에 저장되나요?

Hermes의 기본 홈 디렉터리는 `~/.hermes/`입니다.

```text
~/.hermes/
├── config.yaml      # 모델, 터미널, 도구, 메모리 같은 일반 설정
├── .env             # API 키, 토큰, 비밀번호 같은 시크릿
├── auth.json        # OAuth 인증 정보
├── SOUL.md          # 에이전트 성격/정체성
├── skills/          # 설치되거나 생성된 스킬
├── memories/        # 영구 메모리
├── sessions/        # 세션 기록
├── cron/            # 예약 작업
└── logs/            # 로그
```

> 중요한 기준: **시크릿은 `~/.hermes/.env`, 일반 설정은 `~/.hermes/config.yaml`** 입니다. 프로젝트 루트의 `.env`가 아니라 Hermes 홈 디렉터리의 `.env`를 사용합니다.

## 가장 먼저 볼 문서

1. [설치](/docs/installation)
2. [빠른 시작](/docs/quickstart)
3. [기본 설정](/docs/basic-config)
4. [모델 & 프로바이더](/docs/models-providers)
5. [도구 개요](/docs/overview)
