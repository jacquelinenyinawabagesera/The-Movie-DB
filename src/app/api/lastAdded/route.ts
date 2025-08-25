import { NextResponse } from 'next/server';

export async function GET() {
  const TOKEN = process.env.TMDB_ACCESS_TOKEN!;

  const res = await fetch(
    'https://api.themoviedb.org/3/movie/latest',
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    }
  );

  const data = await res.json();
  return NextResponse.json({ results: [data] });
}
