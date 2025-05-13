// import { Input } from '../ui/input';
import { FaSearch } from 'react-icons/fa';

import { Button } from '../ui/button';

export default function InputSearch() {
  return (
    <>
      {/* <Input
        type='text'
        placeholder='Search...'
        className='text-muted-foreground placeholder:text-muted-foreground w-full max-w-sm rounded-md border-2 border-gray-300 bg-transparent text-sm'
      /> */}
      {/* <button className='focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground bg-muted/50 text-muted-foreground relative inline-flex h-8 w-8 items-center justify-start gap-2 rounded-[0.5rem] border px-4 py-2 text-sm font-normal whitespace-nowrap shadow-none transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:pr-12'></button> */}

      {/* TODO: Ctrl + K => search modal */}
      <Button className='focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground bg-muted/50 text-muted-foreground relative inline-flex h-8 w-36 items-center justify-between gap-2 rounded-[0.5rem] border px-4 py-2 text-sm font-normal whitespace-nowrap shadow-none transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:w-40 lg:w-56 xl:w-64'>
        <FaSearch />
        <div className='absolute right-2 flex items-center gap-1'>
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </div>
      </Button>
    </>
  );
}
