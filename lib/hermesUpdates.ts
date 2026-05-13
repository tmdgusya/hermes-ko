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
    title: "Gateway / Messaging: systemd 재시작 지연 단축, Weixin 문서화, Telegram reaction 정리, XMPP JID 인식, WhatsApp 환경변수 추가",
    category: "Gateway / Messaging",
    summary:
      "Gateway의 systemd 재시작 지연이 단축됩니다 (#0bc5f7b). Gateway 도움말과 docstring에 Weixin이 명시됩니다 (#a694a26). Telegram에서 처리 취소 시 진행 중인 reaction이 정리됩니다 (#6f285ef). send_message가 XMPP JID를 명시적 타겟으로 인식합니다 (#a54d4b0). cron의 홈 타겟 환경변수에 whatsapp이 포함됩니다 (#d8c4460) (main branch 기준).",
    commits: [
      {
        sha: "0bc5f7b",
        message: "fix(gateway): reduce systemd restart delay",
        href: "https://github.com/NousResearch/hermes-agent/commit/0bc5f7b235117ccf791aab83b92164c0041d34af",
      },
      {
        sha: "a694a26",
        message: "docs(gateway): mention Weixin in gateway help and docstrings",
        href: "https://github.com/NousResearch/hermes-agent/commit/a694a263309d1f2ae98fb938b76b013c2808cf35",
      },
      {
        sha: "6f285ef",
        message: "fix(telegram): clear in-progress reaction on cancelled processing (#24628)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f285efb8058ee5bd1b91e4e0ba9187ec8b183e8",
      },
      {
        sha: "a54d4b0",
        message: "fix(send_message): recognize XMPP JIDs as explicit targets",
        href: "https://github.com/NousResearch/hermes-agent/commit/a54d4b0e46429eb2d13bd41145c74c5e863d1e49",
      },
      {
        sha: "d8c4460",
        message: "fix(cron): include whatsapp in _HOME_TARGET_ENV_VARS",
        href: "https://github.com/NousResearch/hermes-agent/commit/d8c4460fe35e9a471b8b115b73c39527e5492477",
      },
    ],
  },
  {
    date: "2026-05-13",
    title: "Cache / Web / LSP: Portal Qwen TTL 5분 단축, Tavily Bearer 인증, Doctor /models 스킵, LSP TypeScript SDK 설치",
    category: "Cache / Web / LSP",
    summary:
      "Portal Qwen의 캐시 TTL이 1시간에서 5분으로 단축됩니다 — Alibaba upstream이 5분만 지원하기 때문입니다 (#2a18b62). Tavily /crawl 엔드포인트에 Bearer 인증 헤더가 추가됩니다 (#6f92a21). doctor에서 /models를 지원하지 않는 프로바이더에 대해 헬스체크를 건너뜁니다 (#0c233e7). LSP에서 TypeScript SDK 설치, tsc 누락 스킵, shellcheck 경고 처리가 개선됩니다 (#29c9ff9) (main branch 기준).",
    commits: [
      {
        sha: "2a18b62",
        message: "fix(cache): drop ttl=1h on Portal Qwen — Alibaba upstream is 5m-only (#24702)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a18b6283b528817e87354b1c524501b570a7d62",
      },
      {
        sha: "6f92a21",
        message: "fix(web): add Bearer auth header for Tavily /crawl endpoint",
        href: "https://github.com/NousResearch/hermes-agent/commit/6f92a21926f04f2235d5ecd06aa4ae38a327ccbc",
      },
      {
        sha: "0c233e7",
        message: "fix(doctor): skip /models health check for providers that don't support it",
        href: "https://github.com/NousResearch/hermes-agent/commit/0c233e70f84a7598f874d6a9b31898408717eabe",
      },
      {
        sha: "29c9ff9",
        message: "fix(lsp): typescript SDK install + tsc-missing skip + shellcheck warning (#24630)",
        href: "https://github.com/NousResearch/hermes-agent/commit/29c9ff9ba5d63bc81d53935c3f84f066673a06b2",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "CLI / Docs / Kanban: insights 파싱 수정, 내부 문서 링크 보수, Kanban 태스크 게이팅 명확화",
    category: "CLI / Docs / Kanban",
    summary:
      "CLI에서 positional insights days 파싱이 수정됩니다 (#a34998e). Webhooks 및 MLOps 스킬 페이지의 끊어진 내부 링크가 교정됩니다 (#1189ed7). Kanban의 dependent task gating 동작이 문서에서 명확해집니다 (#71198b9) (main branch 기준).",
    commits: [
      {
        sha: "a34998e",
        message: "fix(cli): parse positional insights days",
        href: "https://github.com/NousResearch/hermes-agent/commit/a34998ee2fc39ae7009abd1340082400ef21c08f",
      },
      {
        sha: "1189ed7",
        message: "fix(docs): correct broken internal links to webhooks and mlops skill pages",
        href: "https://github.com/NousResearch/hermes-agent/commit/1189ed785504fd599b520561e0fb3dbc46a45f66",
      },
      {
        sha: "71198b9",
        message: "docs(kanban): clarify dependent task gating",
        href: "https://github.com/NousResearch/hermes-agent/commit/71198b9e19d25daf5dbdecf6f99e90cc342f045d",
      },
    ],
  },
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
];
