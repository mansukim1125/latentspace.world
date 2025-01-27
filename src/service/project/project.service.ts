import {ProjectRepository} from "@/repository/project/project.repository";
import {Project} from "@/entity/project/project.entity";
import {ProjectTypeEnum} from "@/interface/project/project-type.enum";
import {IRepository} from "@/interface/repository/repository.interface";

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  public static createInstance(deps: {
    repository: IRepository;
  }) {
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

  public async getProjectsByType(param: { type: ProjectTypeEnum }): Promise<Project[]> {
    const { type } = param;

    const projects = await this.getAll();
    return projects.filter(project => project.type === type);
  }
}
