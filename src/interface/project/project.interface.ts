import {ProjectTypeEnum} from "@/interface/project/project-type.enum";

export interface IProject {
  id: string;
  title: string;
  description: string;
  period: string;
  duration: string;
  role: string;
  team: string;
  stack: string[];
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  },
  content: string;
  type: ProjectTypeEnum;
}
