"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { siteConfig, withBasePath } from "@/lib/site";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-80 bg-surface-dark/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={withBasePath("/hermes_logo.png")} alt="Hermes KR" className="w-8 h-8" />
          <span className="text-lg font-semibold text-text-primary font-heading">
            Hermes KR
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/docs" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            문서
          </Link>
          <Link href="/community" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            커뮤니티
          </Link>
          <a href={`${siteConfig.repoUrl}/issues`} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Issues ↗
          </a>

          <ThemeToggle />

          <a href={`${siteConfig.repoUrl}/issues/new/choose`} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
              <GithubIcon className="w-4 h-4" />
              참여하기
            </Button>
          </a>
        </nav>

        <button
          className="md:hidden text-text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-80 bg-surface-dark px-4 py-4 flex flex-col gap-4">
          <Link href="/docs" className="text-text-secondary hover:text-text-primary" onClick={() => setMobileOpen(false)}>
            문서
          </Link>
          <Link href="/community" className="text-text-secondary hover:text-text-primary" onClick={() => setMobileOpen(false)}>
            커뮤니티
          </Link>
          <a href={`${siteConfig.repoUrl}/issues`} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary">
            GitHub Issues ↗
          </a>
          
          <div className="flex items-center justify-between pt-2 border-t border-default">
            <span className="text-sm text-text-secondary">테마</span>
            <ThemeToggle />
          </div>

          <a href={`${siteConfig.repoUrl}/issues/new/choose`} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="w-full">
              <GithubIcon className="w-4 h-4" />
              GitHub로 참여하기
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
