import {IProject} from "@/interface/project/project.interface";

export interface IWorkProject extends IProject {
  id: string;
  title: string;
  description: string;
  period: string;
  stack: string[];
  achievements: string[];
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}
