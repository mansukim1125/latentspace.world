import ProjectDetail from "@/app/components/project/ProjectDetail/ProjectDetail";

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  period: string;
  duration: string;
  stack: string[];
  role: string;
  team?: string;
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  content: string; // Markdown content
}

const projects: ProjectDetail[] = [
  {
    id: "personal-1",
    title: "Vector Database Implementation",
    description: "High-performance vector similarity search system optimized for large-scale ML models",
    period: "2024-01 ~ Present",
    duration: "3 months",
    role: "Lead Developer",
    team: "Personal Project",
    stack: ["Python", "FAISS", "NumPy", "FastAPI", "Docker"],
    links: {
      github: "https://github.com/username/vector-db",
      demo: "https://demo.example.com",
      docs: "https://docs.example.com"
    },
    content: `
  # Project Overview
  
  This project implements a high-performance vector similarity search system designed for large-scale machine learning applications.
  
  ## Objectives
  
  - Build a scalable vector similarity search system
  - Optimize for high-dimensional embeddings from LLMs
  - Provide simple API for integration with existing systems
  
  ## Key Features
  
  ### HNSW Index Implementation
  
  \`\`\`python
  class VectorIndex:
      def __init__(self, dimension: int, max_elements: int):
          self.index = faiss.IndexHNSWFlat(dimension, 32)
          self.index.hnsw.efConstruction = 200
          self.index.hnsw.efSearch = 50
  \`\`\`
  
  ## Challenges & Solutions
  
  ### Performance Optimization
  
  Initial implementation had high latency for large vector sets. Implemented HNSW index with custom distance metrics, reducing query time by 80%.
  
  ### Memory Management
  
  Loading large vector sets caused memory issues. Developed chunked loading mechanism with memory-mapped files.
  
  ## Learnings
  
  - HNSW 인덱스의 파라미터 튜닝이 검색 성능에 미치는 영향이 매우 큼
  - 메모리 효율성과 검색 속도는 대부분 트레이드오프 관계
  - 벡터 정규화가 검색 품질에 큰 영향을 미침
  
  ## Future Improvements
  
  1. 비동기 처리를 통한 인덱싱 속도 개선
  2. 커스텀 거리 메트릭 지원 추가
  3. 분산 환경에서의 확장성 개선
  4. 자동 파라미터 최적화 기능 구현
      `
  },
  {
    id: "project-1",
    title: "MSA 기반 커머스 플랫폼",
    description: "대규모 트래픽을 처리하는 이커머스 플랫폼 개발 및 운영. 마이크로서비스 아키텍처 설계 및 구현을 주도하였으며, 시스템 성능 최적화를 통해 큰 성과를 달성했습니다.",
    period: "2023.07 - Present",
    duration: "6 months",
    role: "Lead Developer",
    stack: ["Java", "Spring Boot", "Kafka", "MongoDB"],
    links: {
      github: "https://github.com/username/vector-db",
      demo: "https://demo.example.com",
      docs: "https://docs.example.com",
    },
    content: `
# Project Overview

대규모 트래픽을 처리하는 이커머스 플랫폼을 개발하고 운영한 프로젝트입니다. 주요 목표는 안정적이고 확장 가능한 마이크로서비스 아키텍처를 설계하여 높은 트래픽 요구를 충족시키는 것이었습니다.

## Objectives

- 안정성과 확장성을 고려한 MSA 설계
- 높은 트래픽 처리 능력을 가진 이커머스 플랫폼 구축
- 데이터 흐름과 트랜잭션 처리 최적화

## Key Achievements

- 일 처리 트랜잭션 100만 건 달성
- 시스템 응답 시간 30% 개선
- 마이크로서비스 아키텍처 설계 및 구현

## Challenges & Solutions

### 대규모 트랜잭션 처리
- **문제**: 높은 트랜잭션 부하로 인해 응답 시간이 증가
- **해결**: Kafka를 이용한 비동기 메시지 큐 처리로 트래픽 부하 완화

### 데이터 저장소 확장성
- **문제**: MongoDB의 샤딩 이슈 발생
- **해결**: 데이터 파티셔닝 전략 재설계 및 성능 최적화

## Learnings

- 마이크로서비스 간의 데이터 동기화와 분산 처리의 중요성
- 성능 최적화를 위해 비동기 아키텍처 활용

    `
  },
  {
    id: "project-2",
    title: "결제 시스템 리뉴얼",
    description: "레거시 결제 시스템 현대화 프로젝트. 시스템 안정성과 확장성을 크게 개선하였으며, 신규 결제 수단 통합을 용이하게 만들었습니다.",
    period: "2023.01 - 2023.06",
    duration: "6 months",
    role: "Backend Developer",
    links: {
      github: "https://github.com/username/vector-db",
      demo: "https://demo.example.com",
      docs: "https://docs.example.com",
    },
    stack: ["Kotlin", "Spring Boot", "Redis"],
    content: `
# Project Overview

기존 레거시 결제 시스템을 현대화하여 안정성과 확장성을 강화한 프로젝트입니다. 신규 결제 수단 통합을 지원하고 결제 실패율을 감소시키는 것이 주요 목표였습니다.

## Objectives

- 기존 시스템의 안정성 및 성능 향상
- 신규 결제 수단 통합 프로세스 간소화
- 결제 실패율 최소화

## Key Achievements

- 시스템 안정성 99.99% 달성
- 결제 실패율 50% 감소
- 신규 결제 수단 통합 시간 70% 단축

## Challenges & Solutions

### 레거시 코드 유지보수
- **문제**: 복잡한 코드 구조와 테스트 커버리지 부족
- **해결**: Kotlin으로 코드를 리팩터링하고 단위 테스트 작성

### 결제 실패율 감소
- **문제**: 네트워크 지연으로 인한 결제 실패
- **해결**: Redis 캐싱 및 리트라이 메커니즘 추가

## Learnings

- Kotlin을 활용한 모던 백엔드 개발의 장점
- 시스템 안정성을 위한 캐싱 및 비동기 처리의 중요성

    `
  },
];

const getProjectBySlug = async (slug: string) => {
  return projects.find(project => project.id === slug);
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const param = await params;
  const slug = param?.slug;

  const project = await getProjectBySlug(slug);

  if (!project) {
    //   TODO: 404 page..
    return;
  }

  return <ProjectDetail project={project} />;
}