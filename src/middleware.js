import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const protocol = request.nextUrl.protocol;
  const host = request.headers.get("host") || "";

  // 1. If host is the internship subdomain (e.g. internship.localhost:3000 or internship.motionlaboratory.com)
  if (host.includes("internship")) {
    if (url.pathname.startsWith("/internship")) {
      return NextResponse.rewrite(
        new URL(`${url.pathname}${url.search}`, request.url)
      );
    }
    return NextResponse.rewrite(
      new URL(`/internship${url.pathname}${url.search}`, request.url)
    );
  }

  // 2. If accessing /internship on main domain (preserving path and search query params)
  if (/^\/internship(\/.*)?$/.test(url.pathname)) {
    const subPath = url.pathname.replace(/^\/internship/, "") || "/";
    return NextResponse.redirect(
      new URL(`${protocol}//internship.${host}${subPath}${url.search}`, request.url)
    );
  }

  // 3. If accessing /accepted or /declined directly on main domain
  if (/^\/(accepted|declined)(\/.*)?$/.test(url.pathname)) {
    return NextResponse.redirect(
      new URL(`${protocol}//internship.${host}${url.pathname}${url.search}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    "/internship/:path*",
    "/accepted/:path*",
    "/declined/:path*",
    "/((?!api|_next/static|_next/image|robots.txt|public|svg|images|favicon).*)",
  ],
};
