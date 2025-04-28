export interface Hackathon {
  id: string;
  name: string;
  date: string;
  location: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "h1",
    name: "2024 NET-ZERO Hackathon",
    date: "2024-07-19",
    location: "Incheon",
  },
  {
    id: "h2",
    name: "카카오 구름톤",
    date: "2025-02-10",
    location: "Online",
  },
  { id: "h3", name: "K-해커톤", date: "2025-01-20", location: "Seoul" },
  {
    id: "h4",
    name: "쌔싹 해커톤",
    date: "2024-12-05",
    location: "Seoul",
  },
  {
    id: "h5",
    name: "아랩 SW•AI활용 스타트업 팀빌딩 프로그램 해커톤",
    date: "2024-07-02",
    location: "Incheon",
  },
];
