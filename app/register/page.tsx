"use client"

import type React from "react"

import { useState } from "react"
import { hackathons } from "@/data/hackathons"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    hackathonId: "",
    title: "",
    team: "",
    tags: "",
    description: "",
    link: "",
    thumbnailUrl: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, hackathonId: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 콘솔에 출력 (백엔드 연동 대신)
    console.log("프로젝트 등록 데이터:", {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    })

    // 제출 완료 메시지
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("프로젝트가 성공적으로 등록되었습니다! (콘솔에서 확인)")

      // 폼 초기화
      setFormData({
        hackathonId: "",
        title: "",
        team: "",
        tags: "",
        description: "",
        link: "",
        thumbnailUrl: "",
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold mb-8 text-indigo-900">프로젝트 등록</h1>

          {submitMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {submitMessage}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-md border border-indigo-100"
          >
            <div className="space-y-2">
              <Label htmlFor="hackathonId" className="text-indigo-800">
                해커톤
              </Label>
              <Select value={formData.hackathonId} onValueChange={handleSelectChange} required>
                <SelectTrigger className="border-indigo-200">
                  <SelectValue placeholder="해커톤을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {hackathons.map((hackathon) => (
                    <SelectItem key={hackathon.id} value={hackathon.id}>
                      {hackathon.name} ({hackathon.date})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-indigo-800">
                프로젝트 제목
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="프로젝트 제목을 입력하세요"
                required
                className="border-indigo-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="team" className="text-indigo-800">
                팀 이름
              </Label>
              <Input
                id="team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder="팀 이름을 입력하세요"
                required
                className="border-indigo-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags" className="text-indigo-800">
                태그
              </Label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="태그를 쉼표로 구분하여 입력하세요 (예: AI, 교육, 웹)"
                required
                className="border-indigo-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-indigo-800">
                프로젝트 설명
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="프로젝트에 대한 간략한 설명을 입력하세요"
                rows={4}
                required
                className="border-indigo-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="link" className="text-indigo-800">
                프로젝트 링크
              </Label>
              <Input
                id="link"
                name="link"
                type="url"
                value={formData.link}
                onChange={handleChange}
                placeholder="프로젝트 링크를 입력하세요 (GitHub, 데모 등)"
                required
                className="border-indigo-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnailUrl" className="text-indigo-800">
                썸네일 URL
              </Label>
              <Input
                id="thumbnailUrl"
                name="thumbnailUrl"
                type="url"
                value={formData.thumbnailUrl}
                onChange={handleChange}
                placeholder="프로젝트 썸네일 이미지 URL을 입력하세요"
                required
                className="border-indigo-200"
              />
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
              {isSubmitting ? "등록 중..." : "프로젝트 등록하기"}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
