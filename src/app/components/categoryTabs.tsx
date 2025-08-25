'use client';

interface CategoryTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export default function CategoryTabs({ tabs, active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex space-x-4 overflow-x-auto mt-8 mb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-full ${
            active === tab ? 'bg-yellow-500 text-black font-semibold' : 'bg-gray-700 text-white'
          }`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
