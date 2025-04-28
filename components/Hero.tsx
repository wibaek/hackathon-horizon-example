"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">
          모든 해커톤 프로젝트 한눈에
        </h1>
        <p className="text-xl text-indigo-700 mb-8 max-w-2xl mx-auto">
          지난 모든 해커톤별 프로젝트에서 아이디어를 얻고, 당신의 결과물을
          남겨보세요.
        </p>

        <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="프로젝트 또는 기술 검색..."
            className="flex-grow px-4 py-3 rounded-l-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition flex items-center"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
