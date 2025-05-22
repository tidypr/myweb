import { Card } from '../../ui/card';
import LinkList from './LinkList';
import TagList from './TagList';

export default function ProjectItem({ ...props }) {
  const { title, context, period, skills } = props;
  return (
    <Card className='rounded-sm p-2'>
      <div className='flex w-full items-center gap-2'>
        <div className='flex min-h-36 min-w-36 flex-col items-center justify-center rounded-sm bg-red-50'>
          <p>이미지</p>
          <p>캐러셀</p>
        </div>
        <div className='flex flex-col items-start justify-center'>
          {/* 타이틀 */}
          <h2 className='text-lg'>{title}</h2>
          {/* 개발기간 */}
          <p className='text-sm'>{period}</p>
          {/* 설명 */}
          <p className='text-sm'>{context}</p>
          {/* 스킬 */}
          <p className='text-sm'>기술스택</p>

          <TagList tags={skills} />
        </div>
      </div>
      <LinkList card={props} />
      {/* Links */}
    </Card>
  );
}
