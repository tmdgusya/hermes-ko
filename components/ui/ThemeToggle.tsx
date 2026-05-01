"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-[var(--radius-md)] bg-secondary border border-border hover:bg-primary/10 transition-all group"
      aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 text-warning ${
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
        {/* Moon icon */}
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 text-primary ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-secondary border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {theme === "dark" ? "라이트 모드" : "다크 모드"}
      </span>
    </button>
  );
}
