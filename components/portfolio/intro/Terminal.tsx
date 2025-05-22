export const Colon = () => {
  return <span className='text-white'>&#58;&nbsp;</span>;
};

export const Space = () => {
  return <span className='text-white'>&nbsp;</span>;
};

export const Comma = () => {
  return <span className='text-white'>&#44;&nbsp;</span>;
};

// /**
//  * My Profile data
//  */
// passion: 'Creating beautiful user experiences',
//   values: ['Clean code', 'User-first thinking', 'Continuous learning'],

export default function Terminal() {
  return (
    <div className='flex w-full items-center justify-center font-mono'>
      <div className='relative w-full overflow-hidden rounded-lg border bg-black shadow-xl'>
        {/* header */}
        <div className='flex items-center border-b bg-zinc-800 px-4 py-2'>
          <div className='flex space-x-1'>
            <div className='h-3 w-3 rounded-full bg-red-500'></div>
            <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
            <div className='h-3 w-3 rounded-full bg-green-500'></div>
          </div>
          <div className='ml-4 text-xs font-medium text-zinc-400'>
            summary.js
          </div>
        </div>
        {/* main */}
        <div className='p-4 text-sm'>
          <div className='mb-2'>
            <span className='text-green-400'>&#47;&#42;&#42;</span>
          </div>
          <div className='mb-2'>
            <span className='text-green-400'>&#42;</span>
            <Space />
            <span className='text-green-400'>My Profile data</span>
          </div>
          <div className='mb-2'>
            <span className='text-green-400'>&#42;&#47;</span>
          </div>
          {/* objecet */}
          <div className='mb-2'>
            <span className='text-blue-400'>const</span>
            <Space />
            <span className='text-yellow-400'>developer</span>
            <Space />
            <span className='text-white'>=</span>
            <Space />
            <span className='text-blue-400'>{'{'}</span>
          </div>
          <div className='mb-1 ml-4'>
            <span className='text-purple-400'>name</span>
            <Colon />
            <span className='text-orange-400'>&apos;개발자&apos;</span>
            <Comma />
          </div>
          <div className='mb-1 ml-4'>
            <span className='text-purple-400'>skills</span>
            <Colon />
            <span className='text-blue-400'>[</span>
            <span className='text-orange-400'>&apos;React&apos;</span>
            <Comma />
            <span className='text-orange-400'>&apos;Next.js&apos;</span>
            <Comma />
            <span className='text-orange-400'>&apos;TypeScript&apos;</span>
            <span className='text-white'>, </span>
            <span className='text-orange-400'>&apos;Tailwind&apos;</span>
            <span className='text-blue-400'>]</span>
            <Comma />
          </div>
          {/* major */}
          <div className='mb-1 ml-4'>
            <span className='text-purple-400'>major</span>
            <Colon />
            <span className='text-orange-400'>
              &apos;Computer Science&apos;
            </span>
            <Comma />
          </div>

          {/* certifications */}
          <div className='mb-1 ml-4'>
            <span className='text-purple-400'>certifications</span>
            <Colon />
            <span className='text-blue-400'>[</span>
            <span className='text-orange-400'>&apos;SQLD&apos;</span>
            <Comma />
            <span className='text-orange-400'>&apos;ADsP&apos;</span>
            <Comma />
            <span className='text-orange-400'>&apos;정보처리기능사&apos;</span>
            <span className='text-blue-400'>]</span>
            <Comma />
          </div>

          <div className='mb-1 ml-4'>
            <span className='text-purple-400'>available</span>
            <Colon />
            <span className='text-blue-400'>true</span>
          </div>
          <div className='mb-2'>
            <span className='text-blue-400'>{'}'}</span>
            <span className='text-white'>;</span>
          </div>

          <div className='mt-4 animate-pulse'>
            <span className='text-white'>_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
