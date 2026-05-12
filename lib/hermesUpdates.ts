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
    date: "2026-05-12",
    title: "Browser / Camofox: 외부 관리 Camofox 세션 지원, 환경변수 문서화",
    category: "Browser / Camofox",
    summary:
      "외부에서 관리되는(externally managed) Camofox 세션을 지원하는 기능이 추가됩니다 (#62fd905). 관련 환경변수 및 AUTHOR_MAP 항목이 문서화됩니다 (#f63d520). externally-managed sessions 섹션이 확장됩니다 (#38441a7) (main branch 기준).",
    commits: [
      {
        sha: "62fd905",
        message: "feat(browser): support externally managed Camofox sessions",
        href: "https://github.com/NousResearch/hermes-agent/commit/62fd905340969deb5fd914c623e4d1ab99dba8b0",
      },
      {
        sha: "f63d520",
        message: "chore(camofox): document new env vars + AUTHOR_MAP entry",
        href: "https://github.com/NousResearch/hermes-agent/commit/f63d520496f647d652e232e60bc2de5d404cc46d",
      },
      {
        sha: "38441a7",
        message: "docs(camofox): expand externally-managed sessions section (#24584)",
        href: "https://github.com/NousResearch/hermes-agent/commit/38441a7d776f116347ee0752368a643817ba3a85",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Gateway / State / Dashboard: SSE EOS sentinel 큐잉, macOS stale scoped lock 탐지, Dashboard UI 개선",
    category: "Gateway / State / Dashboard",
    summary:
      "태스크 완료 시 SSE EOS sentinel이 큐에 들어가도록(enqueue) 수정됩니다 (#4bb0a82). macOS에서 start_time이 없는 경우 cmdline을 통해 stale scoped lock을 탐지합니다 (#653d304). scoped-lock 테스트에서 os.kill 대신 _pid_exists를 패치합니다 (#629c33c). Dashboard 모달·레이아웃·일관성 개선 및 테스트 수정이 적용됩니다 (#fc3fd6b). Dashboard 수정 PR이 머지됩니다 (#642768c) (main branch 기준).",
    commits: [
      {
        sha: "4bb0a82",
        message: "fix(gateway): enqueue SSE EOS sentinel on task completion",
        href: "https://github.com/NousResearch/hermes-agent/commit/4bb0a82a2b8dc4d4fd952d977a81ae2ccbc52fbc",
      },
      {
        sha: "653d304",
        message: "fix(gateway): detect stale scoped locks via cmdline when start_time is absent on macOS",
        href: "https://github.com/NousResearch/hermes-agent/commit/653d30429039d1f5f048889e5397c1297c1fda38",
      },
      {
        sha: "629c33c",
        message: "test(gateway): patch _pid_exists instead of os.kill for scoped-lock tests",
        href: "https://github.com/NousResearch/hermes-agent/commit/629c33c633a12e43e9a334fbd07a973b317c950e",
      },
      {
        sha: "fc3fd6b",
        message: "fix(dashboard): UI polish — modals, layout, consistency, test fixes",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc3fd6bb6b3cb4aa01d71bb52c0092ec4b5db1b8",
      },
      {
        sha: "642768c",
        message: "Merge pull request #24161 from NousResearch/austin/fix/dashboard",
        href: "https://github.com/NousResearch/hermes-agent/commit/642768c5c70b428507acc7b31d17e1e53141067b",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Agent: 턴별 파일 변경 검증 푸터, Nous Portal 모델 메타데이터 권한 전환, 유료 추천 통합",
    category: "Agent",
    summary:
      "에이전트 각 턴마다 파일 변경(mutation) 검증 footer가 추가됩니다 (#c594a23). Nous Portal이 모델 메타데이터의 권한(authority)으로 사용되도록 전환됩니다 (#2863e94). Nous Portal의 유료(paid) 추천(recommendations)이 정적 목록과 통합(union)됩니다 (#c23a87b) (main branch 기준).",
    commits: [
      {
        sha: "c594a23",
        message: "feat(agent): per-turn file-mutation verifier footer (#24498)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c594a2304734b708e7ebc68d4fe2eff1bb57abbc",
      },
      {
        sha: "2863e94",
        message: "Use nous portal as model metadata authority (#24502)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2863e9484a1841d0a17044383c9a32482c01b20e",
      },
      {
        sha: "c23a87b",
        message: "union paid recs from nous portal with static list (#24509)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c23a87bc163b188abc7e40fbdccf07a9739231c3",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Security / Supply Chain / Install: 공급망 어드바이저리 체커 + lazy-install 프레임워크, uv install 에러 표시, extras 설치 수정, 공개 어드바이저리 페이지 제거",
    category: "Security / Supply Chain / Install",
    summary:
      "공급망 보안 어드바이저리 체커와 lazy-install 프레임워크, 계층형(tiered) 설치 폴백이 추가됩니다 (#c1eb2dc). uv install 및 uv.lock 동기화 에러가 조용히 무시되지 않고 명시적으로 표시됩니다 (#d186186). --extra all 대신 --all-extras를 사용하도록 수정되고, lazy-covered extras가 [all]에서 제거됩니다 (#3955aef). 공개 어드바이저리 페이지가 제거되고 커뮤니티 소통은 별도로 처리됩니다 (#dd0923b) (main branch 기준).",
    commits: [
      {
        sha: "c1eb2dc",
        message: "feat(security): supply-chain advisory checker + lazy-install framework + tiered install fallback (#24220)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c1eb2dcda7d729e7c5353ec7b5744f331aa752fe",
      },
      {
        sha: "d186186",
        message: "fix(install): surface uv install + uv.lock sync errors instead of silently hanging (#24504)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d186186e1af74c3e4568e4775d55e0f24f5c2071",
      },
      {
        sha: "3955aef",
        message: "fix(install): use `--extra all` not `--all-extras`; drop lazy-covered extras from [all] (#24515)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3955aefced81b1adf3557b2a64ea30c62fc51f99",
      },
      {
        sha: "dd0923b",
        message: "docs: remove public advisory page (handle community comms separately) (#24253)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dd0923bb89ed2dd56f82cb63656a1323f6f42e6f",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Computer Use / TUI: hermes update 시 cua-driver 갱신 + OSC52 터미널 클립보드 안전망 스킵 + guard·comment 정리",
    category: "Computer Use / TUI",
    summary:
      "hermes update 실행 시 cua-driver를 갱신(refresh)하고, install --upgrade 옵션이 추가됩니다 (#ced1990). OSC52 기능을 지원하는 터미널에서 불필요한 네이티브 클립보드 안전망(native safety net)을 건너뛰도록 수정됩니다 (#3c23b15). guard 조건 수정(#057fc7b), 주석 정리(#32abe74, #f0c2964)가 포함됩니다 (main branch 기준).",
    commits: [
      {
        sha: "ced1990",
        message: "feat(computer-use): refresh cua-driver on `hermes update` + add `install --upgrade` (#24063)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ced1990c1cab2413e6778d0eb35f526b6b9c1359",
      },
      {
        sha: "3c23b15",
        message: "fix(tui-clipboard): skip native safety net on OSC52-capable terminals (#20954)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3c23b15f815ece74bfadbe2bd38e38512f42d2ad",
      },
      {
        sha: "057fc7b",
        message: "fix guard",
        href: "https://github.com/NousResearch/hermes-agent/commit/057fc7b073731934e56850f913dbc85aa5d6ac26",
      },
      {
        sha: "32abe74",
        message: "fix comment",
        href: "https://github.com/NousResearch/hermes-agent/commit/32abe742fa81bee3acb42a274b2501afe1657c08",
      },
      {
        sha: "f0c2964",
        message: "remove comments",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0c2964f0b5a0e84e06d07ae6de7432ad792c23a",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "Model / Provider / Deps: Portal 무료 모델 피커 노출, kimi·moonshot 프로바이더 매핑, kimi-k2.6 context-length 수정, Portal Qwen 캐시 라우팅, aux 추론 요청 클라이언트 마커, MiniMax OAuth 강화, mistralai 의존성 격리 조치",
    category: "Model / Provider / Deps",
    summary:
      "curated list가 오래된 경우에도 Portal 플래그가 지정된 무료 모델을 피커에 표시합니다 (#e855925). OpenRouter를 이미 알려진 프로바이더에 대해서는 스킵하고 kimi/moonshot을 PROVIDER_TO_MODELS_DEV에 추가합니다 (#e2b713c). Ollama Cloud 및 Kimi Coding에서 kimi-k2.6의 context-length 해석이 수정됩니다 (#91eef62). Nous Portal Qwen 모델을 Portal-Claude 캐시 경로로 라우팅합니다 (#7993e03). kimi 관련 수정사항이 추가로 반영됩니다 (#528bba6). 모델 카탈로그가 리빌드됩니다 (#e155f2a). Voice & TTS 프로바이더 테이블 문서가 수정됩니다 (#407683b). aux 추론 요청에 클라이언트 마커 태그가 추가됩니다 (#94d9db7). MiniMax OAuth 대시보드 및 런타임이 강화됩니다 (#58e2109). PyPI에서 mistralai가 격리(quarantined)된 동안 [all] 설치가 실패하지 않도록 해당 의존성을 임시 제거합니다 (#99ad2d1) (main branch 기준).",
    commits: [
      {
        sha: "e855925",
        message: "fix(nous): surface Portal-flagged free models in picker even when curated list is stale (#24082)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e85592591e8028cceecb0ea2b4992a1643b52f93",
      },
      {
        sha: "e2b713c",
        message: "fix(model-metadata): skip OpenRouter for known providers, add kimi/moonshot to PROVIDER_TO_MODELS_DEV",
        href: "https://github.com/NousResearch/hermes-agent/commit/e2b713cced07076ccb751e28b30d235fede1fa59",
      },
      {
        sha: "91eef62",
        message: "fix: correct context-length resolution for kimi-k2.6 on Ollama Cloud and Kimi Coding",
        href: "https://github.com/NousResearch/hermes-agent/commit/91eef6255e39e0be7b0730aabf6ad2ea49eefe77",
      },
      {
        sha: "7993e03",
        message: "fix(cache): route Nous Portal Qwen through Portal-Claude cache pathway (#24151)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7993e03c06145baece40427801161918b4a9130e",
      },
      {
        sha: "528bba6",
        message: "fix kimi",
        href: "https://github.com/NousResearch/hermes-agent/commit/528bba67340f6efaac8e99f13b6d52eda9f8a5e3",
      },
      {
        sha: "e155f2a",
        message: "rebuild model catalog",
        href: "https://github.com/NousResearch/hermes-agent/commit/e155f2aca9dc9135141d37d3aade060a9a02e470",
      },
      {
        sha: "407683b",
        message: "fix(docs): repair Voice & TTS provider table",
        href: "https://github.com/NousResearch/hermes-agent/commit/407683b72db0017f74eb7bc3b84e052f6b2e19c7",
      },
      {
        sha: "94d9db7",
        message: "add client marker tag on aux inference requests",
        href: "https://github.com/NousResearch/hermes-agent/commit/94d9db72ba5fdca8b34f7d7767e1750efd5dd952",
      },
      {
        sha: "58e2109",
        message: "fix(minimax): harden OAuth dashboard and runtime",
        href: "https://github.com/NousResearch/hermes-agent/commit/58e2109f10b5ea5e29b6c4011187762f9358c4a8",
      },
      {
        sha: "99ad2d1",
        message: "fix(deps): unbreak [all] install — drop mistralai while PyPI quarantined (#24205)",
        href: "https://github.com/NousResearch/hermes-agent/commit/99ad2d1372d3b5ff9134e9d8930fed6de4fc7b62",
      },
    ],
  },
];
