'use client';

import Link from 'next/link';
import { BanIcon } from 'lucide-react';

type LinkItemProps = {
  link: string;
  text: string;
  target?: string;
  children: React.ReactNode;
};

export default function LinkItem({
  link,
  text,
  target,
  children,
}: LinkItemProps) {
  if (!link) {
    return (
      <div className='bg-muted flex w-full items-center justify-center gap-2 rounded-full border px-3 py-1 text-red-500'>
        <button className='flex h-4 w-4 items-center justify-center gap-1 rounded-full'>
          <BanIcon />
        </button>
        <span className='text-sm'>Site</span>
      </div>
    );
  }

  return (
    <Link
      href={link}
      target={target}
      className='bg-muted flex w-full items-center justify-center gap-2 rounded-full border px-3 py-1'
    >
      {children}
      <span className='text-sm'>{text}</span>
    </Link>
  );
}
