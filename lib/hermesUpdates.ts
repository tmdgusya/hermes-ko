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
  {
    date: "2026-05-11",
    title: "Prompt Cache / Session: 크로스 세션 1시간 프리픽스 캐시, HERMES_SESSION_ID 노출",
    category: "Cache / Session",
    summary:
      "Claude 모델에 대해 Anthropic / OpenRouter / Nous Portal에서 1시간 단위 크로스 세션 프리픽스 캐시가 도입됩니다 (#7b76366). HERMES_SESSION_ID가 ContextVar 및 환경변수를 통해 에이전트 도구에 노출됩니다 (#2718834). auxiliary 클라이언트가 poisoned 상태일 때 async wrapper를 제거(evict)합니다 (#111b859) (main branch 기준).",
    commits: [
      {
        sha: "7b76366",
        message: "feat(prompt-cache): cross-session 1h prefix cache for Claude on Anthropic / OpenRouter / Nous Portal (#23828)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7b76366552eb0e2fbdf156c261403202ac064737",
      },
      {
        sha: "2718834",
        message: "feat: expose HERMES_SESSION_ID to agent tools via ContextVar + env (#23847)",
        href: "https://github.com/NousResearch/hermes-agent/commit/271883447e7b8a5b9bd95879aca71afadc87616f",
      },
      {
        sha: "111b859",
        message: "fix(auxiliary): evict async wrappers on poisoned client (follow-up to #23482)",
        href: "https://github.com/NousResearch/hermes-agent/commit/111b859e49fd7b2abe30c1426ebd74101bb59477",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "CLI / TUI: CJK 와이드문자 마크다운 테이블 정렬, 터미널 너비 초과 시 수직 폴백, 링크 제목 해석, TUI 빌드 단순화",
    category: "CLI / TUI",
    summary:
      "CJK 및 와이드 문자가 포함된 마크다운 테이블의 정렬이 수정됩니다 (#1d00716). 터미널 너비를 초과하는 마크다운 테이블에 수직 폴백이 적용됩니다 (#ea1d046). 마크다운 링크를 읽기 가능한 페이지 제목으로 해석합니다 (#75b428c). TUI 빌드 로직이 단순화되고 오래된 staleness 검사가 제거됩니다 (#c6ca116) (main branch 기준).",
    commits: [
      {
        sha: "1d00716",
        message: "fix(cli,tui): align CJK / wide-char markdown tables (#23863)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1d007167541ef5405fde620fdcce6dfcd79c0628",
      },
      {
        sha: "ea1d046",
        message: "fix(cli): vertical fallback for markdown tables wider than terminal (#23948)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ea1d0462cf5ec3799fb0c4b8e39685302e53039b",
      },
      {
        sha: "75b428c",
        message: "feat(ui-tui): resolve markdown links to readable page titles (#24013)",
        href: "https://github.com/NousResearch/hermes-agent/commit/75b428c8521d7676991c93b9ecd66eb12c6469b6",
      },
      {
        sha: "c6ca116",
        message: "refactor(tui): simplify TUI build logic, remove stale staleness checks",
        href: "https://github.com/NousResearch/hermes-agent/commit/c6ca11618a87c6b12e9a4025d339eb905a03ac8c",
      },
    ],
  },
  {
    date: "2026-05-11",
    title: "Dashboard / Model / Bundle: MiniMax 로그인 버튼 수정, kimi/moonshot 프로바이더 매핑, bundle-size 수정",
    category: "Dashboard / Model",
    summary:
      "Dashboard에서 MiniMax 'Login' 버튼이 Claude OAuth를 실행하던 문제가 수정됩니다 (#05bad7b). kimi/moonshot이 PROVIDER_TO_MODELS_DEV에 추가되고, 이미 알려진 프로바이더에 대해서는 OpenRouter를 스킵합니다 (#e2b713c). bundle-size 수정 PR이 머지됩니다 (#825bd50) (main branch 기준).",
    commits: [
      {
        sha: "05bad7b",
        message: "fix(dashboard): MiniMax 'Login' button launched Claude OAuth (#22832)",
        href: "https://github.com/NousResearch/hermes-agent/commit/05bad7b1e78adef8da4dcbe91ab95c3e810a96b0",
      },
      {
        sha: "e2b713c",
        message: "fix(model-metadata): skip OpenRouter for known providers, add kimi/moonshot to PROVIDER_TO_MODELS_DEV",
        href: "https://github.com/NousResearch/hermes-agent/commit/e2b713cced07076ccb751e28b30d235fede1fa59",
      },
      {
        sha: "825bd50",
        message: "Merge pull request #18036 from NousResearch/fix/bundle-size",
        href: "https://github.com/NousResearch/hermes-agent/commit/825bd50e6be1bfbde38d8337c599952da32b9a92",
      },
    ],
  },
];
