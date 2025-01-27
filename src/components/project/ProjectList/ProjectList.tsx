import {Brain} from "lucide-react";
import {ProjectCard} from "../ProjectCard/ProjectCard";
import {ProjectService} from "@/service/project/project.service";

export const ProjectList = async () => {
  const featuredProjects = await ProjectService.createInstance().getFeaturedProjects();

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-2xl font-bold mb-12 flex items-center">
        <Brain className="w-6 h-6 mr-2 text-purple-500"/>
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
