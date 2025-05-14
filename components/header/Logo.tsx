import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <div className='cursor-pointer px-2 py-2 text-lg tracking-tighter'>
        &lt;Tidypr&#47;&gt;
      </div>
    </Link>
  );
}
