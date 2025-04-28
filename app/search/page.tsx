"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { hackathons } from "@/data/hackathons"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProjectList from "@/components/ProjectList"
import SearchBar from "@/components/SearchBar"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedHackathon, setSelectedHackathon] = useState("")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleHackathonFilter = (hackathonId: string) => {
    setSelectedHackathon(hackathonId)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-indigo-900">프로젝트 검색</h1>

          <div className="mb-8">
            <SearchBar
              onSearch={handleSearch}
              onHackathonFilter={handleHackathonFilter}
              hackathons={hackathons}
              selectedHackathon={selectedHackathon}
            />
          </div>

          <ProjectList
            initialProjects={projects}
            hackathons={hackathons}
            searchQuery={searchQuery}
            hackathonFilter={selectedHackathon}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
