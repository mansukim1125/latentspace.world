'use client';

import {ArrowLeft, Calendar, Clock, ExternalLink, Github} from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import {IProject} from "@/interface/project/project.interface";
import {CustomHeading} from "@/components/custom-heading/CustomHeading";
import {useRouter} from "next/navigation";

export default function ProjectDetail({ project }: { project: IProject }) {
  // 예시 데이터. 실제로는 params로 받은 id를 기반으로 데이터를 불러옵니다
  const router = useRouter();

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span onClick={() => router.back()} className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Experiences
            </span>
            <div className="flex items-center space-x-4">
              {project.links && Object.entries(project.links).map(([key, url]) => (
                url && (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    {key === 'github' ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-wrap gap-4 mb-6">
            <span
              className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
            >
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">{project.excerpt}</p>
          <div className="flex flex-wrap gap-6 mb-8 text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {project.period}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {project.duration}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stacks.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
              >
              {tech}
            </span>
            ))}
          </div>
        </div>
      </header>

      {/* Project Content - Markdown */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <article className="prose prose-invert prose-purple max-w-none">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              h1({ node: _, ...props}) {
                return (
                  <CustomHeading level={1} >
                    {props.children}
                  </CustomHeading>
                );
              },
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              h2({ node: _, ...props}) {
                return (
                  <CustomHeading level={2} >
                    {props.children}
                  </CustomHeading>
                );
              },
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              h3({ node: _, ...props}) {
                return (
                  <CustomHeading level={3} >
                    {props.children}
                  </CustomHeading>
                );
              },
            }}
          >
            {project.content}
          </Markdown>
        </article>
      </div>
    </>
  );
};
