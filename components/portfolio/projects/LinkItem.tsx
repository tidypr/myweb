'use client';

import Link from 'next/link';
import { Button } from '../../ui/button';
import { BanIcon } from 'lucide-react';

export default function LinkItem({
  link,
  text,
  target,
  children,
}: {
  target?: string;
  link: string;
  text: string;
  children: React.ReactNode;
}) {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  if (!link)
    return (
      <div className='bg-muted flex items-center gap-2 rounded-full border px-3 py-1 text-red-500'>
        <Button
          onClick={handleButtonClick}
          asChild
          variant='ghost'
          size='icon'
          className='flex h-4 w-4 gap-1 overflow-hidden rounded-full'
        >
          <BanIcon />
        </Button>
        <span className='text-sm'>Site</span>
      </div>
    );

  return (
    <Link
      href={link}
      target={target}
      className='bg-muted flex items-center gap-2 rounded-full border px-3 py-1'
    >
      <Button
        onClick={handleButtonClick}
        asChild
        variant='ghost'
        size='icon'
        className='flex h-4 w-4 gap-1 overflow-hidden rounded-full'
      >
        {children}
      </Button>
      <span className='text-sm'>{text}</span>
    </Link>
  );
}
