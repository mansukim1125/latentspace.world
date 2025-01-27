import {IProject} from "@/interface/project/project.interface";

export interface IPersonalProject extends IProject {
  id: string;
  title: string;
  description: string;
  period: string;
  stack: string[];
  category: 'open-source' | 'research' | 'experiment';
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}
