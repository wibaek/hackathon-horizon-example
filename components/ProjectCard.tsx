import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"
import type { Hackathon } from "@/data/hackathons"

interface ProjectCardProps {
  project: Project
  hackathon: Hackathon | undefined
}

export default function ProjectCard({ project, hackathon }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-indigo-100">
      <div className="relative h-48">
        <Image
          src={project.thumbnailUrl || "/placeholder.svg?height=400&width=600&query=hackathon project"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold mb-2 flex-grow text-indigo-900">{project.title}</h3>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-700"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>

        <p className="text-indigo-700 mb-4">{project.team}</p>

        {hackathon && (
          <div className="mb-4">
            <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700">
              {hackathon.name}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-indigo-100 rounded-full px-3 py-1 text-xs font-semibold text-indigo-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
