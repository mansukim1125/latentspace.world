import {IProject} from "@/interface/project/project.interface";
import {ProjectTypeEnum} from "@/interface/project/project-type.enum";

export class Project implements IProject {
  id: string;
  title: string;
  description: string;
  period: string;
  duration: string;
  role: string;
  team: string;
  stack: string[];
  links: { github: string; demo: string; docs: string; };
  type: ProjectTypeEnum;
  content: string;

  public constructor(param: IProject) {
    Object.assign(this, param);
  }

  public toPlainObject(): IProject {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      period: this.period,
      duration: this.duration,
      role: this.role,
      team: this.team,
      stack: this.stack,
      links: this.links,
      type: this.type,
      content: this.content,
    };
  }
}
