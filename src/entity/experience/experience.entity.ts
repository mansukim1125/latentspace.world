import { IExperience } from '@/interface/experience/experience.interface';
import { Company } from '@/entity/company/company.entity';
import { Project } from '@/entity/project/project.entity';

export class Experience implements IExperience {
  company: Company | null;
  projects: Project[];

  constructor(param: IExperience) {
    this.company = param.company ? new Company(param.company) : null;
    this.projects = param.projects.map((project) => new Project(project));
  }

  toPlainObject(): IExperience {
    return {
      company: this.company?.toPlainObject() || null,
      projects: this.projects.map((project) => project.toPlainObject()),
    };
  }
}
