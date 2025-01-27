import React from 'react';
import { Building2, ExternalLink, Calendar, ChevronRight, Code, Timer } from 'lucide-react';
import {OtherHeroSection} from "@/components/hero/OtherHeroSection/OtherHeroSection";
import Link from "next/link";
import {IWorkProject} from "@/interface/project/work-project.interface";
import {IPersonalProject} from "@/interface/project/personal-project.interface";
import {ProjectService} from "@/service/project/project.service";
import {ProjectTypeEnum} from "@/interface/project/project-type.enum";
import {IProject} from "@/interface/project/project.interface";

interface Company {
  id: string;
  name: string;
  period: string;
  position: string;
  team?: string;
  description: string;
  projects: IWorkProject[];
}

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="group bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">
          {'category' in project ? project.category : 'work'}
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Timer className="w-4 h-4" />
          {project.period}
        </div>
      </div>
      <Link href={"/projects/" + project.id}>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {'achievements' in project && (
          <ul className="mb-4 space-y-1">
            {project.achievements.slice(0, 2).map((achievement, i) => (
              <li key={i} className="text-gray-400 text-sm flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </Link>

      {project.links && Object.keys(project.links).length > 0 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
          <div className="flex gap-3">
            {Object.entries(project.links).map(([key, url]) => (
              url && (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  {key}
                </a>
              )
            ))}
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
        </div>
      )}
    </div>
  );
};

const CompanySection = ({ company }: { company: Company }) => {
  return (
    <section className="border-b border-gray-800 py-16 first:pt-0">
      <div className="flex items-start gap-6 mb-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">{company.name}</h2>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {company.period}
            </div>
            <div>{company.position}</div>
            {company.team && <div>{company.team}</div>}
          </div>
          <p className="text-gray-400">{company.description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {company.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectsPage = async () => {
  const workProjects =
    await ProjectService.createInstance().getProjectsByType({
      type: ProjectTypeEnum.Work,
    });

  const companies: Company[] = [
    {
      id: "company-a",
      name: "Tech Company A",
      period: "2023.01 - Present",
      position: "Senior Backend Developer",
      team: "Platform Team",
      description: "대규모 커머스 플랫폼 회사에서 백엔드 시스템 설계 및 개발",
      projects: workProjects.map(project => project.toPlainObject()),
    },
    // ... 더 많은 회사 데이터
  ];

  const projects: IWorkProject[] = workProjects.map(project => project.toPlainObject());

  const personalProjects: PersonalProject[] = [
    {
      id: "personal-1",
      title: "Vector DB Implementation",
      period: "2024.01 - 2024.03",
      description: "고성능 벡터 유사도 검색 시스템. HNSW 인덱스를 활용한 효율적인 벡터 검색 구현 및 대용량 데이터 처리를 위한 메모리 최적화를 진행했습니다.",
      type: "research",
      stack: ["Python", "FAISS", "NumPy"],
      duration: '',
      role: '',
      team: '',
      content: '',
      links: {
        github: "https://github.com/username/vector-db",
        demo: "https://demo.example.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <OtherHeroSection
        title="Projects"
        text="A collection of professional and personal projects in software development."
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pt-12">
        {/* Work Experience */}
        {companies.map(company => (
          <CompanySection key={company.id} company={company} />
        ))}

        {/* Personal Projects */}
        <section className="py-16">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Personal Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;