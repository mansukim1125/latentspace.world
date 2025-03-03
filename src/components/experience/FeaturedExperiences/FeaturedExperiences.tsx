import { Brain } from "lucide-react";
import { ProjectCard } from "../../project/ProjectCard/ProjectCard";
import { IProject } from "@/interface/project/project.interface";
import Link from "next/link";

export const FeaturedExperiences = async ({ featuredProjects }: { featuredProjects: IProject[] }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-800">
      {/* 제목 + "View All Experiences" 버튼 (제목 옆 배치) */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-bold flex items-center">
          <Brain className="w-6 h-6 mr-2 text-purple-500" />
          Featured Projects
        </h2>
        <Link href="/experiences">
          <span className="text-sm text-purple-400 hover:underline">
            View All Experiences →
          </span>
        </Link>
      </div>

      {/* 프로젝트 카드 리스트 */}
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* 섹션 하단 중앙에 "View All Experiences" 버튼 추가 */}
      <div className="flex justify-center mt-12">
        <Link href="/experiences">
          <button className="px-5 py-2 text-sm bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition">
            View All Experiences
          </button>
        </Link>
      </div>
    </section>
  );
};
