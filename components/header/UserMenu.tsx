import { FaUserCircle } from 'react-icons/fa';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UserMenu() {
  return (
    <DropdownMenu>
      {/*  */}
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='h-10 w-10'>
          <FaUserCircle className='h-6 w-6 rounded-full' />
        </Button>
      </DropdownMenuTrigger>
      {/*  */}
      <DropdownMenuContent className='w-24' align='end' sideOffset={10}>
        <DropdownMenuLabel>
          <Link href='/blog/create' className='w-full capitalize'>
            New Post
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Blog</DropdownMenuItem>
        <DropdownMenuItem>Portfolio</DropdownMenuItem>
        <DropdownMenuItem>AboutMe</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>TodoList</DropdownMenuItem>
        <DropdownMenuItem>AccountBook</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Login</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
