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
    title: "Gateway·Telegram: reload-skills 노트 초기화, help 멘션 sanitize, require_mention 브리지, 음성 중복 제거",
    category: "Gateway / State",
    summary:
      "Gateway에서 new/resume/branch 시 queued reload-skills 노트를 초기화하여 stale 알림을 방지합니다. Telegram help 커맨드 멘션을 sanitize 처리합니다. config.yaml 최상위 require_mention 설정이 Telegram 구성으로 브리지되어, telegram.require_mention이 없을 때도 top-level 설정을 인식합니다. Discord 음성 STT 트랜스크립트의 정확/근사 중복을 제거하여 중복 agent 응답을 방지합니다.",
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
        sha: "1bd975c",
        message: "fix(gateway): suppress duplicate voice transcripts",
        href: "https://github.com/NousResearch/hermes-agent/commit/1bd975c0ba87c644d560ca7bd62cc47274a8a919",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Config·Auth·Cron·Provider: auxiliary api_key 전파, cron skill usage bump, curator 자격증명 전달, OpenRouter 응답 캐싱",
    category: "Config / Auth",
    summary:
      "auxiliary에서 explicit_api_key를 _try_anthropic()로 전파하여, fallback_model에 api_key가 설정된 경우에도 Anthropic 제공자로 키가 전달되도록 수정합니다. cron job이 스킬을 로드할 때 .usage.json의 usage 카운터를 갱신(bump)하여, curator가 cron 전용 스킬을 stale 타임스탬프로 자동 아카이브하지 않도록 합니다. curator review fork에서 auxiliary.curator의 슬롯별 자격증명을 runtime resolution으로 전달합니다. OpenRouter 제공자에 응답 캐싱(response caching) 지원이 추가되어 API 비용과 지연을 줄일 수 있습니다.",
    commits: [
      {
        sha: "808fee1",
        message: "fix(auxiliary): propagate explicit_api_key to _try_anthropic()",
        href: "https://github.com/NousResearch/hermes-agent/commit/808fee151d42b77a763ea4a8ec711d7b501cece6",
      },
      {
        sha: "363cc93",
        message: "fix(cron): bump skill usage when cron jobs load skills",
        href: "https://github.com/NousResearch/hermes-agent/commit/363cc936746c3f2964427b635f80f57df528da54",
      },
      {
        sha: "3c42024",
        message: "fix(curator): pass auxiliary curator api_key/base_url into runtime resolution",
        href: "https://github.com/NousResearch/hermes-agent/commit/3c420245395e3e5e074949c4bfdfb25d3156cb98",
      },
      {
        sha: "457c7b7",
        message: "feat(openrouter): add response caching support (#19132)",
        href: "https://github.com/NousResearch/hermes-agent/commit/457c7b76cd69089142f7ee02bf26ed5fef9d8741",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "ACP: Zed 도구 렌더링 간소화, history replay 스케줄, reasoning 콜백 라우팅",
    category: "ACP",
    summary:
      "ACP에서 Zed 도구 replay 렌더링을 간소화하고, web extract 및 read-file 렌더링도 compact하게 유지합니다. 공통 도구 렌더링과 Zed 컨텍스트 렌더링이 다듬어졌습니다. ACP history replay 및 fence file 출력이 스케줄링 기능으로 추가됐습니다. Zed의 thinking(reasoning)이 reasoning 콜백으로 라우팅됩니다.",
    commits: [
      {
        sha: "9987f3d",
        message: "fix(acp): compact Zed tool replay rendering",
        href: "https://github.com/NousResearch/hermes-agent/commit/9987f3d82486b04151dee2d27d640b3ae01b7b16",
      },
      {
        sha: "19854c7",
        message: "Schedule ACP history replay and fence file output",
        href: "https://github.com/NousResearch/hermes-agent/commit/19854c7cd2f00e3d591e72ccbe2e456ad10c4886",
      },
      {
        sha: "eb612f5",
        message: "fix(acp): keep web extract rendering compact",
        href: "https://github.com/NousResearch/hermes-agent/commit/eb612f55748d8f0888f09f055abd86afef925150",
      },
      {
        sha: "b294d1d",
        message: "fix(acp): keep read-file starts compact",
        href: "https://github.com/NousResearch/hermes-agent/commit/b294d1d0229ff6026838a04c4cb59c3b13e4827f",
      },
      {
        sha: "72c8037",
        message: "fix(acp): polish common tool rendering",
        href: "https://github.com/NousResearch/hermes-agent/commit/72c8037a24b58b7b1a38a99903cc0bf8a3d7595c",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Gateway·Slack·Discord·WhatsApp: 세션 복원, WebSocket 스킴, /new 경쟁 방지, allowlist 인증, 좀비 커넥션, 홈채널 스레드, protobufjs, QQBot, /goal",
    category: "Gateway / State",
    summary:
      "Gateway가 crash/restart 후 세션을 일괄 정지(suspend)하지 않고 resume_pending 방식으로 복원합니다. HTTPS URL에 대한 WebSocket 스킴 변환(ws→wss)이 수정됐습니다. /new 응답을 cancel_session_processing보다 먼저 전송하여 경쟁 상태(race)를 방지합니다. Discord 슬래시 커맨드에 allowlist 인증이 적용됐습니다. Slack Socket Mode에서 connect() 시 이전 핸들러를 닫아 zombie 연결을 방지합니다. WhatsApp에서 protobufjs를 7.5.5 이상으로 고정하여 critical 취약점 3건을 해결합니다. Gateway 재시작 알림에서 홈채널 스레드 대상을 보존합니다. Telegram 봇 메뉴에서 필수 인자가 있는 커맨드를 숨겨 사용자 경험을 개선합니다. send_message가 QQBot C2C 및 그룹 채팅을 지원합니다. /goal 커맨드가 TUI에서도 동작하고 gateway verdict 전달이 수정됐습니다.",
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
  {
    date: "2026-05-03",
    title: "Agent 안정성: compressor 중복 제거 패스, vision guard, api_server 포트 폴백, file fence 제거, Windows UTF-8 강제, codex-transport, cron·approval 방어",
    category: "Agent 안정성",
    summary:
      "compressor의 중복 제거(dedup) 패스에서 비문자열 도구 콘텐츠를 건너뛰어 AttributeError를 방지합니다. video_analyze_tool과 일반 vision 도구에서 user_prompt 타입을 guard하여 debug_call_data 구성 전 타입 오류를 방지합니다. api_server가 잘못된 API_SERVER_PORT 환경변수 값에 대해 기본 포트로 폴백합니다. file 읽기에서 leaked terminal fences를 제거합니다. Windows에서 CLI가 UTF-8 stdout/stderr를 강제하여 cp1252 인코딩으로 인한 UnicodeEncodeError 크래시를 방지합니다. MiniMax OAuth httpx 클라이언트가 307 리디렉션을 따르도록 수정됐습니다. codex-transport가 xai 응답에 대해 요청 오버라이드 헤더를 보존합니다. cron tick에서 non-dict origin을 누락으로 처리하여 크래시를 방지합니다. approval의 sensitive write 대상이 shell RC 및 credential 파일까지 확장됐습니다.",
    commits: [
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
      {
        sha: "a5cae16",
        message: "fix(api_server): fall back to default port on malformed API_SERVER_PORT",
        href: "https://github.com/NousResearch/hermes-agent/commit/a5cae1649675947d04034010f1fa22d15b2c6c4c",
      },
      {
        sha: "6713274",
        message: "fix(file): strip leaked terminal fences from reads",
        href: "https://github.com/NousResearch/hermes-agent/commit/6713274a4297ab1cf601d93655b458ab3e66d083",
      },
      {
        sha: "2d7543c",
        message: "fix(windows): enforce UTF-8 stdout/stderr to prevent UnicodeEncodeError crash",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d7543c61f1334bdcfa741776a357c274830de8b",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Kanban·MCP·Skills·Tools: worker identity 분리, 경로별 env·로그 앵커, MCP 세션 재연결, video_analyze 도구, debug 로그 redact, write_file 검증, TUI 복원",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 KANBAN_GUIDANCE의 'You are a Kanban worker' identity claim을 제거하여 SOUL.md의 역할 정의를 보존합니다. 경로별 환경 변수 오버라이드와 dispatcher env 주입이 추가되고, board·workspaces·worker 로그가 공유 Hermes 루트에 앵커됩니다. MCP가 종료된 세션에 대해 자동 재연결을 수행합니다. 네이티브 비디오 이해를 위한 video_analyze 도구가 추가됐습니다. video-orchestrator optional creative skill이 추가되고 kanban-video-orchestrator로 이름이 변경됐습니다. hermes debug share 업로드 시 로그 내용을 redact 처리합니다. write_file 핸들러가 content/path 인자 누락 시 zero-byte 파일을 silently 생성하지 않고 명시적으로 거부합니다. _clamp_command_names가 스킬명을 32자로 자른 후에도 cmd_key를 보존합니다. TUI에서 Apple Terminal 리사이즈 artifacts를 제거합니다.",
    commits: [
      {
        sha: "b58db23",
        message: "fix(kanban): drop worker identity claim from KANBAN_GUIDANCE (#19427)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b58db237e4e1943daeab34fcc38a25e034bafb30",
      },
      {
        sha: "2658494",
        message: "fix(kanban): add per-path env overrides + dispatcher env injection",
        href: "https://github.com/NousResearch/hermes-agent/commit/2658494e815b4644cb2ed47dc6cb6623b6ecf112",
      },
      {
        sha: "f5bd77b",
        message: "fix(kanban): anchor board, workspaces, and worker logs at the shared Hermes root",
        href: "https://github.com/NousResearch/hermes-agent/commit/f5bd77b3e16d86e3cbd75a9d6bd719f28dd8dbb9",
      },
      {
        sha: "4a2f822",
        message: "fix(mcp): reconnect on terminated sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/4a2f822137bf69728bd594613002671c93d2a64d",
      },
      {
        sha: "c9a3f36",
        message: "feat: add video_analyze tool for native video understanding (#19301)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c9a3f36f5656f1a3d543e5b6be1fd05b98783c53",
      },
    ],
  },
];
