import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const protocol = request.nextUrl.protocol;
  const host = request.headers.get("host");
  const topLevelDomain = host.split(".").slice(-1)[0];

  if (host == `recruitment.${topLevelDomain}`) {
    return NextResponse.rewrite(new URL(`/recruitment${url.pathname}`, request.url));
  }

  if (/^\/recruitment\/.*/.test(url.pathname)) {
    return NextResponse.redirect(new URL(`${protocol}//recruitment.${topLevelDomain}`, request.url));
  }
}

export const config = {
  matcher: ["/recruitment/:path*", "/((?!api|_next/static|_next/image|robots.txt|public|svg|images|favicon).*)"],
};
