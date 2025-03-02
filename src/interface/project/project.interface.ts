import {ILink} from "@/interface/link/link.interface";

export interface IProject {
  id: string; // NOTE: project 식별자. (e.g., url 에 프로젝트 ID)
  title: string; // NOTE: project 제목
  slug: string;
  excerpt: string; // NOTE: project 설명
  category: string;
  date: Date;
  content: string; // NOTE: markdown 문서

  period: string; // NOTE: 작업 기간. TODO: PeriodInterface 로 수정해야 함.
  duration: string;
  role: string;
  team: string;
  stacks: string[]; // NOTE: 기술 stack
  achievements: string[]; // NOTE: 핵심 성과
  links?: ILink,
  companyId?: string;

  // belongsTo: string;
}
