# 도구 개요

Hermes의 도구는 에이전트가 실제 작업을 수행하기 위해 호출하는 함수입니다. 웹 검색, 파일 편집, 터미널 실행, 브라우저 조작, 이미지 분석, 스킬 로딩, 메모리 저장, 예약 작업 등이 모두 도구로 구현됩니다.

## 도구와 도구셋

| 용어 | 의미 |
|---|---|
| Tool | `read_file`, `terminal`, `browser_navigate` 같은 개별 함수 |
| Toolset | 관련 도구 묶음. 예: `file`, `terminal`, `browser`, `web` |
| Platform toolset | CLI, Telegram, Discord 등 플랫폼별 기본 도구 구성 |

도구셋은 플랫폼/세션별로 켜고 끌 수 있습니다.

```bash
hermes tools          # 대화형 도구 설정 UI
hermes tools list     # 도구 목록
hermes chat --toolsets web,file,terminal
```

## 주요 카테고리

| 카테고리 | 예시 도구 | 설명 |
|---|---|---|
| Web | `web_search`, `web_extract` | 검색과 웹페이지 추출 |
| Browser | `browser_navigate`, `browser_click`, `browser_vision` | 실제 브라우저 자동화와 시각 검증 |
| File | `read_file`, `write_file`, `patch`, `search_files` | 파일 읽기/쓰기/검색/수정 |
| Terminal | `terminal`, `process` | 셸 명령 실행, background process 관리 |
| Media | `vision_analyze`, `image_generate`, `text_to_speech` | 이미지 분석/생성, TTS |
| Skills | `skills_list`, `skill_view`, `skill_manage` | 스킬 조회/로드/수정 |
| Memory | `memory`, `session_search` | 영구 메모리와 과거 세션 검색 |
| Automation | `cronjob`, `send_message` | 예약 작업, 메시지 전송 |
| Orchestration | `todo`, `clarify`, `delegate_task`, `execute_code` | 작업 계획, 질문, 서브에이전트, 스크립트 실행 |

## 도구 변경 적용

도구셋 변경은 보통 **새 세션부터** 적용됩니다. 현재 대화 중에 도구 목록이 바뀌면 prompt caching과 tool schema 안정성이 깨질 수 있기 때문입니다.

```text
/tools enable browser  → /reset 또는 새 hermes 실행 후 적용
hermes tools           → 다음 세션부터 적용
```

## MCP 도구

Hermes는 내장 도구 외에도 MCP 서버에서 도구를 동적으로 불러올 수 있습니다. MCP 도구는 보통 서버 이름 prefix가 붙습니다.

예:

```text
github_create_issue
notion_search
```

MCP 서버 설정은 `hermes mcp` 명령으로 관리합니다.

```bash
hermes mcp list
hermes mcp add NAME
hermes mcp test NAME
hermes mcp configure NAME
```
