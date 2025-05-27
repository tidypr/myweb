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
    <section>
      <div className='mx-auto max-w-7xl px-4'>
        <div id={id} className='scroll-mt-24 text-lg md:text-2xl'>
          {title && (
            <h2 className='mb-12 text-center text-2xl font-semibold capitalize md:text-3xl'>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
