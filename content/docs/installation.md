# 설치

Hermes Agent는 Linux, macOS, WSL2, Android Termux에서 설치할 수 있습니다. Native Windows는 지원하지 않으며, Windows 사용자는 WSL2 안에서 설치해야 합니다.

## 빠른 설치

### Linux / macOS / WSL2 / Termux

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

설치 후 셸 설정을 다시 로드합니다.

```bash
source ~/.bashrc   # bash 사용자
source ~/.zshrc    # zsh 사용자
```

그리고 실행합니다.

```bash
hermes
```

## 설치 프로그램이 하는 일

공식 설치 스크립트는 필요한 구성 요소를 자동으로 준비합니다.

- Hermes Agent 저장소 클론
- Python/uv 기반 가상환경 구성
- Node.js, ripgrep, ffmpeg 등 필요한 의존성 준비
- 전역 `hermes` 명령 연결
- 초기 모델/프로바이더 설정 흐름 안내

Termux에서는 Android 환경을 감지해 `pkg`, `python -m venv`, Android wheel 빌드용 환경값 등을 사용합니다.

## 설치 위치

| 설치 방식 | 코드 위치 | `hermes` 명령 | 데이터 디렉터리 |
|---|---|---|---|
| 일반 사용자 설치 | `~/.hermes/hermes-agent/` | `~/.local/bin/hermes` symlink | `~/.hermes/` |
| root/system 설치 | `/usr/local/lib/hermes-agent/` | `/usr/local/bin/hermes` | `/root/.hermes/` 또는 `$HERMES_HOME` |

일반적으로는 사용자 설치를 권장합니다.

## 설치 후 확인

```bash
hermes doctor          # 의존성/설정 점검
hermes config path     # config.yaml 위치 확인
hermes config env-path # .env 위치 확인
hermes model           # 모델/프로바이더 선택
hermes tools           # 도구 활성화/비활성화
```

## 문제 해결

| 문제 | 해결 |
|---|---|
| `hermes: command not found` | 셸 재로드: `source ~/.bashrc` 또는 `source ~/.zshrc` |
| API 키가 없다고 나옴 | `hermes model`로 프로바이더 설정 또는 `hermes config set OPENROUTER_API_KEY ...` |
| 업데이트 후 설정 누락 | `hermes config check` 후 `hermes config migrate` |
| Windows에서 실행 불가 | Native Windows 대신 WSL2 내부에서 설치 |

더 자세한 진단은 다음 명령을 사용합니다.

```bash
hermes doctor --fix
```
