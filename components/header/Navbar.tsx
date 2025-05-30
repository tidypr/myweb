import NavLink from './NavLink';

import { LinkType } from '@/types/types';

const LinkList: LinkType = [
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' },
  // { name: 'AboutMe', href: '/aboutme' },
  // { name: 'TodoList', href: '/todolist' },
  // { name: 'AccountBook', href: '/accountbook' },
];

export default function Navbar() {
  return (
    <nav className='flex'>
      <ul className='flex gap-4 text-sm'>
        {LinkList.map((link) => (
          <NavLink key={link.name} {...link} />
        ))}
      </ul>
    </nav>
  );
}
