'use client';

import { OtherHeroSection } from "@/components/hero/OtherHeroSection/OtherHeroSection";
import { Search, XCircle } from "lucide-react";
import { WritingCard } from "@/components/writing/WritingCard/WritingCard";
import { useState, useEffect } from "react";
import { IWriting } from "@/interface/writing/writing.interface";

export default function Writings({ writings }: { writings: IWriting[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWritings, setFilteredWritings] = useState<IWriting[]>(writings);

  useEffect(() => {
    let updatedWritings = writings;

    // **카테고리 필터 적용**
    if (selectedCategory !== 'all') {
      updatedWritings = updatedWritings.filter(writing =>
        writing.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // **검색 필터 적용**
    if (searchQuery.trim() !== '') {
      updatedWritings = updatedWritings.filter(writing =>
        writing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        writing.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // **정렬 적용**
    updatedWritings = [...updatedWritings].sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

    setFilteredWritings(updatedWritings);
  }, [selectedCategory, searchQuery, sortBy, writings]);

  const categories = Array.from(new Set(writings.map(writing => writing.category)));
  categories.unshift('All');

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <OtherHeroSection title="Writing"
                        text="Thoughts and insights about artificial intelligence, machine learning, and software engineering."/>

      {/* Filters & Search */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}

              {/* 필터 초기화 버튼 */}
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-4 py-2 text-sm bg-gray-700 text-gray-400 hover:bg-gray-600 rounded-full flex items-center gap-2"
                >
                  <XCircle className="w-4 h-4" />
                  Reset
                </button>
              )}
            </div>

            {/* Search & Sort */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* 검색창 */}
              <div className="relative flex-1 md:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"/>
                <input
                  type="text"
                  placeholder="Search writings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* 정렬 드롭다운 */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 focus:outline-none"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {filteredWritings.length > 0 ? (
          <div className="grid gap-8">
            {filteredWritings.map((writing, index) => (
              <WritingCard writing={writing} key={index}/>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-10">
            No writings found matching your criteria.
          </div>
        )}
      </div>
    </div>
  )
}
