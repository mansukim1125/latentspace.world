import { Profile } from '@/entity/profile/profile.entity';
import { IProfile } from '@/interface/profile/profile.interface';

const profileObj: IProfile = {
  name: '김민준',
  title: 'Senior Backend Developer / MSA Architect',
  summary:
    '8년차 백엔드 개발자로 대규모 커머스 플랫폼 설계와 구현에 전문성을 갖고 있습니다. 마이크로서비스 아키텍처 구축 및 최적화에 깊은 경험이 있으며, 대용량 트래픽 처리와 분산 시스템 설계를 통해 안정적인 서비스 운영에 기여해왔습니다. 새로운 기술 트렌드를 탐구하는 것을 즐기며, 복잡한 문제를 효율적으로 해결하는 것에 열정을 가지고 있습니다.',
  location: '서울, 대한민국',
  experience: '8+ years',
  avatar: undefined, // 실제 URL을 사용하거나 null로 이니셜을 표시할 수 있습니다
  skills: [
    'Java',
    'Spring Boot',
    'Kotlin',
    'MySQL',
    'MongoDB',
    'Redis',
    'Kafka',
    'Docker',
    'Kubernetes',
    'AWS',
    'MSA',
    'DDD',
    'CI/CD',
  ],
  keyMetrics: {
    projects: 14,
    experience: '8+ years',
    contributions: 520,
  },
  social: {
    github: 'https://github.com/minjunkim-dev',
    linkedin: 'https://linkedin.com/in/minjunkim-dev',
    email: 'minjun.kim@example.com',
  },
  badges: [
    'MSA 스페셜리스트',
    '백엔드 아키텍트',
    '성능 최적화 전문가',
    '분산 시스템 설계',
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
