import { Profile } from '@/entity/profile/profile.entity';
import { IProfile } from '@/interface/profile/profile.interface';

const profileObj: IProfile = {
  name: '김준석',
  title: 'Backend Developer',
  summary:
    '## 🚀 백엔드 개발자 경험\n' +
    '\n' +
    '💻 백엔드 개발자로서 대규모 트래픽을 처리하는 시스템을 설계하고 운영한 경험이 있습니다.\n' +
    '\n' +
    '### 🌟 주요 프로젝트\n' +
    '\n' +
    '- **캐시워크 for Business 채널**:\n' +
    '  - AWS SQS와 Elastic Beanstalk Worker를 활용한 대용량 메시징 시스템 구축\n' +
    '- **캐시딜 1,000원 쿠폰 프로모션**:\n' +
    '  - 1,700만 명의 사용자에게 원활한 쿠폰 지급을 위한 최적화 작업 수행\n' +
    '- **캐시워크 잠금화면 팀워크 아이콘 N 뱃지 표시 기능**:\n' +
    '  - Slow Query 문제 해결을 위한 MySQL Index 최적화 및 Query 구조 개선\n' +
    '  - Index Hint를 활용한 실행 계획 개선\n' +
    '  - RDS 성능 지표 분석을 통한 최적의 쿼리 구조 도출\n\n' +
    '\n' +
    '### 💡 기술적 관심사\n' +
    '\n' +
    'TypeScript와 NestJS 기반의 확장 가능한 아키텍처 설계를 지향하며, AWS 인프라 운영과 CI/CD 자동화에도 관심이 많습니다.',
  location: '서울, 대한민국',
  experience: '2+ years',
  avatar: undefined, // 실제 URL을 사용하거나 null로 이니셜을 표시할 수 있습니다
  skills: [
    'TypeScript',
    'NestJS',
    'Redis',
    'AWS',
    'AWS SQS',
    'Elastic Beanstalk Worker',
    'DynamoDB',
    'MySQL',
    'Index Optimization',
    'Query Optimization',
    'Slow Query Debugging',
    '트래픽 최적화',
    '쿠폰 지급 시스템',
  ],
  keyMetrics: {
    projects: 17, // 캐시워크 성능 최적화 프로젝트 추가 반영
    experience: '2+ years',
    contributions: 600, // 기여도 증가
  },
  social: {
    github: 'https://github.com/junseok-dev',
    linkedin: 'https://linkedin.com/in/junseok-dev',
    email: 'junseok.kim@example.com',
  },
  badges: [
    '쿼리 최적화',
    '확장 가능한 설계',
    'AWS 운영',
  ],
};

export class ProfileService {
  private readonly profile: Profile;

  constructor() {
    this.profile = new Profile(profileObj);
  }

  public async getProfile() {
    return this.profile;
  }
}
