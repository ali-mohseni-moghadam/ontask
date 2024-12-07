import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access-token")

  // const isAuthPage = ["/login", "/signup"].includes(request.nextUrl.pathname)
  // if (token && isAuthPage) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url))
  // }

  // const isProtectedRoute = ["/dashboard", "/desk", "/proping"].some(path =>
  //   request.nextUrl.pathname.startsWith(path)
  // )
  // if (!token && isProtectedRoute) {
  //   return NextResponse.redirect(new URL("/login", request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/desk/:path*",
    "/proping/:path*",
    "/login",
    "/signup"
  ]
}
