'use client';

export default function TempSpinner() {
  return (
    <div className='flex h-40 items-center justify-center'>
      <div className='h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent' />
    </div>
  );
}
