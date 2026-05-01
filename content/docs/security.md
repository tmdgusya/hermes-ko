# 보안

Hermes는 파일, 터미널, 브라우저, 메시징 플랫폼에 접근할 수 있는 에이전트이므로 보안 설정이 중요합니다.

## 기본 원칙

- Secret은 `~/.hermes/.env`에 둡니다.
- 일반 설정은 `~/.hermes/config.yaml`에 둡니다.
- 위험한 터미널 명령은 approval 정책의 영향을 받습니다.
- 도구셋은 필요한 만큼만 활성화합니다.
- 변경 후에는 새 세션 또는 gateway restart가 필요할 수 있습니다.

## Secret redaction

Hermes는 도구 출력에서 API key, token, password처럼 보이는 문자열을 자동 redaction합니다. 이 값은 모델에게 원문이 전달되지 않도록 하기 위한 안전장치입니다.

설정 예시:

```bash
hermes config set security.redact_secrets true
```

비활성화도 가능하지만 권장하지 않습니다.

```bash
hermes config set security.redact_secrets false
```

> 주의: secret redaction은 실행 중인 세션에서 즉시 꺼지지 않을 수 있습니다. 새 세션/재시작이 필요합니다.

## PII redaction

Gateway 메시지에서 사용자 ID, 전화번호 같은 PII를 줄이려면 다음 설정을 사용할 수 있습니다.

```bash
hermes config set privacy.redact_pii true
```

## 명령 승인 모드

터미널 명령 승인 정책은 `approvals.mode`로 관리합니다.

```bash
hermes config set approvals.mode manual  # 기본: 위험 명령 수동 확인
hermes config set approvals.mode smart   # 보조 모델이 저위험 명령 자동 승인
hermes config set approvals.mode off     # 승인 생략, 주의 필요
```

일회성으로 approval을 건너뛰려면:

```bash
hermes --yolo
```

`--yolo` 또는 `approvals.mode: off`는 secret redaction을 끄지 않습니다. 둘은 별도 기능입니다.

## 도구 제한

네트워크, 브라우저, 이미지 생성, 터미널 같은 도구는 필요할 때만 켜는 것이 안전합니다.

```bash
hermes tools
hermes tools disable terminal
hermes tools disable browser
```

변경 후 새 세션(`/reset`)을 시작하세요.

## 터미널 backend로 격리하기

로컬 머신에서 직접 실행하는 것이 부담스럽다면 Docker, SSH, Modal, Daytona, Vercel Sandbox 같은 backend를 사용할 수 있습니다.

```yaml
terminal:
  backend: docker
  docker_image: python:3.11-slim
```

SSH backend는 에이전트가 자기 자신의 코드/홈 디렉터리를 수정하지 못하게 분리하는 데 유용합니다.

```yaml
terminal:
  backend: ssh
```

SSH secret은 `~/.hermes/.env`에 둡니다.

```bash
TERMINAL_SSH_HOST=my-server.example.com
TERMINAL_SSH_USER=myuser
TERMINAL_SSH_KEY=~/.ssh/id_rsa
```

## Gateway 보안

Gateway를 쓰는 경우:

```bash
hermes gateway status
hermes gateway restart
```

플랫폼별로 bot token, app secret, webhook secret은 모두 `~/.hermes/.env`에 두어야 합니다. Discord는 Message Content Intent 같은 플랫폼 설정도 필요할 수 있습니다.

## 로그

로그는 기본적으로 다음 위치에 있습니다.

```text
~/.hermes/logs/
```

문제 확인:

```bash
grep -i "failed to send\|error" ~/.hermes/logs/gateway.log | tail -20
```

로그를 공유할 때도 secret이 없는지 다시 확인하세요.
