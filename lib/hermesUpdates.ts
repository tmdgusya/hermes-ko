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

export const hermesUpdatesLastChecked = "2026-05-15"; // last new commit: 2026-05-15

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-15",
    title: "ACP / Auth — Zed 에디터용 ACP Registry 메타데이터, 인증 불가 경고 표시",
    category: "ACP / Auth",
    summary:
      "Zed 에디터 지원을 위한 ACP Registry 메타데이터가 추가되고, pyproject와 lockstep으로 에셋이 관리됩니다. auxiliary client에서 Nous 인증 불가 시 경고가 표시됩니다 (main branch 기준).",
    commits: [
      {
        sha: "4c94396",
        message: "feat: add ACP registry metadata for Zed",
        href: "https://github.com/NousResearch/hermes-agent/commit/4c94396206965580e808ceb39ae1fe007511a898",
      },
      {
        sha: "d364132",
        message: "chore(release): bump ACP Registry assets in lockstep with pyproject",
        href: "https://github.com/NousResearch/hermes-agent/commit/d36413211449057c28aaaab52a2be5133bc59ef7",
      },
      {
        sha: "e8b9f5f",
        message: "fix(aux): surface Nous auth-unavailable warning in auxiliary client",
        href: "https://github.com/NousResearch/hermes-agent/commit/e8b9f5ff9a19f399229856e9fd5d0823a1275927",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Browser — 사전 설정 인자 유지, --no-sandbox 바이패스 환경변수 수정",
    category: "Browser",
    summary:
      "사전 설정된 AGENT_BROWSER_ARGS 환경변수가 존중되고 바이패스 방법이 문서화됩니다. --no-sandbox 바이패스에 올바른 환경변수가 사용됩니다 (main branch 기준).",
    commits: [
      {
        sha: "4695d27",
        message: "fix(browser): honor pre-set AGENT_BROWSER_ARGS and document the bypass",
        href: "https://github.com/NousResearch/hermes-agent/commit/4695d2716f60da89152bdc9dfa7d96e54ea7c22e",
      },
      {
        sha: "8ed2ef6",
        message: "fix(browser): use correct env var for --no-sandbox bypass",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ed2ef6f46e9642acfba57b4b8da893a574ecfd0",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Gateway / State — 스트리밍 설정, 중복 전송 방지, clarify fallback, MCP 인증, 메시지 정렬",
    category: "Gateway / State",
    summary:
      "cosmetic edit 실패 시 중복 final send가 방지됩니다. 스트리밍 설정이 gateway.streaming 중첩 키에서 로드됩니다. multi-choice clarify fallback에 text-intercept가 활성화됩니다. 초기 MCP 인증 실패 시 재시도가 중지됩니다. 메시지 정렬에 AUTOINCREMENT id가 사용됩니다 (main branch 기준).",
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
    title: "Agent 안정성 — /subgoal, 이미지 세션 분리, codex-runtime watchdog, codex-app-server, Gemini 스트림",
    category: "Agent 안정성",
    summary:
      "활성 /goal에 사용자 추가 기준을 덧붙이는 /subgoal 명령어가 도입됩니다. 이미지 tool 결과가 text-only 세션을 오염시키지 않도록 분리됩니다. codex-runtime에서 wedged session이 retired되고 post-tool watchdog이 추가됩니다. codex-app-server에서 generic failure에 redacted stderr tail이 첨부됩니다. Gemini CloudCode reasoning-only 스트림 청크에 seed delta 기본값이 설정됩니다 (main branch 기준).",
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
        sha: "26933c2",
        message: "fix(agent/gemini-cloudcode): seed delta defaults for reasoning-only stream chunks",
        href: "https://github.com/NousResearch/hermes-agent/commit/26933c2f592bda25df735c555620a2a978cfefb6",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "CLI / TUI — /sessions 명령, 리사이즈 재생, 스크롤백, 음성 모드, SelectSelector 폴백",
    category: "CLI / TUI",
    summary:
      "클래식 CLI에 /sessions 슬래시 명령어가 연결됩니다. 리사이즈 시 ansi 출력 히스토리가 보존되고 스크롤백 박스 너비가 제한됩니다. CLI 음성 모드에서 per-tool-call beep가 제거됩니다. kqueue로 stdin을 감시할 수 없는 환경에서 SelectSelector로 폴백됩니다 (main branch 기준).",
    commits: [
      {
        sha: "eabd8c1",
        message: "fix(cli): fall back to SelectSelector when kqueue can't watch stdin",
        href: "https://github.com/NousResearch/hermes-agent/commit/eabd8c1fd12d6e386d636e564444ef661ce99e81",
      },
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
        sha: "2844c88",
        message: "fix(cli): clamp scrollback box widths + suppress status bar after resize (#25975)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2844c888f1bb890a154cd3c25725581ca9d3e62e",
      },
      {
        sha: "6244535",
        message: "fix(voice): remove per-tool-call beep in CLI voice mode (#25967)",
        href: "https://github.com/NousResearch/hermes-agent/commit/62445356822cd449c4235dc8e2f543c88c106a4d",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "Proxy / Web / LSP — OAuth 로컬 프록시, 크로스 플랫폼 에셋, Windows 인코딩, LSP 진단",
    category: "Proxy / Web / LSP",
    summary:
      "OAuth 프로바이더를 위한 로컬 OpenAI 호환 프록시가 도입됩니다. sync-assets 스크립트가 크로스 플랫폼으로 동작하고 빌드 실패 시 에러가 표시됩니다. Windows에서 non-UTF8 콘솔 인코딩이 처리됩니다. LSP baseline diagnostics가 post-edit 좌표로 이동됩니다. TUI에서 same-dimension alt-screen resize drift가 복구됩니다 (main branch 기준).",
    commits: [
      {
        sha: "ccb5aae",
        message: "feat(proxy): local OpenAI-compatible proxy for OAuth providers (#25969)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ccb5aae0d2b70206556fb57b72f38157cbbdaaa0",
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
];
