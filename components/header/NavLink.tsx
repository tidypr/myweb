import Link from 'next/link';

import { LinkType } from '@/types/type'; 

export default function NavLink(link: LinkType) {
  return (
    <li key={link.name}>
      <Link
        href={link.href}
        className='text-muted-foreground hover:text-accent'
      >
        {link.name}
      </Link>
    </li>
  );
}
