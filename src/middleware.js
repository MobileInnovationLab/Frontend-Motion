import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const protocol = request.nextUrl.protocol;
  const host = request.headers.get("host") || "";

  // 1. If host is the member subdomain (e.g. member.localhost:3000 or member.motionlaboratory.com)
  if (host.includes("member")) {
    if (url.pathname.startsWith("/internship")) {
      return NextResponse.rewrite(
        new URL(`${url.pathname}${url.search}`, request.url)
      );
    }
    return NextResponse.rewrite(
      new URL(`/internship${url.pathname}${url.search}`, request.url)
    );
  }

  // If host is the legacy internship subdomain, redirect to member subdomain
  if (host.includes("internship")) {
    const memberHost = host.replace("internship", "member");
    return NextResponse.redirect(
      new URL(`${protocol}//${memberHost}${url.pathname}${url.search}`, request.url)
    );
  }

  // 2. If accessing /internship or /member on main domain (preserving path and search query params)
  if (/^\/(internship|member)(\/.*)?$/.test(url.pathname)) {
    const subPath = url.pathname.replace(/^\/(internship|member)/, "") || "/";
    const mainHost = host.replace(/^www\./, "");
    return NextResponse.redirect(
      new URL(`${protocol}//member.${mainHost}${subPath}${url.search}`, request.url)
    );
  }

  // 3. If accessing /accepted or /declined directly on main domain
  if (/^\/(accepted|declined)(\/.*)?$/.test(url.pathname)) {
    const mainHost = host.replace(/^www\./, "");
    return NextResponse.redirect(
      new URL(`${protocol}//member.${mainHost}${url.pathname}${url.search}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    "/internship/:path*",
    "/member/:path*",
    "/accepted/:path*",
    "/declined/:path*",
    "/((?!api|_next/static|_next/image|robots.txt|public|svg|images|favicon).*)",
  ],
};
