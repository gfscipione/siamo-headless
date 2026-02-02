import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Mark Spanish Next routes so the root layout can set <html lang="es"> without creating a separate root layout.
  // NOTE: This does not affect WordPress-proxied /es/* pages served via rewrites; it only applies to filesystem routes.
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-app-locale", "es");
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Retire Yoast EN sitemap from the public domain; we use Next sitemap for EN and Yoast under /es/.
  if (pathname === "/page-sitemap.xml") {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }

  // Block XML-RPC on the public domain (we don't use it).
  if (pathname === "/xmlrpc.php") {
    return new NextResponse("Not Found", {
      status: 404,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/xmlrpc.php", "/page-sitemap.xml", "/es/:path*"],
};
