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
      {
        sha: "ef9a08a",
        message: "fix(acp): polish Zed context and tool rendering",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef9a08a872d1ed87eb4c91cf8ad8e8f4ef5a6e2b",
      },
      {
        sha: "e26f9b2",
        message: "fix(acp): route Zed thoughts to reasoning callbacks",
        href: "https://github.com/NousResearch/hermes-agent/commit/e26f9b207041c03d1aa9a982d29dbfda66df3a82",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Gateway·Slack·Discord·Goals: 세션 복원, WebSocket 스킴, /new 경쟁 방지, allowlist 인증, 좀비 커넥션 방지, 스킬 clamp 수정, /goal TUI 지원, WhatsApp 보안, 홈채널 스레드 보존, Telegram 메뉴 필수인자 커맨드 숨김",
    category: "Gateway / State",
    summary:
      "Gateway가 crash/restart 후 세션을 일괄 정지(suspend)하지 않고 resume_pending 방식으로 복원합니다. HTTPS URL에 대한 WebSocket 스킴 변환(ws→wss)이 수정됐습니다. /new 응답을 cancel_session_processing보다 먼저 전송하여 경쟁 상태(race)를 방지합니다. Discord 슬래시 커맨드에 allowlist 인증이 적용됐습니다. Slack Socket Mode에서 connect() 시 이전 핸들러를 닫아 zombie 연결을 방지합니다. _clamp_command_names가 스킬 이름을 32자로 자른 후 /skill 자동완성 설명이 truncated name으로 조회되어 누락되던 문제가 수정됐습니다. /goal 명령어가 TUI에서 정상 동작하고 gateway verdict delivery가 수정됐습니다. WhatsApp에서 protobufjs를 7.5.5 이상으로 고정하여 critical 취약점 3건을 해결합니다. Gateway 재시작 알림에서 홈채널 스레드 대상을 보존합니다. Telegram 봇 메뉴에서 필수 인자가 있는 커맨드를 숨겨 사용자 경험을 개선합니다.",
    commits: [
      {
        sha: "86e64c1",
        message: "fix(gateway): hide required-arg commands from Telegram menu",
        href: "https://github.com/NousResearch/hermes-agent/commit/86e64c1d3bc0324452202cf8e26703dbef7839b3",
      },
      {
        sha: "d87fd9f",
        message: "fix(goals): make /goal work in TUI and fix gateway verdict delivery (#19209)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d87fd9f03958995ce8234ec359a13fceabbf9ebf",
      },
      {
        sha: "55647a5",
        message: "fix(whatsapp): pin protobufjs >=7.5.5 via npm overrides to clear 3 critical vulns (#19204)",
        href: "https://github.com/NousResearch/hermes-agent/commit/55647a581349d245b903621ab1ccbd55c4a7ede2",
      },
      {
        sha: "f1e0292",
        message: "fix(gateway): resume sessions after crash/restart instead of blanket suspend",
        href: "https://github.com/NousResearch/hermes-agent/commit/f1e0292517c15be09f9f1fb6a61046993b562586",
      },
      {
        sha: "6f2dab2",
        message: "fix: update tests for resume_pending semantics + add AUTHOR_MAP entries",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f2dab248a6cc8591af46e5deb2dc939c2b43146",
      },
      {
        sha: "1148c46",
        message: "fix(gateway): correct ws scheme conversion for https urls",
        href: "https://github.com/NousResearch/hermes-agent/commit/1148c462417369640fc0a821d1879d0c9426ed30",
      },
      {
        sha: "9341034",
        message: "fix(gateway): send /new response before cancel_session_processing to avoid race (#18912)",
        href: "https://github.com/NousResearch/hermes-agent/commit/934103476f3199f6c7ed081641bb4e48478b821a",
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
      {
        sha: "c4c0e5a",
        message: "fix: After _clamp_command_names truncates skill names to fit the 32-character limit, /skill autocomplete description lookup fails because it queries by truncated name",
        href: "https://github.com/NousResearch/hermes-agent/commit/c4c0e5abc2b579ce1a4cca4d5ff808550f754662",
      },
      {
        sha: "5d5b891",
        message: "test: add tests for cmd_key preservation through name clamping",
        href: "https://github.com/NousResearch/hermes-agent/commit/5d5b8912bece744b08b5d6428f2ad12ff6969f87",
      },
      {
        sha: "b59bb4e",
        message: "fix(gateway): preserve home-channel thread targets across restart notifications",
        href: "https://github.com/NousResearch/hermes-agent/commit/b59bb4e351c4cdca97e906accb4bbe9193c381b6",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Agent 안정성: compressor 중복 제거 패스, vision guard, api_server 포트 폴백, MiniMax OAuth 리디렉션, codex-transport 헤더 보존",
    category: "Agent 안정성",
    summary:
      "compressor의 중복 제거(dedup) 패스에서 비문자열 도구 콘텐츠를 건너뛰어 AttributeError를 방지합니다. video_analyze_tool과 일반 vision 도구에서 user_prompt 타입을 guard하여 debug_call_data 구성 전 타입 오류를 방지합니다. api_server가 잘못된 API_SERVER_PORT 환경변수 값에 대해 기본 포트로 폴백합니다. MiniMax OAuth httpx 클라이언트가 307 리디렉션을 따르도록 수정됐습니다. codex-transport에서 xai 응답에 대해 요청 오버라이드 헤더를 보존합니다.",
    commits: [
      {
        sha: "408dd8a",
        message: "fix(compressor): skip non-string tool content in dedup pass to prevent AttributeError",
        href: "https://github.com/NousResearch/hermes-agent/commit/408dd8aa28cb959f1a1e869929651c181de63e1e",
      },
      {
        sha: "5bd9375",
        message: "fix(vision): guard user_prompt type in video_analyze_tool before debug_call_data construction",
        href: "https://github.com/NousResearch/hermes-agent/commit/5bd937533c9cef3646d1e464f9a9a3aabec7b774",
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
        sha: "65bebb9",
        message: "fix(cli): follow 307 redirects in MiniMax OAuth httpx clients",
        href: "https://github.com/NousResearch/hermes-agent/commit/65bebb9b802616122c30fd8fea6c4c47514b45e4",
      },
      {
        sha: "dfdd7b6",
        message: "fix(codex-transport): preserve request override headers for xai responses",
        href: "https://github.com/NousResearch/hermes-agent/commit/dfdd7b6e6fc3ec3b637d200d95e36adc7c6a49bb",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Kanban·MCP·Skills: kanban 경로별 env·로그 앵커, MCP 세션 재연결, video_analyze 도구, video-orchestrator 스킬, debug 로그 redact",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 경로별 환경 변수 오버라이드와 dispatcher env 주입이 추가되고, board·workspaces·worker 로그가 공유 Hermes 루트에 앵커됩니다. MCP가 종료된 세션에 대해 자동 재연결을 수행합니다. 네이티브 비디오 이해를 위한 video_analyze 도구가 추가됐습니다. video-orchestrator optional creative skill이 추가되고 kanban-video-orchestrator로 이름이 변경됐습니다. hermes debug share 업로드 시 로그 내용을 redact 처리합니다.",
    commits: [
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
      {
        sha: "511add7",
        message: "feat(skill): add video-orchestrator optional creative skill",
        href: "https://github.com/NousResearch/hermes-agent/commit/511add724987eeb03c10a69ae17d0b0e93765d1f",
      },
      {
        sha: "0dd8e3f",
        message: "rename: video-orchestrator → kanban-video-orchestrator",
        href: "https://github.com/NousResearch/hermes-agent/commit/0dd8e3f8d876ce3d8d0c2e507b11be65eda180c1",
      },
      {
        sha: "b8ae8cc",
        message: "fix(debug): redact log content at upload time in hermes debug share",
        href: "https://github.com/NousResearch/hermes-agent/commit/b8ae8cc801df3bb440d86b826795fcbceffa9372",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Tools·CLI·TUI: write_file 유효성 검사, OpenRouter 응답 캐싱, toolsets 재구성, Bedrock probe 회피, cron·approval 안정성, TUI 리사이즈 artifacts, Weixin 크로스루프 세션",
    category: "Tools / MCP / Plugins",
    summary:
      "write_file 핸들러가 content/path 인자 누락 시 조용히 0바이트 파일을 생성하던 문제를 수정하여 명시적으로 거부합니다. OpenRouter에 응답 캐싱(response caching) 지원이 추가됐습니다. 활성화되었으나 설정되지 않은 toolsets을 자동 재구성하여 도구 누락을 방지합니다. 모델 제공자 선택기에서 Bedrock 자격증명 프로브를 회피하여 불필요한 credential 검사를 건너뜁니다. cron tick이 non-dict origin을 만나면 크래시하지 않고 missing으로 처리합니다. approval의 sensitive write 대상이 shell RC 파일과 credential 파일까지 확장됐습니다. TUI에서 Apple Terminal 리사이즈 시 발생하는 화면 artifacts를 clear 처리합니다. Weixin에서 send_weixin_direct 호출 시 크로스루프 세션을 체크하여 안전성을 높입니다.",
    commits: [
      {
        sha: "e527240",
        message: "fix(tools): write_file handler now rejects missing 'content'/'path' args instead of silently writing zero-byte files (#19096)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e527240b2700cc44f467a00e538f55c99d98eb23",
      },
      {
        sha: "457c7b7",
        message: "feat(openrouter): add response caching support (#19132)",
        href: "https://github.com/NousResearch/hermes-agent/commit/457c7b76cd69089142f7ee02bf26ed5fef9d8741",
      },
      {
        sha: "4f37669",
        message: "fix(tools): reconfigure enabled unconfigured toolsets",
        href: "https://github.com/NousResearch/hermes-agent/commit/4f37669170bb7886b94acbbf3630bf70650f7295",
      },
      {
        sha: "d409a44",
        message: "fix(model): avoid bedrock credential probe in provider picker",
        href: "https://github.com/NousResearch/hermes-agent/commit/d409a4409c8f11ccf029eff33a2eb9860f92e761",
      },
      {
        sha: "6b4fb9f",
        message: "fix(cron): treat non-dict origin as missing instead of crashing tick",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b4fb9f8789717e5dad8d920cbd6cd02e53c5175",
      },
      {
        sha: "69dd0f7",
        message: "fix(approval): extend sensitive write target to cover shell RC and credential files",
        href: "https://github.com/NousResearch/hermes-agent/commit/69dd0f7cf1f4df03e8b8e80aecc906dbd2b22d12",
      },
      {
        sha: "279b656",
        message: "fix(tui): clear Apple Terminal resize artifacts",
        href: "https://github.com/NousResearch/hermes-agent/commit/279b656adc3c64db7529fa85bbd744f1aa28cfbe",
      },
      {
        sha: "a22465e",
        message: "fix(weixin): send_weixin_direct cross-loop session check",
        href: "https://github.com/NousResearch/hermes-agent/commit/a22465e07ab4b71019f711e7a6463f6590c50742",
      },
    ],
  },
  {
    date: "2026-05-02",
    title: "Skills·Curator·CLI·Config·Auth: 캐시 재스캔, frontmatter slug, paste 확장, 도구 중복 제거, 자격증명 풀 우선순위, fallback 제공자, UTF-8 디코딩, xAI TTS 문서",
    category: "Config / Auth",
    summary:
      "Skills의 skill_commands 캐시가 플랫폼 범위 변경 시 재스캔됩니다. Curator에서 skill 삭제 시 authoritative absorbed_into를 설정하고 롤백 시 cron skill 링크를 복구합니다. Gateway에서 비활성화/옵셔널 스킬을 디렉터리명 대신 frontmatter slug로 매칭합니다. CLI에서 붙여넣기 파일 확장과 process_loop 오류 처리가 강화됐습니다. Vertex/Azure/Bedrock API 경계에서 도구 이름이 중복 제거됩니다. 자격증명 풀 시딩 시 os.environ보다 ~/.hermes/.env를 우선하여 의도치 않은 환경 변수 주입을 방지합니다. Agent 초기화 시 기본 자격증명 풀이 소진되면 fallback 제공자로 시도합니다. Auxiliary에서 explicit_api_key를 _try_openrouter()로 전파합니다. 활성 프로필에서 HERMES_HOME이 폴백될 때 경고를 한 번만 출력합니다. CLI에서 .env 파일을 UTF-8로 디코딩하여 Windows GBK 환경에서의 크래시를 방지합니다. TTS 문서에 xAI 커스텀 음성 지원이 언급됐습니다.",
    commits: [
      {
        sha: "c73594f",
        message: "fix(skills): rescan skill_commands cache when platform scope changes (#18739)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c73594fe4196b5ee331d25f86774e66ad0f67a69",
      },
      {
        sha: "97acd66",
        message: "fix(curator): authoritative absorbed_into on delete + restore cron skill links on rollback (#18671) (#18731)",
        href: "https://github.com/NousResearch/hermes-agent/commit/97acd66b4c58c7945f573a6efd6059e781eb4f8f",
      },
      {
        sha: "6ec74ae",
        message: "fix(gateway): match disabled/optional skills by frontmatter slug, not dir name (#18753)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6ec74aec0705df82475d402e761afc6a50c29ad1",
      },
      {
        sha: "7696ddc",
        message: "fix(cli): robust paste file expansion and process_loop error handling (#17666)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7696ddc59eba81624014d7bfc063f8ad7fe61598",
      },
      {
        sha: "9bf2604",
        message: "fix(tools): deduplicate tool names at API boundary for Vertex/Azure/Bedrock",
        href: "https://github.com/NousResearch/hermes-agent/commit/9bf260472bca9f8097bf442f5c5e6dd1984dd4c3",
      },
      {
        sha: "2ef1ad2",
        message: "fix: prefer ~/.hermes/.env over os.environ when seeding credential pool",
        href: "https://github.com/NousResearch/hermes-agent/commit/2ef1ad280beee581e0f023901d0d040efec380ac",
      },
      {
        sha: "0a6865b",
        message: "test(credential_pool): regression coverage for .env vs os.environ precedence",
        href: "https://github.com/NousResearch/hermes-agent/commit/0a6865b328ee6057eb59ee4a150c4886aa72d48c",
      },
      {
        sha: "13f344c",
        message: "fix(agent): try fallback providers at init when primary credential pool is exhausted (#17929)",
        href: "https://github.com/NousResearch/hermes-agent/commit/13f344c5ce2fe57b55b18b767b5945dd596971c0",
      },
      {
        sha: "af98122",
        message: "fix(auxiliary): propagate explicit_api_key to _try_openrouter()",
        href: "https://github.com/NousResearch/hermes-agent/commit/af981227937f54ccd621673f1e86ee196134a005",
      },
      {
        sha: "699b367",
        message: "fix(constants): warn once when get_hermes_home() falls back under an active profile (#18746)",
        href: "https://github.com/NousResearch/hermes-agent/commit/699b3679bcaf000165902f246b6f5a6b99133efd",
      },
      {
        sha: "c5e3a6f",
        message: "fix(cli): decode .env as UTF-8 to avoid GBK crash on Windows",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5e3a6fb5bb33477d639219de14922caedda98ef",
      },
      {
        sha: "5d3be89",
        message: "docs(tts): mention xAI custom voice support (#18776)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5d3be898a8671eb9fb99cf18f43165502f54e7f4",
      },
    ],
  },
];
