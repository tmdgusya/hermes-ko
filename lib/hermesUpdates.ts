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

export const hermesUpdatesLastChecked = "2026-05-13";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-13",
    title: "보안 / Gateway — 승인 DELETE 패턴 줄바꿈 우회 수정, hook_ctx 채팅 추적, WhatsApp npm 타임아웃 설정화, WeCom WebSocket 재연결",
    category: "보안 / Gateway",
    summary:
      "승인(approval) DELETE 패턴에서 DOTALL 플래그로 인한 줄바꿈 우회가 수정됩니다 (#80374d4). Gateway hook_ctx에 chat_id가 추가되어 메시지 출처 추적이 개선됩니다 (#dd1d4e9). WhatsApp npm 설치 타임아웃이 환경변수로 설정 가능해집니다 (#1a4e8f7). WeCom에서 WebSocket 재연결 후 연결 상태가 갱신됩니다 (#e77fd75) (main branch 기준).",
    commits: [
      {
        sha: "80374d4",
        message: "fix: approval DELETE pattern DOTALL flag allows newline bypass",
        href: "https://github.com/NousResearch/hermes-agent/commit/80374d4dd97368d00f55c551bdbfc0fab0f011a8",
      },
      {
        sha: "dd1d4e9",
        message: "fix(gateway): add chat_id to hook_ctx for message source tracking",
        href: "https://github.com/NousResearch/hermes-agent/commit/dd1d4e9c5d8284ae5bc1250260493bada1e8d685",
      },
      {
        sha: "1a4e8f7",
        message: "fix(gateway): make WhatsApp npm install timeout configurable",
        href: "https://github.com/NousResearch/hermes-agent/commit/1a4e8f70415e073db257c4a31908c21e9921dd5b",
      },
      {
        sha: "e77fd75",
        message: "fix(wecom): update connection status after WebSocket reconnection",
        href: "https://github.com/NousResearch/hermes-agent/commit/e77fd75c442cc3ec6cfbc91964a6dfe2dc3f777d",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Agent / Model — GLM 모델 도구 사용 강제, 모델 전환 시 context_length 초기화, thread_id 메타데이터 전달, Retry-After 소수점 처리",
    category: "Agent / Model",
    summary:
      "GLM 모델에 대해 도구 사용(tool-use) 강제(enforcement)가 prompt_builder에 주입됩니다 (#afa5b81). 모델 전환 시 기존 context_length 설정이 초기화됩니다 (#8ac3514). _send_via_adapter 라이브 경로에서 thread_id가 메타데이터로 전달됩니다 (#420762f). Retry-After 헤더에서 소수점(sub-second) 값이 float로 처리됩니다 (#4c82555) (main branch 기준).",
    commits: [
      {
        sha: "afa5b81",
        message: "fix(prompt_builder): inject tool-use enforcement for GLM models",
        href: "https://github.com/NousResearch/hermes-agent/commit/afa5b81918617126a489f21874cb39b1af7a7e93",
      },
      {
        sha: "8ac3514",
        message: "fix(agent): clear stale config context_length on model switch",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ac351407ef8c00b3ab8f0be3a944ba921052a39",
      },
      {
        sha: "420762f",
        message: "fix(tools): forward thread_id via metadata in _send_via_adapter live path",
        href: "https://github.com/NousResearch/hermes-agent/commit/420762f867460bc603d7aab0f6e9684f63fad5a2",
      },
      {
        sha: "4c82555",
        message: "fix(retry): use float() for Retry-After header to handle sub-second values",
        href: "https://github.com/NousResearch/hermes-agent/commit/4c825554c185ddb8961e68a7b146c75636c7acfe",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Messaging / TUI — LINE 소스 생성 수정, Telegram 스레드 폴백, Signal 연결 기기 그룹 메시지, TUI 작업 경로 정확화",
    category: "Messaging / TUI",
    summary:
      "LINE에서 존재하지 않는 create_source 대신 build_source가 사용됩니다 (#7c67097). Telegram에서 slash-confirm 결과 전송 시 스레드 폴백 헬퍼가 사용됩니다 (#e474130). Signal에서 연결된(linked) 기기에서 온 그룹 메시지가 syncMessage 경로에서 처리됩니다 (#e713932). TUI 상태 표시줄에 TERMINAL_CWD가 사용되어 경로가 정확해집니다 (#557deec) (main branch 기준).",
    commits: [
      {
        sha: "7c67097",
        message: "fix(line): use build_source instead of nonexistent create_source",
        href: "https://github.com/NousResearch/hermes-agent/commit/7c67097325f5fe4b4b703fed16ebafca7ca686dd",
      },
      {
        sha: "e474130",
        message: "fix(telegram): use thread fallback helper in slash-confirm result send",
        href: "https://github.com/NousResearch/hermes-agent/commit/e474130c487c5e4c3d58f309ec2fdb19474cc4dc",
      },
      {
        sha: "e713932",
        message: "fix(signal): handle group messages from linked devices in syncMessage path",
        href: "https://github.com/NousResearch/hermes-agent/commit/e71393237efd41af688569c3100baf3a89226b47",
      },
      {
        sha: "557deec",
        message: "fix(tui): use TERMINAL_CWD in _session_info for accurate status line path",
        href: "https://github.com/NousResearch/hermes-agent/commit/557deece6f0f6081c7fb8bcf30e8abf952165170",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Dashboard / CLI — 플러그인 재스캔, 설정 경로 표시, 헤드리스 브라우저 열기 방지, Windows 경로 인코딩, CJK 표시 폭",
    category: "Dashboard / CLI",
    summary:
      "Dashboard에서 캐시된 플러그인 디렉토리가 제거되면 재스캔됩니다 (#2a3140a). Config 페이지에 실제 설정 파일 경로가 표시됩니다 (#80375cb). 헤드리스 Linux에서 브라우저 자동 열기가 방지됩니다 (#e385877). CLI에서 Windows cp1252 경로 디코딩 문제가 수정됩니다 (#a33ec10). 응답 박스 헤더 레이블에 CJK 문자 표시 폭이 반영됩니다 (#7a4ad5c) (main branch 기준).",
    commits: [
      {
        sha: "2a3140a",
        message: "fix(dashboard): rescan plugins when cached directory is removed",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a3140a814ed5a55af49672ba355783c948f0179",
      },
      {
        sha: "80375cb",
        message: "fix(dashboard): display real config path on Config page",
        href: "https://github.com/NousResearch/hermes-agent/commit/80375cbe2c2d1da3d98558018fe357cfb9b85faa",
      },
      {
        sha: "e385877",
        message: "fix(dashboard): skip browser-open on headless Linux to prevent process exit",
        href: "https://github.com/NousResearch/hermes-agent/commit/e3858772d0465d2c5c386cb788642276138b5253",
      },
      {
        sha: "a33ec10",
        message: "fix(cli): @-file completion crash on Windows when paths aren't cp1252-decodable",
        href: "https://github.com/NousResearch/hermes-agent/commit/a33ec10874667469e037c5b0e4dbb1a9c2d3d794",
      },
      {
        sha: "7a4ad5c",
        message: "fix(cli): use display-width for response box header label to support CJK",
        href: "https://github.com/NousResearch/hermes-agent/commit/7a4ad5ccb472eed67b4287a4df9d2abb12a2255c",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Gateway / LSP — Telegram clarify 도구 인라인 키보드, LSP 시맨틱 진단, Daytona 샌드박스 마이그레이션, 보조 태스크 프로바이더 설정",
    category: "Gateway / LSP",
    summary:
      "Telegram에서 clarify 도구가 인라인 키보드 버튼과 연동됩니다 (#29d7c24). write_file/patch에서 실제 언어 서버의 시맨틱 진단이 지원됩니다 (#83b9389). Daytona 샌드박스 조회가 cursor-based list()로 마이그레이션됩니다 (#d89553c). 보조(auxiliary) 태스크에서 프로바이더 확인 시 cfg_base_url과 cfg_api_key가 전달됩니다 (#d68a0ec) (main branch 기준).",
    commits: [
      {
        sha: "29d7c24",
        message: "feat(gateway): wire clarify tool with inline keyboard buttons on Telegram (#24199)",
        href: "https://github.com/NousResearch/hermes-agent/commit/29d7c244c5d55230e838c049afb13d307168679c",
      },
      {
        sha: "83b9389",
        message: "feat(lsp): semantic diagnostics from real language servers in write_file/patch (#24168)",
        href: "https://github.com/NousResearch/hermes-agent/commit/83b93898c2673b29622b76e21e264f055ad7809d",
      },
      {
        sha: "d89553c",
        message: "fix(daytona): migrate legacy-sandbox lookup to cursor-based list() (#24587)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d89553c2d6e97e5ec40421613b02d25eca730d9b",
      },
      {
        sha: "d68a0ec",
        message: "fix(auxiliary): pass cfg_base_url and cfg_api_key when resolving task provider",
        href: "https://github.com/NousResearch/hermes-agent/commit/d68a0ec3839fbe82d04a76bbba0a3f835f72ee15",
      },
    ],
  },
];
