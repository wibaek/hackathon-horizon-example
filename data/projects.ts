export interface Project {
  id: string;
  hackathonId: string;
  title: string;
  team: string;
  tags: string[];
  description: string;
  link: string;
  thumbnailUrl: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    hackathonId: "h1",
    title: "FridgeHub",
    team: "FBI",
    tags: ["AWS"],
    description: "제로웨이스트 실천을 위한 대용량 식료품 나눔 서비스 FridgeHub",
    link: "https://github.com/",
    thumbnailUrl: "/ai-learning-interface.png",
  },
  {
    id: "p2",
    hackathonId: "h1",
    title: "REFASION",
    team: "어금니",
    tags: ["AWS"],
    description: "개인 맞춤형 의류 업사이클링",
    link: "https://github.com/",
    thumbnailUrl: "/eco-dashboard.png",
  },
  {
    id: "p3",
    hackathonId: "h1",
    title: "#Zero",
    team: "오조사마",
    tags: ["AWS"],
    description: "환경 보호를 위한 제로웨이스트 샵을 홍보하는 #Zero",
    link: "https://github.com/",
    thumbnailUrl: "/digital-health-scan.png",
  },
  {
    id: "p4",
    hackathonId: "h1",
    title: "마감요정",
    team: "Primero",
    tags: ["AWS"],
    description: "음식물 쓰레기 감소를 위한 시장 마감 할인 음식 배송 서비스",
    link: "https://github.com/",
    thumbnailUrl: "/coding-assistant-concept.png",
  },
  {
    id: "p5",
    hackathonId: "h1",
    title: "Green Pick",
    team: "지구팀",
    tags: ["AWS"],
    description: "환경의 선택. Green Pick",
    link: "https://github.com/",
    thumbnailUrl: "/food-discovery-app.png",
  },
  {
    id: "p6",
    hackathonId: "h1",
    title: "다회",
    team: "이상이하",
    tags: ["AWS"],
    description: "세상을 바꾸는 “다회”용기",
    link: "https://github.com/",
    thumbnailUrl: "/mobile-budget-overview.png",
  },
  {
    id: "p7",
    hackathonId: "h1",
    title: "아이파이브",
    team: "리제로",
    tags: ["AWS"],
    description: "병 포장지 제거 QR 병뚜껑 전환 솔루션",
    link: "https://github.com/",
    thumbnailUrl: "/vibrant-fitness-quest.png",
  },
  {
    id: "p8",
    hackathonId: "h1",
    title: "식딴",
    team: "1석 2조",
    tags: ["AWS"],
    description: "건강한 지구와 나를 위한 저탄소 식단 실천",
    link: "https://github.com/",
    thumbnailUrl:
      "/placeholder.svg?height=400&width=600&query=meditation mindfulness app",
  },
  {
    id: "p9",
    hackathonId: "h1",
    title: "그린 뷰",
    team: "탄소중립10조",
    tags: ["AWS"],
    description: "재활용 시각화 및 보상 시스템 서비스",
    link: "https://github.com/r",
    thumbnailUrl:
      "/placeholder.svg?height=400&width=600&query=solar panel monitoring app",
  },
];
