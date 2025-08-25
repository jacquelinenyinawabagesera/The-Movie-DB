'use client';
import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-l px-3 py-1 text-black"
      />
      <button
        type="submit"
        className="bg-yellow-500 px-3 rounded-r hover:bg-yellow-600 text-white font-semibold"
      >
        Search
      </button>
    </form>
  );
}
