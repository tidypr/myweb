import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url), 302);
}

export const config = {
  matcher: [
    // '/about/:path*',
    // '/blog/:path*',
  ],
};
