'use client';

import { useState, useMemo } from "react";
import { OtherHeroSection } from "@/components/hero/OtherHeroSection/OtherHeroSection";
import { ProjectCard } from "@/components/project/ProjectCard/ProjectCard";
import { Search, XCircle } from "lucide-react";
import { CompanyCard } from "@/components/company/CompanyCard/CompanyCard";
import { IExperience } from "@/interface/experience/experience.interface";

export function Experiences({ experiences }: { experiences: IExperience[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 📌 중복 없는 카테고리 목록 생성
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(experiences.flatMap(experience => experience.projects).map(project => project.category))
    );
    return ["all", ...uniqueCategories];
  }, [experiences]);

  return (
    <div className="min-h-screen bg-black">
      {/* 📌 Hero Section */}
      <OtherHeroSection
        title="Experiences"
        text="A collection of professional experiences and personal projects in software development."
      />

      {/* 📌 Navigation Bar */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

            {/* 📌 카테고리 필터 */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category.toLowerCase()
                      ? "bg-purple-500 text-white shadow-md"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}

              {/* 📌 필터 초기화 버튼 */}
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="px-4 py-2 text-sm bg-gray-700 text-gray-400 hover:bg-gray-600 rounded-full flex items-center gap-2"
                >
                  <XCircle className="w-4 h-4" />
                  Reset
                </button>
              )}
            </div>

            {/* 📌 검색창 */}
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 📌 회사별 프로젝트 섹션 */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {experiences.map(experience => {
          // ✅ 선택된 카테고리에 맞게 프로젝트 필터링
          const filteredProjects = experience.projects.filter(project =>
            selectedCategory === "all" || project.category.toLowerCase() === selectedCategory
          ).filter(project =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return (
            <section key={experience.company?.id || 'personal'} className="relative">
              <CompanyCard company={experience.company} />

              {filteredProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 mt-10">
                  No projects found. Try adjusting the filters.
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
