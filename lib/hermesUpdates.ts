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

export const hermesUpdatesLastChecked = "2026-05-03";

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
    title: "Gateway·Slack·Discord·Goals: 세션 복원, WebSocket 스킴, /new 경쟁 방지, allowlist 인증, 좀비 커넥션 방지, 스킬 clamp 수정, /goal TUI 지원, WhatsApp 보안",
    category: "Gateway / State",
    summary:
      "Gateway가 crash/restart 후 세션을 일괄 정지(suspend)하지 않고 resume_pending 방식으로 복원합니다. HTTPS URL에 대한 WebSocket 스킴 변환(ws→wss)이 수정됐습니다. /new 응답을 cancel_session_processing보다 먼저 전송하여 경쟁 상태(race)를 방지합니다. Discord 슬래시 커맨드에 allowlist 인증이 적용됐습니다. Slack Socket Mode에서 connect() 시 이전 핸들러를 닫아 zombie 연결을 방지합니다. _clamp_command_names가 스킬 이름을 32자로 자른 후 /skill 자동완성 설명이 truncated name으로 조회되어 누락되던 문제가 수정됐습니다. /goal 명령어가 TUI에서 정상 동작하고 gateway verdict delivery가 수정됐습니다. WhatsApp에서 protobufjs를 7.5.5 이상으로 고정하여 critical 취약점 3건을 해결합니다.",
    commits: [
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
        message: "fix: _clamp_command_names truncation breaks /skill autocomplete description lookup (#18983)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c4c0e5abc2b579ce1a4cca4d5ff808550f754662",
      },
    ],
  },
  {
    date: "2026-05-03",
    title: "Tools·Model·OpenRouter·Weixin: toolsets 재구성, Bedrock 프로브 회피, 응답 캐싱, 크로스루프 세션 체크",
    category: "Tools / MCP / Plugins",
    summary:
      "활성화되었으나 설정되지 않은 toolsets이 감지되면 자동으로 재구성하여 도구 누락을 방지합니다. 모델 제공자 선택기에서 Bedrock 자격증명 프로브를 회피하여 불필요한 credential 검사를 건너뜁니다. OpenRouter에 응답 캐싱(response caching) 지원이 추가됐습니다. Weixin에서 send_weixin_direct 호출 시 크로스루프 세션을 체크하여 안전성을 높입니다.",
    commits: [
      {
        sha: "457c7b7",
        message: "feat(openrouter): add response caching support (#19132)",
        href: "https://github.com/NousResearch/hermes-agent/commit/457c7b76cd69089142f7ee02bf26ed5fef9d8741",
      },
      {
        sha: "a22465e",
        message: "fix(weixin): send_weixin_direct cross-loop session check",
        href: "https://github.com/NousResearch/hermes-agent/commit/a22465e07ab4b71019f711e7a6463f6590c50742",
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
    ],
  },
  {
    date: "2026-05-02",
    title: "Gateway·Discord·Telegram·Feishu: systemd 무한 재시도, --insecure 비루프백 WebSocket, keepalive·재시작 위생, zombie 방지, /skill 자동완성, polling liveness, config 우선순위",
    category: "Gateway / State",
    summary:
      "Gateway systemd 유닛이 실패 시 backoff와 함께 무한 재시도하도록 수정됐습니다. --insecure 모드에서 비루프백 IP의 WebSocket 연결을 허용합니다. httpx keepalive가 강화되고 WhatsApp typing-response 누수가 수정됐습니다. Gateway 종료/재시작 시 drain timeout, false-fatal 오판 방지, 성공 로그 출력 등 위생 처리가 개선됐습니다. agent/display/timezone 설정에서 config.yaml이 .env보다 우선합니다. Discord에서 재연결 전 이전 클라이언트를 닫아 zombie websocket을 방지하고, /reload-skills가 /skill 자동완성을 실시간 갱신하며 external_dirs 스킬도 포함하고 legacy 25x25 캡이 제거됐습니다. 32자 clamp 충돌 시 경고를 출력합니다. Telegram은 재연결 후 polling liveness를 탐지하여 wedged Updater를 감지합니다. Feishu는 원격 문서 다운로드를 httpx.AsyncClient 컨텍스트 내에서 완료합니다.",
    commits: [
      {
        sha: "f98b5d0",
        message: "fix: gateway systemd unit now retries indefinitely with backoff (#18639)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f98b5d00a49b01fb833deecace78656035bc6f6d",
      },
      {
        sha: "585d677",
        message: "fix: allow WebSocket connections from non-loopback IPs in --insecure mode (#18633)",
        href: "https://github.com/NousResearch/hermes-agent/commit/585d6778da28f4a63205d95a296358e2cce23ed6",
      },
      {
        sha: "762eb79",
        message: "fix(gateway): tighten httpx keepalive and close whatsapp typing-response leak (#18451)",
        href: "https://github.com/NousResearch/hermes-agent/commit/762eb79f1e1985a54758d40f3d3caa2f119bd4da",
      },
      {
        sha: "1dce908",
        message: "fix(gateway): shutdown + restart hygiene (drain timeout, false-fatal, success log) (#18761)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1dce90893016a822480599d02505664c294f255c",
      },
      {
        sha: "e444d8f",
        message: "fix(gateway): config.yaml wins over .env for agent/display/timezone settings (#18764)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e444d8f29cead99781cbd4306160b81887b3f4e5",
      },
      {
        sha: "292d2fb",
        message: "fix(discord): close old client before reconnect to prevent zombie websockets (#18187)",
        href: "https://github.com/NousResearch/hermes-agent/commit/292d2fb42fe304e4d6e6184f39e1f60e5aa771f8",
      },
      {
        sha: "10297fa",
        message: "fix(discord): `/reload-skills` now refreshes the `/skill` autocomplete live (#18754)",
        href: "https://github.com/NousResearch/hermes-agent/commit/10297fa23c982a563844a1014f16bec77e1b6598",
      },
      {
        sha: "8825e90",
        message: "fix(discord): complete #18741 for /skill autocomplete and drop legacy 25x25 caps (#18745)",
        href: "https://github.com/NousResearch/hermes-agent/commit/8825e9044c2657b726f589f4287cf827f77ff44e",
      },
      {
        sha: "5eac608",
        message: "fix(discord): warn on 32-char clamp collisions in the /skill collector (#18759)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5eac6084bc781377cc1432165ebb489ccf5d6fbf",
      },
      {
        sha: "2470434",
        message: "fix(telegram): probe polling liveness after reconnect to detect wedged Updater",
        href: "https://github.com/NousResearch/hermes-agent/commit/2470434d60991a46e0fd4733e4a69722acb97ebe",
      },
      {
        sha: "38dd057",
        message: "fix(feishu): finalize remote document downloads inside httpx.AsyncClient context (#18502)",
        href: "https://github.com/NousResearch/hermes-agent/commit/38dd057e91dcc47e82478ebc31c66d67b2d96ace",
      },
      {
        sha: "e2cea6e",
        message: "fix(gateway): include external_dirs skills in Telegram/Discord slash commands (#18741)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e2cea6eeba36e8d6b96c0ed08bc4514b5c07c464",
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
  {
    date: "2026-05-01",
    title: "Gateway·Slack·Yuanbao·Telegram + ACP·Agent·Curator: 비공개 알림, ephemeral 슬래시 커맨드, 자동 재시작, /goal, loop guardrails, lazy session",
    category: "Gateway / State",
    summary:
      "Gateway에 비공개 알림(private notice) 전달 기능이 추가되고 Slack format_message가 수정됐습니다. Slack 슬래시 커맨드가 ephemeral ack와 라우팅을 지원하며, 사용자 세션 격리를 보존합니다. Gateway가 소스 파일 변경을 감지하면 자동 재시작합니다. Slack 예약 명령어가 네이티브 슬래시 매니페스트에서 제외되고 assistant thread 상태가 정리됩니다. DeliveryTarget.parse에서 대소문자 구분 채팅 ID를 보존하고 free_response_channels 스칼라 값을 문자열로 변환합니다. Yuanbao는 그룹 슬래시 커맨드에서 소유자 신원 확인을 강제합니다. Telegram은 DM 토픽 생성 후 seed 메시지를 전송합니다. ACP에 steer/queue 슬래시 커맨드가 추가되고, 도구 호출 반복 루프를 감지하는 guardrail이 warning-first 방식으로 추가됐습니다. /goal 기능으로 크로스턴 영속 목표(Ralph loop)를 설정할 수 있습니다. 지연 세션 생성(lazy session)으로 첫 메시지까지 DB row를 유예하여 리소스를 절약합니다. Curator 첫 실행이 지연되고 --dry-run 미리보기 옵션이 추가됐습니다. Persistent Goals 문서가 docs nav와 llms.txt에서 접근 가능하게 됐습니다.",
    commits: [
      {
        sha: "0ab2d75",
        message: "feat(gateway): private notice delivery and Slack format_message fixes",
        href: "https://github.com/NousResearch/hermes-agent/commit/0ab2d752ffdae211b0f4fd06c8f62cf7eec191a7",
      },
      {
        sha: "7cda0e5",
        message: "fix(gateway/slack): ephemeral ack and routing for slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/7cda0e522443c6e7790793b93b085508fc530fc8",
      },
      {
        sha: "8fcc160",
        message: "fix(gateway/slack): review fixes — scope ephemeral to commands, user isolation",
        href: "https://github.com/NousResearch/hermes-agent/commit/8fcc160f6b979f9567e76f189e226c18cabc6308",
      },
      {
        sha: "f99676e",
        message: "fix(gateway): auto-restart when source files change out from under us (#17648) (#18409)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f99676e315408db3742e00ca9808a31592704399",
      },
      {
        sha: "a147164",
        message: "fix(slack): preserve per-user slash-command session isolation",
        href: "https://github.com/NousResearch/hermes-agent/commit/a147164d3c4ceb7e2900e240e90d0f1db7910bf8",
      },
      {
        sha: "d05a87e",
        message: "fix(gateway): clear slack assistant thread status",
        href: "https://github.com/NousResearch/hermes-agent/commit/d05a87e68662043ac7d66dad942e428a81cd648f",
      },
      {
        sha: "5cdc39e",
        message: "fix(gateway): preserve case-sensitive chat IDs in DeliveryTarget.parse",
        href: "https://github.com/NousResearch/hermes-agent/commit/5cdc39e29a032091c4989045b0843715737680c3",
      },
      {
        sha: "2b3923f",
        message: "fix(gateway): coerce scalar free_response_channels to str before split",
        href: "https://github.com/NousResearch/hermes-agent/commit/2b3923ff138f5bd68e576b722ee298a8ce07dfe7",
      },
      {
        sha: "a717199",
        message: "fix(slack): exclude reserved Slack commands from native slash manifest",
        href: "https://github.com/NousResearch/hermes-agent/commit/a717199bbf31a0900a99b06153d3ba5803cd9012",
      },
      {
        sha: "75e1339",
        message: "fix(telegram): send seed message after creating DM topics (#18334)",
        href: "https://github.com/NousResearch/hermes-agent/commit/75e1339d4cdb32652e560eccc3930cc9264ac67b",
      },
      {
        sha: "b7ad3f4",
        message: "fix(yuanbao): enforce owner identity check on group slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7ad3f478f9bc24768f88e4339fc3e6e23d0292b",
      },
      {
        sha: "e27b0b7",
        message: "feat(acp): add steer and queue slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/e27b0b76517c903541af20d0bd606fa7b3c83005",
      },
      {
        sha: "58b8996",
        message: "fix(agent): add tool-call loop guardrails",
        href: "https://github.com/NousResearch/hermes-agent/commit/58b89965c8c4489db817be737eb4e458df0a8e06",
      },
      {
        sha: "265bd59",
        message: "feat: /goal — persistent cross-turn goals (Ralph loop)",
        href: "https://github.com/NousResearch/hermes-agent/commit/265bd59c1d9f8dea658f243b257d4fae3685af53",
      },
      {
        sha: "c5b4c48",
        message: "fix: lazy session creation — defer DB row until first message (#18370)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c5b4c481656634ff919b214a037b830077d3bbd1",
      },
      {
        sha: "77c0bc6",
        message: "fix(curator): defer first run and add --dry-run preview (#18373) (#18389)",
        href: "https://github.com/NousResearch/hermes-agent/commit/77c0bc6b13c8c3f849111c41f2e9233a13b3dcb2",
      },
      {
        sha: "0b76d23",
        message: "makes the Persistent Goals docs accessible in the docs nav (and llms.txt) (#18481)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0b76d23d1acffd14bbc5061cd4f913cf7a0e1a8a",
      },
      {
        sha: "a01c1f7",
        message: "fix: kanban button",
        href: "https://github.com/NousResearch/hermes-agent/commit/a01c1f7305bda8ebc5cbcde22f2a80a0300a2ca1",
      },
    ],
  },
];
