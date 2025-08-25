'use client';

import MovieList from './movieList';

interface Movie {
  id: number;
  title?: string;
  poster_path?: string | null;

}

interface LatestSectionProps {
  movies: Movie[];
}

export default function LatestSection({ movies }: LatestSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Latest Movies & Series</h2>
      <MovieList movies={movies} />
    </section>
  );
}
