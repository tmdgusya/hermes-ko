export type HermesUpdate = {
  date: string;
  title: string;
  summary: string;
  category: string;
  commits: Array<{
    sha: string;
    message: string;
    href: string;
  }>;
};

export const hermesUpdatesLastChecked = "2026-05-15"; // last new commit: 2026-05-14

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-14",
    title: "채널 통합 — WhatsApp 상태·채널 방송 필터링, Discord clarify 버튼·메시지 전달, Telegram 마크다운·모델 전환",
    category: "채널 통합",
    summary:
      "WhatsApp에서 status broadcasts와 channel newsletters가 에이전트 디스패치 전에 삭제됩니다. WhatsApp에서 인용된 답글 메타데이터가 노출됩니다. Discord에서 clarify 선택지가 버튼으로 렌더링되고, message_snapshots를 통해 전달된 메시지가 처리됩니다. Telegram에서 동적 마크다운이 callback flow에서 이스케이프되고, 모델 전환 성공 경로가 복원됩니다 (main branch 기준).",
    commits: [
      {
        sha: "9ed751b",
        message: "fix(whatsapp): drop status broadcasts and channel newsletters before agent dispatch (#25845)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9ed751b96706ffd343ae26531cd0e2152a1c7036",
      },
      {
        sha: "bd33a48",
        message: "feat(whatsapp): surface quoted reply metadata",
        href: "https://github.com/NousResearch/hermes-agent/commit/bd33a48a5839f235f17ffa1cc2542852ce55067f",
      },
      {
        sha: "1dca6a6",
        message: "feat(discord): render clarify choices as buttons",
        href: "https://github.com/NousResearch/hermes-agent/commit/1dca6a6960f87b07a7d270893ac35211c97913c8",
      },
      {
        sha: "b59ed9c",
        message: "fix(discord): handle forwarded messages via message_snapshots",
        href: "https://github.com/NousResearch/hermes-agent/commit/b59ed9c6bc564e1158875dc795141405c4ed927d",
      },
      {
        sha: "26deeea",
        message: "fix(telegram): restore model-switch success path + author map",
        href: "https://github.com/NousResearch/hermes-agent/commit/26deeea830eb4a4aa39651fd7b2fbb523eb2a78d",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Gateway / State — QQBot·Feishu·이미지 첨부·multi-choice clarify·MCP 인증·ACP 승인·PID·api_mode",
    category: "Gateway / State",
    summary:
      "QQBot 재연결 루프가 유지되도록 수정됩니다. Feishu WebSocket connect 오버라이드가 동기화되어 컨텍스트 매니저가 보존됩니다. 백그라운드 에이전트 태스크에 이미지 첨부가 전달됩니다. multi-choice clarify fallback에 text-intercept가 활성화됩니다. 초기 MCP 인증 실패 시 재시도가 중지됩니다. 프로바이더 간 위임 시 api_mode가 상승되지 않도록 수정됩니다. ACP approval bridging이 간소화됩니다. Windows에서 gateway PID 탐지 실패가 수정됩니다 (main branch 기준).",
    commits: [
      {
        sha: "8199ec3",
        message: "fix(gateway): keep QQBot reconnect loop alive",
        href: "https://github.com/NousResearch/hermes-agent/commit/8199ec38034a675a20278261b76cf0fe42316a7d",
      },
      {
        sha: "71191b7",
        message: "fix(gateway): make Feishu ws connect override sync to preserve context manager",
        href: "https://github.com/NousResearch/hermes-agent/commit/71191b7e8e075037a814f77d37d4609e97f12029",
      },
      {
        sha: "f26098e",
        message: "fix(gateway): enable text-intercept for multi-choice clarify fallback (#25567)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f26098e22f17025b9d57b176898c7d60d5b5ce8b",
      },
      {
        sha: "f0e46c5",
        message: "fix: do not inherit api_mode when delegating across providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0e46c5e9e8d4f780561554684e33810fc4f2f8f",
      },
      {
        sha: "31b4721",
        message: "fix: simplify ACP approval bridging",
        href: "https://github.com/NousResearch/hermes-agent/commit/31b4721791aa163c80b5f78a7fb2f1fb3530d434",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Agent 안정성 — /subgoal·MiMo·컨텍스트 압축·codex-runtime watchdog·클립보드 PNG·auxiliary·Gemini 스트림",
    category: "Agent 안정성",
    summary:
      "활성 /goal에 사용자 추가 기준을 덧붙이는 /subgoal 명령어가 도입됩니다. Xiaomi MiMo가 reasoning_content echo-back 프로바이더에 추가됩니다. 컨텍스트 압축 상태가 표시됩니다. Gemini CloudCode reasoning-only 스트림 청크에 seed delta 기본값이 설정됩니다. codex-runtime에서 wedged session이 retired되고 post-tool watchdog과 OAuth refresh classify가 추가됩니다. 클립보드 PNG 시그니처 읽기와 non-PNG 거부가 수정됩니다. 자격 증명 없는 프로바이더가 즉시 스킵되고, auxiliary compression model에 custom_providers가 전달됩니다. AUTOINCREMENT id로 메시지 정렬이 보장됩니다. CLI approval callback에서 approvals.timeout이 config에서 읽힙니다. 스킨 YAML 파싱이 강화되고 background-review teardown 누수가 방지됩니다. hermes update 시 lazy-installed backend가 새로고침됩니다 (main branch 기준).",
    commits: [
      {
        sha: "8f19078",
        message: "feat(goals): /subgoal — user-added criteria appended to active /goal (#25449)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8f19078c6ad72300676376f5824fcf50cd9b693b",
      },
      {
        sha: "efa97af",
        message: "fix(agent): add Xiaomi MiMo to reasoning_content echo-back providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/efa97af7e25f0cbef92ed15bbcb47e4788c83058",
      },
      {
        sha: "12f755c",
        message: "fix(codex-runtime): retire wedged sessions + post-tool watchdog + OAuth refresh classify (#25769)",
        href: "https://github.com/NousResearch/hermes-agent/commit/12f755c9eb56a7927065c305699fc983bc1d998a",
      },
      {
        sha: "d110ce4",
        message: "fix(clipboard): only read PNG signature bytes, not entire file",
        href: "https://github.com/NousResearch/hermes-agent/commit/d110ce44933446eff800e6100fc54ccae821c4ad",
      },
      {
        sha: "72b5dd8",
        message: "fix(update): refresh lazy-installed backends on hermes update (#25766)",
        href: "https://github.com/NousResearch/hermes-agent/commit/72b5dd865865f2d2c9f5b492bcac9dcdaf045d34",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Config / Docs — NovitaAI LLM 프로바이더, honcho 프로파일, model 키 교체, 미디어 컨텍스트 문서, AUTHOR_MAP",
    category: "Config / Docs",
    summary:
      "NovitaAI가 새로운 LLM 프로바이더로 추가되고, '90+ models, pay-per-use' 설명과 캐시 가격·테스트 커버리지가 추가됩니다. hermes model flow에서 고장난 OpenRouter/AI Gateway 키 교체가 허용됩니다. honcho의 HOME-기반 기본 프로파일 폴백이 존중됩니다. 미디어가 세션 컨텍스트에 미치는 영향에 대한 문서가 추가됩니다. LSP 문서와 tirith 링크가 수정됩니다. 25-PR 신규 기여자와 oswaldb22, mrshu에 대한 AUTHOR_MAP 항목이 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "c76e879",
        message: "feat: add NovitaAI as LLM provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/c76e8795744a00208c683b2c6319902416bce1a8",
      },
      {
        sha: "17e0e9d",
        message: "fix(cli): allow rotating broken OpenRouter / AI Gateway key in `hermes model` flow (#25750)",
        href: "https://github.com/NousResearch/hermes-agent/commit/17e0e9d174b22c55d02db42c8ada5a035b220a57",
      },
      {
        sha: "1dd3398",
        message: "docs: clarify media impact on session context",
        href: "https://github.com/NousResearch/hermes-agent/commit/1dd33988e26d8f16fb752b3c014a8509b2db569e",
      },
      {
        sha: "2ff744a",
        message: "chore(release): add AUTHOR_MAP entries for 25-PR new-contributor batch",
        href: "https://github.com/NousResearch/hermes-agent/commit/2ff744ae2c4e9f54058c0b1ec42e0511586be574",
      },
      {
        sha: "8de26e2",
        message: "docs(lsp): replace \"git worktree\" with \"git repository\" in LSP docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/8de26e280ed8126194dbbccaf9969ae5979c0aed",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "설치 / 보안 — .env 권한 제한, Windows install.ps1, non-sudo 서비스 사용자, pip 엔트리 포인트, 터미널 safety filter",
    category: "설치 / 보안",
    summary:
      ".env 파일 권한이 0600으로 제한됩니다. Windows install.ps1에서 uv sync가 venv에 고정되고 기본 import가 검증됩니다. apt 배포판에서 non-sudo 서비스 사용자 설치가 지원됩니다. symlinked install 재실행 시 pip entry point가 보존됩니다. 터미널 safety filter에서 따옴표 안의 키워드에 대한 오탐이 방지됩니다. OpenViking 업로드에서 심볼릭 링크가 스킵됩니다 (main branch 기준).",
    commits: [
      {
        sha: "a952ca3",
        message: "fix: restrict .env file permissions to 0600",
        href: "https://github.com/NousResearch/hermes-agent/commit/a952ca3ff6af24f867737094d2d13ab2a3ba3bbe",
      },
      {
        sha: "78b842c",
        message: "fix(install): support non-sudo service-user installs on apt distros (#25814)",
        href: "https://github.com/NousResearch/hermes-agent/commit/78b842c995d70fccb7fd1113f85e766c1483e562",
      },
      {
        sha: "524490a",
        message: "fix(install.ps1): pin uv sync to venv\\, verify baseline imports on Windows (#25755)",
        href: "https://github.com/NousResearch/hermes-agent/commit/524490a40937c2a74d7969842a31acaba8d11124",
      },
      {
        sha: "364ddd4",
        message: "fix(terminal): prevent safety filter false positives on keywords inside quoted strings",
        href: "https://github.com/NousResearch/hermes-agent/commit/364ddd45e8dbfbcdf365794e7ca8e3a3e49de100",
      },
      {
        sha: "63991bb",
        message: "fix(memory): skip OpenViking upload symlinks",
        href: "https://github.com/NousResearch/hermes-agent/commit/63991bbd9751015f459dbb27e0440b14c1c77e3a",
      },
    ],
  },
];
