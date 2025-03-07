import { ICompany } from '@/interface/company/company.interface';

export class Company implements ICompany {
  id: string;
  name: string;
  period: string;
  position: string;
  team?: string | undefined;
  description: string;

  constructor(param: ICompany) {
    this.id = param.id;
    this.name = param.name;
    this.period = param.period;
    this.position = param.position;
    this.team = param.team;
    this.description = param.description;
  }

  toPlainObject(): ICompany {
    return {
      id: this.id,
      name: this.name,
      period: this.period,
      position: this.position,
      team: this.team,
      description: this.description,
    };
  }
}
