"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Search, X, Loader2 } from "lucide-react";
import SearchResult from "./SearchResult";
import { withBasePath } from "@/lib/site";

type PagefindResult = {
  id: string;
  data: () => Promise<{
    url: string;
    excerpt: string;
    meta: { title: string };
    sub_results?: Array<{
      title: string;
      url: string;
      excerpt: string;
    }>;
  }>;
};

type PagefindSearch = {
  results: PagefindResult[];
};

declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<PagefindSearch>;
      debouncedSearch: (query: string) => Promise<PagefindSearch>;
    };
  }
}

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefindReady, setPagefindReady] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Load Pagefind on mount
  useEffect(() => {
    if (window.pagefind) {
      setPagefindReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = withBasePath("/_pagefind/pagefind.js");
    script.onload = () => setPagefindReady(true);
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = withBasePath("/_pagefind/pagefind-ui.css");
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      if (script.parentNode) document.head.removeChild(script);
      if (link.parentNode) document.head.removeChild(link);
    };
  }, []);

  // Keyboard shortcut: Ctrl/Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Search handler with debounce
  const search = useCallback(
    async (q: string) => {
      setQuery(q);
      if (!q.trim() || !window.pagefind) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const searchResult = await window.pagefind.search(q.trim());
        setResults(searchResult?.results || []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl border border-border bg-background-alt px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
        aria-label="검색 열기"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">검색</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-md border border-border bg-card px-1.5 py-0.5 text-xs text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
        <div
          ref={dialogRef}
          className="w-full max-w-xl rounded-2xl border border-border bg-card shadow-2xl mx-4"
        >
          {/* Input */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => search(e.target.value)}
              placeholder="문서, 업데이트, 팁 검색…"
              className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            {loading && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />}
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-muted-foreground hover:bg-background-alt hover:text-foreground"
              aria-label="닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto px-4">
            {!pagefindReady && (
              <p className="py-8 text-center text-sm text-muted-foreground">검색 엔진 로딩 중…</p>
            )}
            {pagefindReady && query.trim() === "" && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                문서 제목이나 내용을 입력하세요
              </p>
            )}
            {pagefindReady && query.trim() !== "" && !loading && results.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                &ldquo;{query}&rdquo;에 대한 검색 결과가 없습니다
              </p>
            )}
            {results.map((result) => (
              <AsyncSearchResult key={result.id} result={result} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AsyncSearchResult({ result }: { result: PagefindResult }) {
  const [data, setData] = useState<Awaited<ReturnType<PagefindResult["data"]>> | null>(null);

  useEffect(() => {
    result.data().then(setData);
  }, [result]);

  if (!data) {
    return (
      <div className="border-b border-border py-4">
        <div className="h-5 w-3/4 animate-pulse rounded bg-background-alt" />
      </div>
    );
  }

  const cleanUrl = data.url.replace(/\/index\.html$/, "").replace(/\.html$/, "");

  return (
    <SearchResult
      title={data.meta?.title}
      url={cleanUrl || data.url}
      excerpt={data.excerpt}
      subResults={data.sub_results?.map((s) => ({
        ...s,
        url: s.url.replace(/\/index\.html$/, "").replace(/\.html$/, ""),
      }))}
    />
  );
}
