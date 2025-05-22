// import { twMerge } from 'tailwind-merge';

export default function TagList({
  tags,
  // className,
}: {
  tags: string[];
  // className?: string;
}) {
  // const classes = twMerge(
  //   `rounded-lg bg-muted px-3 py-1 text-sm sm:text-sm`,
  //   className,
  // );

  return (
    // <div className='flex flex-wrap gap-2 sm:mt-0'>
    //   {children.map((item, idx) => (
    //     <div
    //       key={idx}
    //       className={classes}
    //     >
    //       {item}
    //     </div>
    //   ))}
    // </div>
    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className='bg-muted inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium'
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
