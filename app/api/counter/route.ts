import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  console.log({ method: request.method });

  return NextResponse.json({
    count: 100,
  });
};

export const POST = async (request: Request) => {
  console.log({ method: request.method });

  return NextResponse.json({
    count: 100,
  });
};
