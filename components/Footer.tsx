import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-indigo-900 py-8 px-4 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Hackathon Horizon. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/about" className="text-sm text-blue-200 hover:text-white">
              소개
            </Link>
            <Link href="/terms" className="text-sm text-blue-200 hover:text-white">
              이용약관
            </Link>
            <Link href="/privacy" className="text-sm text-blue-200 hover:text-white">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
