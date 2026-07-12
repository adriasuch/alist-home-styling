import { NextRequest, NextResponse } from "next/server";

function isStaticAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Preview-only: let /contact through so it can be reviewed before launch.
  const previewAllowed =
    process.env.VERCEL_ENV === "preview" && pathname === "/contact";
  if (pathname === "/" || isStaticAsset(pathname) || previewAllowed) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}
