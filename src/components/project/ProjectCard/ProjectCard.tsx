import {ExternalLink} from "lucide-react";
import {Project} from "@/types/project/project";

export const ProjectCard = (param: { project: Project }) => {
  const { project } = param;

  return (
    <div className="border border-gray-800 bg-gray-900 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
      <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
        {project.title}
        <ExternalLink className="w-4 h-4 text-purple-500"/>
      </h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
						{tech}
					</span>
        ))}
      </div>
    </div>
  );
}
