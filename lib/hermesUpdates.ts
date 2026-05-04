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
    title: "Gateway/CLI: /new 세션명 인자, systemd 갱신, quick-command 우선처리, free_response_channels",
    category: "Gateway / State",
    summary:
      "`/new` 명령어가 선택적 세션 이름 인자를 받을 수 있게 되어, `/new my-session` 형태로 바로 이름 있는 세션을 생성할 수 있습니다. `/new <name>` 실행 시 타이틀 오류가 올바르게 표시됩니다. Gateway가 부팅 시 systemd 유닛을 갱신(refresh)하여 start/restart 때뿐 아니라 부팅 시점에도 유닛이 최신 상태를 반영합니다. quick-command dispatch가 built-in 핸들러보다 먼저 처리되어 커스텀 커맨드가 우선 실행됩니다. `free_response_channels` 설정이 `DISCORD_IGNORE_NO_MENTION`보다 우선 적용됩니다.",
    commits: [
      {
        sha: "f720751",
        message: "feat(cli,gateway): /new accepts optional session name argument",
        href: "https://github.com/NousResearch/hermes-agent/commit/f720751d796aa0b4658a5bce49995bff2b7a9954",
      },
      {
        sha: "5b6d413",
        message: "fix(cli,gateway): surface title errors from /new <name>",
        href: "https://github.com/NousResearch/hermes-agent/commit/5b6d4134765ecfd284a63f3f12d3d3eecc0beaaf",
      },
      {
        sha: "af6f9bc",
        message: "fix: refresh systemd unit on gateway boot (not just start/restart) (#19684)",
        href: "https://github.com/NousResearch/hermes-agent/commit/af6f9bc2a12682b06fb3632acf5a9cbf01e74a85",
      },
      {
        sha: "74c997d",
        message: "fix(gateway): move quick-command dispatch before built-in handlers",
        href: "https://github.com/NousResearch/hermes-agent/commit/74c997d9851581f169b35e33a633255f40bcbc6b",
      },
      {
        sha: "ad4542b",
        message: "fix(gateway): allow free_response_channels to override DISCORD_IGNORE_NO_MENTION",
        href: "https://github.com/NousResearch/hermes-agent/commit/ad4542bf6dd380c4d73ce7b0666f5e1bda1dd330",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent/모델: Anthropic tool schema 정리, file-tools 크기 제한, compressor 타임아웃, delegation, MiMo 모델명",
    category: "Agent 안정성",
    summary:
      "Anthropic 제공자에서 도구 input_schema의 최상위 oneOf/allOf/anyOf를 제거하여 도구 호출 호환성을 개선합니다. file-tools의 read_file 결과 크기를 제한하여 컨텍스트 윈도우 초과를 방지합니다. Compressor가 model-not-found뿐 아니라 타임아웃 오류 시에도 폴백을 트리거합니다. Delegation에서 `resolve_runtime_provider` 호출 시 `target_model`을 전달하여 위임 자격 증명이 올바르게 해석됩니다. Xiaomi MiMo 제공자에서 모델명의 점(.)을 보존합니다.",
    commits: [
      {
        sha: "a219a0a",
        message: "fix(anthropic): strip top-level oneOf/allOf/anyOf from tool input_schema",
        href: "https://github.com/NousResearch/hermes-agent/commit/a219a0a4df2aeacd5ff7dcdbaf75e0bb6e6ef876",
      },
      {
        sha: "e50809b",
        message: "fix(file-tools): cap read_file result size to prevent context window overflow",
        href: "https://github.com/NousResearch/hermes-agent/commit/e50809b771de3bf057fa494f02f78fb613d8a926",
      },
      {
        sha: "6b88f46",
        message: "fix(compressor): trigger fallback on timeout errors alongside model-not-found",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b88f46c54ac6e43a8a1ba40b7f5175cc7be5f7f",
      },
      {
        sha: "83bbe9b",
        message: "fix(delegation): pass target_model to resolve_runtime_provider in _resolve_delegation_credentials",
        href: "https://github.com/NousResearch/hermes-agent/commit/83bbe9b458cc19dc7d12c5dbf4e8e68ff37659b2",
      },
      {
        sha: "145a38a",
        message: "fix(agent): preserve dots in model names for Xiaomi MiMo provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/145a38a875c0d352c4e14e91ce9992b330240476",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "CLI/TUI/PTY: 프로필 검증, 파일드롭 감지, custom:* 모델, TUI 빌드, TERM 기본값",
    category: "Agent 안정성",
    summary:
      "CLI에서 `-p`/`--profile`로 전달된 유효하지 않은 argv 값을 프로바이더 해석 전에 거부합니다. `_detect_file_drop`에서 따옴표로 감싼 상대 경로를 올바르게 감지합니다. custom 모델 프로빙 시 빈 `api_mode`를 생략하여 불필요한 설정 충돌을 방지합니다. TUI(hermes-ink) 빌드 스크립트가 `--outfile` 대신 `--outdir`을 사용합니다. PTY에서 resize probe용 TERM 기본값이 설정됩니다.",
    commits: [
      {
        sha: "c8ecb56",
        message: "fix(cli): reject invalid argv values from -p/--profile before resolving",
        href: "https://github.com/NousResearch/hermes-agent/commit/c8ecb56f27b034187ce8dd24156497997d247c76",
      },
      {
        sha: "c659a16",
        message: "fix(cli): detect quoted relative paths in _detect_file_drop",
        href: "https://github.com/NousResearch/hermes-agent/commit/c659a168992c97f0b15af2eb7e4add03c21f7a3b",
      },
      {
        sha: "0df7e61",
        message: "fix(cli): omit empty api_mode when probing custom models",
        href: "https://github.com/NousResearch/hermes-agent/commit/0df7e61d2cc1c1a723f576e701a03f16c0e9edf2",
      },
      {
        sha: "2d3d1d9",
        message: "fix(tui): use --outdir instead of --outfile in hermes-ink build script",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d3d1d97361371f519bb369b6618edb67f7aa87e",
      },
      {
        sha: "7d36533",
        message: "fix(pty): default TERM for resize probes",
        href: "https://github.com/NousResearch/hermes-agent/commit/7d36533aeb0fe4fd5680d3285ffbeb50f8908035",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Config/Cron/Auth: Google OAuth TOCTOU, cronjob custom 제공자, setup 건너뛰기, delegation guard",
    category: "Config / Auth",
    summary:
      "Google OAuth에서 자격 증명 저장 시 TOCTOU(time-of-check time-of-use) 경쟁 조건을 방지합니다. Cronjob이 bare `custom` 제공자를 미지정으로 처리하고, 도구 스키마에 `custom:<name>` 제공자 형식을 표시합니다. `hermes setup`에서 `AUXILIARY_VISION_MODEL` 입력이 비어 있으면 해당 설정 쓰기를 건너뜁니다. Delegation에서 config.yaml의 `delegation: null`에 대해 `_load_config()`가 크래시 없이 방어합니다.",
    commits: [
      {
        sha: "412f238",
        message: "fix(google_oauth): close TOCTOU window when saving credentials",
        href: "https://github.com/NousResearch/hermes-agent/commit/412f2389f14a625074fc0ae5a1bda6f97a1c6d8f",
      },
      {
        sha: "cba86b7",
        message: "fix(cronjob): treat bare 'custom' provider as unspecified in override",
        href: "https://github.com/NousResearch/hermes-agent/commit/cba86b7303fa8f9470dd68daa0c6126c6d8760b8",
      },
      {
        sha: "0896944",
        message: "fix(cronjob): advertise 'custom:<name>' provider format in tool schema",
        href: "https://github.com/NousResearch/hermes-agent/commit/089694438204524fb300162b08b2ed0f901235a2",
      },
      {
        sha: "2a52e28",
        message: "fix(setup): skip AUXILIARY_VISION_MODEL write when input is blank",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a52e285685750c5f60d785c072fc394a84136a0",
      },
      {
        sha: "d17eff2",
        message: "fix(delegate): guard _load_config() against delegation: null in config.yaml",
        href: "https://github.com/NousResearch/hermes-agent/commit/d17eff29d5fe6a09e0a0cef49df999d4a70eb073",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Kanban/Dashboard/Docs: workspace 인라인 생성, 대시보드 플러그인 로딩, /kanban 문서화",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban 대시보드의 인라인 생성 폼에 workspace 종류(kind)와 경로(path) 입력 필드가 추가되었습니다. Kanban 대시보드의 드로어 너비가 확장되고 본문 폰트가 커졌으며 코드 블록 대비가 개선되었습니다. 대시보드가 플러그인 로드 중에는 깜빡이는 스피너 대신 null을 렌더링하고, 플러그인 로드가 완료될 때까지 알 수 없는 경로 리다이렉트를 지연시킵니다. `/kanban` 슬래시 커맨드가 문서화되었습니다.",
    commits: [
      {
        sha: "33f554d",
        message: "feat(kanban-dashboard): workspace kind + path inputs in inline create form (#19679)",
        href: "https://github.com/NousResearch/hermes-agent/commit/33f554d83cc6a600ec87fe70449b66d40d0b7852",
      },
      {
        sha: "bff484a",
        message: "fix(kanban-dashboard): widen drawer, bump body fonts, fix code-block contrast (#19638)",
        href: "https://github.com/NousResearch/hermes-agent/commit/bff484a51b8f12e8e4663b3a880709f2e8cfc1c1",
      },
      {
        sha: "20a06c5",
        message: "fix(dashboard): render null instead of flashing spinner during plugin load",
        href: "https://github.com/NousResearch/hermes-agent/commit/20a06c586f4f8eacb7a48aa25f9494aa33dfa9f1",
      },
      {
        sha: "06a6d69",
        message: "fix(dashboard): defer unknown-route redirect while dashboard plugins load",
        href: "https://github.com/NousResearch/hermes-agent/commit/06a6d6967a0489293c479ea843330fc19ea82a89",
      },
      {
        sha: "986ec04",
        message: "docs: document /kanban slash command (#19584)",
        href: "https://github.com/NousResearch/hermes-agent/commit/986ec04048b31759de6bda86ab3360e57606f8ed",
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
