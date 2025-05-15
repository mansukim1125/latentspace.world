import { IRepository } from '@/interface/repository/repository.interface';
import { Company } from '@/entity/company/company.entity';
import { ICompany } from '@/interface/company/company.interface';

const companies: ICompany[] = [
  {
    id: 'nudge-healthcare',
    name: 'Nudge Healthcare Inc.',
    period: '2023.06 - Present',
    position: 'Backend Engineer',
    team: 'Back-end Team',
    description: '캐시워크, 팀워크, 캐시톡 서비스를 거쳐 현재는 글로벌 캐시워크, 모두의 챌린지의 백엔드 운영/개발/유지 보수를 책임지고 있습니다.',
  },
  {
    id: 'side-project',
    name: 'Side Project',
    period: '2023.01 - Present',
    position: 'Backend Developer',
    team: 'Personal Project',
    description: '사이드 프로젝트',
  },
  // ... 더 많은 회사 데이터
];

const companyOrder = ['nudge-healthcare', 'side-project'];

export class CompanyRepository implements IRepository<Company> {
  private readonly companies: ICompany[];
  private readonly companyOrder: (string | null)[];

  constructor() {
    this.companies = companies;
    this.companyOrder = companyOrder;
  }

  async findAll(): Promise<Company[]> {
    return this.companies.map((company) => new Company(company));
  }

  async findOne(id: string): Promise<Company | null> {
    const data = this.companies.find((company) => company.id === id);
    if (!data) return null;
    return new Company(data);
  }

  async findCompanyOrder() {
    return this.companyOrder;
  }
}
