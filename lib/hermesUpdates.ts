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

export const hermesUpdatesLastChecked = "2026-05-07";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-05 ~ 2026-05-07",
    title: "Agent 안정성 / Gateway / State / Memory / Config / Auth / Security: Gateway 재시작 안정화·[[as_document]] 디렉티브·LRU eviction·list 명령어, chat 앱 허용 채널 화이트리스트(Telegram·Mattermost·Matrix·DingTalk·Slack)·WhatsApp 낯선 사람 차단·긴 메시지 분할, Gateway goal turn budget·runtime-status 통합·부트스트랩 실패 표면화·에이전트 태스크 실패 로깅, model max tokens 존중·compressor 요약 프롬프트 완화·delegate composite toolsets 확장, Codex 스키마 조합자 제거·memory dead schema 정리·auxiliary Codex 스트림 타임아웃, memory schema 검증·OpenViking 업로드·인증, credential pool 키 충돌 해결, checkpoints v2 단일 저장소, anthropic context beta 회피, WhatsApp 프로세스 누수 해결, Profiles --no-skills 플래그, SRI 무결성 검증·Teams 승인 버튼 allowlist, Gateway auth 폴백 모델 사용 등",
    category: "Agent 안정성 / Gateway / State",
    summary:
      "Gateway에서 systemd 재시작 후 준비 완료까지 대기하고, 재시작 전 알림도 게이팅(gate)하며 플랫폼별 알림 플래그를 지원합니다. Gateway에 `hermes gateway list` 명령어가 추가되어 모든 프로필의 게이트웨이 상태를 확인할 수 있습니다. Gateway에 `[[as_document]]` 디렉티브가 추가되어 스킬 미디어 라우팅을 지원하고, 캐시된 세션 소스를 LRU eviction으로 제한하며 스레드 라우팅을 보존합니다. env reload 후에도 max turns가 보존되도록 수정합니다. checkpoints가 v2 단일 저장소(single-store)로 재작성되어 실제 프루닝(pruning)과 디스크 가드레일(disk guardrails)을 갖추었습니다. lazy session creation regression(#18370 fallout)을 해결합니다. memory에서 action별 필수 schema fields를 검증하고, OpenViking 로컬 리소스 업로드를 지원·보강(harden)하며 Bearer 인증 헤더를 추가합니다. credential_pool에서 커스텀 프로바이더가 base_url을 공유할 때 발생하는 키 충돌을 해결합니다. model_tools에서 플러그인 훅 예외를 무시하지 않고 로깅합니다. model picker에서 커스텀 프로바이더의 실시간 모델 디스커버리를 지원합니다. bedrock에서 reasoningContent가 converse 정규화 과정에서 보존되도록 수정합니다. 지원되지 않는 anthropic context beta를 기본적으로 회피합니다. WhatsApp 브릿지의 프로세스 누수를 해결하고 config 비대칭을 수정합니다. install.sh에서 uv exclude-newer 제한을 제거합니다. 프로바이더가 프로필별 auth.json을 찾지 못할 때 전역(global-root) auth.json으로 폴백합니다. salvage batch에서 compaction guidance, memory authority, cache eviction after compression이 개선됩니다. Hindsight에서 update_mode='append' 지원 여부를 probe하고 프로세스 간 dedupe를 수행합니다. API Server에서 SSE token batching과 Open WebUI 성능 개선을 위한 오류 처리가 추가됩니다. ACP에서 session persistence 시 assistant reasoning metadata를 보존하고 SessionDB.replace_messages로 atomic history rewrite를 수행합니다. run_agent에서 compression context length 조회 시 aux provider를 사용합니다. Gateway에서 kanban worker lifecycle을 run id 기준으로 보호(guard)하고, kanban.max_spawn config를 존중하여 동시 작업 수를 제한합니다. helpers의 thread eviction을 결정적(deterministic)으로 보장하고, session에서 JSONL transcript appends를 기존 잠금 아래에서 직렬화(serialize)하며, 재시작 간 pending update prompts를 보존합니다. model picker에서 현재 컨텍스트를 보존합니다. Discord 통합에서 rate-limit catch 범위를 좁히고 sync state를 gateway/ 아래로 이동합니다. setup wizard가 system-scope 유닛만 설치된 상태에서 막다른 길(dead-end)에 빠지지 않도록 수정합니다. 대시보드 재개 시 최신 자식 세션을 따라갑니다. 프로필 생성 시 --no-skills 플래그로 빈 프로필을 생성할 수 있습니다. Telegram, Mattermost, Matrix, DingTalk에 allowed_{chats,channels,rooms} 화이트리스트가 추가되고, Slack에 allowed_channels 화이트리스트 config가 추가되어 채팅 앱 접근 제어가 강화됩니다. WhatsApp에서 낯선 사람(stranger)을 기본 거부하고 셀프 채팅 응답을 방지하며, 긴 메시지 분할(splitting)을 수정합니다. Gateway에서 goal turn budget을 존중(honor)하고, runtime-status writes를 통합하며 rate-limit failure 로그를 적용하고, 플랫폼 상태 쓰기 실패를 로깅하며, 부트스트랩 실패를 stderr에 표면화(surface)하고 예외 상세를 포함시킵니다. 에이전트 태스크 실패 시 usage data 손실을 방지하기 위해 로깅합니다. Gateway auth fallback에 configured model을 사용합니다. agent에서 설정된 model max tokens를 존중합니다. compressor에서 콘텐츠 필터를 위한 요약 프롬프트를 완화(soften)합니다. delegate_task에서 composite toolsets를 확장(expand)하여 intersection 전에 처리합니다. Codex-hostile 최상위 스키마 조합자(combinators)를 제거(strip)합니다. memory에서 dead allOf 스키마 블록을 제거합니다. auxiliary에서 Codex Responses 스트림 타임아웃을 강제(enforce)합니다. 보안 측면에서 대시보드 플러그인 스크립트에 SRI 무결성 검증을 지원하고, Teams 승인 버튼에 명시적 allowlist 또는 TEAMS_ALLOW_ALL_USERS opt-in을 요구합니다 (main branch).",
    commits: [
      {
        sha: "8308d18",
        message: "fix(gateway): preserve max turns after env reload",
        href: "https://github.com/NousResearch/hermes-agent/commit/8308d1833935c372b4d79f181baf8165ddcefd91",
      },
      {
        sha: "3c439ec",
        message: "feat(gateway): add `hermes gateway list` to show all profiles' gateway status",
        href: "https://github.com/NousResearch/hermes-agent/commit/3c439ec6812d766bf94b61188e234fb640caa889",
      },
      {
        sha: "333598c",
        message: "fix(gateway): cap cached session sources with LRU eviction",
        href: "https://github.com/NousResearch/hermes-agent/commit/333598cb0e2e7e908450ad8ee02553d9319d2494",
      },
      {
        sha: "176b935",
        message: "fix(gateway): preserve thread routing from cached live session sources",
        href: "https://github.com/NousResearch/hermes-agent/commit/176b93575af35b24ae79f5aaa1aa499ac2320280",
      },
      {
        sha: "d34f03c",
        message: "feat(gateway): support [[as_document]] directive for skill media routing",
        href: "https://github.com/NousResearch/hermes-agent/commit/d34f03c32a28b786f2a385d9c29342bb42814210",
      },
      {
        sha: "5b24c0f",
        message: "fix: require memory schema fields by action",
        href: "https://github.com/NousResearch/hermes-agent/commit/5b24c0fa853752ef1d21c3ab8e207a7345113f87",
      },
      {
        sha: "7137ccc",
        message: "fix(memory): support OpenViking local resource uploads",
        href: "https://github.com/NousResearch/hermes-agent/commit/7137cccbd134bf2b349af6e23f9af63f18550eaf",
      },
      {
        sha: "2b6345c",
        message: "fix(memory): harden OpenViking local path uploads",
        href: "https://github.com/NousResearch/hermes-agent/commit/2b6345cee302cfd6f2def3d9ac4db411d8f74934",
      },
      {
        sha: "6e250a5",
        message: "fix(openviking): add Bearer auth header and omit empty/legacy tenant headers (#21232)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6e250a55de501f3f5660ab6ce56939e50926f9b9",
      },
      {
        sha: "e38ea38",
        message: "fix(credential_pool): resolve key mix-up when custom providers share base_url",
        href: "https://github.com/NousResearch/hermes-agent/commit/e38ea38079b8683fba48a245c19ff5a2a8f50d39",
      },
      {
        sha: "61d9e33",
        message: "fix(model_tools): log plugin hook exceptions instead of silently swallowing them",
        href: "https://github.com/NousResearch/hermes-agent/commit/61d9e3366d65f4dc628d9a96f10adf773df98e49",
      },
      {
        sha: "abe5a3c",
        message: "fix(model_switch): live model discovery for custom_providers in /model picker",
        href: "https://github.com/NousResearch/hermes-agent/commit/abe5a3c93750883e0d01031304061c1579003426",
      },
      {
        sha: "8d363f8",
        message: "fix(bedrock): preserve reasoningContent across converse normalization",
        href: "https://github.com/NousResearch/hermes-agent/commit/8d363f8d54bad14ab8f4f6ffcfaea11501904e4e",
      },
      {
        sha: "e9685a5",
        message: "fix: avoid unsupported anthropic context beta by default",
        href: "https://github.com/NousResearch/hermes-agent/commit/e9685a5cf774685a992ea3ecd6f8f8f34674b4ff",
      },
      {
        sha: "0d3593e",
        message: "fix: WhatsApp bridge process leak and disable config asymmetry",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d3593e514e05430f4ea8c167c3ca4ce484ac04a",
      },
      {
        sha: "d8d57fb",
        message: "fix(install): remove uv exclude-newer cutoff",
        href: "https://github.com/NousResearch/hermes-agent/commit/d8d57fb2f6e7aedfa87d05c2cb9114e4c7945583",
      },
      {
        sha: "b12a5a7",
        message: "Follow latest child session on dashboard resume",
        href: "https://github.com/NousResearch/hermes-agent/commit/b12a5a72b0fc2d860dd522dd6dac3395b801ec71",
      },
      {
        sha: "51f9953",
        message: "feat(profiles): --no-skills flag for empty profile creation (#20986)",
        href: "https://github.com/NousResearch/hermes-agent/commit/51f9953e69d303c3d278e41295b1a5c786bf8d87",
      },
      {
        sha: "d797755",
        message: "fix(gateway): wait for systemd restart readiness",
        href: "https://github.com/NousResearch/hermes-agent/commit/d797755a1c17566b0aef4d77548a4b460142d26a",
      },
      {
        sha: "5a3cadf",
        message: "fix(discord): narrow rate-limit catch and move sync state under gateway/",
        href: "https://github.com/NousResearch/hermes-agent/commit/5a3cadf6ebcb749f1ad69e73cecb5aad9af0400e",
      },
      {
        sha: "3cdbf33",
        message: "fix(gateway): don't dead-end setup wizard when only system-scope unit is installed",
        href: "https://github.com/NousResearch/hermes-agent/commit/3cdbf334d5074aff0de857c0f94f278f06745e6b",
      },
      {
        sha: "7df6115",
        message: "feat(gateway): also gate pre-restart \"Gateway restarting\" notification",
        href: "https://github.com/NousResearch/hermes-agent/commit/7df6115199278f415bd3d3dacf439e467341245c",
      },
      {
        sha: "b71f80e",
        message: "feat(gateway): per-platform gateway_restart_notification flag",
        href: "https://github.com/NousResearch/hermes-agent/commit/b71f80e6ce2af7a75e319170340dec9d64461576",
      },
      {
        sha: "33bf5f6",
        message: "fix(auth): fall back to global-root auth.json for providers missing in profile",
        href: "https://github.com/NousResearch/hermes-agent/commit/33bf5f6292f49f109f11fb9c035afae6dcd356e3",
      },
      {
        sha: "aa88dcc",
        message: "fix: salvage batch — compaction guidance, memory authority, cache eviction after compression",
        href: "https://github.com/NousResearch/hermes-agent/commit/aa88dcc57b1717cbcfb80e4eca580a3a77056702",
      },
      {
        sha: "3082fa0",
        message: "feat(hindsight): probe API for update_mode='append' support, dedupe across processes",
        href: "https://github.com/NousResearch/hermes-agent/commit/3082fa0829e0df4ce682358481fb59275b31a46e",
      },
      {
        sha: "3188e63",
        message: "fix(api_server): SSE token batching + error handling for Open WebUI performance",
        href: "https://github.com/NousResearch/hermes-agent/commit/3188e63b05a1902baecfcd7c30da3301d74b8737",
      },
      {
        sha: "e8e9147",
        message: "fix(acp): preserve assistant reasoning metadata in session persistence",
        href: "https://github.com/NousResearch/hermes-agent/commit/e8e91473774b9ceaced12920207c3c72700c9e8b",
      },
      {
        sha: "5795b3b",
        message: "fix(acp): use SessionDB.replace_messages for atomic history rewrite",
        href: "https://github.com/NousResearch/hermes-agent/commit/5795b3be4e2aa5a840ce810925e3e88e3370f4f0",
      },
      {
        sha: "c46bc92",
        message: "fix(run_agent): use aux provider for compression context length lookup",
        href: "https://github.com/NousResearch/hermes-agent/commit/c46bc9294991929a3dc8f6c28111c3e7780406a2",
      },
      {
        sha: "a0fedfb",
        message: "feat(checkpoints): v2 single-store rewrite with real pruning + disk guardrails (#20709)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a0fedfbb1b7eab8db6c8aaa187f8c35cbf12f3e2",
      },
      {
        sha: "3b75071",
        message: "fix: resolve lazy session creation regressions (#18370 fallout) (#20363)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b750715a39ed8a96fe90dc4f7a5b7b2ff9b794e",
      },
      {
        sha: "56b4795",
        message: "guard kanban worker lifecycle by run id",
        href: "https://github.com/NousResearch/hermes-agent/commit/56b4795115e309b8d65bc68729fc591e90e6ffaa",
      },
      {
        sha: "f0d2784",
        message: "feat(gateway): respect kanban.max_spawn config to limit concurrent tasks",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0d278412f8c14e94a11678be424f6a6ddb79fa2",
      },
      {
        sha: "247c9d4",
        message: "fix(gateway): ensure deterministic thread eviction in helpers",
        href: "https://github.com/NousResearch/hermes-agent/commit/247c9d468c5ba0ccaf2e01fbc39c6eede7bda392",
      },
      {
        sha: "ecc909d",
        message: "fix(session): serialize JSONL transcript appends under existing lock",
        href: "https://github.com/NousResearch/hermes-agent/commit/ecc909de38f2fa8b014060711cb252c096d3f1fb",
      },
      {
        sha: "8ad5e98",
        message: "fix(gateway): preserve pending update prompts across restarts",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ad5e98f8d433e6e302355c77e22931f7a047eea",
      },
      {
        sha: "466f3a1",
        message: "fix(gateway): preserve model picker current context",
        href: "https://github.com/NousResearch/hermes-agent/commit/466f3a11de47b50a65230cfb019265603a5adb01",
      },
      {
        sha: "69d025e",
        message: "feat(gateway): add allowed_{chats,channels,rooms} whitelist to Telegram, Mattermost, Matrix, DingTalk",
        href: "https://github.com/NousResearch/hermes-agent/commit/69d025e4a744c8e5968e9aab0c1a8679299840a5",
      },
      {
        sha: "cd3ef68",
        message: "feat(slack): add allowed_channels whitelist config",
        href: "https://github.com/NousResearch/hermes-agent/commit/cd3ef685c4f472d3c43cd27db11aba1189a2e897",
      },
      {
        sha: "6a4ecc0",
        message: "fix(whatsapp): reject strangers by default, never respond in self-chat (#8389) (#21291)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6a4ecc0a9fdb857cd6ef93cf0ebce77250a2a290",
      },
      {
        sha: "a9ebee5",
        message: "Fix WhatsApp long message splitting",
        href: "https://github.com/NousResearch/hermes-agent/commit/a9ebee5f02b5148ceb9fb540eea58954d04e160d",
      },
      {
        sha: "4d48075",
        message: "fix(gateway): honor configured goal turn budget",
        href: "https://github.com/NousResearch/hermes-agent/commit/4d4807585ab879c9812deac026188510ad5ede44",
      },
      {
        sha: "0efc547",
        message: "fix(gateway): consolidate runtime-status writes + rate-limit failure logs",
        href: "https://github.com/NousResearch/hermes-agent/commit/0efc547962df99a15f9cacff65f513f70520e7f2",
      },
      {
        sha: "5d90611",
        message: "fix(gateway): log platform status write failures instead of silently swallowing",
        href: "https://github.com/NousResearch/hermes-agent/commit/5d9061148fda8963a01a269022b5f93ee1609051",
      },
      {
        sha: "f7b71aa",
        message: "fix: use configured model for gateway auth fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/f7b71aa0daf4acd56dba7e9c6aee1aa8cfe477a1",
      },
      {
        sha: "4d32f40",
        message: "fix(gateway): include exception detail in bootstrap warning output",
        href: "https://github.com/NousResearch/hermes-agent/commit/4d32f40306aa632b4dff6f5368c93016e5cd1831",
      },
      {
        sha: "926402d",
        message: "fix(gateway): surface bootstrap failures to stderr instead of silently swallowing",
        href: "https://github.com/NousResearch/hermes-agent/commit/926402dd13abdc0a52ed69bd38adced2b44995d4",
      },
      {
        sha: "98ca069",
        message: "fix(gateway): log agent task failures instead of silently losing usage data",
        href: "https://github.com/NousResearch/hermes-agent/commit/98ca0694d6fd7f13adb3a0bc536fe44f0f24272a",
      },
      {
        sha: "a78e622",
        message: "fix(agent): honor configured model max tokens",
        href: "https://github.com/NousResearch/hermes-agent/commit/a78e622dfe5504dd7d08c5243f60ed00f6a1f08f",
      },
      {
        sha: "fc88eec",
        message: "fix(compressor): soften summary prompt for content filters",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc88eec926a90c11a8949a3d7e0b852cfdfb0c3a",
      },
      {
        sha: "e795b7e",
        message: "fix(delegate): expand composite toolsets before intersection in delegate_task",
        href: "https://github.com/NousResearch/hermes-agent/commit/e795b7e3ab1df4dd1998f1eb4f77732396b4a69a",
      },
      {
        sha: "3924cb4",
        message: "fix: strip Codex-hostile top-level schema combinators",
        href: "https://github.com/NousResearch/hermes-agent/commit/3924cb408bb1e133b22a2c9e848135c9e9c027ce",
      },
      {
        sha: "5a3e5b2",
        message: "fix(memory): remove dead allOf schema block at the source",
        href: "https://github.com/NousResearch/hermes-agent/commit/5a3e5b23d251829629736641284bce2d5be7132a",
      },
      {
        sha: "5533ad7",
        message: "fix(auxiliary): enforce Codex Responses stream timeout",
        href: "https://github.com/NousResearch/hermes-agent/commit/5533ad76449557ddd610aca7b200172cc5ef6798",
      },
      {
        sha: "5909526",
        message: "fix(security): support SRI integrity verification for dashboard plugin scripts",
        href: "https://github.com/NousResearch/hermes-agent/commit/5909526a06f2b894d4d769ab7cb8afce7221b0a4",
      },
      {
        sha: "b739fcd",
        message: "fix(security): require explicit allowlist or TEAMS_ALLOW_ALL_USERS opt-in for Teams approval buttons",
        href: "https://github.com/NousResearch/hermes-agent/commit/b739fcdfcec2af8e5dba17f8abd48ab6ff54104e",
      }
    ],
  },
  {
    date: "2026-05-06 ~ 2026-05-07",
    title: "CLI / TUI / Dashboard / Browser: 컨텍스트 압축 횟수 상태 표시줄 표시, 대시보드 임베디드 채팅 스크롤 안정화·재개·마우스 휠 라우팅·X-Forwarded-Prefix URL 프리픽스·resumeId 리네임, TUI 스크롤 높이 갱신·툴 프리뷰 길이·resume 시 구조화 콘텐츠 렌더링, CLI get_event_loop RuntimeWarning 제거, Lightpanda 브라우저·Chrome fallback, 'default-large' 테마, voice push-to-talk·transcript 스크롤바·skin 하이라이트·가상 오프셋·thin PTY Submit 등 TUI 안정화, SSRF 방어",
    category: "CLI / UI / Browser / Dashboard",
    summary:
      "CLI와 TUI 상태 표시줄에 컨텍스트 압축(context compression) 횟수가 표시되고, 텍스트 'cmp'를 🗜️ 이모지로 대체합니다. 대시보드에서 임베디드 채팅이 단일 스크롤 시스템을 사용하도록 하고, 채팅 재개(resume)와 스크롤백(scrollback)을 안정화하며, 브라우저 마우스 휠 이벤트를 내부 TUI 스크롤로 라우팅합니다. TUI에서 캐시된 하단에서 스크롤 높이를 갱신(refresh)하고, CLI에서 긍정(positive) 툴 프리뷰 길이를 존중(honor)합니다. 브라우저에서 하이브리드 라우팅 시 cloud-metadata SSRF를 enforce하는 방어선(floor)을 추가합니다. Lightpanda 엔진 지원이 추가되어 자동 Chrome fallback과 함께 동작하며, fallback 경고를 표시하고 엣지 케이스를 보완합니다. 대시보드에 18px 기본 폰트 크기의 'default-large' 빌트인 테마가 추가됩니다. TUI에서 voice push-to-talk 패리티 복원, transcript 스크롤바 안정화, skin 하이라이트 색상 준수, row resize 후 가상 오프셋 갱신, thin PTY에서 LF Enter submit 처리, virtual history offset 검색 범위 제한, startup banner의 skills·system prompt·MCP 섹션을 접이식(collapsible)으로 전환, 긴 시스템 메시지 펼침/접기 토글, FaceTicker elapsed width 고정으로 composer drift 방지, verb segment 숨김 시 duration 앞 공백 복원, 스크롤 중 status-line 흔들림 감소 등이 포함됩니다. CLI에서 터미널 리사이즈 후 classic 출력 복구, signal handler 내 logger.debug 호출 보호(guard), 긴 슬래시 명령어의 ENAMETOOLONG 방지를 위한 OSError catch, get_event_loop()를 get_running_loop()로 교체하여 process_loop 스레드의 RuntimeWarning을 제거합니다. 대시보드에서 ChatPage의 resumeId→resumeParam 리네임을 완료하고, X-Forwarded-Prefix를 통한 URL 프리픽스 서빙을 지원합니다. TUI에서 resume 시 구조화 콘텐츠(structured content)를 렌더링합니다 (main branch).",
    commits: [
      {
        sha: "103e119",
        message: "feat(cli): show context compression count in status bar",
        href: "https://github.com/NousResearch/hermes-agent/commit/103e11926f2211f5662dac3cba0e458a00db3310",
      },
      {
        sha: "3a82172",
        message: "feat(tui): surface compression count in Ink status bar",
        href: "https://github.com/NousResearch/hermes-agent/commit/3a82172dd5804e765dbfbfcdabc0b81119165506",
      },
      {
        sha: "f5a232a",
        message: "refactor: replace 'cmp' text with 🗜️ emoji in status bar",
        href: "https://github.com/NousResearch/hermes-agent/commit/f5a232af840081d97018e129f71e8b9b6ffb24c3",
      },
      {
        sha: "2c14d3b",
        message: "fix(tui): refresh scroll height at cached bottom",
        href: "https://github.com/NousResearch/hermes-agent/commit/2c14d3b9b01591f4ccd13cdc3f34c327d3e51cd2",
      },
      {
        sha: "6d9b306",
        message: "fix(cli): honor positive tool preview length",
        href: "https://github.com/NousResearch/hermes-agent/commit/6d9b30632df3cdd68353d467d47e7e1079bf1985",
      },
      {
        sha: "7cbef2b",
        message: "fix(dashboard): route browser wheel into inner TUI scrolling",
        href: "https://github.com/NousResearch/hermes-agent/commit/7cbef2bd4286678dc0d292f86c0e2145ce0ca2af",
      },
      {
        sha: "8aceef5",
        message: "fix(dashboard): let embedded chat use a single scroll system",
        href: "https://github.com/NousResearch/hermes-agent/commit/8aceef539fa58ed286614a883f2e616775bf8e84",
      },
      {
        sha: "a0758cd",
        message: "fix(dashboard): stabilize embedded chat resume and scrollback",
        href: "https://github.com/NousResearch/hermes-agent/commit/a0758cd1e9dc9e263d3b79067cf2d4955f7d2894",
      },
      {
        sha: "0214858",
        message: "fix(browser): enforce cloud-metadata SSRF floor in hybrid routing (#16234) (#21228)",
        href: "https://github.com/NousResearch/hermes-agent/commit/0214858ef5fb0f5577c2ff26ff8f7e3178103837",
      },
      {
        sha: "04cf478",
        message: "fix(tui): restore voice push-to-talk parity (#20897)",
        href: "https://github.com/NousResearch/hermes-agent/commit/04cf4788ccc05003785992682e3cb25205e509cc",
      },
      {
        sha: "5ccab51",
        message: "fix(tui): steady transcript scrollbar (#20917)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5ccab51fa851d258da69ab12912657ec14bf3bc8",
      },
      {
        sha: "f1a8e99",
        message: "fix(tui): honor skin highlight colors (#20895)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f1a8e99942e6150d5785bdd734c4d9ff63dfa7f7",
      },
      {
        sha: "da60198",
        message: "fix(tui): refresh virtual offsets after row resize (#20898)",
        href: "https://github.com/NousResearch/hermes-agent/commit/da6019820a916ff7b6b89fa0fba2cccf700554d6",
      },
      {
        sha: "5044e1c",
        message: "fix(cli): submit LF enter in thin PTYs (#20896)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5044e1cbf135af1a999935c6d141e137d60d5d1b",
      },
      {
        sha: "f4031df",
        message: "ci(docker): don't cancel overlapping builds, guard :latest",
        href: "https://github.com/NousResearch/hermes-agent/commit/f4031df05dd457ad6ae17aff6a89848384447013",
      },
      {
        sha: "946ef0e",
        message: "fix(tui): bound virtual history offset searches",
        href: "https://github.com/NousResearch/hermes-agent/commit/946ef0ea19c9b898037f5e6178d8961ab260f079",
      },
      {
        sha: "6388aaf",
        message: "feat(dashboard): add 'default-large' built-in theme with 18px base size (#20820)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6388aafbd6cbfd22c26036291d884d4055b5f6bc",
      },
      {
        sha: "d78c349",
        message: "feat(tui): collapsible sections in startup banner (skills, system prompt, MCP)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d78c34928fe9fd56c4506861a87b4134be20b448",
      },
      {
        sha: "68162eb",
        message: "fix(tui): collapse long system messages in transcript with expand toggle",
        href: "https://github.com/NousResearch/hermes-agent/commit/68162eb18fca0d8dc8dbf4dc1572fe14daf253d9",
      },
      {
        sha: "ca5febf",
        message: "fix(tui): stabilize FaceTicker elapsed width to prevent composer drift",
        href: "https://github.com/NousResearch/hermes-agent/commit/ca5febfed1429ad0e2b1565cfac48b079f5ff94d",
      },
      {
        sha: "a0556b8",
        message: "fix(tui): restore gap before duration when verb segment is hidden",
        href: "https://github.com/NousResearch/hermes-agent/commit/a0556b861f2667a49ded048c9cfac88defff8c5f",
      },
      {
        sha: "e45df2e",
        message: "fix(ui): reduce status-line jitter while scrolling",
        href: "https://github.com/NousResearch/hermes-agent/commit/e45df2e81ec818d2fb6767c0ba4eb29ed573a799",
      },
      {
        sha: "395dbcc",
        message: "feat(browser): add Lightpanda engine support with automatic Chrome fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/395dbcc873c85b8873f4e36ff91b87c739bed242",
      },
      {
        sha: "3ebdd26",
        message: "fix(browser): surface Lightpanda Chrome fallback warnings",
        href: "https://github.com/NousResearch/hermes-agent/commit/3ebdd26449dc3d4f5c92e1af96b880d2ddc067d4",
      },
      {
        sha: "629d8b8",
        message: "fix(browser): tighten Lightpanda fallback edge cases",
        href: "https://github.com/NousResearch/hermes-agent/commit/629d8b843d8d8507925fd35344f57de776cb1490",
      },
      {
        sha: "76074d9",
        message: "fix(cli): recover classic CLI output after resize",
        href: "https://github.com/NousResearch/hermes-agent/commit/76074d9ee6e4d0d2688ae154acda15dbf0a3e287",
      },
      {
        sha: "e70e490",
        message: "fix(cli): guard logger.debug in signal handler (#13710 regression) (#20673)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e70e49016fe25bdd0db3b0086e0e0403daeaa834",
      },
      {
        sha: "906881c",
        message: "fix(cli): catch OSError in _resolve_attachment_path to prevent ENAMETOOLONG dropping long slash commands",
        href: "https://github.com/NousResearch/hermes-agent/commit/906881c38bdd4494420bd557cb17986e347b29ee",
      },
      {
        sha: "12a0f59",
        message: "fix(dashboard): finish resumeId -> resumeParam rename in ChatPage (#21317)",
        href: "https://github.com/NousResearch/hermes-agent/commit/12a0f5901cd0fc798adba374af0aefdaa0c7c34f",
      },
      {
        sha: "52e2777",
        message: "feat(dashboard): support serving under URL prefix via X-Forwarded-Prefix",
        href: "https://github.com/NousResearch/hermes-agent/commit/52e277782127ef53ab7c3f08d5d0b199598b3f52",
      },
      {
        sha: "ec9d0e2",
        message: "fix(tui): render structured content on resume",
        href: "https://github.com/NousResearch/hermes-agent/commit/ec9d0e26d4ed4e3fdbb4c7a27b6e542139d6d918",
      },
      {
        sha: "edbbc96",
        message: "fix(cli): replace get_event_loop() with get_running_loop() to silence RuntimeWarning in process_loop thread (#19285)",
        href: "https://github.com/NousResearch/hermes-agent/commit/edbbc96b558f0d9da16150d8b48b4ac4f1a7e486",
      }
    ],
  },
  {
    date: "2026-05-06 ~ 2026-05-07",
    title: "Kanban / Multi-agent: 인라인 생성 multiline textarea·Enter 제출·Shift+Enter 개행·테마 면역 code/pre 스타일링, 대시보드 보드 핀 권한 강화·이벤트 스트림 취소 정상 처리·미완료 워커 자동 차단, orchestrator·worker 스킬 설정 가이드, dependency selects, task_runs.summary 표시, runtime 측정, created_cards 연결, failure counter 통합 등",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban에서 대시보드 보드 핀(dashboard board pin)이 서버 current file보다 우선(authoritative)하도록 하여 설정 충돌을 방지합니다. 대시보드 이벤트 스트림 취소(CancelledError)를 정상 종료(normal shutdown)로 처리하여 불필요한 오류를 제거합니다. 작업을 완료하지 않고 종료된 워커를 자동 차단(auto-block)합니다. orchestrator와 worker의 스킬 설정 가이드의 잘못된 부분을 수정합니다. dependency selects를 연결(wire)하고, 대시보드 카드와 `kanban show` 명령어에 task_runs.summary를 표시합니다. 부모 작업이 완료되지 않은 상태에서 자식 작업이 디스패치되는 것을 방지하고, 작업의 max runtime을 current run 기준으로 측정합니다. 완료되는 태스크에 연결된 created_cards를 자식으로 수락(accept)합니다. spawn/timeout/crash 전반에서 failure counter를 통합하여 일관된 실패 추적을 제공합니다. doctor 명령어에서 Kanban worker tools를 runtime-gated로 보고하며, fragile한 failure-column rename을 방지합니다. 인라인 생성(inline-create) 타이틀 입력이 multiline textarea로 전환되고, Enter=submit·Shift+Enter=newline 동작이 복원됩니다. 보드 내 code/pre 스타일링이 모든 테마에서 면역(theme-immune) 처리됩니다 (main branch).",
    commits: [
      {
        sha: "b9f1ac8",
        message: "fix(kanban): make dashboard board pin authoritative over server current file (#21230)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b9f1ac8c10224988bbacdec20715d52e426f1da8",
      },
      {
        sha: "36ad973",
        message: "fix(kanban): treat dashboard event-stream cancellation as normal shutdown",
        href: "https://github.com/NousResearch/hermes-agent/commit/36ad97337a4ac1ef85bd292509e0b717ca74e7b2",
      },
      {
        sha: "fdb9e0f",
        message: "fix(kanban): auto-block workers that exit without completing (#20894) (#21214)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fdb9e0f6a65e77f795d32cd782520622a150301d",
      },
      {
        sha: "fe4748e",
        message: "test(kanban): regression for CancelledError swallow in stream_events",
        href: "https://github.com/NousResearch/hermes-agent/commit/fe4748ede88da3143c08657233c6242125fe5fcf",
      },
      {
        sha: "49c3c2e",
        message: "docs(kanban): fix worker skill setup instructions too (#20960)",
        href: "https://github.com/NousResearch/hermes-agent/commit/49c3c2e0d37c96dc593a807a5e81fdf4f0aa3d85",
      },
      {
        sha: "45cbf93",
        message: "docs(kanban): fix orchestrator skill setup instructions (#20958)",
        href: "https://github.com/NousResearch/hermes-agent/commit/45cbf93899a9f9f1e96c8b85d9192b452e6459d4",
      },
      {
        sha: "b1d420e",
        message: "fix(kanban): avoid fragile failure-column renames",
        href: "https://github.com/NousResearch/hermes-agent/commit/b1d420e75f42560738ed69d230a62feb1f7c7594",
      },
      {
        sha: "a2ff193",
        message: "chore: follow-up cleanup for Kanban migration fix",
        href: "https://github.com/NousResearch/hermes-agent/commit/a2ff193050b8054b52f3bffd4139333a60058be7",
      },
      {
        sha: "1768791",
        message: "fix(kanban): reset code element background inside board",
        href: "https://github.com/NousResearch/hermes-agent/commit/17687911b7c57a2357123c05ab3265d820b5e6d6",
      },
      {
        sha: "a49670c",
        message: "fix(kanban): wire dependency selects",
        href: "https://github.com/NousResearch/hermes-agent/commit/a49670c21b3deb8384fd2069142be2040aa71187",
      },
      {
        sha: "3f97297",
        message: "feat(kanban): surface task_runs.summary on dashboard cards + `kanban show`",
        href: "https://github.com/NousResearch/hermes-agent/commit/3f972974133659a366f5d63b01423a4709c507b3",
      },
      {
        sha: "d2c6ece",
        message: "fix(kanban): prevent child task dispatch when parent is not done",
        href: "https://github.com/NousResearch/hermes-agent/commit/d2c6eceed98d2f276240553269f630c952e022c9",
      },
      {
        sha: "b28ab4f",
        message: "fix(kanban): measure max runtime from current run",
        href: "https://github.com/NousResearch/hermes-agent/commit/b28ab4fc3fab1725be11c86c44ec0b09c32557e2",
      },
      {
        sha: "6d302b3",
        message: "fix(kanban): accept created_cards linked as child of completing task",
        href: "https://github.com/NousResearch/hermes-agent/commit/6d302b340e99e85e417f1bcc7d7aa498066ab2b4",
      },
      {
        sha: "1fc8733",
        message: "fix(kanban): unify failure counter across spawn/timeout/crash outcomes (#20410)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1fc8733a698664441d923408f66eaa307d44dd9a",
      },
      {
        sha: "eda326d",
        message: "fix(doctor): report Kanban worker tools as runtime-gated",
        href: "https://github.com/NousResearch/hermes-agent/commit/eda326df160acf94c9aff362c86504391265b4ed",
      },
      {
        sha: "8a1a42d",
        message: "test(kanban): backdate task_runs.started_at alongside tasks.started_at",
        href: "https://github.com/NousResearch/hermes-agent/commit/8a1a42d0985631e267361921aac6020e9ccb0323",
      },
      {
        sha: "0b9cbc8",
        message: "test(kanban): cover metadata handoff round-trip",
        href: "https://github.com/NousResearch/hermes-agent/commit/0b9cbc8b23fc922b0317d788806f5a8270370f56",
      },
      {
        sha: "76d2dcd",
        message: "fix(kanban): make code/pre styling theme-immune across all themes (#21086) (#21247)",
        href: "https://github.com/NousResearch/hermes-agent/commit/76d2dcdc8e10e61599d070cdd0eae6cb6394852c",
      },
      {
        sha: "fa58274",
        message: "fix(kanban): restore Enter=submit, Shift+Enter=newline in inline-create textarea",
        href: "https://github.com/NousResearch/hermes-agent/commit/fa582749e16523d46998043c1bfca9ed3d81a4f6",
      },
      {
        sha: "b93c9f6",
        message: "feat(kanban): convert inline-create title input to multiline textarea",
        href: "https://github.com/NousResearch/hermes-agent/commit/b93c9f6393810657fbc12847cc98c99c938ad99e",
      }
    ],
  },
  {
    date: "2026-05-07",
    title: "Tools / MCP / Plugins / Curator: MCP SSE 트랜스포트·OAuth 메타데이터 영속화·argparse 충돌 해결·예외 타입 포함·pipe 전송 재시도·타임아웃 보고·stale 인터럽트 정리·CancelledError 재전파, transform_llm_output 플러그인 훅 추가, `hermes curator list-archived`·manual run 동기화·CLI 문서 업데이트",
    category: "Tools / MCP / Plugins",
    summary:
      "MCP 클라이언트에 SSE 트랜스포트 지원이 추가되어 서버와의 통신 옵션이 확장됩니다. MCP OAuth 서버 메타데이터를 프로세스 재시작 간에도 유지(persist)하도록 수정하여 재인증 부담을 줄입니다. `mcp add --command`의 argparse dest 충돌을 해결하여 명령줄 등록이 정상 동작하도록 합니다. LLM 출력을 변환(transform)할 수 있는 `transform_llm_output` 플러그인 훅이 새로 추가되고 관련 테스트와 문서가 보강됩니다. Curator에서 아카이브된 항목을 조회할 수 있는 `hermes curator list-archived` 명령어가 추가되고, 수동 실행(manual run)이 동기식(synchronous)으로 기본 전환되며 관련 CLI 문서가 업데이트됩니다. MCP 서버 태스크에서 CancelledError를 명시적으로 재전파(re-raise)하고, str(exc)가 빈 경우 예외 타입을 에러 메시지에 포함시킵니다. MCP pipe 전송 실패 시 재시도(retry)하며, MCP 호출 에러에 설정된 타임아웃을 보고합니다. MCP 디스커버리 전에 stale 스레드 인터럽트를 정리합니다 (main branch).",
    commits: [
      {
        sha: "12289c2",
        message: "feat: add SSE transport support for MCP client",
        href: "https://github.com/NousResearch/hermes-agent/commit/12289c2630548b35575e289ba215a4541dd8ec72",
      },
      {
        sha: "c4a7992",
        message: "fix(mcp-oauth): persist OAuth server metadata across process restarts (#21226)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c4a7992317bd6d6840785af838d96a1e89642a53",
      },
      {
        sha: "4f364c4",
        message: "fix(mcp): give 'mcp add --command' a distinct argparse dest",
        href: "https://github.com/NousResearch/hermes-agent/commit/4f364c4e99d46a0c50d3ea1d5ad179f54348f9f7",
      },
      {
        sha: "c3be6ec",
        message: "feat: add transform_llm_output plugin hook",
        href: "https://github.com/NousResearch/hermes-agent/commit/c3be6ec184e0f17a184eaff1018051b47a89eeb7",
      },
      {
        sha: "47bf5d7",
        message: "test+docs: cover transform_llm_output hook + release author map",
        href: "https://github.com/NousResearch/hermes-agent/commit/47bf5d7ecbc1fd3cc8eec58b1c4ee5d45b405d75",
      },
      {
        sha: "ae1f058",
        message: "feat(curator): add `hermes curator list-archived` command (#21236)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ae1f058b3c56b8aa43254382b7e4059cc4b07f63",
      },
      {
        sha: "6b9f714",
        message: "fix(curator): make manual runs synchronous",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b9f7140bbfd1c464ec991bb4afbc723cf418f92",
      },
      {
        sha: "6b3a9b4",
        message: "docs(curator): update CLI docs for synchronous-by-default manual run",
        href: "https://github.com/NousResearch/hermes-agent/commit/6b3a9b4bfab255263f75bd9768bd56a882dc5a35",
      },
      {
        sha: "e0a2b08",
        message: "fix(mcp): re-raise CancelledError explicitly in MCPServerTask.run (#21318)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e0a2b087681e98233e619ebbd073a9ee3d592295",
      },
      {
        sha: "f9b4b8a",
        message: "fix(mcp): include exception type in error messages when str(exc) is empty",
        href: "https://github.com/NousResearch/hermes-agent/commit/f9b4b8af3410e13ba002129e25c3f212568ee031",
      },
      {
        sha: "a1f85ef",
        message: "fix(mcp): retry stale pipe transport failures",
        href: "https://github.com/NousResearch/hermes-agent/commit/a1f85ef2b987a79868193b741f647eb4d3fd9182",
      },
      {
        sha: "80548f9",
        message: "fix(mcp): report configured timeout in MCP call errors",
        href: "https://github.com/NousResearch/hermes-agent/commit/80548f9a4fd1f33edd67c9ae415176a6b3666afc",
      },
      {
        sha: "9575bce",
        message: "fix(mcp): clear stale thread interrupt before MCP discovery",
        href: "https://github.com/NousResearch/hermes-agent/commit/9575bce6ca95c0fe088e04f1abfaf4009a1d3e12",
      }
    ],
  },
  {
    date: "2026-05-06",
    title: "Models / Vision / Image-gen / i18n / Provider / Web Search / Integrations: tencent/hy3-preview·alibaba-coding-plan·grok-4.3·deepseek-v4-pro·Arcee Trinity Large Thinking 모델, Z.AI 비전 호환성·image_gen.model config, 프랑스어·터키어·우크라이나어 로케일, SearXNG 네이티브 검색 백엔드·searxng-search 스킬, opencode-go hijack 방지, Feishu 토픽 스레드 응답, Linear·shop-app 스킬",
    category: "Models / i18n / Provider / Web / Integrations",
    summary:
      "OpenRouter 및 Nous Portal 큐레이션 목록에 x-ai/grok-4.3과 deepseek/deepseek-v4-pro 모델이 추가되었습니다. Arcee Trinity Large Thinking 모델에 temperature 및 compression 오버라이드가 적용됩니다. 프랑스어(fr), 터키어(tr), 우크라이나어(uk) 로케일 지원이 추가되며, config·tests·docs 전반에 걸쳐 참조가 보강되었습니다. 웹 검색에 SearXNG를 네이티브 검색 전용 백엔드로 추가하고, per-capability 백엔드 선택 리팩터링과 함께 동작합니다. searxng-search 선택적(opt-in) 스킬과 문서가 추가되었으며, SearXNG 설정 가이드를 포함한 웹 검색·추출(Web Search + Extract) 기능 페이지가 문서화되었습니다. opencode-go 사용자가 네이티브 프로바이더로 hijack되지 않도록 수정하여 opencode-go backend를 그대로 유지합니다. /model 명령어의 커스텀 별칭(alias) 문서화도 함께 진행되었습니다. Feishu에서 토픽 응답이 스레드 내에 유지되도록 수정합니다. Linear 스킬에 Documents 지원 및 Python 헬퍼 스크립트가 추가되었습니다. 선택적(opt-in) 스킬로 shop-app 개인 쇼핑 어시스턴트가 추가되었습니다. OpenRouter에 tencent/hy3-preview 유료 라우트와 alibaba-coding-plan 모델이 큐레이션 목록에 추가됩니다. Z.AI 비전 모델 호환성을 위해 엔드포인트 라우팅과 max_tokens 처리가 수정됩니다. image-gen에서 config.yaml의 image_gen.model을 플러그인 디스패치에 반영합니다 (main branch).",
    commits: [
      {
        sha: "f27fcb6",
        message: "feat(models): add x-ai/grok-4.3 to OpenRouter + Nous Portal curated lists (#20497)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f27fcb6a82b8487174ca941c15e7a5887371eede",
      },
      {
        sha: "477e4a2",
        message: "feat(models): add deepseek/deepseek-v4-pro to OpenRouter + Nous Portal curated lists (#20495)",
        href: "https://github.com/NousResearch/hermes-agent/commit/477e4a2fe6d0cb82fdb689f2302e58b4e9e1d566",
      },
      {
        sha: "2d4eaed",
        message: "arcee temperature + compression",
        href: "https://github.com/NousResearch/hermes-agent/commit/2d4eaed1117caccd98f34a9f48684995a6e313df",
      },
      {
        sha: "f0b95cc",
        message: "test(arcee): cover Trinity Large Thinking temperature + compression overrides",
        href: "https://github.com/NousResearch/hermes-agent/commit/f0b95cc93dda1ee42cf587d1b0b6de7dd707f05d",
      },
      {
        sha: "9851338",
        message: "feat(i18n): add Turkish (tr) locale",
        href: "https://github.com/NousResearch/hermes-agent/commit/985133852a22863c3995424c657fd8cf4ac2938f",
      },
      {
        sha: "c4b287b",
        message: "feat(i18n): add Ukrainian locale",
        href: "https://github.com/NousResearch/hermes-agent/commit/c4b287ba539de06f79b867319568a4aa8c02a5ac",
      },
      {
        sha: "0d41e94",
        message: "feat(i18n): add French (fr) locale support",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d41e94ca99ca873148081e597fabf5d339f267b",
      },
      {
        sha: "39f451f",
        message: "fix: add Turkish locale references in config, tests, and docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/39f451f5ada6546a12fefd97397faca189d0169c",
      },
      {
        sha: "5c906d7",
        message: "feat(web): add SearXNG as a native search-only backend",
        href: "https://github.com/NousResearch/hermes-agent/commit/5c906d70266c1bbce88fd227ea98a3f7646551fe",
      },
      {
        sha: "94016dd",
        message: "docs+skill: add searxng-search optional skill and documentation",
        href: "https://github.com/NousResearch/hermes-agent/commit/94016dd1aa7eac05765bdebf8de0838d76402dc0",
      },
      {
        sha: "cd2cbc7",
        message: "refactor(web): per-capability backend selection for search/extract split",
        href: "https://github.com/NousResearch/hermes-agent/commit/cd2cbc73b7c56f0c19f41a6bb21808239078653c",
      },
      {
        sha: "48c2418",
        message: "docs: add Web Search + Extract feature page with SearXNG setup guide",
        href: "https://github.com/NousResearch/hermes-agent/commit/48c241840aa21a9b727a7efde4e4e371416d9ad3",
      },
      {
        sha: "a24789d",
        message: "fix(opencode-go): keep users on opencode-go instead of hijacking to native providers (#20802)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a24789d738b1074786f58952e299818b41da596e",
      },
      {
        sha: "e598e18",
        message: "docs: document custom model aliases for /model command (#20475)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e598e18529c02116da5716728d48697f2c82a129",
      },
      {
        sha: "441ef75",
        message: "fix(feishu): keep topic replies in threads",
        href: "https://github.com/NousResearch/hermes-agent/commit/441ef75d157d6308a9f14d42a7b0ec8566866ef8",
      },
      {
        sha: "28299af",
        message: "chore: follow-up cleanup for Feishu topic thread fix",
        href: "https://github.com/NousResearch/hermes-agent/commit/28299afc21a37784d93b90924317f004ea2298af",
      },
      {
        sha: "ad7aad2",
        message: "feat(skills/linear): add Documents support + Python helper script (#20752)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ad7aad251c60cfe36bb2247603a34a958b9cdbc4",
      },
      {
        sha: "b045e7a",
        message: "feat(skills): add shop-app personal shopping assistant (optional) (#20702)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b045e7a2ba2ef6a1449b459e03a8a701eb9c46f0",
      },
      {
        sha: "2c19212",
        message: "feat(models): add paid tencent/hy3-preview route on OpenRouter (#21077)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2c1921241ca2bdcd2fe48b02f3a93f226cf41ad2",
      },
      {
        sha: "8ad117a",
        message: "fix(models): add alibaba-coding-plan to _PROVIDER_MODELS curated list",
        href: "https://github.com/NousResearch/hermes-agent/commit/8ad117a3d6233609d2d67b9f77d43bc39d41accb",
      },
      {
        sha: "6ea4a6a",
        message: "fix(vision): Z.AI vision model compatibility — endpoint routing and max_tokens handling",
        href: "https://github.com/NousResearch/hermes-agent/commit/6ea4a6a740ae66183490059c214b775847a82009",
      },
      {
        sha: "a9c7bda",
        message: "feat(image-gen): honor image_gen.model from config.yaml in plugin dispatch",
        href: "https://github.com/NousResearch/hermes-agent/commit/a9c7bdaea6543c2addb45cfafbe14b587245c34b",
      }
    ],
  },
  {
    date: "2026-05-05 ~ 2026-05-07",
    title: "Docs: 중국어 README·zh-Hans 가이드, Ollama 로컬 실행, VS Code ACP 연동, WSL Chrome MCP 브릿지·WSL2 심화 가이드, 플러그인 서페이스·이미지 생성 프로바이더·스킬 퍼블리싱 가이드, Tool Gateway 마케팅 페이지 재작성, CONTRIBUTING 도구 정비·API 서버 툴 지역성 명시·README 정정 등",
    category: "Docs",
    summary:
      "CONTRIBUTING 문서에서 도구 발견(tool discovery)과 테스트 러너를 AGENTS.md와 일치하도록 정비합니다. API 서버의 툴 실행 지역성(tool execution locality)에 대한 문서 설명을 명확히 합니다. README에서 잘못된 RL install-extras 안내를 제거하고 CONTRIBUTING을 참조하도록 수정합니다. 중국어(zh-CN) README 번역과 zh-Hans Tool Gateway·이미지 생성·Windows WSL 가이드가 추가되어 중국어 사용자 지원이 강화되었습니다. Ollama로 Hermes를 로컬 실행하는 가이드, Open WebUI 부트스트랩 스크립트, VS Code ACP Client 연동 설정 가이드가 추가되었습니다. /model 명령어의 커스텀 모델 별칭(alias) 문서, WSL 환경에서 Windows Chrome MCP 브릿지 구성 가이드가 포함됩니다. WSL2 심화 가이드로 파일시스템·네트워킹·서비스·주의사항을 보강하고, 플러그인 서페이스 커버리지 문서로 모델 프로바이더 가이드·전체 플러그인 맵·opt-in 수정사항을 정리합니다. 이미지 생성 프로바이더 플러그인(image-gen-provider-plugin) 가이드와 스킬 퍼블리싱 안내(skill tap)가 추가되어 플러그인 문서의 공백을 메웁니다. Tool Gateway 문서가 pitch-first 마케팅 페이지로 재작성되었습니다 (main branch).",
    commits: [
      {
        sha: "647f95b",
        message: "docs(contributing): align tool discovery and test runner with AGENTS.md",
        href: "https://github.com/NousResearch/hermes-agent/commit/647f95b4224c1f5ef566d378172171a25063b4f5",
      },
      {
        sha: "43a6645",
        message: "docs: clarify API server tool execution locality",
        href: "https://github.com/NousResearch/hermes-agent/commit/43a66457186c2297bbe1eb65d38a7fcbd8244656",
      },
      {
        sha: "699c770",
        message: "docs(readme): drop misleading RL install-extras claim, defer to CONTRIBUTING",
        href: "https://github.com/NousResearch/hermes-agent/commit/699c770e5c0649ef3546da0ec2554a9898a8553a",
      },
      {
        sha: "05cdcac",
        message: "docs: add Chinese (zh-CN) README translation",
        href: "https://github.com/NousResearch/hermes-agent/commit/05cdcac36240df5ef1348f7f527cc3e1a341282d",
      },
      {
        sha: "74e4f5f",
        message: "docs(i18n): add zh-Hans Tool Gateway, image gen, and Windows WSL guide",
        href: "https://github.com/NousResearch/hermes-agent/commit/74e4f5f97aca5471cfa0b595aa94e1a10e5f3b4e",
      },
      {
        sha: "9a0a4c5",
        message: "docs(guides): add guide for running Hermes locally with Ollama",
        href: "https://github.com/NousResearch/hermes-agent/commit/9a0a4c5831256551394c3ca99c3913653ea53691",
      },
      {
        sha: "0d945d1",
        message: "docs: update VS Code setup instructions for ACP Client integration",
        href: "https://github.com/NousResearch/hermes-agent/commit/0d945d1541eece83efa3f19bf9fc3550e55a32e6",
      },
      {
        sha: "a11234d",
        message: "docs(browser): document WSL-to-Windows Chrome MCP bridge",
        href: "https://github.com/NousResearch/hermes-agent/commit/a11234dd68107228f7f4c9f2b8c3eea3de7aa31a",
      },
      {
        sha: "1c42d8f",
        message: "docs: add Open WebUI bootstrap script",
        href: "https://github.com/NousResearch/hermes-agent/commit/1c42d8ff5307849b3c450a5536f641739e220227",
      },
      {
        sha: "90a7adc",
        message: "docs(wsl2): expand Windows (WSL2) guide — filesystem, networking, services, pitfalls (#20748)",
        href: "https://github.com/NousResearch/hermes-agent/commit/90a7adcb2e90a7ac744d51a86cdde65f7733cdad",
      },
      {
        sha: "b62a82e",
        message: "docs: pluggable surfaces coverage — model-provider guide, full plugin map, opt-in fix (#20749)",
        href: "https://github.com/NousResearch/hermes-agent/commit/b62a82e0c3fbcdf219824c1512de180bae8a125c",
      },
      {
        sha: "773cf48",
        message: "docs(plugins): close the gaps — image-gen-provider-plugin guide + publishing a skill tap (#20800)",
        href: "https://github.com/NousResearch/hermes-agent/commit/773cf48c50b468f25c9a46495218b43edac137f9",
      },
      {
        sha: "d514dd4",
        message: "docs(tool-gateway): rewrite as pitch-first marketing page (#20827)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d514dd40552c6747eb465a539d5991376125c709",
      },
    ],
  },
];
