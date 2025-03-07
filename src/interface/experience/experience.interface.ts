import { ICompany } from '@/interface/company/company.interface';
import { IProject } from '@/interface/project/project.interface';

export interface IExperience {
  company: ICompany | null;
  projects: IProject[];
}
