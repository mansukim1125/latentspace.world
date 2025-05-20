import { IConfig } from '@/interface/config/config.interface';

const config: IConfig = {
  writingHero: {
    title: '글',
    description:
      '소프트웨어 개발과 일상을 기록.',
  },
  experienceHero: {
    title: '경험',
    description:
      '소프트웨어 개발 분야에서의 여러 가지 경험과 개인 프로젝트 모음.',
  },
};

export class ConfigService {
  private readonly config: IConfig;

  constructor() {
    this.config = config;
  }

  async getConfig() {
    return this.config;
  }
}
