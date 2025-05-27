import pj_01_img01 from '@/assets/images/project_sisyphus/img01.png'
import pj_01_img02 from '@/assets/images/project_sisyphus/img02.png'
import pj_01_img03 from '@/assets/images/project_sisyphus/img03.png'
import pj_01_img04 from '@/assets/images/project_sisyphus/img04.png'
import pj_01_img05 from '@/assets/images/project_sisyphus/img05.png'
import pj_01_img06 from '@/assets/images/project_sisyphus/img06.png'
import pj_01_img07 from '@/assets/images/project_sisyphus/img07.png'
import pj_01_img08 from '@/assets/images/project_sisyphus/img08.png'

import test_img01 from '@/assets/images/test/banana.webp'
import test_img02 from '@/assets/images/test/blackbackdrop-square.webp'
import test_img03 from '@/assets/images/test/captain.webp'
import test_img04 from '@/assets/images/test/chair_melon.webp'
import test_img05 from '@/assets/images/test/coffeeshop.webp'
import test_img06 from '@/assets/images/test/venus.webp'
import test_img07 from '@/assets/images/test/crab.webp'
import test_img08 from '@/assets/images/test/heart.webp'
import test_img09 from '@/assets/images/test/king_potato.webp'
import test_img10 from '@/assets/images/test/ocean.webp'


export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'devko',
    subtitle: '',
    isTeamProject: true,
    member: ['front 1명', 'backend 2명'],
    role: [],
    context: [
      'React, JavaScript',
    ],
    period: '3주',
    startDate: '',
    endDate: '',
    skills: ['React.js', 'JavaScript'],
    images: [
      test_img01,
      test_img02
    ],
    trobulshooting: [],
    githubLink: '',
    siteLink: '',
  },
  {
    id: 2,
    title: 'Meetie',
    subtitle: '만날수록 견고해지는 IT 스터디 플랫폼',
    isTeamProject: true,
    member: ['front 5명'],
    role: ['스터디 조회',
      '스터디그룹 과제 CRUD',
      '스터디그룹 생성/요청/승인·거절',
      '마이페이지',],
    context: [
      '유데미 수강생들이 스터디를 만들고, 학습 과정을 공유할 수 있는 스터디 플랫폼',
    ],
    period: '7주',
    startDate: '2024.08.05',
    endDate: '2024.09.20',
    skills: ['Nextjs', 'TypeScript', 'TailwindCSS', 'Supabase'],
    images: [
      test_img03,
      test_img04
    ],

    trobulshooting: [],
    githubLink: 'https://github.com/GSIII/udemy_Tiramisu',
    siteLink: 'https://udemy-tiramisu-test.vercel.app',
  },
  {
    id: 3,
    title: '시간가계부',
    subtitle: '',
    isTeamProject: false,
    member: [],
    role: [],
    context: [],
    period: '',
    startDate: '',
    endDate: '',
    skills: [''],
    images: [
      test_img05,
      test_img06
    ],

    trobulshooting: [],
    githubLink: '',
    siteLink: '',
  },
  {
    id: 4,
    title: 'TypingPractice',
    subtitle: '',
    isTeamProject: false,
    member: [],
    role: [],
    context: [],
    period: '',
    startDate: '',
    endDate: '',
    skills: [''],
    images: [
      test_img07,
      test_img08
    ],

    trobulshooting: [],
    githubLink: '',
    siteLink: '',
  },
  {
    id: 5,
    title: 'Dice Merge',
    subtitle: '',
    isTeamProject: false,
    member: [],
    role: [],
    context: [],
    period: '',
    startDate: '',
    endDate: '',
    skills: [''],
    images: [
      test_img09,
      test_img10
    ],

    trobulshooting: [],
    githubLink: '',
    siteLink: '',
  },
  {
    id: 6,
    title: 'testServer',
    subtitle: '',
    isTeamProject: false,
    member: [],
    role: [],
    context: [
      'Nest.js 학습용 테스트 프로젝트',
      '간단한 CRUD 기능을 중심으로 RESTful API 서버 구축',
    ],
    period: '3주',
    startDate: '2025.01.01',
    endDate: '2025.01.01',
    skills: ['TypeScript', 'Nest.js', 'TypeORM', 'PostgreSQL', 'Neon'],
    images: [
      test_img01,
      test_img02
    ],

    trobulshooting: [],
    githubLink: '',
    siteLink: '',
  },
  {
    id: 7,
    title: 'Card & Dice',
    subtitle: '',
    isTeamProject: false,
    member: [],
    role: [],
    context: [],
    period: '1주',
    startDate: '2025.05.12',
    endDate: '2025.05.16',
    skills: ['c#', '.NET Framework', 'winforms', 'docker', 'mySQL'],
    images: [
      test_img03,
      test_img04
    ],

    trobulshooting: [],
    githubLink: 'https://github.com/tidypr/sisyphus',
    siteLink: '',
  },
  {
    id: 8,
    title: 'sisyphus',
    subtitle: '',
    isTeamProject: false,
    member: [],
    role: [],
    context: [
      'Windows Forms 기반의 POS 시스템',
      'MySQL과 연동하여 주문 내역을 데이터베이스에 저장',
      'Docker 환경에서 MySQL 컨테이너를 사용하여 데이터베이스를 관리',
    ],
    period: '1주',
    startDate: '2025.05.12',
    endDate: '2025.05.16',
    skills: ['c#', '.NET Framework', 'winforms', 'Docker', 'MySQL'],
    images: [
      pj_01_img01,
      pj_01_img02,
      pj_01_img03,
      pj_01_img04,
      pj_01_img05,
      pj_01_img06,
      pj_01_img07,
      pj_01_img08,
    ],

    trobulshooting: [],
    githubLink: 'https://github.com/tidypr/sisyphus',
    siteLink: '',
  },
  {
    id: 9,
    title: 'MyWeb',
    subtitle: '',
    isTeamProject: false,
    member: [],
    role: [],
    context: [
      'Next.js와 TypeScript 기반의 개인 포트폴리오 및 블로그 사이트',
      'Supabase를 통한 데이터 관리',
      'Auth.js를 통한 사용자 인증 구현',
    ],
    period: '3주',
    startDate: '2025.05.12',
    endDate: '2025.06.01',
    skills: ['TypeScript', 'Nextjs', 'TailwindCSS', 'shadcn/ui', 'prisma', 'zod', 'supabase'],
    images: [
      test_img01,
      test_img02
    ],

    trobulshooting: [],
    githubLink: 'https://github.com/tidypr/myweb',
    siteLink: 'https://myweb-eta-bice.vercel.app/portfolio',
  },
]
