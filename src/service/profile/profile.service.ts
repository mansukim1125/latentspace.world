import { Profile } from '@/entity/profile/profile.entity';
import { IProfile } from '@/interface/profile/profile.interface';

const profileObj: IProfile = {
  name: '김준석',
  title: 'Backend Engineer',
  summary:
    '## 🚀 백엔드 개발자 경험\n' +
    '\n' +
    '💻 백엔드 개발자로서 **대규모 트래픽을 처리하는 시스템을 설계**하고 **운영 비용 최적화**에 기여한 경험이 있습니다.\n' +
    '\n' +
    '## 💡 기술적 관심사\n' +
    '\n' +
    'TypeScript와 NestJS를 활용한 확장 가능한 백엔드 시스템 설계에 관심이 있으며, 불필요하게 낭비되는 리소스 최적화에 강점이 있습니다.\n' +
    '\n' +
    '특히 대용량 트래픽을 안정적으로 처리하기 위한 분산 시스템 아키텍처와 비용-성능 두 마리 토끼를 잡는 효율적인 인프라 운영을 위해 지속적으로 고민하고 있습니다.\n' +
    '\n' +
    '최근에는 AI 를 활용한 제품을 만드는 데 관심이 있으며, 사이드 프로젝트 역시 생성형 AI 를 활용한 프로덕트 개발 경험이 있습니다.\n' +
    '\n' +
    '## 🌟 주요 성과\n' +
    '\n' +
    '- **대용량 메시징 시스템 구축**\n' +
    '  - AWS SQS와 Elastic Beanstalk Worker를 활용한 300만 DAU 메시지 발송 시스템 설계\n' +
    '  - 채널 메시지 발송을 통한 캐시톡 Active Users 160% 증가 달성\n' +
    '\n' +
    '- **행운 캐시 보내기 시스템 개발**\n' +
    '  - 메시지 발송 유저 수 985배 증가 (255명 → 251,098명)\n' +
    '  - 자정 트래픽 스파이크 관리를 위한 시간 기반 DynamoDB 스케일링 구현\n' +
    '  - 데이터 액세스 패턴에 따른 DynamoDB 데이터 모델링 및 쿼리 최적화\n' +
    '\n' +
    '- **서버 비용 최적화 및 성능 개선**\n' +
    '  - 배치 프로세싱 도입 및 Redis 캐싱으로 API 응답 시간 최대 67% 개선\n' +
    '  - 비효율적인 데이터베이스 쿼리 패턴 개선으로 서버 비용 50% 절감\n' +
    '  - API 호출 최적화로 외부 서비스 호출량 95% 이상 감소\n' +
    '\n',
  location: '서울, 대한민국',
  experience: '2+ years',
  avatar: 'https://footage.latentspace.world/production/images/1736699511171.png',
  skills: [
    'TypeScript',
    'NestJS',
    'Redis',
    'AWS',
    'AWS SQS',
    'Elastic Beanstalk Worker',
    'DynamoDB',
    'Index Optimization',
    'Query Optimization',
    'Batch Processing',
    'API 성능 최적화',
    '분산 시스템 설계',
    '대용량 트래픽 처리',
    '비용 최적화',
  ],
  keyMetrics: {
    projects: 17,
    experience: '2+ years',
  },
  social: {
    github: 'https://github.com/mansukim1125',
    email: 'mansukim1125@icloud.com',
  },
  badges: [
    '대규모 트래픽 처리',
    '서버 비용 최적화',
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
