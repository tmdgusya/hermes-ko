# 성격 & SOUL.md

Hermes의 기본 성격과 말투는 `SOUL.md`로 정의할 수 있습니다. 기본 위치는 다음입니다.

```text
~/.hermes/SOUL.md
```

이 파일은 에이전트의 정체성, 응답 톤, 기본 원칙을 담습니다.

## 예시

```markdown
# Agent Persona

You are a concise technical assistant.
Prefer Korean when the user writes in Korean.
When making UI changes, verify visually before finalizing.
```

## 무엇을 넣으면 좋나요?

- 선호 언어/말투
- 응답 길이 경향
- 작업 방식 원칙
- 검증 습관
- 피해야 할 행동

## 무엇을 넣으면 안 되나요?

- API key, token, password
- 프로젝트별 긴 문서 전문
- 매번 바뀌는 TODO
- 모델이 절대 어기면 안 되는 보안 우회 지시

## 적용 시점

`SOUL.md` 변경은 새 세션부터 적용됩니다. CLI에서는 새 `hermes` 실행 또는 `/reset`이 필요할 수 있고, gateway는 재시작이 필요할 수 있습니다.

```bash
hermes gateway restart
```

## config와의 관계

`SOUL.md`는 성격/정체성이고, `config.yaml`은 동작 설정입니다.

| 파일 | 용도 |
|---|---|
| `~/.hermes/SOUL.md` | 말투, 성격, 행동 원칙 |
| `~/.hermes/config.yaml` | provider, model, terminal, tools, memory 설정 |
| `~/.hermes/.env` | API keys, secrets |
