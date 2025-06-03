import { Profile } from '@/entity/profile/profile.entity';
import { IProfile } from '@/interface/profile/profile.interface';

const profileObj: IProfile = {
  name: '김준석',
  title: 'Backend Engineer',
  summary:
    '💻 3년간의 백엔드 개발 경험을 통해 **사용자 문제 해결과 서비스 안정성 확보**에 집중하는 개발자입니다.\n' +
    '\n' +
    '## 💡 핵심 강점\n' +
    '\n' +
    '**문제 식별부터 해결까지** 체계적 접근으로 서비스 품질을 개선하며, **데이터 기반 의사결정**으로 기술적 솔루션을 비즈니스 성과로 연결합니다.\n' +
    '\n' +
    '특히 **사용자 행동 패턴 분석**을 통한 최적화와 **다양한 직군과의 협업**을 통해 개발 효율성을 극대화하는 것을 강점으로 합니다.\n' +
    '\n' +
    '현재 **Spring Boot, JPA, Kotlin** 학습을 통해 더 안정적이고 확장 가능한 시스템 설계 역량을 키우고 있습니다.\n' +
    '\n' +
    '## 🌟 주요 성과\n' +
    '\n' +
    '- **사용자 문제 해결 중심 최적화**\n' +
    '  - 카카오 공유 장애 시 사용자 행동 패턴 분석으로 API 호출량 94% 절감\n' +
    '  - 자정 트래픽 스파이크 대응으로 증가한 사용자에게 안정적 서비스 제공\n' +
    '\n' +
    '- **0-1 단계 B2B 서비스 구축**\n' +
    '  - DAU 300만 대상 대량 메시징 시스템 설계 및 런칭\n' +
    '  - PM 협업을 통한 확장 가능한 인터페이스 설계로 향후 발생할 수 있는 7일 개발 공수 절약\n' +
    '\n' +
    '- **레거시 시스템 개선 및 성능 최적화**\n' +
    '  - 모니터링 기반 병목 지점 분석으로 서버 CPU 42% 감소, 비용 99% 절감\n' +
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
