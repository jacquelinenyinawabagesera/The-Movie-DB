'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function Navbar() {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    const data = await res.json();

    console.log('Search results:', data.results || []);
  };

  return (
    <nav className="flex items-center bg-gray-900 px-6 py-4 sticky top-0 z-50">
      <div className="text-white font-semibold text-2xl flex-shrink-0">Moovie</div>

      <div className="flex items-center ml-auto space-x-6 max-w-4xl w-full">
        <form onSubmit={handleSubmit} className="flex flex-grow max-w-xl">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-grow rounded-l-md border border-white bg-gray-800 px-4 py-2 text-yellow-200 placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </form>

        <div className="flex items-center space-x-6 text-yellow-400 font-semibold text-lg">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/favourites" className="hover:text-yellow-300 text-white">My list</Link>
          <Link href="/favourites" className="hover:text-yellow-300">New</Link>
          <Link href="/signin">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded text-white font-semibold">Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
