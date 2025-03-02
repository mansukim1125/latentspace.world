import {IRepository} from "@/interface/repository/repository.interface";
import {Company} from "@/entity/company/company.entity";
import {ICompany} from "@/interface/company/company.interface";

const companies: ICompany[] = [
  {
    id: "company-a",
    name: "Tech Company A",
    period: "2023.01 - Present",
    position: "Senior Backend Developer",
    team: "Platform Team",
    description: "대규모 커머스 플랫폼 회사에서 백엔드 시스템 설계 및 개발",
  },
  {
    id: "company-b",
    name: "Tech Company B",
    period: "2023.01 - Present",
    position: "Senior Backend Developer",
    team: "Platform Team",
    description: "대규모 커머스 플랫폼 회사에서 백엔드 시스템 설계 및 개발",
  },
  // ... 더 많은 회사 데이터
];

const companyOrder = [
  'company-a',
  'company-b',
  undefined,
];

export class CompanyRepository implements IRepository<Company> {
  private readonly companies: ICompany[];
  private readonly companyOrder: (string | undefined)[];

  constructor() {
    this.companies = companies;
    this.companyOrder = companyOrder;
  }

  async findAll(): Promise<Company[]> {
    return this.companies.map(company => new Company(company));
  }

  async findOne(id: string): Promise<Company | undefined> {
    const data = this.companies.find(company => company.id === id);
    if (!data) return;
    return new Company(data);
  }

  async findCompanyOrder() {
    return this.companyOrder
  }
}
