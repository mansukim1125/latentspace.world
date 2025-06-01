import { Profile } from '@/entity/profile/profile.entity';
import { IProfile } from '@/interface/profile/profile.interface';

const profileObj: IProfile = {
  name: '김준석',
  title: 'Backend Engineer',
  summary:
    '💻 3년간의 백엔드 개발 경험을 통해 **사용자 가치 창출과 비즈니스 목표 달성**에 집중하는 개발자입니다.\n' +
    '\n' +
    '## 💡 핵심 강점\n' +
    '\n' +
    '**초기 단계 서비스 구축부터 확장까지** 전체 라이프사이클을 경험했으며, **데이터 기반 의사결정**으로 서비스 안정성과 성능을 개선합니다.\n' +
    '\n' +
    '특히 **다양한 직군과의 협업**을 통해 기술적 솔루션을 비즈니스 성과로 연결하는 것을 강점으로 하며, PM/기획팀과의 전략적 협업으로 개발 효율성을 극대화합니다.\n' +
    '\n' +
    '## 🌟 주요 성과\n' +
    '\n' +
    '- **B2B 채널 확장 전략 실현**\n' +
    '  - DAU 300만 대상으로 한 B2B 홍보 채널 서비스(캐시워크 for Business 채널)를 설계 및 런칭\n' +
    '  - 신규 방문 유저 49% 증가로 고객사 대상 채널 가치 증명\n' +
    '\n' +
    '- **사용자 참여도 최적화 시스템**\n' +
    '  - 유저 촉진 기반 행운 캐시 시스템으로 메신저 DAU 207% 증가\n' +
    '  - 메시지 발송 유저 985배 급증 (255명 → 251,098명)\n' +
    '  - DynamoDB 트랜잭션 관리 및 AWS Auto Scaling으로 안정적 서비스 운영\n' +
    '\n' +
    '- **서비스 안정성 및 성능 최적화**\n' +
    '  - 외부 API 호출량 94% 절감으로 서비스 장애 완전 해결\n' +
    '  - 서버 CPU 사용률 42% 감소, API 응답시간 45% 단축\n' +
    '  - 1년간 미해결 레거시 문제를 6시간 만에 해결하여 서비스 런칭 성공\n' +
    '\n',
  location: '서울, 대한민국',
  experience: '3 years',
  avatar: 'https://footage.latentspace.world/production/images/1736699511171.png',
  skills: [
    'Node.js',
    'TypeScript',
    'DynamoDB',
    'MySQL',
    'Redis',
    'AWS (EC2, Lambda, SQS)',
    'Datadog',
    'CloudWatch',
    '레거시 시스템 개선',
    '대규모 시스템 설계',
    '성능 최적화',
    '다양햔 직군과 협업',
    '새로운 기술을 빠르게 익힘',
  ],
  keyMetrics: {
    experience: '3 years',
  },
  social: {
    github: 'https://github.com/mansukim1125',
    email: 'mansukim1125@icloud.com',
  },
  badges: [],
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
