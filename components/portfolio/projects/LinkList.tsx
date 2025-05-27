import {
  GithubIcon,
  Link as LickIcon,
  MousePointerClickIcon,
} from 'lucide-react';
import LinkItem from './LinkItem';

import { ProjectList } from '@/types/types';

export default function LinkList({
  card,
}: {
  card: Partial<ProjectList[number]>;
}) {
  const { id, githubLink, siteLink } = card;

  return (
    <div className='flex w-fit max-w-72 items-center justify-between gap-2'>
      <LinkItem link={githubLink || ''} text='Git' target='_blank'>
        <GithubIcon className='h-4 w-4' />
      </LinkItem>
      <LinkItem link={siteLink || ''} text='Site' target='_blank'>
        <LickIcon className='h-4 w-4' />
      </LinkItem>
      <LinkItem link={`/project/${id}`} text='More'>
        <MousePointerClickIcon className='h-4 w-4' />
      </LinkItem>
    </div>
  );
}
