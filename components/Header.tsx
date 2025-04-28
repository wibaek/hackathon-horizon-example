"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-indigo-600">
            Hackathon Horizon
          </Link>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/search" className="text-gray-600 hover:text-indigo-600">
              프로젝트 검색
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              프로젝트 등록
            </Link>
          </nav>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <Link
              href="/search"
              className="block text-gray-600 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              프로젝트 검색
            </Link>
            <Link
              href="/register"
              className="block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              프로젝트 등록
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
