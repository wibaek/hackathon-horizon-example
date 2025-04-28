import { Search, Filter, Upload } from "lucide-react"

export default function FeatureCards() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-indigo-600" />,
      title: "해커톤별 검색",
      description: "다양한 해커톤 행사별로 프로젝트를 찾아보세요.",
    },
    {
      icon: <Filter className="h-10 w-10 text-indigo-600" />,
      title: "맞춤 필터",
      description: "기술 스택, 주제별로 원하는 프로젝트를 필터링하세요.",
    },
    {
      icon: <Upload className="h-10 w-10 text-indigo-600" />,
      title: "간편 등록",
      description: "당신의 해커톤 프로젝트를 쉽고 빠르게 등록하세요.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">서비스 특징</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center border border-indigo-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">{feature.title}</h3>
              <p className="text-indigo-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
