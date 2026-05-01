import type { Metadata } from "next";
import LoungeDiscussions from "@/components/community/LoungeDiscussions";

export const metadata: Metadata = {
  title: "라운지 — Hermes KR",
  description: "Hermes KR 커뮤니티 라운지 — 자유로운 대화, 아이디어, 자랑하기",
};

export default function LoungePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <LoungeDiscussions />
    </div>
  );
}
