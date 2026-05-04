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
    title: "Gateway/채팅: quick-command 우선처리, 프로필 표시, PID 스캔, Signal 인증, QQBot, Telegram 사진 대체",
    category: "Gateway / State",
    summary:
      "Gateway에서 quick-command dispatch가 built-in 핸들러보다 먼저 처리되도록 수정하여, 커스텀 커맨드가 의도대로 우선 실행됩니다. `gateway status` 명령어가 다른 프로필도 함께 표시하여 혼란을 방지합니다. Gateway 프로세스 스캔에서 상위(ancestor) PID를 제외하여 오탐지를 줄입니다. Signal에서 미인증 발신자의 reaction을 건너뛰어 보안을 강화합니다. send_message가 QQBot C2C 및 그룹 채팅을 지원합니다. Telegram에서 사진 크기가 제한을 초과하면 문서(document)로 대체 전송합니다.",
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
        sha: "3792b77",
        message: "fix(send_message): support QQBot C2C and group chats",
        href: "https://github.com/NousResearch/hermes-agent/commit/3792b77bd11dcccab3b0994bd31086969fb9f5fb",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Agent/모델: preflight 압축 표시, Qwen3/Ollama 인라인 사고 감지, SDK 재시도 비활성화, Gemini 토큰 추적, Anthropic max_tokens 제한",
    category: "Agent 안정성",
    summary:
      "Agent가 preflight 압축(preflight compression) 상태를 표시하도록 개선되어, 압축 동작을 투명하게 확인할 수 있습니다. Qwen3/Ollama 모델에서 도구 호출 이후에도 인라인 사고(inline thinking)를 감지합니다. OpenAI SDK의 요청별 재시도를 비활성화하여 불필요한 지연을 방지합니다. Gemini 제공자에서 스트리밍 청크의 usageMetadata를 추출하여 토큰 사용량 추적이 가능해졌습니다. Anthropic/DashScope 경로에서 Qwen 모델의 max_tokens를 65536으로 제한합니다.",
    commits: [
      {
        sha: "8bdec80",
        message: "fix(agent): surface preflight compression status",
        href: "https://github.com/NousResearch/hermes-agent/commit/8bdec8088204a321b15dabe7c0df731ad3a66ae1",
      },
      {
        sha: "51dc98d",
        message: "fix(agent): detect Qwen3/Ollama inline thinking after tool calls",
        href: "https://github.com/NousResearch/hermes-agent/commit/51dc98d314000d7b326b341bb2b95f23ac6814d4",
      },
      {
        sha: "52c539d",
        message: "fix(agent): disable SDK retries on per-request OpenAI clients",
        href: "https://github.com/NousResearch/hermes-agent/commit/52c539d53a2b4d457ccc5963a09c880cae49812f",
      },
      {
        sha: "ba83374",
        message: "fix(gemini): extract usageMetadata from streaming chunks for token tracking",
        href: "https://github.com/NousResearch/hermes-agent/commit/ba8337464da1f59888645356d3fe3250f343caaa",
      },
      {
        sha: "dc63ad0",
        message: "fix(anthropic): cap max_tokens at 65536 for Qwen models via DashScope",
        href: "https://github.com/NousResearch/hermes-agent/commit/dc63ad0ad2ec73014fb99f6c840a4ddea802b806",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "CLI/TUI/Compressor: custom:* provider 허용, voice 경합 방지, TUI 종료 정리, FD 누수 방지, compressor 쿨다운 초기화",
    category: "Agent 안정성",
    summary:
      "CLI에서 custom:* provider slug를 모델 검증에 허용하여 커스텀 프로바이더 설정이 가능해졌습니다. Voice TTS 재시작 시 경합(race)을 방지합니다. TUI에서 Ink 종료 후 process.exit(0)을 호출하여 터미널 정리(cleanup)가 제대로 이루어집니다. TUI가 세션 종료(teardown) 시 AIAgent를 닫아 파일 디스크립터 누수를 방지합니다. Compressor가 on_session_reset()에서 _summary_failure_cooldown_until을 초기화하여, 세션 재시작 후 압축 실패 쿨다운이 이월되지 않습니다.",
    commits: [
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
        sha: "9c93fc5",
        message: "fix(tui): call process.exit(0) after Ink exit to trigger terminal cleanup",
        href: "https://github.com/NousResearch/hermes-agent/commit/9c93fc5775c872d9a10b5b56c3b9fcc59946f742",
      },
      {
        sha: "6da970f",
        message: "fix(tui): close AIAgent on session teardown to prevent FD leak",
        href: "https://github.com/NousResearch/hermes-agent/commit/6da970f15d78d81dfc6287e54788acc2f869b64c",
      },
      {
        sha: "e2211b2",
        message: "fix(compressor): reset _summary_failure_cooldown_until in on_session_reset()",
        href: "https://github.com/NousResearch/hermes-agent/commit/e2211b2683d0dacbdb39af9bc5a2b712a742597d",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Cron/Curator/Skills: null job 복구, 무출력 AI 호출 건너뛰기, env-var 덮어쓰기 제거, curator 오탐 방지, 수동 스킬 보호",
    category: "Config / Auth",
    summary:
      "Cron이 null next_run_at job을 복구하고 non-dict origin을 허용하여 크래시를 방지합니다. Cron job에서 스크립트가 출력을 생성하지 않으면 AI 호출을 건너뛰어 불필요한 API 비용을 절감합니다. Cron에서 env-var가 저장된 provider 설정을 덮어쓰는 문제를 수정합니다. Curator가 background-review sediment에 대해 agent-created 마킹만 수행하도록 하여 오탐을 방지합니다. Skills에서 수동(manual) 스킬이 curator의 자동 관리 대상에서 제외됩니다.",
    commits: [
      {
        sha: "78b635e",
        message: "fix(cron): recover null next_run_at jobs and tolerate non-dict origin",
        href: "https://github.com/NousResearch/hermes-agent/commit/78b635ee3c1d489c8dfe7e01119b774edd80e50b",
      },
      {
        sha: "54cd633",
        message: "fix(cron): skip AI call when script produces no output",
        href: "https://github.com/NousResearch/hermes-agent/commit/54cd633366cf51810e2efc31e228a5774556b3c3",
      },
      {
        sha: "e224804",
        message: "fix(cron): drop stale env-var override of persisted provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/e2248045f56430acbc5bb2759938f4fd5300cb0b",
      },
      {
        sha: "3c070f9",
        message: "fix(curator): only mark agent-created for background-review sediment (#19621)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3c070f9f9d00a74462980862590b9703fdc002ca",
      },
      {
        sha: "abcaf05",
        message: "fix(skills): keep manual skills out of curator",
        href: "https://github.com/NousResearch/hermes-agent/commit/abcaf0522905ff849cc8241037f42fb669bcb664",
      },
    ],
  },
  {
    date: "2026-05-04",
    title: "Docker/보안/Config/Feishu: 단일 컨테이너 대시보드, 빌드 컨텍스트 정리, Meet localhost 바인딩, config 백업, Feishu MEDIA 지원",
    category: "Agent 안정성",
    summary:
      "Docker에서 HERMES_DASHBOARD=1 환경변수로 대시보드를 side-process로 실행하여 단일 컨테이너 구성이 가능해졌습니다. Docker 빌드 컨텍스트에서 compose/profile 런타임 상태를 제외하여 불필요한 파일 전송을 방지합니다. Meet 노드 서버를 localhost에 바인딩하고 토큰 파일 접근을 소유자 읽기 전용으로 제한하여 보안을 강화합니다. `hermes setup` 실행 전 config.yaml을 자동으로 백업합니다. Feishu에서 send_message 도구로 MEDIA 첨부 파일 전송이 가능해졌습니다.",
    commits: [
      {
        sha: "5671059",
        message: "feat(docker): launch dashboard as side-process via HERMES_DASHBOARD=1",
        href: "https://github.com/NousResearch/hermes-agent/commit/5671059f62ab28fa118b15fa148d5ae9a4200574",
      },
      {
        sha: "d7663c7",
        message: "fix(docker): exclude compose/profile runtime state from build context",
        href: "https://github.com/NousResearch/hermes-agent/commit/d7663c78083aff9df70349f36c587ebfc2c3aa59",
      },
      {
        sha: "2c7d7a9",
        message: "fix(security): bind Meet node server to localhost and restrict token file to owner read",
        href: "https://github.com/NousResearch/hermes-agent/commit/2c7d7a9b2f75593e7949a8ed64883e6425df9684",
      },
      {
        sha: "aede94e",
        message: "fix: back up config.yaml before hermes setup modifies it",
        href: "https://github.com/NousResearch/hermes-agent/commit/aede94e7573fc47cf4837f1812fe4d75a142eac3",
      },
      {
        sha: "cdde0c8",
        message: "fix(feishu): enable MEDIA attachment delivery in send_message tool",
        href: "https://github.com/NousResearch/hermes-agent/commit/cdde0c841190613564e86815d0ba84c4d3e654c5",
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
