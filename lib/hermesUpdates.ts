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
    title: "채널 통합 — Discord 백필·버튼, WhatsApp 필터·인용, Telegram 파이널라이즈·마크다운",
    category: "채널 통합",
    summary:
      "Discord 채널에 멀티유저 세션 히스토리 백필이 도입되고 per-user·thread 단위로 확장됩니다. clarify 선택지가 버튼으로 렌더링됩니다. WhatsApp에서 status broadcasts와 channel newsletters가 에이전트 디스패치 전에 삭제되고, 인용된 답글 메타데이터가 노출됩니다. Telegram에서 최종 MarkdownV2 edit이 생략되지 않도록 REQUIRES_EDIT_FINALIZE가 설정되고, callback flows에서 동적 마크다운 이스케이프와 model-switch 성공 경로가 복구됩니다 (main branch 기준).",
    commits: [
      {
        sha: "e84fe48",
        message: "feat(discord): channel history backfill for multi-user sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/e84fe483bc958ef2ce11463d10ee57bdc2ccc5fb",
      },
      {
        sha: "4abfb6b",
        message: "feat(discord): default history backfill on, expand to per-user + threads",
        href: "https://github.com/NousResearch/hermes-agent/commit/4abfb6bc24308653e13b24dd42ea210bf0c7dd64",
      },
      {
        sha: "1dca6a6",
        message: "feat(discord): render clarify choices as buttons",
        href: "https://github.com/NousResearch/hermes-agent/commit/1dca6a6960f87b07a7d270893ac35211c97913c8",
      },
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
        sha: "d44dafd",
        message: "fix(telegram): set REQUIRES_EDIT_FINALIZE so final MarkdownV2 edit is not skipped",
        href: "https://github.com/NousResearch/hermes-agent/commit/d44dafdb4e2ea8874fd309b0b3d0780ba966cada",
      },
      {
        sha: "26deeea",
        message: "fix(telegram): restore model-switch success path + author map",
        href: "https://github.com/NousResearch/hermes-agent/commit/26deeea830eb4a4aa39651fd7b2fbb523eb2a78d",
      },
      {
        sha: "a694040",
        message: "fix(telegram): escape dynamic markdown in callback flows",
        href: "https://github.com/NousResearch/hermes-agent/commit/a6940405201e9642df24ceb7a799347ca002c9b2",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Gateway / State — 스트리밍 설정, 중복 전송 방지, 이미지 전달, clarify fallback, MCP 인증, 메시지 정렬",
    category: "Gateway / State",
    summary:
      "cosmetic edit 실패 시 중복 final send가 방지됩니다. 스트리밍 설정이 gateway.streaming 중첩 키에서 로드됩니다. 백그라운드 에이전트 태스크에 이미지 첨부파일이 전달됩니다. multi-choice clarify fallback에 text-intercept가 활성화됩니다. 초기 MCP 인증 실패 시 재시도가 중지됩니다. 메시지 정렬에 AUTOINCREMENT id가 사용됩니다 (main branch 기준).",
    commits: [
      {
        sha: "bc42e62",
        message: "fix(gateway): prevent duplicate final send when only cosmetic edit failed",
        href: "https://github.com/NousResearch/hermes-agent/commit/bc42e62b171c622eab9dc9c2d9860e24feb1fe9f",
      },
      {
        sha: "b4b8509",
        message: "fix(gateway): load streaming config from nested gateway.streaming key",
        href: "https://github.com/NousResearch/hermes-agent/commit/b4b8509fe81acf36bc1d32b8f586dc5e09e46e72",
      },
      {
        sha: "3adde24",
        message: "fix(gateway): forward image attachments to background agent tasks",
        href: "https://github.com/NousResearch/hermes-agent/commit/3adde245b72cd19061d413993c4a56138a023295",
      },
      {
        sha: "f26098e",
        message: "fix(gateway): enable text-intercept for multi-choice clarify fallback (#25567)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f26098e22f17025b9d57b176898c7d60d5b5ce8b",
      },
      {
        sha: "1247ff2",
        message: "fix: stop retrying initial MCP auth failures",
        href: "https://github.com/NousResearch/hermes-agent/commit/1247ff2dca0dbc68957ee4ad153aa34f165a184d",
      },
      {
        sha: "c03acca",
        message: "fix: use AUTOINCREMENT id for message ordering instead of timestamp",
        href: "https://github.com/NousResearch/hermes-agent/commit/c03acca508bd06c78761af2653ebef1a1448b307",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Agent 안정성 — /subgoal, 이미지 세션 분리, codex-runtime watchdog, 메모리 심볼릭, 업데이트 백엔드",
    category: "Agent 안정성",
    summary:
      "활성 /goal에 사용자 추가 기준을 덧붙이는 /subgoal 명령어가 도입됩니다. 이미지 tool 결과가 text-only 세션을 오염시키지 않도록 분리됩니다. codex-runtime에서 wedged session이 retired되고 post-tool watchdog이 추가됩니다. codex-app-server에서 generic failure에 redacted stderr tail이 첨부됩니다. 메모리 업로드에서 OpenViking 심볼릭 링크가 건너뛰어집니다. hermes update 시 lazy-installed 백엔드가 새로고침됩니다. Gemini CloudCode reasoning-only 스트림 청크에 seed delta 기본값이 설정됩니다 (main branch 기준).",
    commits: [
      {
        sha: "8f19078",
        message: "feat(goals): /subgoal — user-added criteria appended to active /goal (#25449)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8f19078c6ad72300676376f5824fcf50cd9b693b",
      },
      {
        sha: "a28add1",
        message: "fix(agent): keep image tool results from poisoning text-only sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/a28add199d3d4bb29482723256f9e6c00f93d213",
      },
      {
        sha: "12f755c",
        message: "fix(codex-runtime): retire wedged sessions + post-tool watchdog + OAuth refresh classify (#25769)",
        href: "https://github.com/NousResearch/hermes-agent/commit/12f755c9eb56a7927065c305699fc983bc1d998a",
      },
      {
        sha: "fe83c40",
        message: "fix(codex-app-server): attach redacted stderr tail to generic failures (#25929)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fe83c4001bb77cdda5c0922805455e2ec9c9ffd5",
      },
      {
        sha: "63991bb",
        message: "fix(memory): skip OpenViking upload symlinks",
        href: "https://github.com/NousResearch/hermes-agent/commit/63991bbd9751015f459dbb27e0440b14c1c77e3a",
      },
      {
        sha: "72b5dd8",
        message: "fix(update): refresh lazy-installed backends on hermes update (#25766)",
        href: "https://github.com/NousResearch/hermes-agent/commit/72b5dd865865f2d2c9f5b492bcac9dcdaf045d34",
      },
      {
        sha: "26933c2",
        message: "fix(agent/gemini-cloudcode): seed delta defaults for reasoning-only stream chunks",
        href: "https://github.com/NousResearch/hermes-agent/commit/26933c2f592bda25df735c555620a2a978cfefb6",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "CLI / TUI — /sessions 명령, 리사이즈 재생, 스크롤백, 음성 모드, 승인 타임아웃, 키 교체",
    category: "CLI / TUI",
    summary:
      "클래식 CLI에 /sessions 슬래시 명령어가 연결됩니다. 리사이즈 시 ansi 출력 히스토리가 보존되고 배치 리사이즈 재생이 적용됩니다. 스크롤백 박스 너비가 제한됩니다. CLI 승인 콜백에서 approvals.timeout이 config에서 읽힙니다. CLI 음성 모드에서 per-tool-call beep가 제거됩니다. hermes model flow에서 고장난 OpenRouter/AI Gateway 키 교체가 허용됩니다 (main branch 기준).",
    commits: [
      {
        sha: "d6c488f",
        message: "fix(cli): wire /sessions slash command in the classic CLI",
        href: "https://github.com/NousResearch/hermes-agent/commit/d6c488f2dce96a1d1375c8e7e089b54a1e7ae6f4",
      },
      {
        sha: "ac64d0c",
        message: "fix: preserve ansi output history on resize replay",
        href: "https://github.com/NousResearch/hermes-agent/commit/ac64d0c2caa1c7d83c2e5022a1b7612f0148021a",
      },
      {
        sha: "06c6c1f",
        message: "fix(cli): batch resize history replay",
        href: "https://github.com/NousResearch/hermes-agent/commit/06c6c1f0f2d9872b02f86c6cd8279354aaf4dd9f",
      },
      {
        sha: "2844c88",
        message: "fix(cli): clamp scrollback box widths + suppress status bar after resize (#25975)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2844c888f1bb890a154cd3c25725581ca9d3e62e",
      },
      {
        sha: "8ae65d5",
        message: "fix: read approvals.timeout from config in CLI approval callback",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ae65d5c8cf13047a4c2723d5eb44a2391b3c932",
      },
      {
        sha: "6244535",
        message: "fix(voice): remove per-tool-call beep in CLI voice mode (#25967)",
        href: "https://github.com/NousResearch/hermes-agent/commit/62445356822cd449c4235dc8e2f543c88c106a4d",
      },
      {
        sha: "17e0e9d",
        message: "fix(cli): allow rotating broken OpenRouter / AI Gateway key in `hermes model` flow (#25750)",
        href: "https://github.com/NousResearch/hermes-agent/commit/17e0e9d174b22c55d02db42c8ada5a035b220a57",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Proxy / Web / LSP — OAuth 로컬 프록시, 크로스 플랫폼 에셋, Windows 인코딩, LSP 진단",
    category: "Proxy / Web / LSP",
    summary:
      "OAuth 프로바이더를 위한 로컬 OpenAI 호환 프록시가 도입됩니다. guarded add_signal_handler에 대한 Windows false-positive 경고가 억제됩니다. sync-assets 스크립트가 크로스 플랫폼으로 동작하고 빌드 실패 시 에러가 표시됩니다. Windows에서 non-UTF8 콘솔 인코딩이 처리됩니다. LSP baseline diagnostics가 post-edit 좌표로 이동됩니다. TUI에서 same-dimension alt-screen resize drift가 복구됩니다 (main branch 기준).",
    commits: [
      {
        sha: "ccb5aae",
        message: "feat(proxy): local OpenAI-compatible proxy for OAuth providers (#25969)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ccb5aae0d2b70206556fb57b72f38157cbbdaaa0",
      },
      {
        sha: "09d9701",
        message: "fix(proxy): suppress false-positive windows-footgun on guarded add_signal_handler",
        href: "https://github.com/NousResearch/hermes-agent/commit/09d970160bb22748fc9ff3e0759d151e4ea3a907",
      },
      {
        sha: "ed84637",
        message: "fix(web): make sync-assets script cross-platform",
        href: "https://github.com/NousResearch/hermes-agent/commit/ed84637d11412db82c5756a7245d2ee5c1a1ada6",
      },
      {
        sha: "0854640",
        message: "fix(web): cross-platform sync-assets + surface build errors on failure",
        href: "https://github.com/NousResearch/hermes-agent/commit/0854640537ea1a33b785b142d41e71c6e726cf2a",
      },
      {
        sha: "38ea2a5",
        message: "fix(web): handle non-UTF8 Windows console encodings in _build_web_ui",
        href: "https://github.com/NousResearch/hermes-agent/commit/38ea2a57a522860c19296531c5aa475236747d2d",
      },
      {
        sha: "1907152",
        message: "fix(lsp): shift baseline diagnostics into post-edit coordinates (#25978)",
        href: "https://github.com/NousResearch/hermes-agent/commit/19071529f65f026f29646c221dcf61274e9a0213",
      },
      {
        sha: "4813aaf",
        message: "fix(ui-tui): heal same-dimension alt-screen resize drift",
        href: "https://github.com/NousResearch/hermes-agent/commit/4813aaf0ba5902ea185b1927d30a59647b4c769a",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Config / 설치 / 보안 — NovitaAI, .env 권한, non-sudo 설치, Windows pip, 터미널 필터",
    category: "Config / 설치",
    summary:
      "NovitaAI가 새로운 LLM 프로바이더로 추가됩니다. .env 파일 권한이 0600으로 제한됩니다. apt 배포판에서 non-sudo 서비스 사용자 설치가 지원됩니다. Windows install.ps1에서 uv sync가 venv에 고정되고 baseline imports가 검증됩니다. symlinked install 재실행 시 pip entry point가 보존됩니다. 터미널 safety filter에서 따옴표 안의 키워드에 대한 오탐이 방지됩니다 (main branch 기준).",
    commits: [
      {
        sha: "c76e879",
        message: "feat: add NovitaAI as LLM provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/c76e8795744a00208c683b2c6319902416bce1a8",
      },
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
        message: "fix(install.ps1): pin uv sync to venv, verify baseline imports on Windows (#25755)",
        href: "https://github.com/NousResearch/hermes-agent/commit/524490a40937c2a74d7969842a31acaba8d11124",
      },
      {
        sha: "c75e1a0",
        message: "fix(install): preserve pip entry point when re-running on symlinked install",
        href: "https://github.com/NousResearch/hermes-agent/commit/c75e1a03f9dacd96f5b822ef2102789c926059e7",
      },
      {
        sha: "364ddd4",
        message: "fix(terminal): prevent safety filter false positives on keywords inside quoted strings",
        href: "https://github.com/NousResearch/hermes-agent/commit/364ddd45e8dbfbcdf365794e7ca8e3a3e49de100",
      },
    ],
  },
];
