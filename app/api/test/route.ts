// route handler
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  // const { searchParams } = new URL(req.url);
  // console.log(searchParams.get('name'));
  console.log(req.nextUrl.searchParams.get('name'));
  const { method, url, headers, body } = req;
  console.log(method, url, headers, body);

  // return NextResponse.json({
  //   message: "Hello from the server!"
  // });

  return NextResponse.redirect(new URL('/blog', req.url), 302);
};

export const POST = async (req: NextRequest) => {
  const test = await req.json();
  console.log(test);

  return NextResponse.json({
    message: 'Hello from the server!',
  });
};
