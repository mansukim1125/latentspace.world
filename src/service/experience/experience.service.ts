import {ProjectService} from "@/service/project/project.service";
import {CompanyRepository} from "@/repository/company/company.repository";
import {Project} from "@/entity/project/project.entity";
import {Experience} from "@/entity/experience/experience.entity";

export class ExperienceService {
  constructor(
    private readonly projectService: ProjectService,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async getAll(): Promise<Experience[]> {
    const projects = await this.projectService.getAll();
    return await this.makeExperiences({ projects });
  }

  private async makeExperiences(param: {
    projects: Project[];
  }): Promise<Experience[]> {
    const { projects } = param;
    const companyOrder = await this.companyRepository.findCompanyOrder();

    return await Promise.all(
      companyOrder.map(async companyId => {
        return new Experience({
          company: companyId ? await this.companyRepository.findOne(companyId) : null,
          projects: projects.filter(project => project.companyId === companyId),
        });
      }),
    );
  }

  async getFeatured(): Promise<Experience[]> {
    const featuredProjects = await this.projectService.getFeaturedProjects();
    return await this.makeExperiences({ projects: featuredProjects });
  }
}
