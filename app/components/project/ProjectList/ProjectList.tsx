import {Brain} from "lucide-react";
import {Project} from "@/app/types/project/project";
import {ProjectCard} from "@/app/components/project/ProjectCard/ProjectCard";

export const ProjectList = () => {
	const projects: Project[] = [
		{
			title: "Vector DB Optimization",
			description: "High-performance vector similarity search implementation",
			tech: ["Python", "FAISS", "NumPy"],
			link: "#"
		},
		{
			title: "Transformer Architecture",
			description: "Custom implementation of transformer blocks",
			tech: ["PyTorch", "CUDA", "Python"],
			link: "#"
		}
	];

	return (
		<section className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-800">
			<h2 className="text-2xl font-bold mb-12 flex items-center">
				<Brain className="w-6 h-6 mr-2 text-purple-500"/>
				Featured Projects
			</h2>
			<div className="grid md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</section>
	);
}
