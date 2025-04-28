"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search } from "lucide-react"
import type { Hackathon } from "@/data/hackathons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchBarProps {
  onSearch: (query: string) => void
  onHackathonFilter: (hackathonId: string) => void
  hackathons: Hackathon[]
  selectedHackathon: string
}

export default function SearchBar({ onSearch, onHackathonFilter, hackathons, selectedHackathon }: SearchBarProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [query, setQuery] = useState("")

  // URL 쿼리 파라미터에서 검색어 가져오기
  useEffect(() => {
    const urlQuery = searchParams.get("q")
    if (urlQuery) {
      setQuery(urlQuery)
      onSearch(urlQuery)
    }
  }, [searchParams, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)

    // URL 업데이트
    const params = new URLSearchParams()
    if (query) params.set("q", query)
    if (selectedHackathon) params.set("hackathon", selectedHackathon)

    const newUrl = `/search${params.toString() ? `?${params.toString()}` : ""}`
    router.push(newUrl)
  }

  const handleHackathonChange = (value: string) => {
    onHackathonFilter(value)

    // URL 업데이트
    const params = new URLSearchParams()
    if (query) params.set("q", query)
    if (value) params.set("hackathon", value)

    const newUrl = `/search${params.toString() ? `?${params.toString()}` : ""}`
    router.push(newUrl)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="프로젝트 또는 기술 검색..."
              className="w-full border-indigo-200"
            />
          </div>

          <div className="w-full md:w-64">
            <Select value={selectedHackathon} onValueChange={handleHackathonChange}>
              <SelectTrigger className="border-indigo-200">
                <SelectValue placeholder="모든 해커톤" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">모든 해커톤</SelectItem>
                {hackathons.map((hackathon) => (
                  <SelectItem key={hackathon.id} value={hackathon.id}>
                    {hackathon.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="md:w-auto bg-indigo-600 hover:bg-indigo-700">
            <Search className="h-5 w-5" />
            <span className="ml-2">검색</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
