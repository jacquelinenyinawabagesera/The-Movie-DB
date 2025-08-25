import { NextResponse } from 'next/server';

export async function GET() {
  const TOKEN = process.env.TMDB_ACCESS_TOKEN!;
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?with_original_language=ar',
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
