import {ProjectRepository} from "@/repository/project/project.repository";
import {Project} from "@/entity/project/project.entity";

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  public static createInstance() {
    return new ProjectService(ProjectRepository.createInstance());
  }

  public async getAll(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }

  public async getById(id: string): Promise<Project> {
    return this.projectRepository.findOne(id);
  }

  public async getFeaturedProjects(): Promise<Project[]> {
    const projects = await this.projectRepository.findAll();
    return projects.slice(0, 2);
  }
}
