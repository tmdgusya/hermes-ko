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
    title: "ACP — uvx 배포 전환, Zed용 Registry 메타데이터, 인증 경고, Atropos RL 제거",
    category: "ACP / Auth",
    summary:
      "ACP Registry가 npm launcher 대신 uvx 배포 방식으로 전환됩니다. Zed 에디터 지원을 위한 ACP Registry 메타데이터가 추가되고, pyproject와 lockstep으로 에셋이 관리됩니다. auxiliary client에서 Nous 인증 불가 시 경고가 표시됩니다. Atropos RL 환경과 tinker-atropos 통합이 제거됩니다 (main branch 기준).",
    commits: [
      {
        sha: "c8c6ce1",
        message: "feat(acp-registry): switch to uvx distribution, drop npm launcher",
        href: "https://github.com/NousResearch/hermes-agent/commit/c8c6ce17315c0f8512cec6f0bc8120141acdf830",
      },
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
      {
        sha: "5af672c",
        message: "chore: remove Atropos RL environments and tinker-atropos integration (#26106)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5af672c7530263544a9f5e2479f3853d83b3b798",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "CLI / TUI — 리사이즈 안정화, 라이트모드 가시성, alt-screen drift 수정, 배치 리플레이",
    category: "CLI / TUI",
    summary:
      "리사이즈 시 스크롤백 복제가 해결되고 라이트모드 가시성이 개선됩니다. 기존 스크롤백 박스 너비 제한이 revert되어 전체 너비 경계가 복원됩니다. 리사이즈 시 ansi 출력 히스토리가 보존됩니다. same-dimension alt-screen resize drift가 수정되고, 리사이즈 히스토리 리플레이가 배치로 처리됩니다 (main branch 기준).",
    commits: [
      {
        sha: "f8745f5",
        message: "fix(cli): kill resize scrollback duplication + light-mode visibility",
        href: "https://github.com/NousResearch/hermes-agent/commit/f8745f59c2738025a02ca161307f4dcbfd0eb34a",
      },
      {
        sha: "965ae7f",
        message: "revert(cli): drop scrollback box width clamp (#25975), restore full-width borders (#26163)",
        href: "https://github.com/NousResearch/hermes-agent/commit/965ae7fa97e62e0f318eaf9a132f083e87cadf59",
      },
      {
        sha: "ac64d0c",
        message: "fix: preserve ansi output history on resize replay",
        href: "https://github.com/NousResearch/hermes-agent/commit/ac64d0c2caa1c7d83c2e5022a1b7612f0148021a",
      },
      {
        sha: "4813aaf",
        message: "fix(ui-tui): heal same-dimension alt-screen resize drift",
        href: "https://github.com/NousResearch/hermes-agent/commit/4813aaf0ba5902ea185b1927d30a59647b4c769a",
      },
      {
        sha: "06c6c1f",
        message: "fix(cli): batch resize history replay",
        href: "https://github.com/NousResearch/hermes-agent/commit/06c6c1f0f2d9872b02f86c6cd8279354aaf4dd9f",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Browser / Install — 브라우저 인자 유지, 비-sudo 설치, 업데이트 시 백엔드 갱신, .env 권한 제한",
    category: "Browser / Install",
    summary:
      "사전 설정된 브라우저 인자가 존중되고 --no-sandbox 바이패스 환경변수가 수정됩니다. apt 배포판에서 비-sudo 서비스 사용자 설치가 지원됩니다. hermes update 시 lazy-installed 백엔드가 갱신됩니다. .env 파일 권한이 0600으로 제한됩니다 (main branch 기준).",
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
      {
        sha: "78b842c",
        message: "fix(install): support non-sudo service-user installs on apt distros (#25814)",
        href: "https://github.com/NousResearch/hermes-agent/commit/78b842c995d70fccb7fd1113f85e766c1483e562",
      },
      {
        sha: "72b5dd8",
        message: "fix(update): refresh lazy-installed backends on hermes update (#25766)",
        href: "https://github.com/NousResearch/hermes-agent/commit/72b5dd865865f2d2c9f5b492bcac9dcdaf045d34",
      },
      {
        sha: "a952ca3",
        message: "fix: restrict .env file permissions to 0600",
        href: "https://github.com/NousResearch/hermes-agent/commit/a952ca3ff6af24f867737094d2d13ab2a3ba3bbe",
      },
    ],
  },
  {
    date: "2026-05-15",
    title: "Agent 안정성 — /subgoal, goals judge 확장, 이미지 세션 분리, codex watchdog, codex-app-server",
    category: "Agent 안정성",
    summary:
      "활성 /goal에 사용자 추가 기준을 덧붙이는 /subgoal 명령어가 도입됩니다. goals judge의 max_tokens가 200→4096으로 확장되고 설정 가능해집니다. 이미지 tool 결과가 text-only 세션을 오염시키지 않도록 분리됩니다. codex-runtime에서 wedged session이 retired되고 post-tool watchdog이 추가됩니다. codex-app-server에서 generic failure에 redacted stderr tail이 첨부됩니다 (main branch 기준).",
    commits: [
      {
        sha: "f9ad740",
        message: "fix(goals): raise judge max_tokens 200 → 4096, make configurable",
        href: "https://github.com/NousResearch/hermes-agent/commit/f9ad7400e30517159712a77e6a4bc2f3a390b2db",
      },
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
    ],
  },
  {
    date: "2026-05-14",
    title: "Gateway / State / LSP — 중복 전송 방지, 스트리밍 설정, clarify fallback, LSP diagnostic, 메시지 정렬",
    category: "Gateway / State / LSP",
    summary:
      "cosmetic edit 실패 시 중복 final send가 방지됩니다. 스트리밍 설정이 gateway.streaming 중첩 키에서 로드됩니다. multi-choice clarify fallback에 text-intercept가 활성화됩니다. LSP baseline diagnostics가 post-edit 좌표로 보정됩니다. 메시지 정렬에 AUTOINCREMENT id가 사용됩니다 (main branch 기준).",
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
        sha: "1907152",
        message: "fix(lsp): shift baseline diagnostics into post-edit coordinates (#25978)",
        href: "https://github.com/NousResearch/hermes-agent/commit/19071529f65f026f29646c221dcf61274e9a0213",
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
    title: "Proxy / Messaging — OAuth 로컬 프록시, Windows 시그널, Discord 백필, Telegram 포맷, WhatsApp 필터",
    category: "Proxy / Messaging",
    summary:
      "OAuth 프로바이더를 위한 로컬 OpenAI 호환 프록시가 도입됩니다. Windows 환경에서 add_signal_handler의 false-positive 경고가 억제됩니다. Discord 채널 히스토리 백필이 도입됩니다. Telegram에서 최종 MarkdownV2 편집이 생략되지 않도록 REQUIRES_EDIT_FINALIZE가 설정됩니다. WhatsApp에서 상태 브로드캐스트와 채널 뉴스레터가 agent dispatch 전에 제거됩니다 (main branch 기준).",
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
        sha: "e84fe48",
        message: "feat(discord): channel history backfill for multi-user sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/e84fe483bc958ef2ce11463d10ee57bdc2ccc5fb",
      },
      {
        sha: "d44dafd",
        message: "fix(telegram): set REQUIRES_EDIT_FINALIZE so final MarkdownV2 edit is not skipped",
        href: "https://github.com/NousResearch/hermes-agent/commit/d44dafdb4e2ea8874fd309b0b3d0780ba966cada",
      },
      {
        sha: "9ed751b",
        message: "fix(whatsapp): drop status broadcasts and channel newsletters before agent dispatch (#25845)",
        href: "https://github.com/NousResearch/hermes-agent/commit/9ed751b96706ffd343ae26531cd0e2152a1c7036",
      },
    ],
  },
];
