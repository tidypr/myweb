import InputSearch from './InputSearch';
import Logo from './Logo';
import Navbar from './Navbar';
import ModeToggle from './ModeToggle';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-white/80 px-4 py-2 backdrop-blur-md dark:bg-neutral-900/80'>
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
