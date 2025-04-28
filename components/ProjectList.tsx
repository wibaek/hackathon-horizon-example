"use client"

import { useState, useEffect } from "react"
import type { Project } from "@/data/projects"
import type { Hackathon } from "@/data/hackathons"
import ProjectCard from "./ProjectCard"

interface ProjectListProps {
  initialProjects: Project[]
  hackathons: Hackathon[]
  searchQuery?: string
  hackathonFilter?: string
}

export default function ProjectList({
  initialProjects,
  hackathons,
  searchQuery = "",
  hackathonFilter = "",
}: ProjectListProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects)

  // 검색어와 해커톤 필터에 따라 프로젝트 필터링
  useEffect(() => {
    let filtered = initialProjects

    // 검색어 필터링
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) || project.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // 해커톤 필터링
    if (hackathonFilter) {
      filtered = filtered.filter((project) => project.hackathonId === hackathonFilter)
    }

    setFilteredProjects(filtered)
  }, [initialProjects, searchQuery, hackathonFilter])

  // 해커톤 ID로 해커톤 정보 찾기
  const getHackathonById = (hackathonId: string) => {
    return hackathons.find((h) => h.id === hackathonId)
  }

  return (
    <div>
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} hackathon={getHackathonById(project.hackathonId)} />
          ))}
        </div>
      )}
    </div>
  )
}
