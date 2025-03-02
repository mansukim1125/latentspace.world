import {IProject} from "@/interface/project/project.interface";

export interface ICompany {
  id: string;
  name: string;
  period: string;
  position: string;
  team?: string;
  description: string;
}
