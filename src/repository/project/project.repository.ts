import { Project } from '@/entity/project/project.entity';
import { IProject } from '@/interface/project/project.interface';
import { IRepository } from '@/interface/repository/repository.interface';

const projects: IProject[] = [
  {
    id: 'cashwalk-for-business',
    title: '캐시워크 for Business 채널 프로젝트',
    slug: 'cashwalk-for-business',
    excerpt:
      '300만 DAU를 위한 채널 메시지 시스템 구축 프로젝트',
    category: '기능 개발',
    date: new Date('2023-11'),
    period: '2023-11 ~ 2024-02',
    duration: '3 months',
    role: 'Backend Engineer',
    team: '캐시톡-메신저',
    stacks: ['AWS SQS', 'Elastic Beanstalk Worker', 'Redis', 'Node.js', 'Nest.js'],
    links: {
      github: '',
      demo: '',
      docs: '',
    },
    companyId: 'nudge-healthcare',
    achievements: [
      '300만 DAU 트래픽 처리를 위한 SQS 기반 분산 메시지 시스템 구축',
      '캐시톡 Active Users 160% 증가',
      '온보딩 전환율 30.35% 달성',
      '인구 정보 기반 메시지 발송 기능을 사전에 개발함으로서 최소 7일 공수 절감',
    ],
    content: '## 작업 내용\n' +
      '\n' +
      '### [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) for Business 채널이란?\n' +
      '\n' +
      '"[캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) for Business 채널"은 [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4)와 계약을 맺은 외부 업체가 채널을 개설하여 [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) 내 채팅 서비스인 "[캐시톡](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4)"에서 채널 메시지를 발송할 수 있는 서비스입니다.\n' +
      '(카카오 비즈니스의 "채널 메시지" 기능을 떠올리시면 쉽습니다.)\n' +
      '\n' +
      '### 채널 메시지란?\n' +
      '\n' +
      '채널 메시지는 외부 계약 업체와 [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) 사용자들 간 소통할 수 있는 채팅방으로 전송되는 메시지를 의미합니다.\n' +
      '\n' +
      '[캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) for Business 채널에서 발송할 수 있는 메시지의 종류는 다음과 같습니다:\n' +
      '\n' +
      '- 웰컴 메시지: 채널 구독 시 채널에서 사용자에게 발송하는 메시지\n' +
      '- 일반 메시지: 채널에서 특정 사용자 그룹(OS, 성별, 연령대)에게 발송하는 메시지\n' +
      '    \n' +
      '    ![일반 메시지 예시{400x}](https://dfxspjge1zm8u.cloudfront.net/production/images/IMG_0939.PNG.png)\n' +
      '    \n' +
      '\n' +
      '## 정량적 성과\n' +
      '\n' +
      '### [캐시톡](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) 유저 활성화에 기여 (“일반 메시지” 발송 이후: 2024-09-04)\n' +
      '\n' +
      '- [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) “[돈버는 미션](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4)” 홍보 일반 메시지 발송 이후 캐시톡 Active Users 급증\n' +
      '  - **일주일 전 동요일 대비 160% 증가**\n' +
      '- [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) → 캐시톡 신규 방문 유저 급증\n' +
      '\n' +
      '![\'돈버는 미션\' 일반 메시지{400x}](https://dfxspjge1zm8u.cloudfront.net/production/images/IMG_0939.PNG.png)\n' +
      '\n' +
      '[캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) “돈버는 미션” 일반 메시지\n' +
      '\n' +
      '## 설계 설명\n' +
      '\n' +
      '(설계 설명 문서는 Notion 으로..)\n' +
      '\n' +
      '[설계](https://achieved-ferry-82f.notion.site/14409aac66678053ac15e6661fd1f4f8?pvs=4)\n' +
      '\n' +
      '## 기술적 과제\n' +
      '\n' +
      '### **대용량 트래픽 처리**\n' +
      '\n' +
      '- 한국 [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) 기준 DAU 300만 명의 사용자에게 안정적으로 [웰컴 메시지](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4)를 전송해야 하는 과제가 있었습니다.\n' +
      '    - **요구 사항: 유저가 [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) 홈에 진입하면 웰컴 메시지 발송**\n' +
      '- 이를 해결하기 위해 AWS SQS Standard Queue 를 활용하여 웰컴 메시지 및 일반 메시지를 분산 처리하였습니다.\n' +
      '\n' +
      '### 메시지 발송 및 예약 발송 기능\n' +
      '\n' +
      '- Elastic Beanstalk Worker 환경을 구축하여 **웰컴 메시지 발송 및 일반 메시지 예약 발송 기능**을 구현하였습니다.\n' +
      '- Redis를 이용해 **메시지 발송 성공/실패 횟수를 측정**하고, **발송 현황을 실시간으로 파악할 수 있도록** 구현했습니다.\n' +
      '\n' +
      '### **추후 공수를 줄이기 위한 선제적 개발**\n' +
      '\n' +
      '- 초기에는 “인구 정보(demography) 기반 메시지 전송 기능”이 추후 개발 예정 항목으로 분류되었으나, 이를 미리 구현하여 개발 공수를 절약할 수 있었습니다.\n' +
      '- 이 작업으로 인해 추후 [캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) 전체 유저를 대상으로 사용자가 구독한 키 값 분리 작업을 대규모로 수행하지 않아도 되도록 했습니다.\n' +
      '\n' +
      '### **상용 배포 시 어려움**\n' +
      '\n' +
      '- 정해진 릴리즈 일자를 준수하기 위해 유저 의존성이 없는 항목을 우선하여 상용 배포하여 배포 소요 시간을 단축할 수 있었습니다. (60분 → 30분)\n' +
      '    - 유저가 사용하지 않는 백오피스 서버를 유저 단 API 서버와 함께 배포함으로서 배포 소요 시간 단축\n' +
      '\n' +
      '## 작업하면서 어려웠던 점\n' +
      '\n' +
      '### 상용 배포 이후 모니터링 과정에서 발견된 문제들\n' +
      '\n' +
      '**구독 가능한 채널의 토픽 수가 초과되는 문제**\n' +
      '\n' +
      '**[ 문제 배경 ]**\n' +
      '\n' +
      '[캐시워크](https://www.notion.so/for-Business-1f209aac666780948f34f52b2dfaac2c?pvs=4) 공식 채널은 채널 채팅방 그룹당 최대 10,000명의 유저를 수용하도록 설계되었으나, 구독자가 증가하면서 그룹 번호가 부족해 일부 유저의 구독이 실패하는 문제가 발견되었습니다.\n' +
      '\n' +
      '- 채널 채팅방 그룹이란: 기본 채팅방 ID(e.g., `ch:342:android:m:1994`) 뒤에 숫자(그룹 번호)를 붙여 유저를 분산하여 구독 처리하는 방식\n' +
      '- 한 그룹 번호 당 10,000명을 수용하며, 초기에는 그룹 번호를 :0 ~ :9로 설정(총 100,000명까지 수용 가능).\n' +
      '    - 예시: `ch:342:android:m:1994:0`\n' +
      '\n' +
      '**[ 발생 상황 ]**\n' +
      '\n' +
      '- 채널 구독자가 100,000명을 초과하면서 존재하지 않는 그룹 번호 `:10` 이상에 대한 구독 시도가 발생하였습니다.\n' +
      '- 이로 인해 **구독 실패 유저 증가** 및 일부 유저의 채널 메시지 수신 불가 문제가 발생하였습니다.\n' +
      '\n' +
      '**[ 해결 방안 ]**\n' +
      '\n' +
      '1. **신규 구독 유저를 임시로 모아둘 Queue 생성**\n' +
      '    1. 신규 채널 구독 요청을 처리할 수 없으므로, 신규 채널 구독 요청을 모아둘 임시 Queue 를 생성합니다.\n' +
      '2. **메신저 서버의 채널 채팅방 그룹 확장**\n' +
      '    1. 이어서 메신저 서버 측에서 수용 가능한 그룹을 기존 10개에서 50개로 추가 개설합니다. (최대 500,000 명 구독 가능)\n' +
      '3. **구독 실패 유저 데이터 정리**:\n' +
      '    1. 한국 캐시워크 서버에서는 실패한 구독 데이터(구독된 그룹 번호가 11 이상인 유저의 구독 데이터)를 삭제 후, 새 그룹 번호로 재구독할 수 있도록 조치합니다.\n' +
      '        1. 캐시워크 메인 진입 시 자동으로 신규 구독 처리됨\n' +
      '4. **구독 Worker 재시작**: 최종적으로 새로운 유저들이 채널을 구독할 수 있도록 임시 Queue를 Worker 서버와 연결\n' +
      '    1. 임시 Queue 에 쌓여 있던 구독 요청이 해소되면서 채널 구독이 진행됨\n' +
      '\n' +
      '### **사업적인 방향성을 고려한 설계**\n' +
      '\n' +
      '- 초기 기획은 “캐시워크 공식 채널” 로, 캐시워크 ***내부 서비스에 대한 홍보 채널로써의 기능***만을 하는 기획이었음\n' +
      '- 하지만, PM 님과 소통하면서 해당 기능은 캐시워크 내부에서만 사용되는 것이 아니라 ***외부 업체와의 계약을 통한 홍보 매체로 활용***될 수 있는 기능이라는 결론을 내렸고\n' +
      '- 이에 따라 신규 채널을 개설하면 캐시워크 for Business 채널 기능을 활성화할 수 있도록 하는 인터페이스를 미리 개발함\n' +
      '\n' +
      '## 아쉬웠던 점 및 향후 방향\n' +
      '\n' +
      '### 로깅을 조금 더 꼼꼼히 남길 걸..\n' +
      '\n' +
      '- 메시지 전송 도중에 문제가 발생할 수 있는 지점을 식별하여 로그를 심어두었어야 했음\n' +
      '- 일반 메시지 전송 시 현재 전송중인 채널 채팅방 ID를 로깅하여 개발 단에서 확인하고 문제 발생 시 즉각적으로 대응할 수 있도록 개발했어야 한다고 생각한다.\n' +
      '- 특히 외부 업체와의 계약으로 채널을 개설하고 메시지를 발송하는 경우 이러한 부분이 더욱 중요하다.\n' +
      '    - 문제 발생 시 언제든지 메시지 발송을 중단할 수 있는 메커니즘이 필요하다고 생각..'
  },
  {
    "id": "cashwalk-lucky-cash",
    "title": "행운 캐시 보내기: 단순히 캐시를 선물하는 기능에서 랜덤 캐시 뽑기 기능으로의 변화",
    "slug": "cashwalk-lucky-cash",
    "excerpt": "DAU 207% 증가와 사용자 참여 985배 향상을 이끌어낸 행운 캐시 시스템 개발",
    "category": "기능 개발",
    "date": new Date(),
    "period": "2023-08 ~ 2023-11",
    "duration": "4 months",
    "role": "Backend Engineer",
    "team": "캐시톡-메신저",
    "stacks": ["DynamoDB", "Node.js", "Firebase Dynamic Links", "AWS CLI", 'AWS Lambda'],
    "links": {
      "github": "",
      "demo": "",
      "docs": ""
    },
    "companyId": "nudge-healthcare",
    "achievements": [
      "메시지 발송 유저 수 255명 → 251,098명 (약 985배 증가)",
      "캐시 전환율(수령 후 재발송 비율) 54% → 91% (68% 증가)",
      "일일 활성 사용자(DAU) 13만 → 40만 (207% 증가)",
      "미활동 유저 6,869명 재활성화",
      "시간 기반 DynamoDB 스케일링을 통한 자정 트래픽 스파이크 관리"
    ],
    content:
      '## 프로젝트 개요\n' +
      '\n' +
      '기존 캐시워크 앱의 친구 간 30 캐시 고정 보상 시스템을 재 개발하여, 랜덤 보상과 시간 제한이 결합된 \'행운 캐시\' 시스템으로 개편했습니다. \n\n이 프로젝트에서 DynamoDB 설계부터 대용량 트래픽을 견디는 백엔드 아키텍처를 구현하였습니다.' +
      '\n\n' +
      '특히 자정 시점의 트래픽 스파이크에 대응하는 스케일링 시스템과 복잡한 NoSQL 데이터 모델링을 처음으로 실제 프로덕션 환경에 적용한 경험이었습니다.' +
      '\n' +
      '## 주요 목표\n' +
      '\n' +
      '이 프로젝트의 핵심 목표는 다음과 같았습니다:\n' +
      '\n' +
      '1. **사용자 참여도 증가**: 고정 보상(30 캐시)을 랜덤 보상으로 전환하여 사용자 참여 유인 강화\n' +
      '2. **앱 일일 활성 사용자(DAU) 증가**: 매일 자정 리셋되는 캐시 발송 제한과 시간 만료 메커니즘을 통하여 매일 접속 유도\n' +
      '3. **휴면 계정 재활성화**: 특별 보상과 자동화된 알림 시스템(유저 활성화 목적)을 통한 장기 미접속 사용자 복귀 촉진\n' +
      '\n' +
      '## 핵심 기능\n' +
      '\n' +
      '### 매일 100명의 친구에게 발송\n' +
      '- 매일 최대 100명의 친구에게 행운 캐시 발송 가능\n' +
      '- 발송 횟수는 매일 자정에 초기화\n' +
      '- 동일 친구에게는 하루 1회만 발송 가능\n' +
      '![친구 목록 화면. 친구 이름은 개인 정보로 가렸습니다!{400x}](https://footage.latentspace.world/production/images/%E1%84%8E%E1%85%B5%E1%86%AB%E1%84%80%E1%85%AE_%E1%84%86%E1%85%A9%E1%86%A8%E1%84%85%E1%85%A9%E1%86%A8.png)' +
      '\n' +
      '### 랜덤 보상 시스템\n' +
      '- 슬롯 머신 형태의 뽑기 방식으로 캐시 수령\n' +
      '- 3개의 동일한 금액이 나오면 해당 금액 당첨\n' +
      '- 다양한 금액대의 랜덤 보상\n' +
      '![500 캐시 당첨{400x}](https://footage.latentspace.world/production/images/%E1%84%8F%E1%85%A2%E1%84%89%E1%85%B5_%E1%84%83%E1%85%A1%E1%86%BC%E1%84%8E%E1%85%A5%E1%86%B7.png)' +
      '\n' +
      '### 미활동 계정 활성화 알림톡 발송\n' +
      '- 오랜 기간 미접속 사용자 로그인 시 1,000 캐시 특별 보상\n' +
      '- 재방문 유도를 위한 SMS/카카오톡 자동 알림 발송\n' +
      '- Dynamic Link 를 통한 원활한 사용자 경험 제공 (현재는 지원 중단된..)\n' +
      '![카카오 알림톡{400x}](https://footage.latentspace.world/production/images/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9_%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B7%E1%84%90%E1%85%A9%E1%86%A8.png)' +
      '\n' +
      '### 시간 제한 시스템\n' +
      '- 발송된 캐시는 당일 자정까지만 유효\n' +
      '- 자정 이내 미수령 시 자동 소멸\n' +
      '\n' +
      '## 성과\n' +
      '\n' +
      '구현 후 다음과 같은 성과를 달성했습니다:\n' +
      '\n' +
      '- **메시지 발송 유저 수**: 255명 → 251,098명 (약 985배 증가)\n' +
      '- **캐시 전환율(수령 후 재발송)**: 54% → 91% (68% 증가)\n' +
      '- **메신저 일일 활성 사용자(DAU)**: 13만 → 40만 (207% 증가)\n' +
      '- **재활성화된 휴면 계정**: 6,869명\n' +
      '\n' +
      '## 기술 스택\n' +
      '\n' +
      '- **백엔드**: Node.js, Nest.js, AWS Lambda (행운 캐시 통계 산출용)\n' +
      '- **데이터베이스**: DynamoDB\n' +
      '- **알림 시스템**: Firebase Dynamic Links, Solapi (카카오톡 메시지 API, SMS)\n' +
      '\n' +
      '## 기술적 도전과 해결책\n' +
      '\n' +
      '### 1. 자정 트래픽 스파이크 관리\n' +
      '\n' +
      '자정이 되면 사용자들이 캐시를 보내려고 일제히 앱에 접속하여 DynamoDB 테이블 읽기/쓰기 사용량이 급증하는 현상이 발생하였습니다.\n' +
      '![DynamoDB Throttle 발생 -> Incremental Retry{600x}](https://footage.latentspace.world/production/images/ddb_incremental_retry.png)' +
      '\n' +
      '**해결책**\n' +
      '- AWS CLI를 통한 시간 기반 스케일링 정책을 구현하였습니다.\n' +
      '- 자정 15분 전부터 자정 1시간 후까지 프로비저닝 용량을 자동으로 증가하도록 설정하였습니다.\n' +
      '![시간 지정 Scale 정책 추가{600x}](https://footage.latentspace.world/production/images/ddb_spike.png)' +
      '\n' +
      '```javascript\n' +
      '// 시간 기반 DynamoDB 스케일링 정책 설정 예시\n' +
      'const scheduledScaling = {\n' +
      '  beforeMidnight: {\n' +
      '    startTime: \'23:45\',\n' +
      '    readCapacity: 2000,\n' +
      '    writeCapacity: 1000\n' +
      '  },\n' +
      '  afterMidnight: {\n' +
      '    startTime: \'00:00\',\n' +
      '    endTime: \'01:00\',\n' +
      '    readCapacity: 3000,\n' +
      '    writeCapacity: 1500\n' +
      '  }\n' +
      '};\n' +
      '```\n' +
      '\n' +
      '### 2. DynamoDB 데이터 모델링\n' +
      '\n' +
      'MySQL과 달리 DynamoDB는 Partition Key와 Sort Key만으로 인덱스를 구성해야 하는 제약이 있습니다.\n' +
      '\n' +
      'DynamoDB 설계는 [이 페이지](https://www.notion.so/1f409aac666780edae4ec07c5029aa0e?pvs=4)에서 더 자세히 확인하실 수 있습니다.\n' +
      '\n' +
      '**해결책**\n' +
      '- 행운 캐시 기능을 분석하고 액세스 패턴 기반으로 키 구조를 설계하였습니다.\n' +
      '- 다양한 패턴의 조회를 할 수 있도록 GSI 인덱스를 구성하였습니다.\n' +
      '\n' +
      '```javascript\n' +
      '// 행운 캐시 테이블 키 구조 예시\n' +
      '{\n' +
      '  "from.to": "user123.user456",\n' +
      '  "date": "2024-12-15T14:30:00.000Z",\n' +
      '  "from": "user123",\n'+
      '  "to": "user456",\n' +
      '  "isReceiverActive": true,\n' +
      '  "receivedAmount": 500,\n' +
      '  "receivedType": "WIN_CASH",\n' +
      '  "receivedAt": "2024-12-15T15:10:25.000Z",\n' +
      '  "previousVersion": false\n' +
      '}\n' +
      '```\n' +
      '\n' +
      '### 3. 앱을 사용하지 않는 유저를 다시 활성화 하기 위해 Dynamic Link를 구현\n' +
      '\n' +
      '앱을 사용하지 않는 사용자를 앱으로 효과적으로 유도할 수 있는 유입 경로가 필요하였고, 이를 해결하기 위해 행운 캐시를 보낼 때 카카오 알림톡(또는 SMS) 를 같이 발송하도록 하였습니다.\n' +
      '\n' +
      '**해결책**\n' +
      '- Firebase Dynamic Links 활용한 서버 측 딥링크 생성 기능을 구현\n' +
      '- 카카오톡/SMS 알림과 통합하여 효율적인 사용자 재유입 경로 제공\n' +
      '\n' +
      '## 배운 점\n' +
      '\n' +
      '### 기술적 측면\n' +
      '\n' +
      '1. **NoSQL 데이터 모델링**: 관계형 DB와 다른 DynamoDB의 접근 방식을 이해하고, 쿼리 패턴에 최적화된 설계를 학습했습니다.\n' +
      '\n' +
      '2. **트래픽 관리**: 예측 가능한 부하 증가(자정 스파이크)에 대한 자동화된 대응책을 적용하여 예측 가능한 대규모 부하를 관리하는 노하우를 익혔습니다.\n' +
      '\n' +
      '## 회고와 개선점\n' +
      '\n' +
      '프로젝트가 전반적으로 성공적이었지만, 몇 가지 개선할 수 있는 부분이 있었습니다:\n' +
      '\n' +
      '1. **사전 부하 테스트**: 자정 스파이크에 발생하는 고부하를 사전에 예상했었다면 초기 몇 일간 자정 시간대에 발생한 성능 이슈를 예방할 수 있었을 것입니다.\n' +
      '\n' +
      '2. DynamoDB 테이블 구조 설계:\n' +
      '  - GSI(Global Secondary Index) 를 만들 때 모든 속성을 포함하여 만들었습니다. 이렇게 하니 DDB 에 PutItem 시 모든 인덱스에 Throttle 이 발생하는 문제가 있었고,\n' +
      '  - 인덱스에 사용되지 않을 데이터까지 불필요하게 저장하도록 하였습니다.\n' +
      '  - 당시에는 DynamoDB 가 어떤 특성을 갖는 DB 인지를 알지 못해 이렇게 개발했지만..,\n' +
      '  - GSI 는 사실상 또 다른 테이블과 같기 때문에 쿼리 패턴 측면에서 보다 면밀한 고려가 필요했음을 배울 수 있었습니다.\n' +
      '\n' +
      '## 결론\n' +
      '캐시워크의 행운 캐시 보내기 기능은 기술적으로도 도전적인 프로젝트였으며, 비즈니스 성과 역시 명확하게 드러난 작업이었다고 생각합니다.\n' +
      '\n' +
      '이 프로젝트를 통해 저는 DynamoDB의 효율적인 데이터 모델링과 대규모 트래픽 처리를 위한 확장성 있는 시스템 설계 능력을 크게 향상시켰습니다. 특히 자정 시점의 트래픽 스파이크 관리는 예측 가능한 부하 증가에 대응하는 클라우드 아키텍처 최적화의 중요성을 실감하는 계기가 되었습니다.\n' +
      '\n' +
      '서버와 클라이언트 간의 API 설계와 의사소통 과정에서의 경험은 기술적 결정이 개발 효율성과 시스템 성능에 미치는 영향을 균형 있게 판단하는 능력을 기르는 데 큰 도움이 되었습니다. 이런 경험은 향후 더 복잡한 백엔드 시스템을 설계하고 구현하는 데 있어 소중한 기반이 될 것이라 생각합니다.',


  },
  {
    id: 'distributed-websocket-incident',
    title: '분산 WebSocket 시스템의 연쇄 장애 해결: 복합적 원인 추적과 해결 과정',
    slug: 'distributed-websocket-incident',
    excerpt: '복잡한 분산 시스템에서 발생한 장애의 근본 원인 발견부터 다층적 해결까지의 기술적 여정',
    category: '장애 대응',
    date: new Date('2024-03'),
    period: '2024-03 ~ 2024-04',
    duration: '1 week',
    role: 'Backend Engineer',
    team: '캐시톡-메신저',
    stacks: [
      'Node.js',
      'Socket.io Redis Adapter',
      'ElastiCache',
      'AWS CodeBuild',
      'Prisma ORM',
    ],
    links: { github: '', demo: '', docs: '' },
    companyId: 'nudge-healthcare',
    achievements: [
      'Node.js 프로세스 안정성 확보 (빌드-운영 환경 아키텍처 일치)',
      'Socket.io Redis Adapter 최적화로 PubSub 트래픽 감소',
      'Redis NetworkOutAllowanceExceeded 지표 정상화',
      '대규모 분산 시스템 디버깅 역량 향상',
    ],
    content:
      '## 문제 상황\n' +
      '\n' +
      '2024년 3월 말, 캐시톡 메신저 서비스에서 약 일주일간 메시지가 보내지지 않는 심각한 장애가 발생하였습니다. 채팅 서버를 이루는 여러 구성 요소(EC2, Socket.io, Redis)에 걸친 복합적 장애 상황이었고, 본 글은 장애의 근본 원인을 찾아내고 해결하는 과정을 담았습니다.\n' +
      '\n' +
      '## 기술 스택 및 아키텍처\n' +
      '\n' +
      '메신저 서버는 다음과 같은 구성으로 운영되고 있었습니다.\n' +
      '\n' +
      '- **서버 구조**: 로드 밸런서 뒤에 여러 EC2 인스턴스가 배포된 분산 서버 구조\n' +
      '- **통신 방식**: WebSocket(Socket.io) 기반 실시간 채팅 기능\n' +
      '- **WebSocket 연결 상태 관리**: Redis Cluster의 PubSub 기능을 활용한 WebSocket 연결 상태 관리\n' +
      '\n' +
      '## 장애 상황과 초기 대응\n' +
      '\n' +
      '### 발견된 증상\n' +
      '- 캐시워크 행운 캐시 기능의 지연 시간(Latency)과 오류율(Error rate) 급증\n' +
      '- 캐시톡 메시지 전송 및 수신 과정에서 오류 발생 및 지연 시간 증가\n' +
      '- Redis 모니터링에서 `NetworkOutAllowanceExceeded` 지표의 급격한 상승\n' +
      '\n' +
      '### 초기 대응 및 한계\n' +
      '처음에는 Redis의 `NetworkOutAllowanceExceeded` 지표 급증을 보고 단순히 리소스 부족으로 판단하여 Redis 인스턴스 스케일업을 진행했습니다.\n' +
      '\n' +
      '이로 인해 일시적으로 증상이 완화되었으나, 곧 동일한 문제가 재발했습니다.\n' +
      '\n' +
      '이 과정에서 **_표면적 증상 완화가 근본 원인 해결을 의미하지 않는다_**는 교훈을 얻게 되었습니다.\n' +
      '![급 상승하는 NetworkOutAllowanceExceeded 지표](https://footage.latentspace.world/production/images/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202024-04-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.25.52.png)' +
      '\n' +
      '## 1주일 풀-야근의 시작: 분산 채팅 시스템(메신저)의 장애 근본 원인 분석\n' +
      '\n' +
      '이 문제는 다음과 같은 이유로 진단과 해결이 특히 어려웠습니다.\n' +
      '\n' +
      '1. **원인과 결과 사이의 거리가 멈**: 겉으로 보이는 증상(Redis 네트워크 과부하)과 실제 원인(네이티브 모듈 아키텍처 불일치) 사이에 5단계의 인과관계가 존재했습니다.\n' +
      '2. **분산 환경에서의 복잡한 상호작용**: Socket.io Redis Adapter의 동작 방식과 Redis PubSub 메커니즘 간의 상호작용을 심층적으로 이해해야 했습니다.\n' +
      '\n' +
      '## 심층 분석 및 근본 원인 발견\n' +
      '\n' +
      '### WebSocket 연결 관리 메커니즘 (Socket.io Redis Adapter) 분석\n' +
      '\n' +
      '로그 확인 결과, 아래 오류가 다수 발생하여 아래 로그가 발생하는 지점부터 분석을 시작했습니다.\n' +
      '```text\n' +
      'timeout reached while waiting for fetchSockets response\n' +
      '```\n' +
      '\n' +
      '위 에러는 사용자의 WebSocket 연결 처리를 담당하는 `handleConnection` 메소드 > `fetchSockets` 에서 발생하고 있었습니다.\n' +
      '\n' +
      'fetchSockets 의 역할은, 기존에 유저가 연결된 WebSocket 연결이 있었는지 확인하는 역할을 합니다.\n' +
      '\n' +
      '이를 사용한 목적은, 유저가 앱을 비정상 종료하는 등 WebSocket 연결이 정상적으로 종료되지 않았을 때 이를 종료하고자 사용하였습니다.\n' +
      '\n' +
      '```typescript\n' +
      'async handleConnection(@ConnectedSocket() socket: SocketWithUserData) {\n' +
      '  try {\n' +
      '    const token = socket.handshake.query.access_token as string;\n' +
      '    const user = await this.authService.verifyAndUpsertUser(token);\n' +
      '\n' +
      '    // 오래된 기존 연결 확인\n' +
      '    const oldSocketId = await this.redis.get(`${user.owner}`);\n' +
      '    if (oldSocketId !== null) {\n' +
      '      // fetchSockets\n' +
      '      const remoteSockets = await this.server.in(oldSocketId).fetchSockets();\n' +
      '      // ... 이후 처리 로직\n' +
      '    }\n' +
      '  } catch (error) {\n' +
      '    // 오류 처리\n' +
      '  }\n' +
      '}\n' +
      '```\n' +
      '\n' +
      'fetchSockets 메소드의 내부 동작을 분석한 결과, 다음과 같은 중요한 발견을 할 수 있었습니다.\n' +
      '\n' +
      '[[자세한 fetchSockets 동작 원리 확인하기!]](https://www.notion.so/fetchSockets-1f209aac666780ee9d7ff61add7bc0b7?pvs=4)' +
      '\n' +
      '1. **분산 서버 인스턴스의 PubSub 메커니즘**\n' +
      '   - `fetchSockets`는 Redis PubSub을 통해 모든 서버 인스턴스에 Socket 연결 가져오기 요청을 브로드캐스트하고, 각 서버 인스턴스가 메모리 상에 보유한 소켓 객체 리스트 응답을 기다립니다.\n' +
      '   - 기존에 유저가 어느 서버 인스턴스에 WebSocket 이 연결되었는지를 알지 못하기 때문입니다.\n' +
      '\n' +
      '2. **응답을 모두 받았는지 확인하는 로직**\n' +
      '   - Socket.io Redis Adapter는 내부적으로 `serverCount`(전체 서버 인스턴스 수)와 `msgCount`(`fetchSockets` 요청에 대해 응답받은 메시지 수)를 비교하여 모든 서버로부터 응답이 왔는지 확인합니다.\n' +
      '\n' +
      '3. **Timeout 에러**\n' +
      '   - 5초 내에 모든 서버로부터 응답이 오지 않으면(`msgCount < serverCount`) 해당 `fetchSockets` 요청은 reject됩니다.\n' +
      '\n' +
      '### 연쇄 장애의 발생 메커니즘\n' +
      '\n' +
      '서버 로그 심층 분석과 Socket.io와 Redis Adapter의 내부 구현 코드 검토를 통해 다음과 같은 연쇄 장애 메커니즘을 발견했습니다.\n' +
      '\n' +
      '1. **네이티브 모듈 아키텍처 불일치**\n' +
      '   - buildspec.yml 에서 node_modules가 빌드 결과물에 포함되었고, 이것이 그대로 상용 환경으로 흘러들어가 빌드 환경(Intel)에서 컴파일된 Prisma(ORM 라이브러리) 바이너리가 운영 환경의 아키텍처(Arm)와 불일치했습니다.\n' +
      '\n' +
      '2. **Node 프로세스 지속적 종료**\n' +
      '   - 이로 인해 다음과 같은 v8 엔진 오류가 발생하며 Node 프로세스가 반복적으로 종료되었습니다.\n' +
      '   ```\n' +
      '   FATAL ERROR: EscapableHandleScope::Escape Escape value set twice\n' +
      '   FATAL ERROR: Context::GetNumberOfEmbedderDataFields Not a native context\n' +
      '   ```\n' +
      '\n' +
      '3. **Socket.io 요청 실패**\n' +
      '   - Node 프로세스가 비정상 종료되면서 `fetchSockets` 요청에 대한 응답이 누락되었고, `msgCount < serverCount` 상태가 지속되어 타임아웃(`reject`)이 발생하게 되었습니다.\n' +
      '   ```\n' +
      '   timeout reached while waiting for fetchSockets response\n' +
      '   ```\n' +
      '\n' +
      '4. **클라이언트 재시도 증가**\n' +
      '   - 연결이 끊어진 클라이언트들이 정상적인 재연결 시도 매커니즘에 따라 재연결을 시도했습니다.\n' +
      '\n' +
      '5. **Redis PubSub 트래픽 폭증**\n' +
      '   - 재연결 시도마다 새로운 `fetchSockets` 요청이 발생하여 Redis PubSub 채널의 트래픽이 크게 증가했습니다.\n' +
      '![Redis PubSubBasedCmds 증가](https://footage.latentspace.world/production/images/pubsubbasedcmds.png)' +
      '\n' +
      '6. **Redis 네트워크 대역폭 초과**\n' +
      '   - 결과적으로 Redis 노드 간 통신에 사용되는 네트워크 대역폭이 초과되어 `NetworkOutAllowanceExceeded` 지표가 급상승했습니다.\n' +
      '![급 상승하는 NetworkOutAllowanceExceeded 지표](https://footage.latentspace.world/production/images/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202024-04-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.25.52.png)' +
      '\n' +
      '## 적용한 해결 방안\n' +
      '\n' +
      '### 1. 근본 원인 해결: 빌드 환경과 운영 환경의 일치성 확보\n' +
      '\n' +
      'buildspec.yml 을 수정하여 node_modules가 빌드 결과물에 포함되지 않도록 변경했습니다.\n' +
      '\n' +
      '```yaml\n' +
      '# 수정된 buildspec.yml\n' +
      'artifacts:\n' +
      '  files:\n' +
      '    - "**/*"\n' +
      '  base-directory: "."\n' +
      '  exclude-paths:\n' +
      '    - "node_modules/**"\n' +
      '```\n' +
      '\n' +
      '이를 통해 운영 환경에서 직접 의존성을 설치하도록 하여 네이티브 모듈이 정확한 아키텍처로 설치되도록 했습니다.\n' +
      '\n' +
      '### 2. Socket.io 최적화: fetchSockets 가 효율적으로 동작하도록 개선\n' +
      '\n' +
      'Redis PubSub 트래픽을 줄이기 위해 Socket.io Redis Adapter 설정을 개선했습니다. [[Socket.io Redis Adapter 공식 문서 링크]](https://socket.io/docs/v4/redis-adapter/#default-adapter)\n' +
      '\n' +
      '```typescript\n' +
      '// Redis Adapter 설정 최적화\n' +
      'const redisAdapter = createAdapter(pubClient, subClient, {\n' +
      '  publishOnSpecificResponseChannel: true // fetchSockets 요청을 보낸 서버 인스턴스에게만 응답\n' +
      '});\n' +
      'io.adapter(redisAdapter);\n' +
      '```\n' +
      '\n' +
      '이 옵션은 요청을 보낸 인스턴스에만 fetchSockets 응답을 전송하도록 하여 불필요한 메시지 브로드캐스트를 방지합니다.\n' +
      '\n' +
      '### 3. 부하 방어 로직 구현: 재시도 폭증 방지\n' +
      '\n' +
      '재시도로 인한 과도한 `fetchSockets` 호출을 방지하기 위한 방어 로직을 구현했습니다.\n' +
      '\n' +
      '```typescript\n' +
      '// fetchSockets 호출 제한 로직\n' +
      'const retryPreventionKey = `rp:${oldSocketId}`;\n' +
      'const result = await this.redis\n' +
      '  .multi()\n' +
      '  .incr(retryPreventionKey)\n' +
      '  .expire(retryPreventionKey, 60, \'NX\')\n' +
      '  .exec();\n' +
      'const [[, value]] = result;\n' +
      'if (typeof value === \'number\' && value > 1) {\n' +
      '  throw new Error(\'connection retry interval exceeded\');\n' +
      '}\n' +
      '```\n' +
      '\n' +
      '## 기술적 성과 및 교훈\n' +
      '\n' +
      '### 분산 시스템 디버깅 역량 향상\n' +
      '\n' +
      '이 경험을 통해 복잡한 분산 시스템 구조에서 발생한 문제를 해결하는 접근 방식을 배울 수 있었습니다.\n' +
      '\n' +
      '1. **장애 발생 시 표면적 증상을 바탕으로 근본 원인을 찾을 것**\n' +
      '   - Redis 네트워크 과부하라는 표면적 증상으로부터 시작하여 여러 계층을 거쳐 네이티브 모듈 아키텍처 불일치라는 근본 원인을 찾아냈습니다.\n' +
      '   - 단순히 증상을 완화하는 것이 아니라, 문제의 근본 원인이 다른 곳에 있을 수 있다는 가능성을 항상 열어두고 분석해야 합니다.\n' +
      '\n' +
      '2. **복잡한 서버 구성요소 간 상호작용을 깊이 있게 이해할 것**\n' +
      '   - Socket.io Redis Adapter의 내부 동작 원리(분산 환경에서의 PubSub 메커니즘)를 심층적으로 이해하게 되었고, 장애 발생 원인을 찾아낼 수 있었습니다.\n' +
      '\n' +
      '3. **선입견 없이 로그와 데이터를 분석할 것**\n' +
      '   - 로그와 지표를 선입견 없이 분석하는 것이 문제를 해결하는 중요한 원칙임을 배웠습니다.\n' +
      '\n' +
      '4. **여러 계층에서의 해결책 구현**:\n' +
      '   - 근본 원인 해결뿐만 아니라 방어 로직 구현, 시스템 최적화 등 여러 계층에서의 개선이 필요합니다.\n' +
      '\n' +
      '## 결론\n' +
      '\n' +
      '이번 장애 대응 경험은 분산 채팅 시스템(메신저)의 장애 상황에서 표면적 증상으로부터 시작해 여러 구성요소를 탐색하고,\n' +
      '\n' +
      '최종적으로 근본 원인을 발견하여 해결하는 과정이었습니다. (CTO 님과 지코바를 먹으며..)\n' +
      '\n' +
      '이러한 경험을 통해 복잡한 구조를 가진 분산 시스템에서의 장애 대응 방법과 복잡한 인과관계를 추적하는 능력을 크게 향상시킬 수 있었습니다.\n' +
      '\n' +
      '이는 대규모 시스템을 설계하고 운영하는 데 있어 매우 가치 있는 자산이 되었다고 생각합니다.',
  },
  {
    id: 'cashwalk-api-optimization',
    title: '캐시톡 서비스 최적화를 통한 서버 비용 절감 및 성능 개선하기',
    slug: 'cashwalk-api-optimization',
    excerpt: '사용자 경험은 유지하면서 서버 비용 50% 절감과 API 응답 시간을 최대 67% 개선한 백엔드 최적화 작업',
    category: '비용 최적화',
    date: new Date('2024-01'),
    period: '2024-01 ~ 2024-02',
    duration: '3 weeks',
    role: 'Backend Engineer',
    team: '캐시톡-메신저',
    stacks: [
      'AWS DynamoDB',
      'Redis',
      'Datadog',
    ],
    links: { github: '', demo: '', docs: '' },
    companyId: 'nudge-healthcare',
    achievements: [
      'CPU 사용률 35% → 20% (약 43% 감소)',
      '메모리 사용량 800 MiB → 280 MiB (약 65% 감소)',
      '주요 API 응답 시간 최대 67% 개선 (750ms → 247ms)',
      'API 서버 인스턴스 평균 8대 감소',
      '전체 서버 비용 약 50% 절감',
      'DynamoDB 인덱스 읽기 용량 최적화로 병목 현상 해소'
    ],
    content:
      '## 어떤 문제가 있었는가?\n' +
      '\n' +
      '캐시워크의 일대일 메시징 서비스인 캐시톡의 사용자 증가로 인해 API 서버 비용이 한 달 만에 약 2배 증가하는 문제가 발생했습니다.\n' +
      '\n' +
      '이는 CPU 사용률, 네트워크 트래픽, 그리고 데이터베이스 쿼리 증가로 인한 것이었습니다.\n' +
      '\n' +
      '## 문제 발견 및 원인 분석\n' +
      '\n' +
      '### 문제 징후\n' +
      '- CPU 사용률 지속적 상승\n' +
      '- 네트워크 인바운드/아웃바운드 트래픽 약 2배 증가\n' +
      '- API 서버 인스턴스 수 증가 (2배 증가)\n' +
      '- DynamoDB 읽기 요청 급증\n' +
      '\n' +
      '### 원인 분석 과정\n' +
      '\n' +
      '문제를 해결하기 위해 Datadog과 AWS CloudWatch 지표를 분석하여 다음과 같은 원인을 파악했습니다.\n' +
      '\n' +
      '1. **비효율적인 데이터베이스 쿼리 패턴**:\n' +
      '  - 캐시톡 관련 API에서 친구 사용자 정보를 조회할 때, 일괄 처리(batch) 대신 개별 쿼리를 반복적으로 수행하고 있었습니다.\n' +
      '  - 예를 들어, 사용자가 100명의 친구를 가진 경우 **_친구 사용자 정보 조회를 위해 100번의 개별 DB 쿼리를 실행_**하고 있었습니다.\n' +
      '![친구 한 명당 DDB Query 한 번씩 발생{600x}](https://footage.latentspace.world/production/images/too_many_ddb_req.png)\n' +
      '\n' +
      '2. **DynamoDB Throttle**: 위 친구들의 사용자 정보를 담고 있는 `cashwalk.user` 테이블과 관련 인덱스가 증가한 트래픽을 처리하기에 충분한 Capacity 를 가지고 있지 않아 Throttle 이 발생했습니다.\n' +
      '![유저 테이블 Throttle 발생{600x}](http://footage.latentspace.world/production/images/user_table_throttle.png)' +
      '\n' +
      '3. **불필요한 데이터 조회**: 일부 API에서 필요하지 않은 정보를 추가로 쿼리하고 있었습니다.\n' +
      '\n' +
      '4. **비효율적인 네트워크 연결 관리**: DynamoDB API 호출마다 새로운 연결을 생성하고 있어 리소스를 낭비하고 있었습니다.\n' +
      '\n' +
      '## 해결 방안 설계 및 구현\n' +
      '\n' +
      '문제 해결을 위해 다음과 같은 최적화 작업을 설계하고 구현했습니다:\n' +
      '\n' +
      '### 1. 우선적으로 DynamoDB 용량 확장 (병목 해소 목적)\n' +
      '- `cashwalk.user` 테이블의 phone-index 읽기 용량: 500 → 3,500으로 증가\n' +
      '- `친구_관계` 테이블의 읽기 용량: 1,000 → 3,500으로 증가\n' +
      '\n' +
      '### 2. 코드 최적화\n' +
      '- **배치 프로세싱 도입**: 친구 정보 조회 시 개별 쿼리 대신 `batchGetItem`(한 번에 100명)을 사용하여 단일 요청으로 여러 항목을 조회하도록 개선했습니다.\n' +
      '![유저 테이블 BatchGetItem 도입{500x}](https://footage.latentspace.world/production/images/get_cached_user.png)\n' +
      '\n' +
      '- **유저 정보 캐싱**: 자주 요청되는 친구 정보에 대해 Redis 캐싱을 도입했습니다. [[간략한 코드](https://www.notion.so/1f609aac666780328b9cddb5210ffad9?pvs=4)]\n' +
      '![Redis 에 유저 정보 캐싱{500x}](https://footage.latentspace.world/production/images/friend_info_from_cache.png)' +
      '\n' +
      '- **DynamoDB Connection 재사용**: HTTP keepAlive 옵션을 활성화하여 DynamoDB API 호출 시 연결을 재사용하도록 했습니다.\n' +
      '```javascript\n' +
      'const httpsAgent = new https.Agent({\n' +
      '  maxSocket: 256,\n' +
      '  keepAlive: true,\n' +
      '  rejectUnauthorized: true,\n' +
      '  lookup: cacheable.lookup,\n' +
      '});\n' +
      '\n' +
      'AWS.config.update({\n' +
      '  region: config.AWSRegion,\n' +
      '  httpOptions: { agent: httpsAgent },\n' +
      '  accessKeyId: config.AWSAccessKeyId,\n' +
      '  secretAccessKey: config.AWSSecretAccessKey,\n' +
      '});\n' +
      '```\n' +
      '\n' +
      '- **불필요한 쿼리 제거**: 특히 `GET /친구_인원_수` API에서 불필요한 친구 정보를 조회하는 쿼리를 제거하였습니다. [[불필요하게 친구 유저 정보를 조회하는 쿼리를 제거]](https://www.notion.so/1f609aac666780d597f0f953c2b202dd?pvs=4)\n' +
      '\n' +
      '## 성과 및 결과\n' +
      '\n' +
      '구현한 최적화 작업을 통해 다음과 같은 가시적인 성과를 달성했습니다:\n' +
      '\n' +
      '### 성능 개선\n' +
      '- **CPU 사용률**: 35% → 20% (약 43% 감소)\n' +
      '- **메모리 사용량**: 800 MiB → 280 MiB (약 65% 감소)\n' +
      '- **API 응답 시간**:\n' +
      '  - GET /v2/친구_목록: 360ms → 260ms (약 28% 개선)\n' +
      '  - GET /v1/친구_목록: 750ms → 247ms (약 67% 개선)\n' +
      '  - GET /v2/추천_친구_목록: 600ms → 350ms (약 42% 개선)\n' +
      '\n' +
      '### 비용 절감\n' +
      '- **API 서버 인스턴스**: 평균 약 8대 감소 (기존 약 16대)\n' +
      '- **DynamoDB 사용량**:\n' +
      '  - 불필요하게 쿼리하던 인덱스의 RCU가 1 미만으로 감소 (불필요한 쿼리 제거로 인한)\n' +
      '![쿼리할 필요가 없었던 SNS 계정 인덱스 쿼리 제거{600x}](https://footage.latentspace.world/production/images/reduction_ddb_rcu.png)' +
      '\n' +
      '  - 유저 데이터 캐싱으로 RCU 1/4 감소\n' +
      '\n' +
      '![유저 테이블 RCU 감소{600x}](https://footage.latentspace.world/production/images/user_rcu_deduction.png)' +
      '\n' +
      '- **전체 서버 비용**의 약 50% 절감 효과\n' +
      '\n' +
      '## 배운 점 및 시사점\n' +
      '\n' +
      '이번 프로젝트를 통해 얻은 가장 중요한 교훈은 다음과 같습니다.\n' +
      '\n' +
      '1. **모니터링의 중요성**:\n' +
      '  - 비용 증가와 성능 저하 문제를 조기에 발견할 수 있었던 것은 적절한 모니터링 덕분이었습니다.\n' +
      '  - 특히 비용 모니터링과 성능 모니터링을 함께 진행하는 것이 중요함을 배웠습니다.\n' +
      '\n' +
      '2. **데이터 접근 패턴 설계의 중요성**:\n' +
      '  - 애플리케이션의 성능은 데이터베이스 접근 패턴에 크게 영향을 받습니다.\n' +
      '  - 특히 NoSQL 데이터베이스인 DynamoDB를 사용할 때는 쿼리 패턴을 사전에 잘 설계하는 것이 중요합니다.\n' +
      '\n' +
      '3. **팀 협업의 중요성**:\n' +
      '  - 이번 문제는 백엔드 개발자, 인프라 담당자, 제품 관리자 간의 긴밀한 협력을 통해 해결할 수 있었습니다.\n' +
      '  - 특히 기술적 문제를 비즈니스 관점에서 설명하고 우선순위를 설정하는 과정이 매우 중요했습니다.\n' +
      '\n' +
      '4. **레버리지가 큰 부분부터 최적화**:\n' +
      '  - 모든 코드를 최적화하는 것보다, 비용 대비 효과가 큰 부분(레버리지가 큰)을 선별적으로 개선하는 전략이 중요함을 배웠습니다.\n' +
      '\n' +
      '## 결론\n' +
      '\n' +
      '이 작업은 사용자 경험을 저하시키지 않으면서도 서버 비용을 대폭 절감할 수 있음을 보여준 사례라고 생각합니다.\n' +
      '\n' +
      '비효율적인 데이터베이스 접근 패턴을 개선하고, 적절한 캐싱과 HTTP Connection 관리를 통해 서비스 성능을 향상시킬 수 있었습니다.\n' +
      '\n' +
      '특히 이번 경험은 서비스 규모가 성장함에 따라 초기 설계가 미치는 영향이 얼마나 큰지를 보여주었습니다.\n' +
      '\n' +
      '성능 최적화는 단순히 기술적 과제가 아니라 비즈니스 가치를 창출하는 중요한 활동임을 다시 한번 확인할 수 있었습니다.'
  },
  {
    "id": "external-api-call-optimization",
    "title": "외부 API 호출 최적화: 쿼터 제한 문제 해결",
    "slug": "external-api-call-optimization",
    "excerpt": "외부 업체의 API 호출을 95% 이상 감소시켜 API 쿼터 제한으로 인한 서비스 장애를 해결한 최적화 사례",
    "category": "이슈 해결",
    "date": new Date('2024-01'),
    "period": "2024-01 ~ 2024-03",
    "duration": "2 months",
    "role": "Backend Engineer",
    "team": "캐시톡-캐시워크",
    "stacks": [
      "API 캐싱",
      "Datadog",
    ],
    "links": { "github": "", "demo": "", "docs": "" },
    "companyId": "nudge-healthcare",
    "achievements": [
      "일일 API 호출 약 302,523회 → 17,587회 (95.5% 감소)",
      "월간 API 호출 3,793,832회 → 597,965회 (84.2% 감소)",
      "API 쿼터 초과 오류 제거",
      "SNS 공유 기능 정상화로 서비스 안정성 확보",
      "서버 측 캐싱 구현으로 응답 시간 개선",
      "비효율적인 API 호출 패턴 발견 및 최적화"
    ],
    "content":
      '## 어떤 문제가 있었는가?\n' +
      '\n' +
      '### 발견된 문제\n' +
      '\n' +
      '2024년 1월 11일부터 서비스 사용자들로부터 SNS 공유 기능이 동작하지 않는다는 보고가 접수되었습니다. 기능 장애는 다음과 같은 영역에서 발생했습니다.\n' +
      '\n' +
      '- 캐시톡 SNS 연동 > SNS 계정 연동하기\n' +
      '- 친구 초대 > 외부 SNS 으로 공유하기\n' +
      '- 앱 전반에서 공유되고 있는 SNS 공유 기능\n' +
      '\n' +
      '로그 분석 결과, 외부 SNS 개발자 콘솔에서 `친구_목록_조회`API (외부 SNS 측 API) 에서 대량의 오류가 발생한 것을 확인했습니다.\n' +
      '![SNS 연동하기{200x}](https://footage.latentspace.world/production/images/sns_%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9%E1%86%BC.png)' +
      '![SNS 으로 공유하기{200x}](https://footage.latentspace.world/production/images/invite.png)' +
      '\n' +
      '### 원인 분석\n' +
      '\n' +
      '조사 결과, 다음과 같은 원인을 파악했습니다.\n' +
      '\n' +
      '1. **외부 SNS API 쿼터 초과**\n' +
      '   - 일일 쿼터(30,000건) 초과: **_일 약 302,523건 호출_**\n' +
      '   - 월간 쿼터(3,000,000건) 초과: **_11일 만에 3,793,832건 호출_**\n' +
      '\n' +
      '2. **과도한 API 호출량**\n' +
      '   - Datadog(서버 모니터링 체계)에 기록된 유저 고유 ID와 API 요청량 분석 결과, 일 평균 약 45,000명의 사용자가 친구 추천 API를 사용 중이었습니다.\n' +
      '   - 로그 분석 결과 사용자당 일 평균 4.4회 호출 중이었으며\n' +
      '   - 일일 약 39만 회의 외부 SNS 친구 목록 API를 호출하는 상황이었습니다. (45,000명 × 2회 × 4.4회)\n' +
      '\n' +
      '## 어떻게 해결했는가?\n' +
      '\n' +
      '문제 해결을 위해 다양한 이해관계자(PM, 서버 개발자, 클라이언트 개발자, 웹뷰 개발자)와 협업하여 해결 방안을 도출하였습니다.\n' +
      '\n' +
      '1. **서버 측 외부 API 응답(친구 목록) 캐싱**\n' +
      '   - 사용자별 SNS 친구 목록을 서버에 캐싱\n' +
      '   - 캐싱 주기: 24시간 (조정 가능)\n' +
      '   - 점진적으로 친구 목록 로드: 100명씩 분할 조회 및 캐싱하여 한 번 조회된 친구는 다시 API 호출하여 조회하지 않도록 했습니다.\n' +
      '![추천 친구 화면 우측 상단 새로고침 클릭 시마다 100명씩 추가로 분할 조회{300x}](https://footage.latentspace.world/production/images/image%20(20).png)' +
      '\n' +
      '2. **외부 API 호출 비활성화 임시 조치**\n' +
      '   - 개선 작업 중 임시로 API 호출을 비활성화하여 개발 단 테스트 / QA 이전에 쿼터가 소진되어 버리는 현상을 방지하였습니다.\n' +
      '   - 2월 1일 월간 쿼터 리셋 후 QA 진행 & 개선된 로직 상용에 적용\n' +
      '\n' +
      '## 구현 방식\n' +
      '\n' +
      '### 서버 측 캐싱 로직\n' +
      '\n' +
      '```\n' +
      '1. 유저가 추천 친구 목록을 조회하면:\n' +
      '   - 캐시 유효성 확인 (24시간 이내 캐싱된 친구 목록이 있는지)\n' +
      '   - 유효한 캐시 없을 경우, 외부 SNS API에서 최대 100명까지 친구 목록 조회 후 캐싱\n' +
      '   - 유효한 캐시 있을 경우, 캐싱된 데이터 반환\n' +
      '\n' +
      '2. 사용자가 친구 목록을 새로고침하면:\n' +
      '   - 이미 로드된 친구 수 확인\n' +
      '   - 아직 로드되지 않은 친구가 있는 경우, 다음 100명을 SNS API에서 조회하여 캐시에 추가\n' +
      '   - 모든 친구가 로드된 경우, 추가 API 호출 없이 캐시된 데이터만 반환\n' +
      '```\n' +
      '\n' +
      '### 개선된 API 호출 패턴\n' +
      '\n' +
      '* 기존: 매 화면 진입과 새로고침마다 전체 친구 목록을 지속적으로 중복 호출하고 있었으나\n' +
      '* 개선: 캐시된 친구 목록을 활용, **필요 시에만** 추가 조회하는 방식으로 개선하였습니다.\n' +
      '\n' +
      '## 결과 및 성과\n' +
      '\n' +
      '### 정량적 성과\n' +
      '\n' +
      '| 항목 | 개선 전 | 개선 후 | 감소율 |\n' +
      '|------|---------|---------|--------|\n' +
      '| 일일 API 호출 수 | ~302,523회 | ~17,587회 | 94.2% |\n' +
      '| 월간 API 호출 수 | 3,793,832회 | ~597,965회 | 84.2% |\n' +
      '\n' +
      '![개선 이후 외부 SNS 친구_목록 API 호출량{700x}](http://footage.latentspace.world/production/images/api_call_metric.png)\n' +
      '### 정성적 성과\n' +
      '\n' +
      '1. **서비스 안정성 향상**\n' +
      '   - 외부 SNS 공유 기능 정상화\n' +
      '   - 외부 API 쿼터 제한으로 인한 서비스 장애 해소\n' +
      '\n' +
      '2. **시스템 효율성 개선**\n' +
      '   - 불필요한 API 호출 대폭 감소\n' +
      '   - 서버 부하 감소 및 응답 시간 개선\n' +
      '\n' +
      '\n' +
      '## 회고\n' +
      '\n' +
      '### 무엇을 배웠는가?\n' +
      '\n' +
      '   - 외부 API 사용 시 **_쿼터 제한을 고려_**해야 한다는 것을 배웠습니다.\n' +
      '   - 또한 다양한 팀(서버, 클라이언트, PM) 간의 원활한 소통을 통해 해결 방안을 수립하고 문제를 해결할 수 있었습니다.\n' +
      '\n' +
      '## 결론\n' +
      '\n' +
      '이 프로젝트는 외부 API 의존성이 높은 서비스에서 발생할 수 있는 쿼터 제한 문제를 효과적으로 해결한 사례입니다.\n' +
      '\n' +
      '서버 모니터링 시스템(Datadog)을 바탕으로 유저 별 API 요청량을 분석하고, 캐싱 전략을 효율적으로 적용하고,\n' +
      '\n' +
      '다양한 이해관계자와의 원활한 의사소통을 통해 외부 API 호출을 95% 이상 감소시켜 서비스 안정성을 크게 향상시킬 수 있었습니다.\n',
  },
  // {
  //   id: 'cashdeal-promotion-1',
  //   title: '캐시딜 1,000 원 쿠폰 프로모션',
  //   slug: 'cashdeal-promotion-1',
  //   excerpt: '300만 DAU 유저에게 쿠폰 난사하기',
  //   category: '대용량 트래픽',
  //   date: new Date('2023-03-29'),
  //   period: '2024-03 ~ 2024-04',
  //   duration: '1 week',
  //   role: 'Backend Engineer',
  //   team: '캐시톡-메신저',
  //   stacks: [
  //     'Node.js',
  //     'Socket.io Redis Adapter',
  //     'ElastiCache',
  //     'AWS CodeBuild',
  //     'Prisma ORM',
  //   ],
  //   links: { github: '', demo: '', docs: '' },
  //   companyId: 'nudge-healthcare',
  //   achievements: [
  //     'Node.js 프로세스 안정성 확보 (빌드-운영 환경 아키텍처 일치)',
  //     'Socket.io Redis Adapter 최적화로 PubSub 트래픽 감소',
  //     'Redis NetworkOutAllowanceExceeded 지표 정상화',
  //     '대규모 분산 시스템 디버깅 역량 향상',
  //   ],
  //   content: '',
  // },
  {
    "id": "kidztales-hackathon",
    "title": "사이드 프로젝트 - 토리 AI 해커톤",
    "slug": "kidztales-hackathon",
    "excerpt": "동화책 만들어주는 AI 서비스 '토리 AI' 구성원들과 함께한 12시간 해커톤에서 '캐릭톡' 기능 개발",
    "category": "기능 개발",
    "date": new Date("2024-07"),
    "period": "2024-07 ~ 2024-07",
    "duration": "12 hours",
    "role": "Backend Engineer",
    "team": "Kidztales 팀",
    "stacks": [
      "Nest.js",
      "Socket.io",
      "WebSocket",
      "OpenAI API",
      "TypeScript"
    ],
    "links": {
      "github": "",
      "demo": "",
      "docs": ""
    },
    "companyId": "kidztales",
    "achievements": [
      "12시간 제한 시간 내 MVP 개발을 위한 효율적인 프로세스 구축",
      "WebSocket을 활용한 실시간 채팅 기능 구현",
      "프론트엔드와 백엔드의 명확한 API 명세 공유로 병렬 개발 진행",
      "초기 하드코딩에서 점진적으로 DB 연동 구조로 전환하는 개발 방식 적용"
    ],
    content: '# 사이드 프로젝트에 대한 간단 설명\n' +
      '\n' +
      '\n' +
      '**토리 AI(https://tale.fit) 란? ([https://tale.fit](https://tale.fit))**\n' +
      '\n' +
      '- 어린 아이들이 `등장인물`과 `간단한 줄거리`를 작성하면 재미있는 스토리를 만들어주는 서비스\n' +
      '\n' +
      '## 해커톤을 진행한 이유\n' +
      '\n' +
      '토리 AI 사이드 프로젝트 구성원들 간의 친목 도모를 위해 약 12시간 동안 진행된 해커톤입니다.\n' +
      '\n' +
      '## 해커톤의 주제는 무엇이었는가?\n' +
      '\n' +
      '토리 AI 에 들어가면 좋을 것 같은 기능을 서로 자유롭게 이야기해보고, 나온 아이디어 중 하나를 선택하여 개발까지 진행하는 것이었습니다.\n' +
      '\n' +
      '## 어떤 것을 만들었는가?\n' +
      '\n' +
      '**캐릭톡**\n' +
      '\n' +
      '- 스토리의 등장 인물과 채팅 형식으로 대화를 나누는 기능\n' +
      '\n' +
      '해커톤의 특성 상 12시간이라는 제한된 시간 내에 완성을 해야 했기 때문에 아이디어 제시 정도만 이루어진 채 바로 개발 및 기획이 병렬적으로 진행되었습니다.\n' +
      '\n' +
      '- “스토리의 등장 인물과 채팅을 하는 기능을 만들자!”\n' +
      '\n' +
      '## 최종 결과물\n' +
      '\n' +
      '당시 프론트 개발에 차질이 발생하여 기획 문서로 대체합니다.. 🙏\n' +
      '\n' +
      '![스토리에서 “채팅 시작” 시 보여지는 등장인물 선택 화면입니다.{600x}](https://footage.latentspace.world/production/images/%E1%84%8E%E1%85%A2%E1%84%90%E1%85%B5%E1%86%BC_%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8.png)\n' +
      '\n' +
      '스토리에서 “채팅 시작” 시 보여지는 등장인물 선택 화면입니다.\n' +
      '\n' +
      '![유저가 등장인물과 채팅을 진행하는 UI 입니다.{600x}](https://footage.latentspace.world/production/images/%E1%84%8E%E1%85%A2%E1%84%90%E1%85%B5%E1%86%BC%E1%84%8E%E1%85%A1%E1%86%BC.png)\n' +
      '\n' +
      '유저가 등장인물과 채팅을 진행하는 UI 입니다.\n' +
      '\n' +
      '### 빠른 설계\n' +
      '\n' +
      '아래는 한 페이지 정도의 간략한 기능 설계도입니다. 해커톤에서 중요한 것은 핵심 기능(MVP)를 빠르게 개발하는 것이라고 생각하여 개발 요구사항도 한 페이지로 만들어 진행하였습니다.\n' +
      '\n' +
      '- 한 페이지 짜리 기능 설계\n' +
      '![이게.. 설계.?{400x}](https://footage.latentspace.world/production/images/%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC_%E1%84%89%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A8.jpeg)\n' +
      '\n' +
      '#### [ 개발 필요한 사항 리스트업 ]\n' +
      '\n' +
      '스토리 등장인물과 채팅을 하기 위해서는 “스토리 내용”과 “등장인물 정보”를 LLM의 시스템 프롬프트에 넣어야 했습니다. 이를 위해서는 DB 에 저장되어 있는 스토리 내용과 등장인물 정보를 불러와야 했지만, 초기 MVP 를 빠르게 개발하고자 우선 하드코딩으로 개발하였습니다.\n' +
      '\n' +
      '1. 스토리 내용 가져오기 (가칭: getBookPageContents 함수)\n' +
      '\n' +
      '2. 등장인물 성격, 모습을 기반으로 프롬프트 구성\n' +
      '\n' +
      '```mermaid\n' +
      'flowchart TD\n' +
      '    A[시작] --> B[스토리 내용 가져오기]\n' +
      '    B --> C{등장인물 정보 가져오기}\n' +
      '    C --> D[성격 정보]\n' +
      '    C --> E[외모 정보]\n' +
      '    D --> F[프롬프트 구성]\n' +
      '    E --> F\n' +
      '    F --> G[종료]\n' +
      '    \n' +
      '    style A fill:#f9f,stroke:#333,stroke-width:2px\n' +
      '    style G fill:#f9f,stroke:#333,stroke-width:2px\n' +
      '    style C fill:#bbf,stroke:#333,stroke-width:2px\n' +
      '```\n' +
      '\n' +
      '개발 단에서는 Front-end 개발자와 제가(Back-end 담당) 웹에서 채팅 기능을 구현하기 위해 WebSockets API 명세를 빠르게 공유하고 서로 개발을 진행하였습니다.\n' +
      '\n' +
      '### [ API 설명 ]\n' +
      '\n' +
      '![WebSockets API 설계{300x}](https://footage.latentspace.world/production/images/websocket_api_%E1%84%89%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A8.jpeg)\n' +
      '    \n' +
      '\n' +
      '```mermaid\n' +
      'sequenceDiagram\n' +
      '    participant Client\n' +
      '    participant WebSocket Server\n' +
      '    participant OpenAI API\n' +
      '\n' +
      '    Note over Client,WebSocket Server: 채팅 초기화\n' +
      '    Client->>WebSocket Server: CHAT_INIT\n' +
      '    Note right of Client: {bookId: string, characterId: number}\n' +
      '    \n' +
      '    rect rgb(240, 240, 240)\n' +
      '        Note over Client,OpenAI API: 대화 주고받기\n' +
      '        Client->>WebSocket Server: MESSAGE_REQUEST\n' +
      '        Note right of Client: {content: string}\n' +
      '        \n' +
      '        WebSocket Server->>OpenAI API: ChatCompletion API 요청\n' +
      '        \n' +
      '        loop Streaming Response\n' +
      '            OpenAI API-->>WebSocket Server: SSE(Server-Sent Events)\n' +
      '            WebSocket Server-->>Client: MESSAGE_RESPONSE\n' +
      '            Note right of Client: {content: string, isFinish: false}\n' +
      '        end\n' +
      '        \n' +
      '        WebSocket Server-->>Client: MESSAGE_RESPONSE\n' +
      '        Note right of Client: {content: string, isFinish: true}\n' +
      '    end\n' +
      '```\n' +
      '\n' +
      '**최종 클라이언트 측 WebSockets Event**\n' +
      '\n' +
      '```json\n' +
      '// Event Key: CHAT_INIT (새로운 채팅을 시작하는 데 사용함)\n' +
      '{\n' +
      '  bookId: string; // 스토리 ID 값\n' +
      '  characterId: number; // 스토리에 포함된 등장 인물의 ID 값\n' +
      '}\n' +
      '\n' +
      '// Event Key: MESSAGE_REQUEST (CHAT_INIT 호출 이후 대화 내용을 전송할 때 사용함)\n' +
      '{\n' +
      '  "content": "string"; // 채팅 내용 (사용자가 웹에서 입력함)\n' +
      '}\n' +
      '```\n' +
      '\n' +
      '**최종 서버 측 WebSockets Event**\n' +
      '\n' +
      '```json\n' +
      '// Event Key: MESSAGE_RESPONSE (MESSAGE_REQUEST 를 통해 요청한 대화에 응답하는 데 사용함)\n' +
      '{\n' +
      '  "content": "string"; // 채팅 응답 내용 (AI 가 생성함)\n' +
      '  "isFinish": "boolean"; // 채팅 말풍선 하나가 다 생성되었는지 여부\n' +
      '   // (Front-end 에서 다음 채팅을 입력할 수 있는 UI 를 그리는 데 필요함)\n' +
      '}\n' +
      '```\n' +
      '\n' +
      '### 빠른 프로토타입 개발\n' +
      '\n' +
      '초기에는 스토리를 선택하는 기능도, 등장인물을 선택하는 기능도 없이 코드 상에 프롬프트를 하드코딩하여 개발을 진행하여 팀 내 효율성을 극대화하였습니다.\n' +
      '\n' +
      '- Front-end 개발자에게는: 약속한 API 명세대로 동작하는 Mock 데이터를 넣어두어 UI 퍼블리싱 및 WebSockets 통신 로직 구현을 병렬적으로 할 수 있도록 하였습니다.\n' +
      '- 기획자에게는: Front-end/Back-end 의 개발 진행상황을 지속적으로 확인할 수 있도록 하여 제한된 시간 내에 개발 가능한 기능을 확정하고 중간 개발 결과물을 확인하면서 새로운 기능을 제안하실 수 있도록 하였습니다.\n' +
      '\n' +
      '#### 등장인물 시스템 프롬프트 하드코딩\n' +
      '\n' +
      '등장인물과 채팅을 하기 위해서는 시스템 프롬프트에 “스토리 내용”과 “등장인물 정보”가 필요합니다.\n' +
      '\n' +
      '아래 코드는 `CHAT_INIT` 이벤트가 프론트로부터 들어왔을 때 채팅 세션을 초기화하는 로직입니다.\n' +
      '\n' +
      '스토리 내용을 불러오는 로직에서 스토리 내용이 하드코딩 되어 있는 것을 확인할 수 있습니다.\n' +
      '\n' +
      '```tsx\n' +
      'private async getBookPageContents() {\n' +
      '    const pages = [\n' +
      '      {\n' +
      '        id: 14,\n' +
      '        length: 139,\n' +
      '        title: \'Page 1\',\n' +
      '        content:\n' +
      '          \'준석이는 오늘 아침에 일어나서 머리를 감으려고 욕실로 갔어요. 그런데 욕실 선반에 고양이 샴푸가 놓여 있는 걸 발견했어요. 준석이는 호기심이 많아서 이 샴푸로 머리를 감으면 어떻게 될지 궁금했어요. 기운이는 준석이의 옆에서 장난스럽게 웃고 있었어요.\',\n' +
      '        imageUrl: null,\n' +
      '        bookId: \'20d87ffd-1018-4a91-a405-71f4375fd6ca\',\n' +
      '        pageIndex: 1,\n' +
      '        illustration:\n' +
      '          \'A calm boy named Junseok and a playful cat named Giun in a bathroom. Junseok is holding a bottle of cat shampoo, looking curious. Giun is sitting on the sink, looking mischievous.\',\n' +
      '      },\n' +
      '\t  // ... 생략\n' +
      '\t  ];\n' +
      '\t  return pages.map((page) => ({\n' +
      '      title: page.title,\n' +
      '      content: page.content,\n' +
      '      illustration: page.illustration,\n' +
      '    }));\n' +
      '}\n' +
      '```\n' +
      '\n' +
      '등장인물 정보 역시 마찬가지로 하드코딩 되어 있는 것을 확인할 수 있습니다.\n' +
      '\n' +
      '```tsx\n' +
      ' private async initializeChatMessages(): Promise<\n' +
      '    ChatCompletionMessageParam[]\n' +
      '  > {\n' +
      '    const bookPageContents = await this.getBookPageContents();\n' +
      '\n' +
      '    return [\n' +
      '      {\n' +
      '        role: \'system\',\n' +
      '        content:\n' +
      '          \'You are a chatbot that responds to user input as a character in a book.\\n\' +\n' +
      '          \'\\n\' +\n' +
      '          \'Book content:\\n\' +\n' +
      '          `${bookPageContents.map((page) => this.makePagePrompt(page))}\\n` +\n' +
      '          \'\\n\' +\n' +
      '          \'Character:\\n\' +\n' +
      '          \'- Name: 기운(Giun)\\n\' +\n' +
      '          \'- Appearance: Cat\\n\' +\n' +
      '          \'- Traits: Cute, playful\',\n' +
      '      },\n' +
      '      {\n' +
      '        role: \'assistant\',\n' +
      '        content:\n' +
      '          \'I can help you with general questions or provide information about our services.\',\n' +
      '      },\n' +
      '    ];\n' +
      '  }\n' +
      '```\n' +
      '\n' +
      '### 서서히 하드코딩 제거\n' +
      '\n' +
      '앞서 “스토리 내용”과 “등장인물 정보”를 하드코딩 하여 개발했다고 했습니다.\n' +
      '\n' +
      '이제는 해커톤 중반기에 접어들면서 기획 요구사항이 어느 정도 확정되고 있었고, 이에 따라 하드코딩을 해두었던 로직을 제거해도 될 것 같다는 판단을 하였습니다.\n' +
      '\n' +
      '### 스토리 내용 동적으로 불러오도록 수정\n' +
      '\n' +
      '기존에 토리 AI 프로젝트에서 사용하던 스토리 정보를 DB 에서 동적으로 불러올 수 있도록 하였습니다.\n' +
      '\n' +
      '또한 등장인물 정보 역시 하드코딩 되어 있던 로직을 DB 에서 동적으로 불러올 수 있도록 하였습니다.\n' +
      '\n' +
      '```tsx\n' +
      'private async initializeChatMessages(\n' +
      '    socket: Socket,\n' +
      '  ): Promise<ChatCompletionMessageParam[]> {\n' +
      '    const chatSessionInfo = this.getChatSessionInfo(socket.id);\n' +
      '    const { bookId, characterId } = chatSessionInfo;\n' +
      '\n' +
      '    const book = await this.bookService.getBook(bookId);\n' +
      '    const character = await this.characterService.getCharacter({ characterId });\n' +
      '\n' +
      '    const { pages } = book;\n' +
      '\n' +
      '    return [\n' +
      '      {\n' +
      '        role: \'system\',\n' +
      '        content:\n' +
      '          "You must pretend to be a character from the book and respond to the user\'s question." +\n' +
      '          \'\\n\' +\n' +
      '          \'Book content:\\n\' +\n' +
      '          `${pages.map((page) => this.makePagePrompt(page))}\\n` +\n' +
      '          \'\\n\' +\n' +
      '          \'Character:\\n\' +\n' +
      '          `${this.makeCharacterPrompt(character)}`,\n' +
      '      },\n' +
      '    ];\n' +
      '  }\n' +
      '  \n' +
      '  private makePagePrompt(page: Partial<BookPage>) {\n' +
      '    return `\\nContent: ${page.content}\\nIllustration: ${page.illustration}\\n`;\n' +
      '  }\n' +
      '\n' +
      '  private makeCharacterPrompt(character: Character) {\n' +
      '    return `\\n- Name: ${character.name}\\n- Appearance: ${character.external}\\n- Traits: ${character.personality}`;\n' +
      '  }\n' +
      '```',
  }
];

export class ProjectRepository implements IRepository<Project> {
  private projects: IProject[];

  constructor() {
    this.projects = projects;
  }

  public static createInstance() {
    return new ProjectRepository();
  }

  public async findAll(): Promise<Project[]> {
    return this.projects.map((project) => new Project(project));
  }

  public async findOne(id: string): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error(`Project with id ${id} not found`);
    }
    return new Project(project);
  }

  public async findFeaturedProjects() {
    const projects = await this.findAll();
    return projects;
  }
}
