'use client';
// import { useFormState } from 'react-dom'; // react 18버전

import { useFormStatus } from 'react-dom';

// import { createPost } from "@/app/api/posts/route";
import { createPostAction } from '@/utils/actions';
import { useActionState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Form() {
  const [message, formAction] = useActionState(createPostAction, null);

  return (
    <form action={formAction} method='POST'>
      {message && (
        <div className='text-red-500'>
          {message.success ? (
            <p>{message.message}</p>
          ) : (
            <p>{message.message}</p>
          )}
        </div>
      )}
      <div className='space-y-4'>
        {/* 제목 입력 */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='title' className='pl-1 text-sm font-medium'>
            제목
          </label>
          <Input
            type='text'
            name='title'
            id='title'
            className='rounded-lg border border-gray-200 px-4 py-3 placeholder-gray-400 transition focus:ring-2 focus:outline-none'
            placeholder='제목을 입력하세요'
          />
        </div>

        {/* 내용 입력 */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='content' className='pl-1 text-sm font-medium'>
            내용
          </label>
          <textarea
            name='content'
            id='content'
            rows={5}
            className='resize-none rounded-lg border border-gray-200 px-4 py-3 placeholder-gray-400 transition focus:ring-2 focus:outline-none'
            placeholder='내용을 입력하세요'
          />
        </div>
      </div>
      <div className='mt-4 flex items-center justify-end'>
        <SubmitButton />
      </div>
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' size='lg' disabled={pending}>
      {pending ? 'submitting...' : '작성'}
    </Button>
  );
};
