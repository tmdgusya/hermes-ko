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

export const hermesUpdatesLastChecked = "2026-05-09";

export const hermesUpdatesSourceUrl = "https://github.com/NousResearch/hermes-agent/commits/main";

export const hermesUpdates: HermesUpdate[] = [
  {
    date: "2026-05-08",
    title: "Windows / 크로스플랫폼 / 스킬 플랫폼 / 인코딩: Windows 네이티브 설치·제거·Scheduled Task 게이트웨이·UTF-8 stdio·POSIX 호환성·브라우저·Playwright·PortableGit·npm.cmd·EDITOR 설정, 크로스플랫폼 psutil PID 관리·Windows footgun 진단, 스킬 platforms 프론트매터 142종 선언·Windows 스킬 게이트, PLW1514 인코딩 lint·시스템 프롬프트 환경 힌트·Ctrl+Enter 개행·Windows Quirks 문서·auth.json 공유 경로·Profiles UTF-8",
    category: "Windows / Cross-platform / Skills",
    summary:
      "Windows 네이티브 지원이 대규모로 추가됩니다. 네이티브 Windows 설치 간극을 해소하여 crash-free 시작, UTF-8 stdio, tzdata 의존성, 문서를 포함한 완전한 설치 환경을 제공합니다. 남은 POSIX 전용 landmine들을 해결하여 TUI crash, kanban waitpid, AF_UNIX sandbox, /bin/bash 의존성, npm .cmd shim, cwd tracking, detach flag 문제를 모두 수정합니다. Windows installer가 winget 대신 portable MinGit을 번들하고, 게이트웨이를 Scheduled Task로 등록하며 Startup-folder fallback을 지원합니다. Windows uninstaller가 User env, PATH, Scheduled Task, portable tooling을 정리합니다.\\\\\\\\n\\\\\\\\n크로스플랫폼 지원을 위해 psutil 기반 PID/프로세스 관리와 Windows footgun checker가 추가됩니다. os.kill(pid, 0)이 Windows에서 no-op이 아닌 문제를 새로운 _pid_exists 헬퍼로 해결합니다. gateway 상태 중복 제거(dedup)와 install.ps1 플랫폼-SDK 부트스트랩이 추가됩니다. Windows installer에서 UTF-8 BOM 처리, tiered extras, tinker-atropos 기본 건너뛰기가 적용됩니다.\\\\\\\\n\\\\\\\\nWindows에서 browser tool과 subprocess spawning의 spurious SIGINT 문제를 수정합니다. execute_code가 AF_UNIX 게이트에 막혀 있던 문제를 해결하고, PYTHONIOENCODING=utf-8 + PYTHONUTF8=1을 설정하며 sandbox 파일을 UTF-8로 작성합니다. Windows OS-essential env var를 통과시키고, Playwright Chromium을 자동 설치하여 doctor에 표시합니다. PortableGit을 MinGit 대신 사용하고, os.execvp crash를 수정하며 npm 에러를 표면화합니다. npm.cmd를 npm.ps1보다 우선하고, .py argv0을 relaunch에서 건너뜁니다.\\\\\\\\n\\\\\\\\nWindows 에디터 기본값으로 EDITOR=notepad를 설정하여 /edit과 Ctrl+X Ctrl+E가 동작합니다. Ctrl+Enter로 Windows Terminal에서 개행을 삽입할 수 있습니다. 시스템 프롬프트에 호스트와 터미널 백엔드 정보를 포함하는 환경 힌트가 추가됩니다.\\\\\\\\n\\\\\\\\n스킬 시스템에 플랫폼(platforms) 프론트매터가 추가되어 79개 빌트인 스킬과 63개 optional 스킬에 플랫폼이 선언됩니다. Linux/macOS 전용 7개 스킬이 Windows에서 게이트(gate)됩니다.\\\\\\\\n\\\\\\\\n코드베이스 전반에 PLW1514 lint 규칙이 활성화되고 모든 bare open() 호출에 encoding='utf-8'이 추가됩니다. Windows 전용 UTF-8 stdio shim이 모든 진입점에 적용됩니다. auth에서 공유 nous_auth.json 경로에 get_default_hermes_root()를 사용합니다. 프로필 distribution.yaml 열기에 encoding=utf-8이 전달됩니다. Windows 관련 Quirks 문서와 keystroke 진단이 hermes-agent 스킬 문서에 추가됩니다 (main branch 기준).",
    commits: [
      {
        sha: "9de893e",
        message: "feat(windows): close native-Windows install gaps — crash-free startup, UTF-8 stdio, tzdata dep, docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/9de893e3b078e7ef51437af1ce6743d96a103c6d",
      },
      {
        sha: "e93bfc6",
        message: "feat(windows): close remaining POSIX-only landmines — TUI crash, kanban waitpid, AF_UNIX sandbox, /bin/bash, npm .cmd shims, cwd tracking, detach flags",
        href: "https://github.com/NousResearch/hermes-agent/commit/e93bfc6c93bfa6f9edd02629a03f717fc29ce013",
      },
      {
        sha: "b7fe7ed",
        message: "feat(windows-install): bundle portable MinGit instead of relying on winget",
        href: "https://github.com/NousResearch/hermes-agent/commit/b7fe7ed7bd1740b01315c4bd15b254aa738124e5",
      },
      {
        sha: "9c263fb",
        message: "feat(windows): gateway as a Scheduled Task + Startup-folder fallback",
        href: "https://github.com/NousResearch/hermes-agent/commit/9c263fbf8a622566f0831b8b727ded31b67c64af",
      },
      {
        sha: "35fce76",
        message: "feat(windows uninstall): clean up User env, PATH, Scheduled Task, and portable tooling",
        href: "https://github.com/NousResearch/hermes-agent/commit/35fce7699ef61eb11963a498c5489b4e7c7a508b",
      },
      {
        sha: "cc38282",
        message: "feat(cross-platform): psutil for PID/process management + Windows footgun checker",
        href: "https://github.com/NousResearch/hermes-agent/commit/cc38282b04d997468db782caa3443387fd454359",
      },
      {
        sha: "98db898",
        message: "feat(skills): declare platforms frontmatter for all 79 undeclared built-in skills",
        href: "https://github.com/NousResearch/hermes-agent/commit/98db898c0bd4df0b09a5830b6a18a069c771e67c",
      },
      {
        sha: "db22efb",
        message: "feat(optional-skills): declare platforms frontmatter for all 63 undeclared skills",
        href: "https://github.com/NousResearch/hermes-agent/commit/db22efbe88bd822331a3220b9020e6d4800c37d1",
      },
      {
        sha: "b18b17f",
        message: "feat(skills): gate 7 Linux/macOS-only skills from Windows via platforms frontmatter",
        href: "https://github.com/NousResearch/hermes-agent/commit/b18b17f9c9de0f43975a8987821f37be954603a2",
      },
      {
        sha: "0ba1e12",
        message: "fix(windows): browser tool + spurious SIGINT from subprocess spawning",
        href: "https://github.com/NousResearch/hermes-agent/commit/0ba1e12abc5aef96429413d7532341a69e37d8d8",
      },
      {
        sha: "21efeb5",
        message: "fix(windows): enable execute_code — stale AF_UNIX gate was blocking the tool",
        href: "https://github.com/NousResearch/hermes-agent/commit/21efeb51bb01bc4a24bb3afb9c621b9baaccabf7",
      },
      {
        sha: "03566e5",
        message: "fix(windows): auto-install Playwright Chromium + surface it in doctor",
        href: "https://github.com/NousResearch/hermes-agent/commit/03566e5124d106656f4152c1b084c233d9c07f3f",
      },
      {
        sha: "3601e20",
        message: "fix(windows): use PortableGit (not MinGit), fix relaunch os.execvp crash, surface npm errors",
        href: "https://github.com/NousResearch/hermes-agent/commit/3601e20f47c886d9174aae4129f310f90a00a682",
      },
      {
        sha: "d183804",
        message: "feat: Ctrl+Enter inserts newline on Windows Terminal",
        href: "https://github.com/NousResearch/hermes-agent/commit/d1838041e52499094b501056172cc7322233a7bc",
      },
      {
        sha: "40e7a71",
        message: "feat: enrich system-prompt environment hints with host + terminal-backend info",
        href: "https://github.com/NousResearch/hermes-agent/commit/40e7a71c350121a94a67d44e9f1e09239d6196d1",
      },
      {
        sha: "cbce5e9",
        message: "codebase: add encoding='utf-8' to all bare open() calls (PLW1514)",
        href: "https://github.com/NousResearch/hermes-agent/commit/cbce5e93fcb9a923ab71f45d2a0f0f172dd54967",
      },
      {
        sha: "d94fb47",
        message: "hermes_bootstrap: Windows-only UTF-8 stdio shim for all entry points",
        href: "https://github.com/NousResearch/hermes-agent/commit/d94fb47717eb6e2c343e1615fdabf436f19b350a",
      },
      {
        sha: "b63f964",
        message: "docs: add Windows-Specific Quirks section to hermes-agent skill + keystroke diagnostic",
        href: "https://github.com/NousResearch/hermes-agent/commit/b63f9645f08af894f2685521ffe4ee55df79d620",
      },
      {
        sha: "ea2cc4f",
        message: "fix(profiles): pass encoding=utf-8 to distribution.yaml open (#22083)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ea2cc4f9023c02a2cc130814fdfacc51098efbcf",
      },
      {
        sha: "62b4ebb",
        message: "auth: use get_default_hermes_root() for shared nous_auth.json path",
        href: "https://github.com/NousResearch/hermes-agent/commit/62b4ebb7db4e18fd3628ada0a1a30609ed6a109e",
      },
      {
        sha: "a54cae6",
        message: "fix(setup): offer gateway service install on Windows (#22099)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a54cae60d4ac72640f203193e810eec46d4a9859",
      },
      {
        sha: "3299be6",
        message: "docs(windows): add native Windows guide + install one-liner on landing page (#22089)",
        href: "https://github.com/NousResearch/hermes-agent/commit/3299be6bdb0a604b3730481004d2e0e33d0e83c7",
      },
      {
        sha: "59fbcd5",
        message: "fix(install.ps1): strip UTF-8 BOM that broke [scriptblock]::Create",
        href: "https://github.com/NousResearch/hermes-agent/commit/59fbcd5ccb4d080f9a00d8a862f6998aa04a1ed7",
      },
      {
        sha: "0548fac",
        message: "fix(windows): gateway status dedup + install.ps1 platform-SDK bootstrap",
        href: "https://github.com/NousResearch/hermes-agent/commit/0548facc506ff6d19044be28a10879c188b55087",
      },
      {
        sha: "324567c",
        message: "fix(windows): os.kill(pid, 0) is NOT a no-op on Windows — route through new _pid_exists helper",
        href: "https://github.com/NousResearch/hermes-agent/commit/324567c93662d726e05650c83b06078dce599e37",
      },
      {
        sha: "52e497c",
        message: "fix(windows installer): UTF-8 BOM, tiered extras, skip tinker-atropos by default",
        href: "https://github.com/NousResearch/hermes-agent/commit/52e497ce7f3f6910764679fcaeef6d53ebd7e46c",
      },
      {
        sha: "107de03",
        message: "execute_code: set PYTHONIOENCODING=utf-8 + PYTHONUTF8=1 in child env",
        href: "https://github.com/NousResearch/hermes-agent/commit/107de0321d0e8b9e23a60ec7439fdc50f45d2137",
      },
      {
        sha: "da18443",
        message: "execute_code: write sandbox files as UTF-8 on Windows",
        href: "https://github.com/NousResearch/hermes-agent/commit/da184439db42a6ac6816d31bb0c2fedd18d93c23",
      },
      {
        sha: "5c859e5",
        message: "execute_code: pass through Windows OS-essential env vars",
        href: "https://github.com/NousResearch/hermes-agent/commit/5c859e57165df24aabb0c9b3a01a5b5b6b5276e7",
      },
      {
        sha: "a2efad6",
        message: "fix(windows): prefer npm.cmd over npm.ps1, skip .py argv0 in relaunch",
        href: "https://github.com/NousResearch/hermes-agent/commit/a2efad6bea303a3a04a477dc662c711ec761f782",
      },
      {
        sha: "8f91d7b",
        message: "fix(windows): %1 install error, patch CRLF false-negative, SOUL.md BOM",
        href: "https://github.com/NousResearch/hermes-agent/commit/8f91d7bfa9d8427ca40a392c5fa1ce3dd2fe9231",
      },
      {
        sha: "d52e541",
        message: "fix(install.ps1): step out of $InstallDir before touching it + harden repo probe",
        href: "https://github.com/NousResearch/hermes-agent/commit/d52e54170ab2d1d7be609fdccfcc820557b8defb",
      },
      {
        sha: "c469a05",
        message: "fix(install.ps1): validate existing repo via git itself + clean up broken stubs",
        href: "https://github.com/NousResearch/hermes-agent/commit/c469a05ce58b0f269b9750dc6e9a857abcff7ccf",
      },
      {
        sha: "fc91886",
        message: "fix(windows): quote cache paths in bash + augment PATH so rg/bash resolve on first launch",
        href: "https://github.com/NousResearch/hermes-agent/commit/fc918867b2bcc311ba8992b73b519d7c49626f3e",
      },
      {
        sha: "b53bd12",
        message: "fix(windows-editor): default EDITOR=notepad so /edit and Ctrl+X Ctrl+E work",
        href: "https://github.com/NousResearch/hermes-agent/commit/b53bd12fe4c2b5518049c61692090fe26a786d30",
      },
      {
        sha: "291a158",
        message: "fix(skills): move platforms key out of folded description: > scalars",
        href: "https://github.com/NousResearch/hermes-agent/commit/291a158441c2a94cbc33bff6506262ff001050a6",
      },
    ],
  },
  {
    date: "2026-05-08",
    title: "CI / Tests / Entry Points 안정화: 진입점 hermes_bootstrap import guard·부분 업데이트 brick 방지, CI lint.yml ruff-check·windows-footguns 블로킹 job 추가, PLW1514 lint 블로킹 규칙 활성화, 오래된/broken 테스트 50개 제거, os.kill monkeypatch 테스트 마이그레이션, POSIX-venv-layout Windows 스킵·execute_code env scrubber 가드 테스트",
    category: "CI / Tests / Entry Points",
    summary:
      "Hermes 진입점(entry-points)에서 hermes_bootstrap 임포트를 guard하여 부분 업데이트(partial update) 시 Hermes가 brick되는 것을 방지합니다 (#22091). CI lint.yml에 ruff-check과 windows-footguns를 블로킹(blocking) job으로 추가하고, PLW1514 lint 규칙을 블로킹으로 활성화합니다. 오래되었거나 깨진(stale/broken) 테스트 50개를 제거하여 CI를 복구합니다 (#22098). os.kill monkeypatch를 gateway.status._pid_exists로 마이그레이션하고, POSIX-venv-layout 테스트를 Windows에서 건너뛰며, execute_code env scrubber의 POSIX-equivalence 가드를 테스트합니다 (main branch 기준).",
    commits: [
      {
        sha: "26bac67",
        message: "fix(entry-points): guard hermes_bootstrap import so partial updates don't brick hermes (#22091)",
        href: "https://github.com/NousResearch/hermes-agent/commit/26bac67ef90d99646b491f5df4ef3856abb072ad",
      },
      {
        sha: "66320de",
        message: "test: remove 50 stale/broken tests to unblock CI (#22098)",
        href: "https://github.com/NousResearch/hermes-agent/commit/66320de52e9d77c5afc9767a350447011c8577f1",
      },
      {
        sha: "d3120ae",
        message: "ci(lint): add blocking ruff-check + windows-footguns jobs to lint.yml",
        href: "https://github.com/NousResearch/hermes-agent/commit/d3120aeab064c7d8275cd85d39c567313a93f6b2",
      },
      {
        sha: "3be853a",
        message: "lint: enable PLW1514 as a blocking ruff rule",
        href: "https://github.com/NousResearch/hermes-agent/commit/3be853a9b848ad24827cb5d64b66d87f2797b05c",
      },
      {
        sha: "f5ee780",
        message: "test: migrate stale os.kill monkeypatches to gateway.status._pid_exists",
        href: "https://github.com/NousResearch/hermes-agent/commit/f5ee780124904be1992771cb7c9f7a9263d833e7",
      },
      {
        sha: "e614e87",
        message: "tests: skip POSIX-venv-layout tests on Windows",
        href: "https://github.com/NousResearch/hermes-agent/commit/e614e87954638a164c3e6e552408971e231a10f1",
      },
      {
        sha: "3b9cd58",
        message: "tests: lock in POSIX-equivalence guard for execute_code env scrubber",
        href: "https://github.com/NousResearch/hermes-agent/commit/3b9cd5820898796ead8f7d5913efc42071d2e94a",
      },
    ],
  },
  {
    date: "2026-05-08",
    title: "MS Graph / Watchers / Approval / API Server / Google Workspace / Goals / Cron / Docker / TUI / Auth / Config / GMI / Gateway / Model / Profile: MS Graph 인증·클라이언트 기초·파일 다운로드 스트리밍·토큰 캐시·Azure 앱 등록 문서·웹훅 리스너 플랫폼·웹훅 중복 제거·인증 강화·IP 허용·응답 위생, Watchers 스킬 (RSS/HTTP JSON/GitHub 크론 no-agent 폴링), Cron job 승인 컨텍스트 분리·API 서버 run approval 이벤트 노출, Google Workspace Drive 쓰기·Docs/Sheets 생성/추가, Goals Ctrl+C 자동 일시정지, Docker 첫 부팅 시 auth.json env 부트스트랩, Cron job 출력 디렉토리 정리, TUI 턴 세그먼트 규칙·티커 데드 스페이스 정리, Cron 라우팅 인텐트 deliver=all, Auth Nous 리프레시 토큰 헤더 전송·check_auth_live 문서화 수정, Google Workspace disabled_client 감지·--check-live 추가, 빠른 설정 마법사에 터미널 백엔드 포함, GMI User-Agent profile.default_headers 이동, Hermes config 접근 직렬화, Goals 자동 일시정지, Gateway goal 상태 알림 지연, Model-Switch Ollama 인증 정보 정리, SearXNG 문서 수정, 프로필 Git 공유 배포",
    category: "MS Graph / Watchers / Approval / API Server / Google Workspace / Goals / Cron / Docker / TUI / Auth / Config / Gateway / Profile",
    summary:
      "Microsoft Graph(MS Graph) API 연동을 위한 인증(auth) 및 클라이언트 기초(foundation)가 추가됩니다. MS Graph 파일 다운로드 시 본문을 버퍼링하지 않고 스트리밍(streaming)하여 메모리 사용을 개선합니다. 동시 토큰 캐시 재사용(concurrent token cache reuse)에 대한 테스트가 추가됩니다. Azure 앱 등록 워크스루(walkthrough) 및 환경 변수(env var) 참조 문서가 추가됩니다. MS Graph 웹훅(webhook) 리스너 플랫폼이 추가되어 변경 알림을 수신할 수 있습니다. 웹훅 수신 중복 제거(dedupe) 및 리소스 매칭을 정규화(normalize)하고, 중복 제거 캐시 크기를 제한(bound)합니다. 웹훅 인증 표면을 강화(harden auth surface)하고 IP 허용 목록(IP allowlisting)과 응답 위생(response hygiene)을 적용합니다. 웹훅 리스너 설정 페이지 및 환경 변수 참조 문서가 추가됩니다.\\\\n\\\\nWatchers 스킬이 추가되어 cron을 통해 RSS 피드, HTTP JSON, GitHub를 no-agent 방식으로 폴링(poll)할 수 있습니다.\\\\n\\\\nCron job이 gateway context로 잘못 처리되어 승인(approval)이 동작하지 않던 문제를 수정합니다. API 서버에서 run approval 이벤트를 SSE로 노출(expose)하여 클라이언트가 승인 상태 변화를 실시간으로 구독할 수 있습니다.\\\\n\\\\nGoogle Workspace에 Drive 파일 쓰기(write), Google Docs/Sheets 문서 생성(create) 및 추가(append) 기능이 추가됩니다. Goals에서 /goal 루프 실행 중 Ctrl+C로 goal을 자동 일시정지(auto-pause)할 수 있습니다. Docker 첫 부팅 시 환경 변수(env)에서 auth.json을 자동 생성(부트스트랩)합니다. Cron job 제거(remove_job) 시 job 출력 디렉토리도 함께 정리합니다.\\\\n\\\\nTUI에서 사용자 메시지 턴을 구분하는 규칙(rule) 세그먼트를 추가하고, 티커(ticker)의 데드 스페이스를 정리(trim)하여 UI를 개선합니다. Cron 작업에 라우팅 인텐트(routing intent) `deliver=all`이 추가되어 모든 연결된 채널로 메시지를 팬아웃(fan out)할 수 있습니다. Auth에서 Nous 리프레시 토큰을 헤더(header)를 통해 전송하도록 수정하고, check_auth_live의 docstring 문법 오류를 수정합니다. Google Workspace에서 --check-live 옵션으로 disabled_client를 감지(detect)하고, salvage 정리를 개선합니다. 빠른 설정 마법사(quick setup wizard)에 터미널 백엔드가 포함되어 초기 설정이 간편해집니다.\\\\n\\\\nGMI(GitHub Model Interface)의 User-Agent 설정을 profile.default_headers로 이동하여 프로필 수준에서 관리할 수 있도록 개선합니다. Hermes 설정(config) 접근을 직렬화(Serialize)하여 동시 접근으로 인한 경합을 방지합니다. Goals에서 judge 모델이 파싱 불가능한(unparseable) 출력을 반환할 때 자동으로 일시정지(auto-pause)하여 잘못된 goal 진행을 차단합니다. Gateway에서 goal 상태 알림(goal status notices)을 응답 전달(response delivery) 이후로 지연(defer)하여 메시지 순서를 개선합니다. Model-Switch에서 프로바이더 전환 후 이전 Ollama 인증 정보(credentials)가 그대로 남아 오작동하는 문제를 수정합니다. SearXNG 환경 설정 관련 문서 오류를 수정합니다. 프로필(profile)을 Git을 통해 배포 가능한 형태로 공유(shareable profile distributions)할 수 있는 기능이 추가됩니다 (main branch).",
    commits: [
      {
        sha: "cf648a9",
        message: "docs(msgraph): add Azure app registration walkthrough + env var reference",
        href: "https://github.com/NousResearch/hermes-agent/commit/cf648a9b7e4f3a346451d543648ce76922971e1a",
      },
      {
        sha: "45d860d",
        message: "fix(msgraph): stream download_to_file body instead of buffering",
        href: "https://github.com/NousResearch/hermes-agent/commit/45d860d424ffbfd143c66ce0ce266c321cd89006",
      },
      {
        sha: "b878f89",
        message: "test(msgraph): cover concurrent token cache reuse",
        href: "https://github.com/NousResearch/hermes-agent/commit/b878f89f669cefbea3d24ba49b39aaf22c640469",
      },
      {
        sha: "a152c70",
        message: "feat(msgraph): add auth and client foundation",
        href: "https://github.com/NousResearch/hermes-agent/commit/a152c706b7bbde3efc921e86f302c75fdaef99a2",
      },
      {
        sha: "46a6f39",
        message: "feat(msgraph): add webhook listener platform",
        href: "https://github.com/NousResearch/hermes-agent/commit/46a6f3902462d7f813741eab56b0abf13c4a777b",
      },
      {
        sha: "26a59e4",
        message: "fix(msgraph): normalize webhook dedupe and resource matching",
        href: "https://github.com/NousResearch/hermes-agent/commit/26a59e4f6c6494f46db1c73278412109f320a6df",
      },
      {
        sha: "2a215de",
        message: "fix(msgraph): bound webhook receipt dedupe cache",
        href: "https://github.com/NousResearch/hermes-agent/commit/2a215de9afa30266299ff3dc529d2d5d40937a57",
      },
      {
        sha: "b8d7e0e",
        message: "fix(msgraph_webhook): harden auth surface + IP allowlisting + response hygiene",
        href: "https://github.com/NousResearch/hermes-agent/commit/b8d7e0e6d386eceb081cab8123db26474b1a6b9d",
      },
      {
        sha: "474d1e8",
        message: "docs(msgraph): webhook listener setup page + env var reference",
        href: "https://github.com/NousResearch/hermes-agent/commit/474d1e812bf3fe1a1f75b2ab06f477c631bf62c3",
      },
      {
        sha: "ea8e608",
        message: "feat(skills): watchers skill — poll RSS / HTTP JSON / GitHub via cron no-agent (#21881)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ea8e608821b18f1cfa2f45c65542f7bc6c2f7b96",
      },
      {
        sha: "839cdd1",
        message: "fix(approval): cron jobs must not be treated as gateway context",
        href: "https://github.com/NousResearch/hermes-agent/commit/839cdd1b054a75ff1b581199a83488c8e0f2f788",
      },
      {
        sha: "526c0e0",
        message: "feat(api-server): expose run approval events",
        href: "https://github.com/NousResearch/hermes-agent/commit/526c0e018a2087303cf31b25b949a64a029d0718",
      },
      {
        sha: "e43d2fe",
        message: "feat(google-workspace): Drive write ops + Docs/Sheets create/append (#21895)",
        href: "https://github.com/NousResearch/hermes-agent/commit/e43d2fe5205ef3a2027924f14380a6af08bda35e",
      },
      {
        sha: "674fad1",
        message: "fix(goals): Ctrl+C during /goal loop auto-pauses the goal (#21888)",
        href: "https://github.com/NousResearch/hermes-agent/commit/674fad14832006bfd742c5e3183f34c24018e43a",
      },
      {
        sha: "5643c29",
        message: "feat(docker): bootstrap auth.json from env on first boot",
        href: "https://github.com/NousResearch/hermes-agent/commit/5643c297901312d817713a8cc870a28a439e3114",
      },
      {
        sha: "f4e621f",
        message: "fix(cron): clean up job output dir in remove_job",
        href: "https://github.com/NousResearch/hermes-agent/commit/f4e621f7d834fe8dc879dd4f4fbf3e14d3d986cf",
      },
      {
        sha: "42f9234",
        message: "feat(tui): segment turns with rule above non-first user msgs; trim ticker dead space (#21846)",
        href: "https://github.com/NousResearch/hermes-agent/commit/42f9234da34e59e456240cb3ddb8bad1995427a4",
      },
      {
        sha: "7190e20",
        message: "fix: include terminal backend in quick setup wizard (#21842)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7190e20e0b84c581fe182b5038ade7483482e69e",
      },
      {
        sha: "486b14b",
        message: "feat(cron): routing intent — deliver=all fans out to every connected channel (#21495)",
        href: "https://github.com/NousResearch/hermes-agent/commit/486b14b423e85120691e445df7bfc57f093459a0",
      },
      {
        sha: "b32461f",
        message: "fix(auth): send Nous refresh token via header",
        href: "https://github.com/NousResearch/hermes-agent/commit/b32461f6e864dddcd9c7e0a8976b4e4ca50616db",
      },
      {
        sha: "80775d7",
        message: "test(auth): assert Nous refresh rotation payload",
        href: "https://github.com/NousResearch/hermes-agent/commit/80775d758562821c4bd5ad6e2f26afa3d5223d5d",
      },
      {
        sha: "617ac05",
        message: "fix: correct docstring syntax error in check_auth_live",
        href: "https://github.com/NousResearch/hermes-agent/commit/617ac0535b191998b96979a48c7df2268670087c",
      },
      {
        sha: "5fa493a",
        message: "fix(google-workspace): detect disabled_client in --check and add --check-live",
        href: "https://github.com/NousResearch/hermes-agent/commit/5fa493a2ca6a5899acc40026283d3f47303f5937",
      },
      {
        sha: "83c23e8",
        message: "fix(google-workspace): cleanup for --check-live salvage",
        href: "https://github.com/NousResearch/hermes-agent/commit/83c23e88617c97ab5d3663ee8895eeda258a1eb9",
      },
      {
        sha: "81928f0",
        message: "refactor(gmi): move User-Agent to profile.default_headers",
        href: "https://github.com/NousResearch/hermes-agent/commit/81928f03ab5841362e526df011e3eb74159aea8b",
      },
      {
        sha: "34f7297",
        message: "Serialize Hermes config access",
        href: "https://github.com/NousResearch/hermes-agent/commit/34f7297359bb5bf38d0ad8c48574ea42f35111ca",
      },
      {
        sha: "307c85e",
        message: "fix(goals): auto-pause when judge model returns unparseable output",
        href: "https://github.com/NousResearch/hermes-agent/commit/307c85e5c1b0dd0ca0d94ec362976254cbd949b4",
      },
      {
        sha: "03ddff8",
        message: "fix(gateway): defer goal status notices until after response delivery",
        href: "https://github.com/NousResearch/hermes-agent/commit/03ddff889719c7be164c3d329f9903fdd55aea31",
      },
      {
        sha: "7338e5d",
        message: "fix(model-switch): prevent stale Ollama credentials after provider switch (#21703)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7338e5d9ba94c1d90a644d0588ac003d1aaee350",
      },
      {
        sha: "faa13e4",
        message: "docs(web): fix SearXNG env configuration",
        href: "https://github.com/NousResearch/hermes-agent/commit/faa13e49f81480771ceeb55991bb0c27edf1a5fb",
      },
      {
        sha: "f209a35",
        message: "feat(profile): shareable profile distributions via git (#20831)",
        href: "https://github.com/NousResearch/hermes-agent/commit/f209a358592fe9613fc11e779d80b3b4d4da4f45",
      },
    ],
  },
  {
    date: "2026-05-08",
    title: "Computer-Use / Teams Pipeline / TUI / Profiles: CUA 드라이버 백엔드·범용 any-model 스키마·백그라운드 포커스 안전 백엔드(set_value·구조화 윈도우·MIME 감지)·비Anthropic 멀티모달 툴 결과 언래핑·이미지 거절 폴백 강화·사이드바 내비게이션, Teams 파이프라인 플러그인 런타임·Operator CLI·기존 어댑터 아웃바운드 딜리버리·드롭 스케줄러 폴백·딜리버리 URL 보완·미팅 요약 문서·cron 갱신 레시피·사이드바 연결·스킬 재작성·스킬 에셋 추가·비동기 테스트 환경 수정·미팅 설정 문서 분리, TUI 기존 게이트웨이 attach, 프로필 배포 전체 사용자 가이드",
    category: "Computer-Use / Teams / TUI / Profiles",
    summary:
      "Computer-Use(컴퓨터 사용) 기능이 대폭 확장됩니다. CUA(Computer-Use Agent) 드라이버 백엔드와 범용 any-model 스키마가 추가되어 다양한 모델에서 컴퓨터 사용이 가능해집니다. 백그라운드에서도 안전하게 동작하는 포커스-세이프(focus-safe) 백엔드가 도입되어 set_value, 구조화된 윈도우(structured windows), MIME 감지(detection)를 지원합니다. Anthropic 외 다른 프로바이더(non-Anthropic providers)에서 멀티모달 툴 결과를 content list로 올바르게 언래핑(unwrap)합니다. 이미지 거절 폴백(image-rejection fallback)을 강화(harden)하고 AUTHOR_MAP을 정리합니다. Computer-Use 문서가 사이드바 내비게이션의 Media and Web 섹션에 추가됩니다.\\\\n\\\\nMicrosoft Teams 파이프라인 기능이 새롭게 추가됩니다. Teams 파이프라인 플러그인 런타임(runtime)과 Operator CLI가 추가되어 파이프라인을 구성하고 관리할 수 있습니다. 기존 어댑터를 통한 아웃바운드 딜리버리(outbound delivery)가 추가되고, 드롭 스케줄러 폴백(drop-scheduler fallback) 및 enablement gate 테스트 와이어링이 보완됩니다. 중복 delivery-mode 분기를 제거(refactor)하고, 어댑터 재사용 테스트에서 누락된 딜리버리 URL을 보완합니다. Teams 미팅 요약(meeting summary) 딜리버리 섹션과 환경 변수 참조 문서가 추가됩니다. Teams Pipeline cron 갱신(cron renewal) 레시피 문서와 사이드바 연결(sidebar wiring), 스킬 재작성(skill rewrite)이 추가되고, 스킬 에셋(skill asset)이 추가되며 비동기 테스트 환경(async test env)이 수정됩니다. Teams 미팅 설정(meetings setup) 문서가 Operator 런북(runbook)에서 분리되어 독립적인 문서로 정리됩니다.\\\\n\\\\nTUI에서 `hermes tui --attach`로 기존에 실행 중인 게이트웨이(gateway)에 연결(attach)할 수 있는 기능이 추가됩니다. 프로필 배포(profile distributions)에 대한 전체 사용자 가이드가 문서화됩니다 (main branch 기준).",
    commits: [
      {
        sha: "242da9d",
        message: "docs(teams-pipeline): cron renewal recipe, sidebar wiring, skill rewrite",
        href: "https://github.com/NousResearch/hermes-agent/commit/242da9db965ca5618995c5ff92659171f7aae629",
      },
      {
        sha: "729a659",
        message: "fix(teams-pipeline): add skill asset and fix async test env",
        href: "https://github.com/NousResearch/hermes-agent/commit/729a659a3c8a949dc9c3b6a2ffe1ae3a49f33bd7",
      },
      {
        sha: "b79ef88",
        message: "docs(teams): split meetings setup from operator runbook",
        href: "https://github.com/NousResearch/hermes-agent/commit/b79ef8827fdcbe46064ea0ea5fd9b7dc2b1cba54",
      },
      {
        sha: "850413f",
        message: "feat(computer-use): cua-driver backend, universal any-model schema",
        href: "https://github.com/NousResearch/hermes-agent/commit/850413f1203f02c42ac6b9fd21ff86a2402a974e",
      },
      {
        sha: "e31f3b3",
        message: "feat(computer-use): background focus-safe backend — set_value, structured windows, MIME detection",
        href: "https://github.com/NousResearch/hermes-agent/commit/e31f3b3c56e33ba96213de4312367b4f61a745ed",
      },
      {
        sha: "2937f9b",
        message: "fix(computer-use): unwrap _multimodal tool results to content list for non-Anthropic providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/2937f9bef60c7a2d5b1531833ffdebfc0af006e2",
      },
      {
        sha: "d0aad4b",
        message: "fix(computer-use): harden image-rejection fallback + AUTHOR_MAP",
        href: "https://github.com/NousResearch/hermes-agent/commit/d0aad4b021b445fbb605dfcfeaa3c533b88bee74",
      },
      {
        sha: "a735b72",
        message: "docs(computer-use): add to sidebar nav under Media and Web",
        href: "https://github.com/NousResearch/hermes-agent/commit/a735b72131304f26d455b628de2dc713766c4cc0",
      },
      {
        sha: "07bbd93",
        message: "feat(teams-pipeline): add plugin runtime and operator cli",
        href: "https://github.com/NousResearch/hermes-agent/commit/07bbd933370882e8977e69f2d19b6f26a66ed271",
      },
      {
        sha: "397f750",
        message: "feat(teams): add pipeline outbound delivery via existing adapter",
        href: "https://github.com/NousResearch/hermes-agent/commit/397f750bb402f1807c0e7c732ff7637b1f2d52e8",
      },
      {
        sha: "a995477",
        message: "fix(teams-pipeline): drop-scheduler fallback + test wiring for enablement gate",
        href: "https://github.com/NousResearch/hermes-agent/commit/a99547740dab830c8b121574e4ef50db8fc500f8",
      },
      {
        sha: "d36ccc2",
        message: "refactor(teams): remove redundant delivery-mode branch",
        href: "https://github.com/NousResearch/hermes-agent/commit/d36ccc29c968343f4aecd07a29853d2bede72ecd",
      },
      {
        sha: "5e8dfc9",
        message: "fix(teams-pipeline): fill in missing delivery URL in adapter-reuse test",
        href: "https://github.com/NousResearch/hermes-agent/commit/5e8dfc9f6dad585b23502e8cd142e6e45d3f024c",
      },
      {
        sha: "9680827",
        message: "docs(teams): meeting summary delivery section + env var reference",
        href: "https://github.com/NousResearch/hermes-agent/commit/9680827078c4d73cbbadf3f97674aaa4f9839a7c",
      },
      {
        sha: "1997b3b",
        message: "feat(tui): support attaching to an existing gateway (#21978)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1997b3baf81440f5afd4b7963a23663e85557d18",
      },
      {
        sha: "ea86714",
        message: "docs(profiles): full user guide for profile distributions (#22017)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ea86714cc0e0b3461a8f69b778116d8bbd3dc61c",
      },
    ],
  },
  {
    date: "2026-05-07",
    title: "Agent / ACP / Gateway 자동 복구 / Security / Auth / Discord (main branch v0.13.0 태그): Agent Nous GPT-5 fallback 유지, ACP 이미지 첨부파일 image_url 전달·인라인 리소스, Agent orphan tool-tail 빈 응답 루프 차단·빈 응답 sentinel 제거·복구 스캐폴딩 미영속화, Gateway 자동 재개(auto-resume)·크래시 복구·재시작 전 reset-failed·중복 응답 방지·모노토닉 데드라인·QR 온보딩, Secret redaction 기본 활성화·credential/MCP OAuth TOCTOU 봉쇄, Discord 역할 스코핑(CVSS 8.1)·메시지 삭제·DM role-auth, Auth 크리덴셜 401 쿨다운 단축·파일락 중복 제거·Nous 리프레시 토큰 동기화·Spotify 로그아웃 모델 설정 유지, Docker 루트 실행 거부·node_modules 소유권·update config 마이그레이션·CLI 도움말 대시보드 추가, Telegram forum 스레드·이미지 문서 라우팅, OAuth monotonic deadlines, optional-skills Anthropic 금융 스킬 번들, image-routing MIME 감지·멀티모달 경로 노출, TUI 빈 final_response 시 백엔드 에러 표시·스크롤백 리셋 루프 방지, Weixin aiohttp→asyncio.wait_for·긴 줄 래핑, Windows 터미널 drain·CWD 경로 변환, Matrix 리액션 정리 지연, GitHub Copilot max_completion_tokens·DashScope China 재시도·비전 라우팅, analytics Claude 4.5–4.7 가격 등",
    category: "Agent / ACP / Gateway / Security",
    summary:
      "main branch에 v0.13.0 태그가 추가되었습니다. ACP에서 이미지 파일 첨부파일을 image_url 파트로 전달(pass through)하고, 파일 첨부 리소스를 인라인(inline) 처리합니다. run_agent에서 orphan tool-tail로 인한 영구적인 빈 응답 루프를 차단(break)하고, 터미널 빈 응답 sentinel을 제거(drop)하며, 빈 응답 복구 스캐폴딩이 영속화되지 않도록 수정합니다.\\\\n\\\\nGateway에 자동 재개(auto-resume) 기능이 추가되어 중단된 세션을 재시작 후 자동 복구하고, 크래시 복구(crash recovery)로 확장합니다. 재시작 인터럽트 중에도 resume marker가 보존되고, fallback 재시작 전에 reset-failed를 수행하여 gateway가 stranded되는 것을 방지합니다. Gateway에서 중복 응답 이력(duplicated responses history)을 방지하고, 임시 진행 버블(progress bubbles)을 opt-in으로 정리(cleanup)합니다. QR 온보딩 플로우와 OAuth/Gateway 폴링 루프에 모노토닉 데드라인(monotonic deadlines)을 적용합니다.\\\\n\\\\n보안 측면에서 secret redaction이 기본 활성화(enable by default)되고, hermes_cli/auth.py의 credential writers와 MCP OAuth credential 저장 시 TOCTOU 윈도우가 봉쇄(close)됩니다. Discord에서 DISCORD_ALLOWED_ROLES가 길드별로 스코핑(CVSS 8.1)되고, DM role-auth opt-in이 config.yaml로 라우팅되며 슬래시 커맨드까지 확장됩니다. Discord 메시지 삭제(deletion) 액션이 새로 추가됩니다.\\\\n\\\\n인증 측면에서 credential 401 쿨다운이 단축(shorten)되고, 파일 락(file-lock) 헬퍼가 중복 제거(dedupe)되며 Nous lock order가 문서화됩니다. 공유 Nous 리프레시 토큰이 동기화(sync)되고, Spotify 로그아웃 시 모델 설정이 리셋되지 않도록 보존합니다.\\\\n\\\\nDocker에서 공식 이미지의 루트(root) gateway 실행을 거부(refuse)하고, 런타임 node_modules 트리의 소유권을 hermes 사용자로 변경(chown)합니다. 비대화형(non-interactive) 업데이트에서 config 마이그레이션이 정상 동작하도록 하고, CLI 도움말(help epilogue)에 대시보드가 추가되며 Docker CI smoke test가 포함됩니다.\\\\n\\\\nTelegram에서 forum General 토픽의 typing indicator를 위해 thread_id=1을 보존하고, 이미지 문서를 photo 핸들링으로 라우팅합니다. 선택적 스킬(optional-skills)로 Anthropic 금융 서비스(financial-services) 스킬이 번들로 추가됩니다. 이미지 라우팅에서 MIME magic bytes를 sniffing하여 잘못된 suffix를 무시하고, 네이티브 멀티모달 텍스트 파트에 첨부 이미지 경로를 노출합니다. GitHub Copilot에 max_completion_tokens를 사용하고, doctor에서 DashScope China 엔드포인트를 재시도(retry)하며, 비전 라우팅 시 이미지 모달리티를 선호(prefer)합니다. Analytics에서 Claude 4.5–4.7 가격이 추가되고 silent token loss를 방지합니다.\\\\n\\\\nTUI에서 final_response가 비었을 때 백엔드 에러를 가시적인 텍스트로 표시(surface)하고, 메인 화면 스크롤백 리셋 루프를 방지합니다. Weixin에서 aiohttp ClientTimeout을 asyncio.wait_for()로 교체하고, 복사하기 어려운 긴 줄을 래핑(wrap)합니다. Windows에서 터미널 drain과 CWD 경로 변환을 지원하고, Matrix에서 리액션 정리(cleanup) redaction을 지연(defer)합니다. Gateway에서 Docker 백엔드용 인바운드 문서 호스트 경로를 컨테이너 경로로 변환하고, web에서 docs iframe에 light color-scheme을 강제합니다 (main branch).",
    commits: [
      {
        sha: "7e2af0c",
        message: "feat(acp): pass image file attachments through as image_url parts",
        href: "https://github.com/NousResearch/hermes-agent/commit/7e2af0c2e8727b3b01b974cb9bf8f0886ee00aac",
      },
      {
        sha: "733e297",
        message: "fix(acp): inline file attachment resources",
        href: "https://github.com/NousResearch/hermes-agent/commit/733e297b8a5c7ab277db331672c206134587ffa7",
      },
      {
        sha: "812ce0b",
        message: "fix(run_agent): break permanent empty-response loop from orphan tool-tail (#21385)",
        href: "https://github.com/NousResearch/hermes-agent/commit/812ce0b9878d1dc9ac1f7c419a620deeb57117f3",
      },
      {
        sha: "2021c18",
        message: "fix(agent): drop terminal empty-response sentinels",
        href: "https://github.com/NousResearch/hermes-agent/commit/2021c186551c406be1158ec394cd6f7f3f0f9be0",
      },
      {
        sha: "e735089",
        message: "fix(agent): avoid persisting empty-response recovery scaffolding",
        href: "https://github.com/NousResearch/hermes-agent/commit/e73508979f23d220eae5c378d714b150b8748580",
      },
      {
        sha: "d12be46",
        message: "fix(skills): lock usage telemetry updates",
        href: "https://github.com/NousResearch/hermes-agent/commit/d12be46df8753931c21946fc0b0caccb83ff2209",
      },
      {
        sha: "9076a2e",
        message: "fix(agent): keep Nous GPT-5 fallback on chat completions",
        href: "https://github.com/NousResearch/hermes-agent/commit/9076a2e74ef0a3d862312e205e03a693ba6dbad6",
      },
      {
        sha: "fad684b",
        message: "feat(gateway): auto-resume interrupted sessions after restart",
        href: "https://github.com/NousResearch/hermes-agent/commit/fad684b1f35baa20b2b01556e50bec24ce6ffccd",
      },
      {
        sha: "38b1c7d",
        message: "refactor(gateway): simplify auto-resume + extend to crash recovery",
        href: "https://github.com/NousResearch/hermes-agent/commit/38b1c7dce558f7ad1077b89e1efd3217bf8d6c69",
      },
      {
        sha: "961a353",
        message: "fix(gateway): preserve resume marker on interrupted restart",
        href: "https://github.com/NousResearch/hermes-agent/commit/961a3535fa375c630562f3e16f8051959d34fb20",
      },
      {
        sha: "1d2029b",
        message: "fix(update): reset-failed before every fallback restart so the gateway can't get stranded (#21371)",
        href: "https://github.com/NousResearch/hermes-agent/commit/1d2029b2b7cd2cf21a15ad54df05c68268b48998",
      },
      {
        sha: "8a96fa4",
        message: "fix(gateway): avoid duplicated responses history",
        href: "https://github.com/NousResearch/hermes-agent/commit/8a96fa48c10d7c06db07b70d53b2b489e9add2a3",
      },
      {
        sha: "bf843ad",
        message: "feat(gateway): opt-in cleanup of temporary progress bubbles (#21186)",
        href: "https://github.com/NousResearch/hermes-agent/commit/bf843adf05b84f42930a5d1e76e2bc4c20a84645",
      },
      {
        sha: "2e00bca",
        message: "fix(oauth,gateway): monotonic deadlines for polling/timeout loops",
        href: "https://github.com/NousResearch/hermes-agent/commit/2e00bcaaab091679072ae765fe9f316196e43fab",
      },
      {
        sha: "6e8f1e0",
        message: "fix(gateway): use monotonic deadlines in QR onboarding flows",
        href: "https://github.com/NousResearch/hermes-agent/commit/6e8f1e09a995782581e6e8015b40f592d0392ed2",
      },
      {
        sha: "fb1ce79",
        message: "feat(security): enable secret redaction by default (#17691, #20785) (#21193)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fb1ce793e6ad4751c4fa5b53bab217bc04a9d28b",
      },
      {
        sha: "042eb93",
        message: "fix(security): close TOCTOU window in hermes_cli/auth.py credential writers (#21194)",
        href: "https://github.com/NousResearch/hermes-agent/commit/042eb930e212da477bf1bb03fbd9d5d1f1e82ef4",
      },
      {
        sha: "7d36e83",
        message: "fix(security): close TOCTOU window when saving MCP OAuth credentials",
        href: "https://github.com/NousResearch/hermes-agent/commit/7d36e8346bbecec59085e7a37a6bf08d8eb45ad4",
      },
      {
        sha: "ef1e565",
        message: "fix(discord): scope DISCORD_ALLOWED_ROLES to originating guild (CVSS 8.1)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ef1e565570a056081cf91576ab4ac7f3a72d3b58",
      },
      {
        sha: "80717a1",
        message: "fix(discord): route DM role-auth opt-in through config.yaml (not env var)",
        href: "https://github.com/NousResearch/hermes-agent/commit/80717a157f9cc7d747b0a3229346ec4f26d0c393",
      },
      {
        sha: "5c045b8",
        message: "fix(discord): extend role-scope fix to slash surface + fixture update",
        href: "https://github.com/NousResearch/hermes-agent/commit/5c045b8f6ca5d6ca682ea9a7e56bad68fe0d6143",
      },
      {
        sha: "8b32a9d",
        message: "feat: add Discord message deletion action",
        href: "https://github.com/NousResearch/hermes-agent/commit/8b32a9d0f1705a126d838e2ecac173de7960b87a",
      },
      {
        sha: "4876959",
        message: "fix(auth): shorten credential 401 cooldown",
        href: "https://github.com/NousResearch/hermes-agent/commit/4876959a1957bb3a2340499072089ddb5a73b0bb",
      },
      {
        sha: "429e785",
        message: "refactor(auth): dedupe file-lock helper; document Nous lock order",
        href: "https://github.com/NousResearch/hermes-agent/commit/429e78589b63247969f7ca88311a1291285a2a46",
      },
      {
        sha: "a84e56d",
        message: "fix(auth): sync shared Nous refresh tokens",
        href: "https://github.com/NousResearch/hermes-agent/commit/a84e56d4c662770798584a79d34260fb86c6600d",
      },
      {
        sha: "8dcdc3c",
        message: "fix(auth): keep Spotify logout from resetting model config",
        href: "https://github.com/NousResearch/hermes-agent/commit/8dcdc3cbc299d09d868556d3ed526b518c9e292c",
      },
      {
        sha: "84287b0",
        message: "fix(docker): refuse root gateway runs in official image",
        href: "https://github.com/NousResearch/hermes-agent/commit/84287b0de8dd5d2566d8dccffb6ed3f1fdfb5ec0",
      },
      {
        sha: "498c014",
        message: "fix(docker): chown runtime node_modules trees to hermes user (#18800)",
        href: "https://github.com/NousResearch/hermes-agent/commit/498c01406fce45c0f64b3474bbbc210bc3dafed7",
      },
      {
        sha: "9442a8f",
        message: "fix(update): migrate config in non-interactive updates",
        href: "https://github.com/NousResearch/hermes-agent/commit/9442a8fa22e58edeeb0dbff9dcea9a6727b84b18",
      },
      {
        sha: "2f2f654",
        message: "fix: add dashboard to CLI help epilogue and Docker CI smoke test",
        href: "https://github.com/NousResearch/hermes-agent/commit/2f2f654486f95e74d9a6d63670e01df324bcf590",
      },
      {
        sha: "2564132",
        message: "fix(telegram): preserve thread_id=1 for forum General typing indicator (#21390)",
        href: "https://github.com/NousResearch/hermes-agent/commit/2564132a1f6c4cc5c452b74d07364ee086f985e3",
      },
      {
        sha: "bd0c54d",
        message: "fix: route Telegram image documents through photo handling",
        href: "https://github.com/NousResearch/hermes-agent/commit/bd0c54d171efb8a31644df570b3b6a95826e8731",
      },
      {
        sha: "fce58cb",
        message: "feat(optional-skills): port Anthropic financial-services skills as optional finance bundle (#21180)",
        href: "https://github.com/NousResearch/hermes-agent/commit/fce58cbe2e02728377935e5e329f34b61474c1de",
      },
      {
        sha: "5cf7032",
        message: "fix(image-routing): sniff magic bytes for image MIME, ignore misleading suffix",
        href: "https://github.com/NousResearch/hermes-agent/commit/5cf703245bbce4b8cb34fbfb42571bfa50c4c00e",
      },
      {
        sha: "11b9b14",
        message: "fix(image-routing): expose attached image paths in native multimodal text part",
        href: "https://github.com/NousResearch/hermes-agent/commit/11b9b146f111e45c9349c622c7a65ea3e7629518",
      },
      {
        sha: "f648c2e",
        message: "fix: use max_completion_tokens for GitHub Copilot",
        href: "https://github.com/NousResearch/hermes-agent/commit/f648c2e3aaf6b83220302670c1529a6bef3a63d4",
      },
      {
        sha: "5ead126",
        message: "fix(doctor): retry DashScope China endpoint",
        href: "https://github.com/NousResearch/hermes-agent/commit/5ead126709a7b22113f3949d4095391169c3f62c",
      },
      {
        sha: "14f3882",
        message: "fix(models): prefer image modalities for vision routing",
        href: "https://github.com/NousResearch/hermes-agent/commit/14f38822fa56a740899afa1d0b1f2df8c90cb422",
      },
      {
        sha: "a494a61",
        message: "fix(tui): avoid main-screen scrollback reset loops",
        href: "https://github.com/NousResearch/hermes-agent/commit/a494a614d03e9fbfba51827f040a59faf2f5a62b",
      },
      {
        sha: "6e46f99",
        message: "fix(tui): surface backend error as visible text when final_response is empty (#21245)",
        href: "https://github.com/NousResearch/hermes-agent/commit/6e46f99e7e8e4d5c843cd33afcb6547c2f54b54b",
      },
      {
        sha: "3a0d52d",
        message: "fix(weixin): replace all aiohttp ClientTimeout with asyncio.wait_for()",
        href: "https://github.com/NousResearch/hermes-agent/commit/3a0d52d57992249cdc06e6469a94d9dead13bea3",
      },
      {
        sha: "7244a1f",
        message: "fix(weixin): wrap long copy-unfriendly lines",
        href: "https://github.com/NousResearch/hermes-agent/commit/7244a1f0d3c17631661fbf103440a3790ab0bab9",
      },
      {
        sha: "c2d6b38",
        message: "fix(windows): terminal drain and cwd path conversion for native Windows",
        href: "https://github.com/NousResearch/hermes-agent/commit/c2d6b385f19d812ca9e98d4746234fcb94beb11f",
      },
      {
        sha: "31f2289",
        message: "fix(matrix): defer reaction cleanup redactions",
        href: "https://github.com/NousResearch/hermes-agent/commit/31f22890eaf15fe6fb027a8335335e98ad7e8242",
      },
      {
        sha: "a5c9c83",
        message: "fix(web): force light color-scheme on docs iframe",
        href: "https://github.com/NousResearch/hermes-agent/commit/a5c9c83b7861c4ca5529e8a327b93e0d50fcc667",
      },
      {
        sha: "7c0766e",
        message: "fix(gateway): translate inbound document host paths to container paths for Docker backend",
        href: "https://github.com/NousResearch/hermes-agent/commit/7c0766e06ad87fee014499e42f28c9393e7665e4",
      }
    ],
  },
  {

    date: "2026-05-05 ~ 2026-05-07",
    title: "Agent 안정성 / Gateway / State / Memory / Config / Auth / Security: Installer UV_NO_CONFIG·Termux doctor·설치 프로필·네트워크 전제조건·Update 의존성 heartbeat, Cron MCP 초기화·프롬프트 스캔, Webhook INSECURE_NO_AUTH 루프백 검사·비로컬호스트 차단, Gateway 플러그인 훅(env enablement·cron delivery)·IRC·Teams 마이그레이션, pairing approve_code 잠금, 테스트 asyncio DeprecationWarning 회피, Gateway 재시작 안정화·[[as_document]] 디렉티브·LRU eviction·list 명령어, chat 앱 허용 채널 화이트리스트(Telegram·Mattermost·Matrix·DingTalk·Slack)·WhatsApp 낯선 사람 차단·긴 메시지 분할, Gateway goal turn budget·runtime-status 통합·부트스트랩 실패 표면화·에이전트 태스크 실패 로깅, model max tokens 존중·compressor 요약 프롬프트 완화·delegate composite toolsets 확장, Codex 스키마 조합자 제거·memory dead schema 정리·auxiliary Codex 스트림 타임아웃, memory schema 검증·OpenViking 업로드·인증, credential pool 키 충돌 해결, checkpoints v2 단일 저장소, anthropic context beta 회피, WhatsApp 프로세스 누수 해결, Profiles --no-skills 플래그, SRI 무결성 검증·Teams 승인 버튼 allowlist, Gateway auth 폴백 모델 사용 등",
    category: "Agent 안정성 / Gateway / State",
    summary:
      "Installer에서 sudo -u 실행 시 발생하는 permission denied를 방지하기 위해 UV_NO_CONFIG=1을 설정합니다. Termux에서 차단된 extras에 대한 doctor 폴백 안내를 추가하고, termux-all 설치 프로필과 안전한 폴백을 제공하며, 네트워크 전제조건을 강화합니다. Update 중 의존성 설치에 heartbeat을 추가하여 진행 상황을 표시합니다. Cron 작업에서 AIAgent 생성 전 MCP 서버를 먼저 초기화하고, 스킬 콘텐츠를 포함한 조립된 프롬프트를 스캔합니다. Gateway에 env enablement와 cron delivery를 위한 제네릭 플러그인 훅이 추가되고, IRC·Teams 플랫폼이 새로운 훅으로 마이그레이션됩니다. Webhook에서 INSECURE_NO_AUTH 루프백 검사를 확장하고 비로컬호스트 바인딩을 차단합니다. pairing에서 generate_code뿐 아니라 approve_code에도 잠금(lockout)을 적용합니다. 테스트에서 asyncio DeprecationWarning을 회피합니다.\\n\\nGateway에서 systemd 재시작 후 준비 완료까지 대기하고, 재시작 전 알림도 게이팅(gate)하며 플랫폼별 알림 플래그를 지원합니다. Gateway에 `hermes gateway list` 명령어가 추가되어 모든 프로필의 게이트웨이 상태를 확인할 수 있습니다. Gateway에 `[[as_document]]` 디렉티브가 추가되어 스킬 미디어 라우팅을 지원하고, 캐시된 세션 소스를 LRU eviction으로 제한하며 스레드 라우팅을 보존합니다. env reload 후에도 max turns가 보존되도록 수정합니다. checkpoints가 v2 단일 저장소(single-store)로 재작성되어 실제 프루닝(pruning)과 디스크 가드레일(disk guardrails)을 갖추었습니다. lazy session creation regression(#18370 fallout)을 해결합니다. memory에서 action별 필수 schema fields를 검증하고, OpenViking 로컬 리소스 업로드를 지원·보강(harden)하며 Bearer 인증 헤더를 추가합니다. credential_pool에서 커스텀 프로바이더가 base_url을 공유할 때 발생하는 키 충돌을 해결합니다. model_tools에서 플러그인 훅 예외를 무시하지 않고 로깅합니다. model picker에서 커스텀 프로바이더의 실시간 모델 디스커버리를 지원합니다. bedrock에서 reasoningContent가 converse 정규화 과정에서 보존되도록 수정합니다. 지원되지 않는 anthropic context beta를 기본적으로 회피합니다. WhatsApp 브릿지의 프로세스 누수를 해결하고 config 비대칭을 수정합니다. install.sh에서 uv exclude-newer 제한을 제거합니다. 프로바이더가 프로필별 auth.json을 찾지 못할 때 전역(global-root) auth.json으로 폴백합니다. salvage batch에서 compaction guidance, memory authority, cache eviction after compression이 개선됩니다. Hindsight에서 update_mode='append' 지원 여부를 probe하고 프로세스 간 dedupe를 수행합니다. API Server에서 SSE token batching과 Open WebUI 성능 개선을 위한 오류 처리가 추가됩니다. ACP에서 session persistence 시 assistant reasoning metadata를 보존하고 SessionDB.replace_messages로 atomic history rewrite를 수행합니다. run_agent에서 compression context length 조회 시 aux provider를 사용합니다. Gateway에서 kanban worker lifecycle을 run id 기준으로 보호(guard)하고, kanban.max_spawn config를 존중하여 동시 작업 수를 제한합니다. helpers의 thread eviction을 결정적(deterministic)으로 만들고, 세션 JSONL transcript append를 기존 락 아래에서 직렬화합니다. Gateway에서 재시작 간 pending update prompts를 보존하고, model picker current context도 보존합니다. chat 앱에 allowed_{chats,channels,rooms} 화이트리스트가 Telegram, Mattermost, Matrix, DingTalk, Slack에 추가되고, WhatsApp에서 낯선 사람을 기본 거부하며 self-chat에 응답하지 않고, 긴 메시지 분할을 수정합니다. Gateway에서 설정된 goal turn budget을 존중하고, runtime-status 통합 및 실패 로그 rate-limit을 개선하며, 부트스트랩 실패를 stderr로 표면화하고, 에이전트 태스크 실패를 로깅하여 사용량 데이터 손실을 방지합니다. Agent에서 설정된 model max tokens를 존중하고, compressor 요약 프롬프트를 콘텐츠 필터에 맞게 완화하며, delegate_task에서 composite toolsets를 확장합니다. Codex에 적대적인 최상위 스키마 조합자를 제거하고, memory dead schema를 소스에서 정리하며, auxiliary Codex Responses 스트림 타임아웃을 강제합니다. 보안 측면에서 대시보드 플러그인 스크립트의 SRI 무결성 검증을 지원하고, Teams 승인 버튼에 명시적 allowlist 또는 TEAMS_ALLOW_ALL_USERS opt-in을 요구합니다. Gateway 인증 폴백에 설정된 모델을 사용합니다 (main branch).",
    commits: [
      {
        sha: "c80fa72",
        message: "fix(installer): set UV_NO_CONFIG=1 to avoid permission denied under sudo -u",
        href: "https://github.com/NousResearch/hermes-agent/commit/c80fa728bd847885e175a3f4e2b8490cd0bb90fc",
      },
      {
        sha: "732a6c4",
        message: "feat: add termux doctor fallback guidance for blocked extras",
        href: "https://github.com/NousResearch/hermes-agent/commit/732a6c45fa66ba38f93a5469724a4b0ee4a5d697",
      },
      {
        sha: "dc5ef1a",
        message: "fix: add termux-all install profile and safe fallbacks",
        href: "https://github.com/NousResearch/hermes-agent/commit/dc5ef1ac8ed9927bdf8e64749faa6b064f5c789e",
      },
      {
        sha: "da18fd0",
        message: "fix: strengthen termux install network prerequisites",
        href: "https://github.com/NousResearch/hermes-agent/commit/da18fd084a0b7ac47883ad9b6f50ad511bf4d251",
      },
      {
        sha: "54c0b10",
        message: "fix(update): add heartbeat during dependency install",
        href: "https://github.com/NousResearch/hermes-agent/commit/54c0b10d14b394406494ad6d99b6888182bbf8c5",
      },
      {
        sha: "0491834",
        message: "fix(cron): initialize MCP servers before constructing the cron AIAgent (#21354)",
        href: "https://github.com/NousResearch/hermes-agent/commit/04918345ea31b1106d2ee6d4f42822f4f57616ee",
      },
      {
        sha: "a1fe5f4",
        message: "fix(cron): scan assembled prompt including skill content (#3968) (#21350)",
        href: "https://github.com/NousResearch/hermes-agent/commit/a1fe5f473d4d381a4452dcaf4dd2bbc77c19de0b",
      },
      {
        sha: "af9336d",
        message: "feat(gateway): generic plugin hooks for env enablement + cron delivery",
        href: "https://github.com/NousResearch/hermes-agent/commit/af9336d575ef680b49cf56f9ef6031968e6f5ce1",
      },
      {
        sha: "be87a96",
        message: "refactor(plugins/platforms): migrate IRC + Teams to new env_enablement + cron_deliver hooks",
        href: "https://github.com/NousResearch/hermes-agent/commit/be87a96296175a68ecbe221723673a7d4c4add45",
      },
      {
        sha: "898b6d7",
        message: "fix(webhook): widen INSECURE_NO_AUTH loopback check + tests + docs",
        href: "https://github.com/NousResearch/hermes-agent/commit/898b6d7d55bd1c340ebe7fe3cf91f86bc43d1a81",
      },
      {
        sha: "fb4f953",
        message: "fix: block INSECURE_NO_AUTH on non-localhost webhook bindings",
        href: "https://github.com/NousResearch/hermes-agent/commit/fb4f95356945e2ddaf0fe9e04541455ff92f1e3f",
      },
      {
        sha: "145e8ec",
        message: "fix(pairing): enforce lockout on approve_code, not just generate_code (#10195) (#21325)",
        href: "https://github.com/NousResearch/hermes-agent/commit/145e8ec2372bbfe70783d10bee10e76fa29744df",
      },
      {
        sha: "d5fcc83",
        message: "fix(tests): avoid asyncio DeprecationWarning in event loop fixture on 3.12+",
        href: "https://github.com/NousResearch/hermes-agent/commit/d5fcc8392212f7e67d7aa43d233f1157823f32ba",
      },
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
    title: "Kanban / Multi-agent: 대시보드 툴팁·문서 링크, `specify` 보조 LLM triage 구체화, 대시보드 보드 테넌트 필터링·태스크별 max_retries 재정의, 인라인 생성 multiline textarea·Enter 제출·Shift+Enter 개행·테마 면역 code/pre 스타일링, 대시보드 보드 핀 권한 강화·이벤트 스트림 취소 정상 처리·미완료 워커 자동 차단, orchestrator·worker 스킬 설정 가이드, dependency selects, task_runs.summary 표시, runtime 측정, created_cards 연결, failure counter 통합 등",
    category: "Kanban / Multi-agent",
    summary:
      "Kanban 대시보드에 툴팁(tooltips)과 문서 링크(docs link)가 추가되어 보드 사용성을 개선합니다. Kanban에 `specify` 기능이 추가되어 보조 LLM이 triage 태스크를 구체화(flesh out)합니다. 대시보드 보드가 선택된 테넌트(selected tenant)로 필터링되고, 태스크별 max_retries 재정의(override)가 추가됩니다. 대시보드 보드 핀(dashboard board pin)이 서버 current file보다 우선(authoritative)하도록 하여 설정 충돌을 방지합니다. 대시보드 이벤트 스트림 취소(CancelledError)를 정상 종료(normal shutdown)로 처리하여 불필요한 오류를 제거합니다. 작업을 완료하지 않고 종료된 워커를 자동 차단(auto-block)합니다. orchestrator와 worker의 스킬 설정 가이드의 잘못된 부분을 수정합니다. dependency selects를 연결(wire)하고, 대시보드 카드와 `kanban show` 명령어에 task_runs.summary를 표시합니다. 부모 작업이 완료되지 않은 상태에서 자식 작업이 디스패치되는 것을 방지하고, 작업의 max runtime을 current run 기준으로 측정합니다. 완료되는 태스크에 연결된 created_cards를 자식으로 수락(accept)합니다. spawn/timeout/crash 전반에서 failure counter를 통합하여 일관된 실패 추적을 제공합니다. doctor 명령어에서 Kanban worker tools를 runtime-gated로 보고하며, fragile한 failure-column rename을 방지합니다. 인라인 생성(inline-create) 타이틀 입력이 multiline textarea로 전환되고, Enter=submit·Shift+Enter=newline 동작이 복원됩니다. 보드 내 code/pre 스타일링이 모든 테마에서 면역(theme-immune) 처리됩니다 (main branch).",
    commits: [
      {
        sha: "7d66d30",
        message: "feat(kanban): add tooltips and docs link across dashboard (#21541)",
        href: "https://github.com/NousResearch/hermes-agent/commit/7d66d30d774e87b49cbe48af20c9904c9befb97e",
      },
      {
        sha: "24d48ff",
        message: "feat(kanban): add `specify` — auxiliary LLM fleshes out triage tasks (#21435)",
        href: "https://github.com/NousResearch/hermes-agent/commit/24d48ffb8294d6f13f0a6660dfff376d886d0466",
      },
      {
        sha: "411cfa2",
        message: "fix: auto-block repeated kanban retries",
        href: "https://github.com/NousResearch/hermes-agent/commit/411cfa26e31daf198355f5007229483fc92a6eb6",
      },
      {
        sha: "b49a3f8",
        message: "fix(kanban): reap completed worker children in dispatch_once",
        href: "https://github.com/NousResearch/hermes-agent/commit/b49a3f84749926066511fa32571b6201026e7c0d",
      },
      {
        sha: "06f2435",
        message: "fix(kanban): stop reclaimed workers before retry",
        href: "https://github.com/NousResearch/hermes-agent/commit/06f24351c57666e5a15de8ed7b8743b694b5a809",
      },
      {
        sha: "40b51c9",
        message: "fix(kanban): heartbeat tool extends claim TTL, not just last_heartbeat_at",
        href: "https://github.com/NousResearch/hermes-agent/commit/40b51c93a2d9bce63d656ccb3751e624711e6e3c",
      },
      {
        sha: "162ad3d",
        message: "fix(kanban): filter dashboard board by selected tenant",
        href: "https://github.com/NousResearch/hermes-agent/commit/162ad3dd1624e64472a2961440c688e80b96409d",
      },
      {
        sha: "f4de381",
        message: "test(kanban): cover dashboard select filter wiring",
        href: "https://github.com/NousResearch/hermes-agent/commit/f4de3810efa640c1d2dfe9c190dd182cef37e95d",
      },
      {
        sha: "ac51c4c",
        message: "feat(kanban): per-task max_retries override (#20263 follow-up, supersedes #20972) (#21330)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ac51c4c1ad09a98c8c25d0b05009b3f387fd183d",
      },
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
    title: "Tools / MCP / Plugins: MCP 유틸리티 스텁 게이트·숫자 인자 방어적 변환·이미지 결과 MEDIA 태그 표시·SSE OAuth 전달, QQBot 인라인 키보드 승인·청크 업로드·첨부파일 처리, Google Chat 번들 플러그인, transform_llm_output 훅, Curator list-archived·manual run 동기화, SSE 트랜스포트·OAuth 메타데이터 영속화·argparse 충돌 해결·예외 타입 포함·pipe 전송 재시도·CancelledError 재전파",
    category: "Tools / MCP / Plugins",
    summary:
      "MCP에서 서버가 광고(advertise)한 기능(capabilities)을 기준으로 유틸리티 스텁을 게이트(gate)하고, 숫자 툴 인자를 방어적으로 변환(coerce)합니다. MCP 이미지 툴 결과를 드롭하지 않고 MEDIA 태그로 표시(surface)하며, SSE 트랜스포트에서 OAuth 인증을 전달(forward)하고 sse_read_timeout을 증가시킵니다. QQBot 플랫폼에서 네이티브 툴 승인 UX를 인라인 키보드로 연결(wire)하고, 청크 업로드(chunked upload)에 구조화된 에러 타입을 추가하며, 인용(quote) 메시지의 첨부파일을 처리하고 인라인 키보드 승인과 프롬프트를 업데이트합니다. Google Chat 플랫폼 어댑터가 번들 플러그인으로 추가됩니다.\n\nMCP 클라이언트에 SSE 트랜스포트 지원이 추가되어 서버와의 통신 옵션이 확장됩니다. MCP OAuth 서버 메타데이터를 프로세스 재시작 간에도 유지(persist)하도록 수정하여 재인증 부담을 줄입니다. `mcp add --command`의 argparse dest 충돌을 해결하여 명령줄 등록이 정상 동작하도록 합니다. LLM 출력을 변환(transform)할 수 있는 `transform_llm_output` 플러그인 훅이 새로 추가되고 관련 테스트와 문서가 보강됩니다. Curator에서 아카이브된 항목을 조회할 수 있는 `hermes curator list-archived` 명령어가 추가되고, 수동 실행(manual run)이 동기식(synchronous)으로 기본 전환되며 관련 CLI 문서가 업데이트됩니다. MCP 서버 태스크에서 CancelledError를 명시적으로 재전파(re-raise)하고, str(exc)가 빈 경우 예외 타입을 에러 메시지에 포함시킵니다. MCP pipe 전송 실패 시 재시도(retry)하며, MCP 호출 에러에 설정된 타임아웃을 보고합니다. MCP 디스커버리 전에 stale 스레드 인터럽트를 정리합니다 (main branch).",
    commits: [
      {
        sha: "292f468",
        message: "fix(mcp): unwrap platforms key in channels_list",
        href: "https://github.com/NousResearch/hermes-agent/commit/292f4683667eb0bdf529db8f82bf26b526a47da5",
      },
      {
        sha: "74c9c0e",
        message: "fix(mcp): gate utility stubs on server-advertised capabilities (#21347)",
        href: "https://github.com/NousResearch/hermes-agent/commit/74c9c0eec903749443e4aa9ad1427d1859acae2c",
      },
      {
        sha: "62c2f5d",
        message: "fix(mcp): coerce numeric tool args defensively",
        href: "https://github.com/NousResearch/hermes-agent/commit/62c2f5d8d2a6a21adfdea2d8d1f28fd8f04b5dd7",
      },
      {
        sha: "c8e3e39",
        message: "fix(mcp): surface image tool results as MEDIA tags instead of dropping them (#21328)",
        href: "https://github.com/NousResearch/hermes-agent/commit/c8e3e3918509d4c43432ec2cf19ef6a1cfe9cd9c",
      },
      {
        sha: "dd2dc2b",
        message: "fix(mcp): forward OAuth auth and bump sse_read_timeout on SSE transport (#21323)",
        href: "https://github.com/NousResearch/hermes-agent/commit/dd2dc2bddf43d72e24e61fd306206c696298df47",
      },
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
    date: "2026-05-06 ~ 2026-05-07",
    title: "Models / i18n / Provider / Web / Integrations: Brave Search·DDGS 검색 프로바이더, QQBot 인라인 키보드·첨부파일·청크 업로드, Google Chat 번들 플랫폼, tencent/hy3-preview·alibaba-coding-plan·grok-4.3·deepseek-v4-pro·Arcee Trinity Large Thinking 모델, Z.AI 비전 호환성·image_gen.model config, 프랑스어·터키어·우크라이나어 로케일, SearXNG 네이티브 검색 백엔드·searxng-search 스킬, opencode-go hijack 방지, Feishu 토픽 스레드 응답, Linear·shop-app 스킬",
    category: "Models / i18n / Provider / Web / Integrations",
    summary:
      "QQBot 플랫폼에서 네이티브 툴 승인 UX를 인라인 키보드로 연결하고, 인용 메시지의 첨부파일을 처리하며, 인라인 키보드 승인과 프롬프트를 업데이트하고, 구조화된 에러 타입과 함께 청크 업로드를 추가합니다. Google Chat 플랫폼 어댑터가 번들 플러그인으로 추가됩니다.\n\nOpenRouter 및 Nous Portal 큐레이션 목록에 x-ai/grok-4.3과 deepseek/deepseek-v4-pro 모델이 추가되었습니다. Arcee Trinity Large Thinking 모델에 temperature 및 compression 오버라이드가 적용됩니다. 프랑스어(fr), 터키어(tr), 우크라이나어(uk) 로케일 지원이 추가되며, config·tests·docs 전반에 걸쳐 참조가 보강되었습니다. 웹 검색에 Brave Search(무료 티어)와 DDGS를 새로운 검색 프로바이더로 추가합니다. SearXNG를 네이티브 검색 전용 백엔드로 추가하고, per-capability 백엔드 선택 리팩터링과 함께 동작합니다. searxng-search 선택적(opt-in) 스킬과 문서가 추가되었으며, SearXNG 설정 가이드를 포함한 웹 검색·추출(Web Search + Extract) 기능 페이지가 문서화되었습니다. opencode-go 사용자가 네이티브 프로바이더로 hijack되지 않도록 수정하여 opencode-go backend를 그대로 유지합니다. /model 명령어의 커스텀 별칭(alias) 문서화도 함께 진행되었습니다. Feishu에서 토픽 응답이 스레드 내에 유지되도록 수정합니다. Linear 스킬에 Documents 지원 및 Python 헬퍼 스크립트가 추가되었습니다. 선택적(opt-in) 스킬로 shop-app 개인 쇼핑 어시스턴트가 추가되었습니다. OpenRouter에 tencent/hy3-preview 유료 라우트와 alibaba-coding-plan 모델이 큐레이션 목록에 추가됩니다. Z.AI 비전 모델 호환성을 위해 엔드포인트 라우팅과 max_tokens 처리가 수정됩니다. image-gen에서 config.yaml의 image_gen.model을 플러그인 디스패치에 반영합니다 (main branch).",
    commits: [
      {
        sha: "d87c7b9",
        message: "fix(analytics): prevent silent token loss and add Claude 4.5–4.7 pricing (#21455)",
        href: "https://github.com/NousResearch/hermes-agent/commit/d87c7b99e2a4c86b06368e5c3abf973a0f40f753",
      },
      {
        sha: "04193cf",
        message: "feat(web): add Brave Search (free tier) and DDGS search providers",
        href: "https://github.com/NousResearch/hermes-agent/commit/04193cf71c2c208b747870f845c7c2539d50455f",
      },
      {
        sha: "cdc0a47",
        message: "test(hermes_constants): cover parse_reasoning_effort()",
        href: "https://github.com/NousResearch/hermes-agent/commit/cdc0a47dd58321ef6fdc434908980a7a326b1813",
      },
      {
        sha: "4de3ef3",
        message: "feat(qqbot): wire native tool-approval UX via inline keyboards",
        href: "https://github.com/NousResearch/hermes-agent/commit/4de3ef38b1f0d2f8ae0e86f83455d7ff61795b2e",
      },
      {
        sha: "5b121c6",
        message: "feat(qqbot): process attachments in quoted (reply) messages",
        href: "https://github.com/NousResearch/hermes-agent/commit/5b121c6e358a4eb83ee3cb1ec2cfd1b8cae3c7b7",
      },
      {
        sha: "de584cd",
        message: "feat(qqbot): add inline-keyboard approvals and update prompts",
        href: "https://github.com/NousResearch/hermes-agent/commit/de584cd1dd4ed82a335a9dcd367406316c9923e0",
      },
      {
        sha: "9feaeb6",
        message: "feat(qqbot): add chunked upload with structured error types",
        href: "https://github.com/NousResearch/hermes-agent/commit/9feaeb632bd6d787ac3b1f555f0d057e9be0b448",
      },
      {
        sha: "44cd79e",
        message: "feat(plugins/google_chat): Google Chat platform adapter as a bundled plugin",
        href: "https://github.com/NousResearch/hermes-agent/commit/44cd79e798e4aed6ee316f02e595b33cde7687a0",
      },
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
    title: "Docs: 플랫폼 env_enablement_fn·cron_deliver_env_var 훅 문서화, README .venv 선호 안내, 중국어 README·zh-Hans 가이드, Ollama 로컬 실행, VS Code ACP 연동, WSL Chrome MCP 브릿지·WSL2 심화 가이드, 플러그인 서페이스·이미지 생성 프로바이더·스킬 퍼블리싱 가이드, Tool Gateway 마케팅 페이지 재작성, CONTRIBUTING 도구 정비·API 서버 툴 지역성 명시·README 정정 등",
    category: "Docs",
    summary:
      "Aux 모델 열거형에 triage_specifier를 등록하는 문서가 추가되었습니다. 플랫폼 개발자를 위한 env_enablement_fn과 cron_deliver_env_var 훅 문서가 추가되었습니다. README에서 .venv 사용을 AGENTS.md 및 scripts/run_tests.sh와 일치하도록 권장합니다.\n\nCONTRIBUTING 문서에서 도구 발견(tool discovery)과 테스트 러너를 AGENTS.md와 일치하도록 정비합니다. API 서버의 툴 실행 지역성(tool execution locality)에 대한 문서 설명을 명확히 합니다. README에서 잘못된 RL install-extras 안내를 제거하고 CONTRIBUTING을 참조하도록 수정합니다. 중국어(zh-CN) README 번역과 zh-Hans Tool Gateway·이미지 생성·Windows WSL 가이드가 추가되어 중국어 사용자 지원이 강화되었습니다. Ollama로 Hermes를 로컬 실행하는 가이드, Open WebUI 부트스트랩 스크립트, VS Code ACP Client 연동 설정 가이드가 추가되었습니다. /model 명령어의 커스텀 모델 별칭(alias) 문서, WSL 환경에서 Windows Chrome MCP 브릿지 구성 가이드가 포함됩니다. WSL2 심화 가이드로 파일시스템·네트워킹·서비스·주의사항을 보강하고, 플러그인 서페이스 커버리지 문서로 모델 프로바이더 가이드·전체 플러그인 맵·opt-in 수정사항을 정리합니다. 이미지 생성 프로바이더 플러그인(image-gen-provider-plugin) 가이드와 스킬 퍼블리싱 안내(skill tap)가 추가되어 플러그인 문서의 공백을 메웁니다. Tool Gateway 문서가 pitch-first 마케팅 페이지로 재작성되었습니다 (main branch).",
    commits: [
      {
        sha: "cff821e",
        message: "docs: register triage_specifier in the aux-models enumerations (#21494)",
        href: "https://github.com/NousResearch/hermes-agent/commit/cff821e2dc03e55e5b036d266ea38a8d39a2b938",
      },
      {
        sha: "5c08b85",
        message: "docs(platforms): document env_enablement_fn + cron_deliver_env_var hooks (#21331)",
        href: "https://github.com/NousResearch/hermes-agent/commit/5c08b851dfcc23508c8e435510d910f09ba8da31",
      },
      {
        sha: "ff09853",
        message: "docs(readme): prefer .venv to match AGENTS.md and scripts/run_tests.sh (#21334)",
        href: "https://github.com/NousResearch/hermes-agent/commit/ff0985323509b587063cfc3aaecf0625490d9a5f",
      },
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
      }
    ],
  },
];
