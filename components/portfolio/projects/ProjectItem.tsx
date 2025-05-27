import { Card } from '../../ui/card';
import LinkList from './LinkList';
import { ProjectCarousel } from './ProjectCarousel';
import TagList from './TagList';

import { ProjectList } from '@/types/types';

export default function ProjectItem({ ...props }: ProjectList) {
  const {
    title,
    context,
    period,
    skills,
    images,
    isTeamProject,
    startDate,
    endDate,
  } = props;
  return (
    <Card className='rounded-sm p-6'>
      <div className='flex w-full flex-col items-center gap-3 md:flex-row md:gap-12'>
        {/* <div className='flex min-h-36 min-w-36 flex-col items-center justify-center rounded-sm bg-red-50'> */}
        {/* <div className='flex min-h-1/2 min-w-1/2 flex-col items-center justify-center rounded-sm bg-red-50'> */}
        {/* <p>이미지</p>
          <p>캐러셀</p> */}
        <div className='mx-auto w-full md:w-2/5 md:max-w-2/5'>
          <ProjectCarousel images={images} />
        </div>
        {/* </div> */}
        <div className='mx-auto w-full md:w-3/5 md:max-w-3/5'>
          <div className='flex flex-col items-start justify-center gap-4'>
            {/* 타이틀 */}
            <div className='flex w-full items-start justify-start gap-2'>
              <span className='bg-muted w-fit rounded-full px-4 py-1 text-sm font-semibold'>
                {isTeamProject ? '팀' : '개인'}
              </span>
              {/* <span className='text-lg'>프로젝트 제목</span> */}
              <p className='text-lg'>{title}</p>
            </div>

            {/* 개발기간 */}
            <div className='flex w-full flex-col items-start justify-start'>
              <span className='text-sm font-semibold'>개발 기간</span>
              <div className='text-muted-foreground flex gap-2 text-sm'>
                <span>{period}</span>
                <span>{startDate}</span>
                <span> - </span>
                <span>{endDate}</span>
              </div>
            </div>

            {/* 설명 */}
            <div>
              <p className='text-sm font-semibold'>주요기능</p>
              {context &&
                context.length > 0 &&
                context.map((text, index) => (
                  <p key={index} className='text-muted-foreground text-sm'>
                    {text}
                  </p>
                ))}
            </div>

            {/* 스킬 */}
            <div className='flex w-full flex-col items-start justify-start'>
              <p className='text-sm font-semibold'>기술스택</p>
              <TagList tags={skills} />
            </div>
            <LinkList card={props} />
          </div>
        </div>
      </div>
      {/* Links */}
    </Card>
  );
}
