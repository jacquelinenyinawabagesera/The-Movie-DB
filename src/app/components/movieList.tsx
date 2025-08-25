'use client';

import MovieCard from './movieCard';

interface Movie {
  id: number;
  title?: string;
  poster_path?: string | null;

}

interface MovieListProps {
  movies: Movie[];
  onAddToFavorites?: (movie: Movie) => void;
}

export default function MovieList({ movies, onAddToFavorites }: MovieListProps) {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onAddToFavorites={onAddToFavorites} />
      ))}
    </div>
  );
}
