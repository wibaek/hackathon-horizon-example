export interface Project {
  id: string
  hackathonId: string
  title: string
  team: string
  tags: string[]
  description: string
  link: string
  thumbnailUrl: string
}

export const projects: Project[] = [
  {
    id: "p1",
    hackathonId: "h1",
    title: "AI Tutor",
    team: "Team Alpha",
    tags: ["AI", "Education", "Web"],
    description:
      "인공지능 기반 맞춤형 학습 도우미 서비스입니다. 학생의 학습 패턴을 분석하여 최적화된 학습 경로를 제공합니다.",
    link: "https://github.com/example/ai-tutor",
    thumbnailUrl: "/ai-learning-interface.png",
  },
  {
    id: "p2",
    hackathonId: "h1",
    title: "EcoTrack",
    team: "Green Coders",
    tags: ["Environment", "IoT", "Mobile"],
    description: "개인의 탄소 발자국을 추적하고 환경 친화적인 생활 습관을 제안하는 앱입니다.",
    link: "https://github.com/example/eco-track",
    thumbnailUrl: "/eco-dashboard.png",
  },
  {
    id: "p3",
    hackathonId: "h2",
    title: "MediScan",
    team: "Health Hackers",
    tags: ["Healthcare", "AI", "Mobile"],
    description: "의료 영상을 분석하여 초기 진단을 도와주는 인공지능 솔루션입니다.",
    link: "https://github.com/example/medi-scan",
    thumbnailUrl: "/digital-health-scan.png",
  },
  {
    id: "p4",
    hackathonId: "h2",
    title: "CodeBuddy",
    team: "Dev Wizards",
    tags: ["Developer Tools", "AI", "Productivity"],
    description: "개발자를 위한 AI 페어 프로그래밍 도우미로, 코드 리뷰와 개선 사항을 제안합니다.",
    link: "https://github.com/example/code-buddy",
    thumbnailUrl: "/coding-assistant-concept.png",
  },
  {
    id: "p5",
    hackathonId: "h3",
    title: "LocalEats",
    team: "Foodies",
    tags: ["Food", "Local Business", "Maps"],
    description: "지역 소상공인 음식점을 발견하고 지원할 수 있는 플랫폼입니다.",
    link: "https://github.com/example/local-eats",
    thumbnailUrl: "/food-discovery-app.png",
  },
  {
    id: "p6",
    hackathonId: "h3",
    title: "BudgetPal",
    team: "FinTech Ninjas",
    tags: ["Finance", "Personal", "Analytics"],
    description: "개인 재정을 관리하고 예산을 계획하는 데 도움을 주는 앱입니다.",
    link: "https://github.com/example/budget-pal",
    thumbnailUrl: "/mobile-budget-overview.png",
  },
  {
    id: "p7",
    hackathonId: "h4",
    title: "FitQuest",
    team: "Health Heroes",
    tags: ["Fitness", "Gamification", "Health"],
    description: "운동을 게임처럼 즐길 수 있게 해주는 피트니스 챌린지 앱입니다.",
    link: "https://github.com/example/fit-quest",
    thumbnailUrl: "/vibrant-fitness-quest.png",
  },
  {
    id: "p8",
    hackathonId: "h4",
    title: "MindfulMe",
    team: "Zen Coders",
    tags: ["Mental Health", "Wellness", "AI"],
    description: "일상 속 마음 챙김과 스트레스 관리를 도와주는 명상 앱입니다.",
    link: "https://github.com/example/mindful-me",
    thumbnailUrl: "/placeholder.svg?height=400&width=600&query=meditation mindfulness app",
  },
  {
    id: "p9",
    hackathonId: "h5",
    title: "SolarSaver",
    team: "Renewable Rangers",
    tags: ["Renewable Energy", "IoT", "Analytics"],
    description: "가정용 태양광 패널의 효율성을 모니터링하고 최적화하는 솔루션입니다.",
    link: "https://github.com/example/solar-saver",
    thumbnailUrl: "/placeholder.svg?height=400&width=600&query=solar panel monitoring app",
  },
  {
    id: "p10",
    hackathonId: "h5",
    title: "WasteNot",
    team: "Eco Warriors",
    tags: ["Sustainability", "Community", "Sharing Economy"],
    description: "음식물 쓰레기를 줄이기 위한 지역 기반 식품 공유 플랫폼입니다.",
    link: "https://github.com/example/waste-not",
    thumbnailUrl: "/placeholder.svg?height=400&width=600&query=food waste reduction app",
  },
]
