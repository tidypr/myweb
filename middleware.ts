import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/portfolio', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};