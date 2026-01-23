import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

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
  matcher: ["/xmlrpc.php"],
};

