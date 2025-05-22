import { SkillGroup } from "@/types/types";

export const skillGroups: SkillGroup[] = [
  {
    categoryName: "Frontend Development",
    category: "frontend",
    capabilities:
      "사용자 중심의 반응형 웹 애플리케이션을 설계하고 구현합니다. 모던 JavaScript 프레임워크를 활용하여 효율적이고 유지보수가 용이한 코드를 작성하며, 최신 웹 표준과 접근성을 준수합니다.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    categoryName: "Backend Development",
    category: "backend",
    capabilities:
      "확장 가능하고 안정적인 서버 애플리케이션을 개발합니다. RESTful API 설계 및 구현, 데이터 모델링, 성능 최적화에 강점이 있으며, 마이크로서비스 아키텍처에 대한 이해도가 높습니다.",
    technologies: ["Node.js", "Express", "Nest.js", "REST API", "GraphQL"],
  },
  {
    categoryName: "Database",
    category: "database",
    capabilities:
      "다양한 데이터베이스 시스템을 활용하여 효율적인 데이터 저장 및 검색 솔루션을 구현합니다. 복잡한 쿼리 최적화, 데이터 모델링, 데이터베이스 성능 튜닝에 전문성을 갖추고 있습니다.",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Type ORM", "Prisma ORM"],
  },
  {
    categoryName: "Programming Languages",
    category: "languages",
    capabilities:
      "다양한 프로그래밍 언어에 능숙하며, 각 언어의 특성과 장단점을 이해하고 적절한 상황에 활용할 수 있습니다. 객체지향 프로그래밍과 함수형 프로그래밍 패러다임에 익숙합니다.",
    technologies: ["TypeScript", "JavaScript", "C", "C++", "C#", "Python"],
  },
  {
    categoryName: "DevOps",
    category: "devops",
    capabilities:
      "CI/CD 파이프라인을 구축하고 자동화된 테스트 및 배포 프로세스를 구현합니다. 컨테이너화 기술을 활용하여 애플리케이션의 일관된 환경을 보장하고, 클라우드 인프라를 효율적으로 관리합니다.",
    technologies: ["Docker", "Git", "GitHub Actions", "AWS", "Vercel"],
  },
]




// export const SKILLS = [
//   {
//     category: 'Frontend',
//     name: ['HTML', 'CSS', 'SCSS', 'TailwindCSS'],
//     description: [
//       '웹 페이지 구조와 스타일링을 효율적으로 구현하며, 다양한 CSS 기법과 프레임워크를 활용할 수 있습니다.',
//     ],
//   },
//   {
//     category: 'language',
//     name: ['JavaScript', 'TypeScript'],
//     description: [
//       'ES6 이상의 JavaScript와 TypeScript를 사용하여 안정적이고 확장 가능한 웹 애플리케이션을 개발할 수 있습니다.',
//     ],
//   },
//   {
//     category: 'Framework',
//     name: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
//     description: [
//       '다양한 라이브러리와 프레임워크를 활용해 웹 기능을 구축할 수 있습니다.',
//     ],
//   },
//   {
//     category: 'database',
//     name: ['PostgreSQL', 'MySQL', 'Supabase'],
//     description: [
//       '다양한 데이터베이스를 사용하여 관계형 데이터베이스 관리 및 빠른 백엔드 서비스 구축이 가능합니다.',
//     ],
//   },
// ];