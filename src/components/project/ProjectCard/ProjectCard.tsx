import { ChevronRight, ExternalLink, Timer } from 'lucide-react';
import { IProject } from '@/interface/project/project.interface';
import Link from 'next/link';
import React from 'react';

export const ProjectCard = (param: { project: IProject }) => {
  const { project } = param;

  return (
    <div className="group flex flex-col bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full">
          {project.category}
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Timer className="w-4 h-4" />
          {project.period}
        </div>
      </div>
      <Link href={'/experiences/' + project.id}>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-2">{project.excerpt}</p>

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

        {'achievements' in project && (
          <ul className="mb-4 space-y-1">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="text-gray-400 text-sm flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </Link>

      {project.links && Object.keys(project.links).length > 0 && (
        <div className="flex items-center mt-auto justify-between mt-4 pt-4 border-t border-gray-800">
          <div className="flex gap-3">
            {Object.entries(project.links).map(
              ([key, url]) =>
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
                ),
            )}
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
        </div>
      )}
    </div>
  );
};
