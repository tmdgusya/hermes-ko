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

export const hermesUpdatesLastChecked = "2026-05-04";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-04",
    title: "Gateway: quick-command dispatch, 프로필 표시, PID 스캔, Signal 인증, Slack 설정",
    category: "Gateway / State",
    summary:
      "Gateway에서 quick-command dispatch가 built-in 핸들러보다 먼저 처리되도록 수정하여, 커스텀 커맨드가 의도대로 우선 실행됩니다. `gateway status` 명령어가 다른 프로필도 함께 표시하여 혼란을 방지합니다. Gateway 프로세스 스캔에서 상위(ancestor) PID를 제외하여 오탐지를 줄입니다. Signal에서 미인증 발신자의 reaction을 건너뛰어 보안을 강화합니다. Setup에서 SLACK_HOME_CHANNEL 프롬프트가 누락된 문제를 수정합니다.",
    commits: [
      {
        sha: "74c997d",
        message: "fix(gateway): move quick-command dispatch before built-in handlers",
        href: "https://github.com/NousResearch/hermes-agent/commit/74c997d9851581f169b35e33a633255f40bcbc6b",
      },
      {
        sha: "81ce945",
        message: "fix(gateway): show other profiles in `gateway status` to prevent confusion",
        href: "https://github.com/NousResearch/hermes-agent/commit/81ce945450ac46480980a613b886c6e61e34149d",
      },
      {
        sha: "e8cdcf5",
        message: "fix: exclude ancestor PIDs from gateway process scan (#13242)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e8cdcf532882edb575f3dca4b0e53adf5c416b69",
      },
      {
        sha: "8a4fe80",
        message: "fix(signal): skip reactions for unauthorized senders",
        href: "https://github.com/NousResearch/hermes-agent/commit/8a4fe80f8df35fdd70ecf81284cbcd6940f2157c",
      },
      {
        sha: "e89376d",
        message: "fix(setup): add missing SLACK_HOME_CHANNEL prompt to _setup_slack()",
        href: "https://github.com/NousResearch/hermes-agent/commit/e89376d66ff2f72caf069cdddd65c161bb4f7540",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Gateway/Chat: reload-skills 초기화, Telegram sanitize, require_mention 브리지, 필수인자 숨김, QQBot 지원",
    category: "Gateway / State",
    summary:
      "Gateway에서 new/resume/branch 시 queued reload-skills 노트를 초기화하여 stale 알림을 방지합니다. Telegram help 커맨드 멘션을 sanitize 처리합니다. config.yaml 최상위 require_mention 설정이 Telegram 구성으로 브리지되어, telegram.require_mention이 없을 때도 top-level 설정을 인식합니다. 필수 인자가 있는 커맨드를 텔레그램 봇 메뉴에서 숨겨 사용자 경험을 개선합니다. send_message가 QQBot C2C 및 그룹 채팅을 지원합니다.",
    commits: [
      {
        sha: "74636f9",
        message: "fix(gateway): clear queued reload-skills notes on new/resume/branch",
        href: "https://github.com/NousResearch/hermes-agent/commit/74636f9c4aa3e9dbeaff64dc3b540aef9482c375",
      },
      {
        sha: "222767e",
        message: "fix: sanitize Telegram help command mentions",
        href: "https://github.com/NousResearch/hermes-agent/commit/222767e5e81696fc2b184d4a806a07e05ce969d7",
      },
      {
        sha: "6fda92a",
        message: "fix(gateway): bridge top-level require_mention to Telegram config",
        href: "https://github.com/NousResearch/hermes-agent/commit/6fda92aa7f044ce684f6ac11e3f8871a1a70decc",
      },
      {
        sha: "86e64c1",
        message: "fix(gateway): hide required-arg commands from Telegram menu",
        href: "https://github.com/NousResearch/hermes-agent/commit/86e64c1d3bc0324452202cf8e26703dbef7839b3",
      },
      {
        sha: "3792b77",
        message: "fix(send_message): support QQBot C2C and group chats",
        href: "https://github.com/NousResearch/hermes-agent/commit/3792b77bd11dcccab3b0994bd31086969fb9f5fb",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent/CLI/TUI: preflight 압축 표시, custom:* provider 허용, voice 경합 방지, launch dir 고정, terminal cleanup",
    category: "Agent 안정성",
    summary:
      "Agent가 preflight 압축(preflight compression) 상태를 표시하도록 개선되어, 압축 동작을 투명하게 확인할 수 있습니다. CLI에서 custom:* provider slug를 모델 검증에 허용하여 커스텀 프로바이더 설정이 가능해졌습니다. Voice TTS 재시작 시 경합(race)을 방지합니다. 로컬 백엔드 CLI가 항상 launch directory를 사용하며 .env의 TERMINAL_CWD 동기화를 중단하여, 디렉터리 혼선을 방지합니다. TUI에서 Ink 종료 후 process.exit(0)을 호출하여 터미널 정리(cleanup)가 제대로 이루어집니다.",
    commits: [
      {
        sha: "8bdec80",
        message: "fix(agent): surface preflight compression status",
        href: "https://github.com/NousResearch/hermes-agent/commit/8bdec8088204a321b15dabe7c0df731ad3a66ae1",
      },
      {
        sha: "c857592",
        message: "fix(cli): allow custom:* provider slugs in model validation",
        href: "https://github.com/NousResearch/hermes-agent/commit/c8575925589dac37dcfbe7e92ac87d07c3e9c3f1",
      },
      {
        sha: "a1cb811",
        message: "fix(cli): avoid voice TTS restart race",
        href: "https://github.com/NousResearch/hermes-agent/commit/a1cb811cb8cfca1d3ae902bae87a9cd7c696a0ad",
      },
      {
        sha: "a11aed1",
        message: "fix(cli): local backend CLI always uses launch directory, stops .env sync of TERMINAL_CWD (#19334)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a11aed1accc735ae0d7af80d626b33870d4b696c",
      },
      {
        sha: "9c93fc5",
        message: "fix(tui): call process.exit(0) after Ink exit to trigger terminal cleanup",
        href: "https://github.com/NousResearch/hermes-agent/commit/9c93fc5775c872d9a10b5b56c3b9fcc59946f742",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Docker/Web/Compressor/Vision: 단일 컨테이너 대시보드, Chromium 탐지, lockfile 호환성, dedup, type guard",
    category: "Agent 안정성",
    summary:
      "Docker에서 HERMES_DASHBOARD=1 환경변수로 대시보드를 side-process로 실행하여 단일 컨테이너 구성이 가능해졌습니다. _chromium_installed()가 AGENT_BROWSER_EXECUTABLE_PATH와 시스템 Chrome을 확인하여 브라우저 감지 정확도가 향상됩니다. TUI에서 npm의 peer-flag 제거로 인한 lockfile 비교 실패를 허용(tolerate)합니다. compressor의 중복 제거(dedup) 패스에서 비문자열 도구 콘텐츠를 건너뛰어 AttributeError를 방지합니다. vision 도구에서 user_prompt 타입을 guard하여 debug_call_data 구성 전 타입 오류를 방지합니다.",
    commits: [
      {
        sha: "5671059",
        message: "feat(docker): launch dashboard as side-process via HERMES_DASHBOARD=1",
        href: "https://github.com/NousResearch/hermes-agent/commit/5671059f62ab28fa118b15fa148d5ae9a4200574",
      },
      {
        sha: "45fd451",
        message: "fix: _chromium_installed() now checks AGENT_BROWSER_EXECUTABLE_PATH and system Chrome",
        href: "https://github.com/NousResearch/hermes-agent/commit/45fd45103d6cb3d8a1910aad6ec9de7e3d55e4fb",
      },
      {
        sha: "2f2998b",
        message: "fix(tui): tolerate npm's peer-flag drop in lockfile comparison",
        href: "https://github.com/NousResearch/hermes-agent/commit/2f2998bb1b0d6a1b1c2c14b66b72982595b91506",
      },
      {
        sha: "408dd8a",
        message: "fix(compressor): skip non-string tool content in dedup pass to prevent AttributeError",
        href: "https://github.com/NousResearch/hermes-agent/commit/408dd8aa28cb959f1a1e869929651c181de63e1e",
      },
      {
        sha: "6c4aca7",
        message: "fix(vision): guard user_prompt type before debug_call_data construction",
        href: "https://github.com/NousResearch/hermes-agent/commit/6c4aca7adca44e67e45f85b143a46ed3d88a7328",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Cron/Curator/Skills/Config: null job 복구, usage 갱신, false-positive 방지, 바이너리 해시, api_key 전파",
    category: "Config / Auth",
    summary:
      "Cron이 null next_run_at job을 복구하고 non-dict origin을 허용하여 크래시를 방지합니다. Cron job이 스킬을 로드할 때 .usage.json의 usage 카운터를 갱신하여, curator가 cron 전용 스킬을 stale 타임스탬프로 자동 아카이브하지 않도록 합니다. Curator가 substring 매칭으로 인한 false-positive 통합(consolidation)을 방지합니다. Skills-hub에서 바이너리 스킬 번들 파일의 해시를 올바르게 계산하도록 수정되었습니다. auxiliary에서 explicit_api_key를 _try_anthropic()로 전파하여, fallback_model에 api_key가 설정된 경우에도 Anthropic 제공자로 키가 전달됩니다.",
    commits: [
      {
        sha: "78b635e",
        message: "fix(cron): recover null next_run_at jobs and tolerate non-dict origin",
        href: "https://github.com/NousResearch/hermes-agent/commit/78b635ee3c1d489c8dfe7e01119b774edd80e50b",
      },
      {
        sha: "363cc93",
        message: "fix(cron): bump skill usage when cron jobs load skills",
        href: "https://github.com/NousResearch/hermes-agent/commit/363cc936746c3f2964427b635f80f57df528da54",
      },
      {
        sha: "744079f",
        message: "fix(curator): prevent false-positive consolidation from substring matching",
        href: "https://github.com/NousResearch/hermes-agent/commit/744079ffe604371774f454ce46779ce0fcd43f0f",
      },
      {
        sha: "3072e55",
        message: "skills-hub: hash binary skill bundle files correctly",
        href: "https://github.com/NousResearch/hermes-agent/commit/3072e5543ba01c23358772db5fe1a2e770ee108a",
      },
      {
        sha: "808fee1",
        message: "fix(auxiliary): propagate explicit_api_key to _try_anthropic()",
        href: "https://github.com/NousResearch/hermes-agent/commit/808fee151d42b77a763ea4a8ec711d7b501cece6",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Gateway/Slack/Discord: 세션 복원, /new 경합 방지, ws 스킴, allowlist 인증, zombie 연결",
    category: "Gateway / State",
    summary:
      "Gateway가 crash/restart 후 세션을 일괄 정지(suspend)하지 않고 resume_pending 방식으로 복원합니다. /new 응답을 cancel_session_processing보다 먼저 전송하여 경쟁 상태(race)를 방지합니다. HTTPS URL에 대한 WebSocket 스킴 변환(ws→wss)이 수정됐습니다. Discord 슬래시 커맨드에 allowlist 인증이 적용됐습니다. Slack Socket Mode에서 connect() 시 이전 핸들러를 닫아 zombie 연결을 방지합니다.",
    commits: [
      {
        sha: "f1e0292",
        message: "fix(gateway): resume sessions after crash/restart instead of blanket suspend",
        href: "https://github.com/NousResearch/hermes-agent/commit/f1e0292517c15be09f9f1fb6a61046993b562586",
      },
      {
        sha: "9341034",
        message: "fix(gateway): send /new response before cancel_session_processing to avoid race (#18912)",
        href: "https://github.com/NousResearch/hermes-agent/commit/934103476f3199f6c7ed081641bb4e48478b821a",
      },
      {
        sha: "1148c46",
        message: "fix(gateway): correct ws scheme conversion for https urls",
        href: "https://github.com/NousResearch/hermes-agent/commit/1148c462417369640fc0a821d1879d0c9426ed30",
      },
      {
        sha: "19ba9e4",
        message: "fix(gateway/discord): require allowlist auth on slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/19ba9e43b621cbcc1488cd9f9c38050154386e37",
      },
      {
        sha: "6c1322b",
        message: "fix(slack): close previous handler in connect() to prevent zombie Socket Mode connections",
        href: "https://github.com/NousResearch/hermes-agent/commit/6c1322b9972ce61419df7df6ad7ae5a261fef9d2",
      },
    ],
  },
];
