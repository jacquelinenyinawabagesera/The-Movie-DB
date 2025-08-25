'use client';

import { useState, useEffect } from 'react';
import CategoryTabs from './components/categoryTabs';
import LatestSection from './components/latestSection';
import MovieList from './components/movieList';

interface Movie {
  id: number;
  title?: string;
  genres?: string;
  duration?: string;
  ageRating?: string;
  rating?: number;
  year?: number;
  seasonInfo?: string;
  description?: string;
  starring?: string;
  backgroundImage?: string;
}

export default function HomePage() {
  const [latestMovies, setLatestMovies] = useState<Movie[]>([]);
  const [mostViewed, setMostViewed] = useState<Movie[]>([]);
  const [lastAdded, setLastAdded] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [arabicMovies, setArabicMovies] = useState<Movie[]>([]);
  const [favMovies, setFavMovies] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    fetch('/api/latest').then(res => res.json()).then(data => setLatestMovies(data.results || []));
    fetch('/api/mostViewed').then(res => res.json()).then(data => setMostViewed(data.results || []));
    fetch('/api/latest').then(res => res.json()).then(data => setLastAdded(data.results || []));
    fetch('/api/action').then(res => res.json()).then(data => setActionMovies(data.results || []));
    fetch('/api/arabic').then(res => res.json()).then(data => setArabicMovies(data.results || []));

    const storedFavs = localStorage.getItem('favoriteMovies');
    if (storedFavs) setFavMovies(JSON.parse(storedFavs));
  }, []);

  const addToFavorites = (movie: Movie) => {
    if (favMovies.some(m => m.id === movie.id)) return;
    const updated = [...favMovies, movie];
    setFavMovies(updated);
    localStorage.setItem('favoriteMovies', JSON.stringify(updated));
  };

  const renderCategoryContent = () => {
    switch (activeTab) {
      case 'Most Viewed':
        return <MovieList movies={mostViewed} onAddToFavorites={addToFavorites} />;
      case 'Last Addition':
        return <MovieList movies={lastAdded} onAddToFavorites={addToFavorites} />;
      case 'Action':
        return <MovieList movies={actionMovies} onAddToFavorites={addToFavorites} />;
      case 'Arabic':
        return <MovieList movies={arabicMovies} onAddToFavorites={addToFavorites} />;
      default:
        return <MovieList movies={mostViewed} onAddToFavorites={addToFavorites} />;
    }
  };

  const featuredMovie: Movie = {
    id: 0,
    backgroundImage: '/images/maleficent.jpg',
    genres: 'Fairy tale / Action',
    duration: '1h 58m',
    ageRating: '16+',
    rating: 9.0,
    year: 2019,
    seasonInfo: 'Season 3 | 9 Episodes',
    title: 'Maleficent: Mistress of Evil',
    description:
      'The story follows Maleficent and Aurora as they navigate new challenges to their relationship, including impending nuptials, unexpected allies, and dark new forces at play.',
    starring: 'Angelina Elle Fanning, Michelle Pfeiffer, Juno Temple',
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${featuredMovie.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          minHeight: '420px',
          position: 'relative',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          padding: '48px 0',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: '#111', 
        }}
      >
        <div
          style={{
            background: 'rgba(10, 10, 20, 0.8)',
            padding: '36px 56px 36px 64px',
            borderRadius: '18px',
            marginLeft: '3vw',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            maxWidth: '580px',
          }}
        >
          <div style={{ fontSize: '1rem', opacity: 0.7, marginBottom: 8 }}>
            {featuredMovie.genres} &bull; {featuredMovie.duration}
          </div>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 'bold', lineHeight: 1.1 }}>
            {featuredMovie.title}
          </h1>
          <div
            style={{
              margin: '10px 0',
              fontSize: '1rem',
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span
              style={{
                border: '1.5px solid #eee',
                borderRadius: '5px',
                padding: '2px 8px',
                fontWeight: '600',
              }}
            >
              {featuredMovie.ageRating}
            </span>
            <span>⭐ {featuredMovie.rating}</span>
            <span>{featuredMovie.year}</span>
            <span>| {featuredMovie.seasonInfo}</span>
          </div>
          <p style={{ fontSize: '1rem', opacity: 0.9, marginTop: 16, lineHeight: 1.5 }}>
            {featuredMovie.description}
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: 12, opacity: 0.7 }}>
            Starring: <strong>{featuredMovie.starring}</strong>
          </p>
          <div style={{ marginTop: 26, display: 'flex', gap: '14px' }}>
            <button
              style={{
                background: '#ffb300',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 36px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer',
                color: '#111',
              }}
              onClick={() => {}}
            >
              Watch Now
            </button>
            <button
              style={{
                color: '#ffb300',
                border: '1.8px solid #ffb300',
                padding: '12px 28px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                background: 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => addToFavorites(featuredMovie)}
            >
              Add To Favourites
            </button>
          </div>
        </div>
      </div>

      <LatestSection movies={latestMovies} />

      <CategoryTabs
        tabs={['All', 'Action', 'Comedy', 'Arabic', 'series', 'Adventure', 'Other']}
        active={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === 'All' ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Most Viewed</h2>
          <MovieList movies={mostViewed} onAddToFavorites={addToFavorites} />
          <h2 className="text-2xl font-bold mb-4 mt-8">Last Addition</h2>
          <MovieList movies={lastAdded} onAddToFavorites={addToFavorites} />
          <h2 className="text-2xl font-bold mb-5 mt-8">Action</h2>
          <MovieList movies={actionMovies} onAddToFavorites={addToFavorites} />
          <h2 className="text-2xl font-bold mb-4 mt-8">Arabic</h2>
          <MovieList movies={arabicMovies} onAddToFavorites={addToFavorites} />
        </>
      ) : (
        renderCategoryContent()
      )}
    </>
  );
}
