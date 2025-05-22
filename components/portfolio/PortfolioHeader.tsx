import Link from 'next/link';

export default function PortfolioHeader() {
  return (
    <nav className='text-muted-foreground fixed top-16 z-50 h-8 w-full items-center justify-end bg-white/80 px-4 py-1 backdrop-blur-md dark:bg-neutral-900/80'>
      <ul className='flex items-center justify-center gap-2 md:gap-4'>
        <li className='flex items-center text-sm capitalize'>
          <Link href='#intro'>about me</Link>
        </li>
        <li className='flex items-center text-sm capitalize'>
          <Link href='#skills'>skills</Link>
        </li>
        <li className='flex items-center text-sm capitalize'>
          <Link href='#projects'>projects</Link>
        </li>
        <li className='flex items-center text-sm capitalize'>
          <Link href='#contact'>contact</Link>
        </li>
      </ul>
    </nav>
  );
}
