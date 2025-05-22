export default function PortfolioSection({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    // <section className='items-left flex h-screen min-h-fit w-full flex-col justify-center'>
    <section className='w-full py-8'>
      <div className='mx-auto max-w-7xl px-4'>
        <div id={id} className='scroll-mt-24 text-lg md:text-2xl'>
          {title && (
            <h2 className='mb-12 text-center text-2xl font-semibold capitalize md:text-3xl'>
              {title}
            </h2>
          )}
          {/* <p className='text-gray-600 dark:text-gray-400'>
            section content goes here.
          </p> */}
          {children}
        </div>
      </div>
    </section>
  );
}
