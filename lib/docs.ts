export interface DocSection {
  title: string;
  slug: string;
  items: DocItem[];
}

export interface DocItem {
  title: string;
  slug: string;
  description?: string;
}

export const docsSections: DocSection[] = [
  {
    title: "시작하기",
    slug: "getting-started",
    items: [
      { title: "소개", slug: "introduction", description: "Hermes Agent가 무엇인지" },
      { title: "설치", slug: "installation", description: "60초 만에 설치하기" },
      { title: "빠른 시작", slug: "quickstart", description: "첫 대화와 핵심 기능" },
    ],
  },
  {
    title: "설정",
    slug: "configuration",
    items: [
      { title: "기본 설정", slug: "basic-config", description: "config.yaml 기본 구조" },
      { title: "모델 & 프로바이더", slug: "models-providers", description: "AI 모델 설정" },
      { title: "환경 변수", slug: "environment-variables", description: "주요 환경 변수" },
    ],
  },
  {
    title: "도구 & 도구셋",
    slug: "tools",
    items: [
      { title: "도구 개요", slug: "overview", description: "68개 내장 도구" },
      { title: "주요 도구", slug: "essential-tools", description: "자주 쓰는 도구들" },
      { title: "도구셋 설정", slug: "toolsets", description: "도구 활성화/비활성화" },
    ],
  },
  {
    title: "스킬 시스템",
    slug: "skills",
    items: [
      { title: "스킬이란?", slug: "what-are-skills", description: "절차적 기억 시스템" },
      { title: "스킬 만들기", slug: "creating-skills", description: "나만의 스킬 만들기" },
      { title: "스킬 공유", slug: "sharing-skills", description: "커뮤니티와 공유하기" },
    ],
  },
  {
    title: "기능",
    slug: "features",
    items: [
      { title: "메모리 시스템", slug: "memory", description: "영구 기억 장치" },
      { title: "성격 & SOUL.md", slug: "personality", description: "에이전트 성격 정의" },
      { title: "보안", slug: "security", description: "명령 승인, 권한 관리" },
    ],
  },
];

export function getAllDocSlugs(): string[] {
  const slugs: string[] = [];
  for (const section of docsSections) {
    for (const item of section.items) {
      slugs.push(item.slug);
    }
  }
  return slugs;
}

export function getDocBySlug(slug: string): DocItem | undefined {
  for (const section of docsSections) {
    const item = section.items.find((i) => i.slug === slug);
    if (item) return item;
  }
  return undefined;
}
