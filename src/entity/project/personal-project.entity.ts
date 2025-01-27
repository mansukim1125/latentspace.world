import {IPersonalProject} from "@/interface/project/personal-project.interface";
import { ProjectTypeEnum } from "@/interface/project/project-type.enum";

export class PersonalProject implements IPersonalProject {
  id: string;
  title: string;
  description: string;
  period: string;
  stack: string[];
  category: "open-source" | "research" | "experiment";
  links?: { github?: string; demo?: string; docs?: string; } | undefined;
  duration: string;
  role: string;
  team: string;
  content: string;
  type: ProjectTypeEnum;

  public constructor(param: IPersonalProject) {
    Object.assign(this, param);
  }

  public toPlainObject(): IPersonalProject {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      period: this.period,
      stack: this.stack,
      category: this.category,
      links: this.links,
      duration: this.duration,
      role: this.role,
      team: this.team,
      content: this.content,
      type: this.type,
    };
  }
}
