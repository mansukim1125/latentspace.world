'use client';

import {OtherHeroSection} from "@/components/hero/OtherHeroSection/OtherHeroSection";
import {ArrowUpDown, Search} from "lucide-react";
import {WritingCard} from "@/components/writing/WritingCard/WritingCard";
import {useState} from "react";
import {IWriting} from "@/interface/writing/writing.interface";

function filterWritingsByCategory(param: { writings: IWriting[]; category: string }) {
  const { writings, category } = param;
  if (category === 'all') return writings;
  return writings.filter(writing => writing.category.toLowerCase() === category.toLowerCase());
}

export default function Writings(param: {
  writings: IWriting[];
}) {
  const { writings } = param;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [searchQuery, setSearchQuery] = useState('');

  const [filteredWritings, setFilteredWritings] = useState<IWriting[]>(writings);

  const categories = writings.reduce((acc, writing) => {
    acc.push(writing.category);
    return acc;
  }, ['All']);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <OtherHeroSection title="Writing"
                        text="Thoughts and insights about artificial intelligence, machine learning, and software engineering."/>

      {/* Filters and Search */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category.toLowerCase());
                    setFilteredWritings(filterWritingsByCategory({
                      writings,
                      category: category.toLowerCase(),
                    }))
                  }}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"/>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                onClick={() => setSortBy(sortBy === 'date' ? 'title' : 'date')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700"
              >
                <ArrowUpDown className="w-4 h-4"/>
                <span className="hidden md:inline">Sort by {sortBy}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {filteredWritings.map((writing, index) => (
            <WritingCard writing={writing} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}