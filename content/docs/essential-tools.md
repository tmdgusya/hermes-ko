# 주요 도구

이 문서는 Hermes에서 자주 쓰는 도구들을 실제 사용 관점에서 요약합니다.

## 파일 도구

| 도구 | 용도 |
|---|---|
| `read_file` | 텍스트 파일을 줄 번호와 함께 읽기 |
| `write_file` | 파일 전체를 새 내용으로 쓰기 |
| `patch` | 특정 문자열 또는 패치 기반으로 안전하게 수정 |
| `search_files` | 파일명 검색 또는 내용 검색 |

일반적인 원칙:

- 파일 내용 확인은 `read_file`
- 검색은 `search_files`
- 부분 수정은 `patch`
- 새 파일/전체 교체는 `write_file`

## 터미널 도구

| 도구 | 용도 |
|---|---|
| `terminal` | 셸 명령 실행 |
| `process` | background process poll/log/wait/kill |

장시간 서버는 shell background(`&`, `nohup`) 대신 Hermes의 background process로 실행하는 것이 좋습니다.

## 브라우저 도구

| 도구 | 용도 |
|---|---|
| `browser_navigate` | URL 열기 |
| `browser_snapshot` | 접근성 트리 기반 페이지 상태 확인 |
| `browser_click` / `browser_type` | 요소 조작 |
| `browser_console` | 콘솔 로그/JS 오류 확인 |
| `browser_vision` | 실제 화면을 시각적으로 검사 |

UI 작업 후에는 `browser_vision`으로 레이아웃, 대비, overflow, 버튼 위치를 확인하는 것이 안전합니다.

## 웹 도구

| 도구 | 용도 |
|---|---|
| `web_search` | 검색 |
| `web_extract` | 페이지 본문 추출/요약 |

단순 정보 조회는 브라우저보다 웹 도구가 빠르고 저렴합니다. 로그인/동적 UI가 필요할 때 브라우저 도구를 사용합니다.

## 스킬 도구

| 도구 | 용도 |
|---|---|
| `skills_list` | 설치된 스킬 목록 보기 |
| `skill_view` | 스킬 본문 또는 reference 파일 로드 |
| `skill_manage` | 스킬 생성/수정/삭제 |

스킬은 “절차적 기억”입니다. 반복되는 복잡한 작업은 스킬로 저장하면 다음부터 같은 시행착오를 줄일 수 있습니다.

## 메모리/세션 검색

| 도구 | 용도 |
|---|---|
| `memory` | 사용자 선호도/환경 사실 저장 |
| `session_search` | 과거 대화 검색 |

메모리는 짧고 지속적인 사실에만 사용합니다. 진행 상황이나 임시 TODO는 메모리에 저장하지 않는 것이 좋습니다.

## 자동화 도구

| 도구 | 용도 |
|---|---|
| `cronjob` | 예약 작업 생성/수정/일시중지/실행/삭제 |
| `send_message` | Telegram/Discord/Slack 등으로 메시지 전송 |

Cron 작업은 새 세션에서 실행되므로 prompt는 반드시 self-contained여야 합니다.
