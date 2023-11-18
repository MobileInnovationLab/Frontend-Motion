import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const protocol = request.nextUrl.protocol;
  const host = request.headers.get("host");
  // const topLevelDomain = host.split(".")[host.split(".").length - 2] ?? host;

  console.log("top", host);
  if (host == `recruitment.${host}`) {
    return NextResponse.rewrite(new URL(`/recruitment${url.pathname}`, request.url));
  }

  if (/^\/recruitment\/.*/.test(url.pathname)) {
    return NextResponse.redirect(new URL(`${protocol}//recruitment.${host}`, request.url));
  }
}

export const config = {
  matcher: ["/recruitment/:path*", "/((?!api|_next/static|_next/image|robots.txt|public|svg|images|favicon).*)"],
};
