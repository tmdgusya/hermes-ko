# 도구셋 설정

도구셋은 도구 묶음입니다. Hermes는 세션, 플랫폼, 작업 목적에 따라 도구셋을 다르게 로드할 수 있습니다.

## CLI에서 지정하기

```bash
hermes chat --toolsets web,file,terminal
hermes chat --toolsets debugging
hermes chat --toolsets all
```

`debugging`처럼 여러 도구셋을 묶은 composite toolset도 있습니다.

## 대화형 관리

```bash
hermes tools
hermes tools list
hermes tools enable browser
hermes tools disable image_gen
```

대화 중 slash command로도 확인할 수 있습니다.

```text
/tools list
/tools enable rl
/tools disable browser
```

변경 후에는 새 세션(`/reset` 또는 새 `hermes` 실행)이 필요할 수 있습니다.

## config.yaml 예시

```yaml
toolsets:
  - hermes-cli
```

플랫폼별 기본 도구셋을 조정할 수 있습니다. 예를 들어 Telegram gateway와 CLI는 서로 다른 도구 구성을 가질 수 있습니다.

## 핵심 도구셋

| Toolset | 대표 도구 | 목적 |
|---|---|---|
| `file` | `read_file`, `write_file`, `patch`, `search_files` | 파일 작업 |
| `terminal` | `terminal`, `process` | 셸 실행/프로세스 관리 |
| `web` | `web_search`, `web_extract` | 웹 검색/추출 |
| `browser` | `browser_navigate`, `browser_click`, `browser_vision` | 브라우저 자동화 |
| `vision` | `vision_analyze` | 이미지 분석 |
| `image_gen` | `image_generate` | 이미지 생성 |
| `tts` | `text_to_speech` | 음성 생성 |
| `skills` | `skills_list`, `skill_view`, `skill_manage` | 스킬 관리 |
| `memory` | `memory` | 영구 메모리 |
| `session_search` | `session_search` | 과거 세션 검색 |
| `delegation` | `delegate_task` | 서브에이전트 위임 |
| `cronjob` | `cronjob` | 예약 작업 |
| `clarify` | `clarify` | 사용자 확인/질문 |
| `messaging` | `send_message` | 외부 메시지 전송 |
| `safe` | read-only 성격의 web/media 도구 | 안전한 조회/미디어 작업 |

## 플랫폼 도구셋

`hermes-cli`, `hermes-telegram`, `hermes-discord` 같은 플랫폼 도구셋은 각 실행 환경에서 기본으로 노출되는 도구 구성을 의미합니다. 메시징 플랫폼에서는 보안과 UX 때문에 CLI보다 제한된 도구가 활성화될 수 있습니다.

## MCP 동적 도구셋

MCP 서버를 연결하면 `mcp-<server>` 형태의 동적 도구셋이 생길 수 있습니다.

```bash
hermes mcp list
hermes mcp configure github
```
