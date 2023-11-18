import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const protocol = request.nextUrl.protocol;
  const host = request.headers.get("host");

  if (host.includes("internship")) {
    return NextResponse.rewrite(new URL(`/internship${url.pathname}`, request.url));
  }

  if (/^\/internship\/.*/.test(url.pathname)) {
    return NextResponse.redirect(new URL(`${protocol}//internship.${host}`, request.url));
  }
}

export const config = {
  matcher: ["/internship/:path*", "/((?!api|_next/static|_next/image|robots.txt|public|svg|images|favicon).*)"],
};
