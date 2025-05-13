import InputSearch from './InputSearch';
import Logo from './Logo';
import Navbar from './Navbar';
import ModeToggle from './ModeToggle';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <header className='container flex h-16 items-center justify-between px-4 py-2'>
      <Logo />
      <InputSearch />
      <Navbar />
      <div className='flex items-center gap-2'>
        <ModeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
