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
    title: "CLI / TUI — 리사이즈 중복 해결, 라이트모드 가시성, /sessions 명령, SelectSelector 폴백",
    category: "CLI / TUI",
    summary:
      "리사이즈 시 스크롤백 복제가 해결되고 라이트모드 가시성이 개선됩니다. 기존 스크롤백 박스 너비 제한이 revert되어 전체 너비 경계가 복원됩니다. 클래식 CLI에 /sessions 슬래시 명령어가 연결되고, ansi 출력 히스토리가 보존됩니다. kqueue로 stdin을 감시할 수 없는 환경에서 SelectSelector로 폴백됩니다 (main branch 기준).",
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
        sha: "d6c488f",
        message: "fix(cli): wire /sessions slash command in the classic CLI",
        href: "https://github.com/NousResearch/hermes-agent/commit/d6c488f2dce96a1d1375c8e7e089b54a1e7ae6f4",
      },
      {
        sha: "eabd8c1",
        message: "fix(cli): fall back to SelectSelector when kqueue can't watch stdin",
        href: "https://github.com/NousResearch/hermes-agent/commit/eabd8c1fd12d6e386d636e564444ef661ce99e81",
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
    date: "2026-05-14",
    title: "Gateway / State — 중복 전송 방지, 스트리밍 설정, clarify fallback, 이미지 첨부 포워딩, 메시지 정렬",
    category: "Gateway / State",
    summary:
      "cosmetic edit 실패 시 중복 final send가 방지됩니다. 스트리밍 설정이 gateway.streaming 중첩 키에서 로드됩니다. multi-choice clarify fallback에 text-intercept가 활성화됩니다. background agent tasks에 이미지 첨부가 포워딩됩니다. 메시지 정렬에 AUTOINCREMENT id가 사용됩니다 (main branch 기준).",
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
        sha: "3adde24",
        message: "fix(gateway): forward image attachments to background agent tasks",
        href: "https://github.com/NousResearch/hermes-agent/commit/3adde245b72cd19061d413993c4a56138a023295",
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
    title: "Proxy / Web / Discord — OAuth 로컬 프록시, 크로스 플랫폼 에셋, Discord 히스토리 백필, Brotli 의존성",
    category: "Proxy / Web / Discord",
    summary:
      "OAuth 프로바이더를 위한 로컬 OpenAI 호환 프록시가 도입됩니다. sync-assets 스크립트가 크로스 플랫폼으로 동작하고 빌드 실패 시 에러가 표시됩니다. Discord 첨부 디코딩을 위해 brotlicffi 의존성이 고정됩니다. Discord 채널 히스토리 백필이 도입되어 기본 활성화되며 per-user + threads로 확장됩니다 (main branch 기준).",
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
        sha: "bcca5ed",
        message: "fix(deps): pin brotlicffi so aiohttp can decode Discord's Brotli attachments",
        href: "https://github.com/NousResearch/hermes-agent/commit/bcca5ed34d31abfd469d139e14bd962c916ff64f",
      },
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
    ],
  },
];
