import Link from 'next/link';

import { LinkType } from '@/types/types'; 

export default function NavLink(link: LinkType[number]) {
  return (
    <li key={link.name}>
      <Link
        href={link.href}
        className='text-muted-foreground hover:text-accent-foreground'
      >
        {link.name}
      </Link>
    </li>
  );
}
