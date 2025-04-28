import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // 이메일 유효성 검사
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "유효한 이메일을 입력해주세요." }, { status: 400 })
    }

    // 실제 구현에서는 여기서 DB에 저장하거나 이메일 서비스에 연동
    console.log("구독 이메일:", email)

    // 성공 응답
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("구독 처리 오류:", error)
    return NextResponse.json({ success: false, error: "구독 처리 중 오류가 발생했습니다." }, { status: 500 })
  }
}
