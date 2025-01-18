'use client';

import React, { useState } from 'react';
import { Building2, ExternalLink, Calendar, Timer, Briefcase, Code } from 'lucide-react';

interface WorkProject {
  id: string;
  title: string;
  description: string;
  period: string;
  company: string;
  companyPeriod: string;
  team?: string;
  stack: string[];
  achievements: string[];
  links?: {
    demo?: string;
    docs?: string;
  };
}

interface PersonalProject {
  id: string;
  title: string;
  description: string;
  period: string;
  stack: string[];
  type: 'open-source' | 'research' | 'experiment';
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

type Project = WorkProject | PersonalProject;

const ProjectsPage = () => {
  const [filter, setFilter] = useState({
    company: 'all',
    type: 'all',
    tech: 'all'
  });

  // 예시 데이터
  const projects: Project[] = [
    {
      id: '1',
      title: "MSA 기반 커머스 플랫폼",
      description: "대규모 트래픽을 처리하는 이커머스 플랫폼 개발",
      period: "2023.07 - Present",
      company: "Tech Company A",
      companyPeriod: "2023.01 - Present",
      team: "Platform Team",
      stack: ["Java", "Spring Boot", "Kafka", "MongoDB"],
      achievements: [
        "일 처리 트랜잭션 100만 건 달성",
        "시스템 응답 시간 30% 개선",
        "마이크로서비스 아키텍처 설계 및 구현"
      ]
    },
    {
      id: '2',
      title: "Vector DB Implementation",
      description: "High-performance vector similarity search",
      period: "2024.01 - 2024.03",
      type: "research",
      stack: ["Python", "FAISS", "NumPy"],
      links: {
        github: "https://github.com/username/vector-db"
      }
    }
  ];

  // 모든 기술 스택 추출
  const allTechs = [...new Set(projects.flatMap(p => p.stack))];

  // 모든 회사 추출
  const companies = [...new Set(projects
    .filter((p): p is WorkProject => 'company' in p)
    .map(p => p.company))
  ];

  // 프로젝트 타입
  const projectTypes = ['all', 'work', 'open-source', 'research', 'experiment'];

  // 필터링된 프로젝트
  const filteredProjects = projects.filter(project => {
    const matchesCompany = filter.company === 'all' ||
      ('company' in project && project.company === filter.company);

    const matchesType = filter.type === 'all' ||
      (('type' in project && project.type === filter.type) ||
        ('company' in project && filter.type === 'work'));

    const matchesTech = filter.tech === 'all' ||
      project.stack.includes(filter.tech);

    return matchesCompany && matchesType && matchesTech;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-gray-400">
            A collection of professional and personal projects in software development.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-6">
            {/* Company Filter */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Building2 className="w-4 h-4" />
                <span>Company</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter(f => ({ ...f, company: 'all' }))}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter.company === 'all'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                {companies.map(company => (
                  <button
                    key={company}
                    onClick={() => setFilter(f => ({ ...f, company }))}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filter.company === company
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {company}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Code className="w-4 h-4" />
                <span>Type</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setFilter(f => ({ ...f, type }))}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filter.type === type
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2" />

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
                  {/* Project header */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {'company' in project ? (
                      <div className="flex items-center gap-2 text-purple-400">
                        <Briefcase className="w-4 h-4" />
                        <span>{project.company}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-purple-400">
                        <Code className="w-4 h-4" />
                        <span>{project.type}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {/* Project content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements for work projects */}
                  {'achievements' in project && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project links */}
                  {project.links && Object.keys(project.links).length > 0 && (
                    <div className="mt-4 flex gap-3">
                      {Object.entries(project.links).map(([key, url]) => (
                        url && (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {key}
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;