'use client';

import React, { useState } from 'react';
import { ExternalLink, Building2, Code } from 'lucide-react';
import {OtherHeroSection} from "@/app/components/hero/OtherHeroSection/OtherHeroSection";

interface WorkExperience {
  company: string;
  period: string;
  role: string;
  description: string;
  projects: {
    name: string;
    description: string;
    stack: string[];
  }[];
}

interface PersonalProject {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  category: 'open-source' | 'research' | 'experiment';
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const workExperience: WorkExperience[] = [
    {
      company: "Tech Company A",
      period: "2023 - Present",
      role: "Senior Backend Developer",
      description: "Developing and maintaining large-scale distributed systems",
      projects: [
        {
          name: "E-commerce Platform",
          description: "Microservices based commerce platform handling 1M+ daily transactions",
          stack: ["Java", "Spring Boot", "Kafka", "MongoDB"]
        },
        {
          name: "Payment Gateway",
          description: "Secure payment processing system with multi-currency support",
          stack: ["Kotlin", "gRPC", "Redis", "PostgreSQL"]
        }
      ]
    },
    {
      company: "Tech Company B",
      period: "2020 - 2023",
      role: "Backend Developer",
      description: "Building data processing pipelines and APIs",
      projects: [
        {
          name: "Data Pipeline",
          description: "Real-time data processing pipeline for analytics",
          stack: ["Python", "Apache Spark", "Airflow", "AWS"]
        }
      ]
    }
  ];

  const personalProjects: PersonalProject[] = [
    {
      title: "Vector DB Implementation",
      description: "High-performance vector similarity search",
      stack: ["Python", "FAISS", "NumPy"],
      category: "research",
      link: "https://github.com/username/vector-db"
    },
    {
      title: "Attention Mechanism",
      description: "Custom implementation of transformer blocks",
      stack: ["PyTorch", "Python"],
      category: "experiment",
      link: "https://github.com/username/attention"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'open-source', name: 'Open Source' },
    { id: 'research', name: 'Research' },
    { id: 'experiment', name: 'Experiments' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <OtherHeroSection title="Projects" text="Professional experience and personal projects in software development." />

      {/* Work Experience */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        </div>
        <div className="space-y-12">
          {workExperience.map((work, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-8"
            >
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{work.company}</h3>
                  <span className="text-gray-400">{work.period}</span>
                </div>
                <div className="text-purple-400 mb-2">{work.role}</div>
                <p className="text-gray-400">{work.description}</p>
              </div>

              <div className="space-y-6">
                {work.projects.map((project, pIndex) => (
                  <div key={pIndex} className="border-t border-gray-800 pt-6">
                    <h4 className="text-lg font-medium text-white mb-2">
                      {project.name}
                    </h4>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-800">
        <div className="flex items-center gap-3 mb-8">
          <Code className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-white">Personal Projects</h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {personalProjects
            .filter(project =>
              selectedCategory === 'all' || project.category === selectedCategory
            )
            .map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
