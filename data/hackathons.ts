export interface Hackathon {
  id: string
  name: string
  date: string
  location: string
}

export const hackathons: Hackathon[] = [
  { id: "h1", name: "Campus Hack 2025", date: "2025-03-15", location: "Seoul" },
  { id: "h2", name: "Global AI Hackathon", date: "2025-02-10", location: "Online" },
  { id: "h3", name: "Startup Weekend", date: "2025-01-20", location: "Busan" },
  { id: "h4", name: "Health Tech Jam", date: "2024-12-05", location: "Daejeon" },
  { id: "h5", name: "Climate Action Hack", date: "2024-11-15", location: "Jeju" },
]
