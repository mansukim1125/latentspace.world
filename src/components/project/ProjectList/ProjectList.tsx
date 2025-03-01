'use client';

import {OtherHeroSection} from "@/components/hero/OtherHeroSection/OtherHeroSection";
import {ProjectCard} from "@/components/project/ProjectCard/ProjectCard";
import React, {useState} from "react";
import {IProject} from "@/interface/project/project.interface";
import {ArrowUpDown, Search} from "lucide-react";

function filterProjectsByCategory(param: { projects: IProject[]; category: string }) {
  const { projects, category } = param;
  if (category === 'all') return projects;
  return projects.filter(project => project.category.toLowerCase() === category.toLowerCase());
}

export const ProjectList = (param: {
  projects: IProject[];
}) => {
  const { projects } = param;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects);

  const categories = projects.reduce((acc, project) => {
    acc.push(project.category);
    return acc;
  }, ['All']);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <OtherHeroSection
        title="Projects"
        text="A collection of professional and personal projects in software development."
      />

      {/*<Filter />*/}
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
                    setFilteredProjects(filterProjectsByCategory({ projects, category: category.toLowerCase() }));
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

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4">
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
