import { GithubIcon, Link, MousePointerClickIcon } from 'lucide-react';
import LinkItem from './LinkItem';

import { ProjectList } from '@/types/types';

export default function LinkList({
  card,
}: {
  card: Partial<ProjectList[number]>;
}) {
  const { id, githubLink, siteLink } = card;

  return (
    <div className='flex w-full max-w-56 items-center justify-between gap-2'>
      <LinkItem link={githubLink || ''} text='Git' target='_blank'>
        <GithubIcon />
      </LinkItem>
      <LinkItem link={siteLink || ''} text='Site' target='_blank'>
        <Link />
      </LinkItem>
      <LinkItem link={`/project/${id}`} text='More'>
        <MousePointerClickIcon />
      </LinkItem>
    </div>
  );
}
