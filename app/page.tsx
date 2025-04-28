import Link from "next/link"
import { Search } from "lucide-react"
import { projects } from "@/data/projects"
import { hackathons } from "@/data/hackathons"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FeatureCards from "@/components/FeatureCards"
import SubscribeForm from "@/components/SubscribeForm"
import Footer from "@/components/Footer"
import ProjectList from "@/components/ProjectList"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-xl">
            <h2 className="text-3xl font-bold text-center mb-2 text-indigo-900">베타 알림 받기</h2>
            <p className="text-center text-indigo-700 mb-8">
              Hackathon Horizon의 베타 출시 소식을 가장 먼저 받아보세요.
            </p>
            <SubscribeForm />
          </div>
        </section>

        <FeatureCards />

        <section className="py-16 px-4 bg-indigo-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-900">최근 프로젝트</h2>
            <ProjectList initialProjects={projects.slice(0, 6)} hackathons={hackathons} />
            <div className="text-center mt-8">
              <Link
                href="/search"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <Search className="mr-2 h-5 w-5" />
                모든 프로젝트 검색하기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
