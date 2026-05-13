# X/Twitter 자동화

Hermes에서 X/Twitter 검색, 모니터링, 계정 조회, 답글 확인, 팔로워 내보내기, 게시물 작성 같은 작업을 하려면 별도 플러그인을 연결하는 방식이 안전합니다.

[Hermes Tweet](https://github.com/Xquik-dev/hermes-tweet)은 Xquik을 통해 X/Twitter 작업을 Hermes 도구로 노출하는 Hermes Agent X/Twitter plugin입니다.

## 설치

Hermes가 설치된 환경에서 다음 명령을 실행합니다.

```bash
hermes plugins install Xquik-dev/hermes-tweet --enable
```

대화형 설치에서는 `XQUIK_API_KEY` 저장을 물어볼 수 있습니다.

비대화형 환경이나 cron/gateway 환경에서는 먼저 `~/.hermes/.env` 또는 프로세스 환경에 값을 넣고 Hermes 세션을 다시 시작합니다.

```bash
XQUIK_API_KEY=...
```

API key, 계정 비밀번호, cookie는 prompt, README, issue, 공개 로그에 쓰지 않습니다.

## 제공 도구

Hermes Tweet은 보통 다음 도구 흐름으로 사용합니다.

| 도구 | 용도 |
|---|---|
| `tweet_explore` | 사용 가능한 Xquik endpoint catalog 검색 |
| `tweet_read` | 읽기 전용 API 호출 |
| `tweet_action` | 게시, 답글, DM, 팔로우 같은 계정 액션 |

기본 원칙은 먼저 `tweet_explore`로 endpoint를 찾고, 읽기 작업은 `tweet_read`로 실행하는 것입니다.

`tweet_action`은 사람의 확인이 끝난 뒤에만 사용합니다.

## 읽기 전용으로 시작하기

처음에는 검색과 조회만 켭니다.

예시 prompt:

```text
Hermes Tweet으로 search Twitter/X 해서 최근 Hermes Agent 관련 tweet을 찾아줘. tweet_action은 호출하지 말고, 관련 tweet URL과 요약만 정리해줘.
```

```text
Hermes Tweet으로 특정 계정을 look up users 하고 최근 tweet replies를 읽어줘. 답글 초안은 만들어도 보내지 마.
```

읽기 전용 작업 예:

- search tweets
- search Twitter/X
- read tweet replies
- look up users
- monitor tweets
- export followers

## 게시와 DM은 확인 후 실행

게시, 답글, DM, 팔로우, 모니터 설정 변경은 계정에 영향을 주는 작업입니다.

실행 전에는 최소한 아래 항목을 확인합니다.

- 사용할 X/Twitter 계정
- 보낼 tweet, reply, DM 본문
- 대상 tweet 또는 사용자
- 링크, 이미지, 해시태그
- 예약 또는 즉시 실행 여부

확인 후에만 다음처럼 요청합니다.

```text
이 tweet 본문과 계정을 확인했어. Hermes Tweet의 tweet_action으로 post tweets를 실행해줘.
```

```text
이 답글 3개만 확인 완료. Hermes Tweet으로 replies를 보내고, 결과 URL을 표로 정리해줘.
```

## cron에서의 안전 설정

예약 작업에서는 기본적으로 읽기 전용을 권장합니다.

좋은 cron 작업:

- 키워드로 monitor tweets
- 경쟁사나 프로젝트 계정의 최근 게시물 요약
- 특정 topic의 tweet replies 요약
- 팔로워 export 후 변화량 보고

위험한 cron 작업:

- 확인 없이 post tweets
- 확인 없이 send DMs
- 확인 없이 reply나 follow 실행
- 사람이 검토하지 않은 자동 홍보 메시지 발송

자동 게시가 필요하다면 Hermes가 먼저 초안을 만들고, 사람이 확인한 뒤 별도 세션에서 `tweet_action`을 실행하는 구조로 나눕니다.

## 문제 해결

도구가 보이지 않으면 새 Hermes 세션을 시작한 뒤 확인합니다.

```bash
hermes tools list
```

`XQUIK_API_KEY`를 방금 추가했다면 `/reload`를 실행하거나 gateway, cron 세션을 재시작합니다.

`tweet_action`이 보이지 않는 것은 정상일 수 있습니다. 액션 도구는 안전을 위해 별도 활성화가 필요할 수 있습니다.
