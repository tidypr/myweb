'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { ImSpinner3 } from 'react-icons/im';

type SubmitButtonProps = {
  text: string;
};

export default function SubmitButton({ text }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' size='lg' disabled={pending}>
      {pending ? (
        <span className='flex gap-1'>
          <ImSpinner3 className='animate-spin' />
          {`${text}중..`}
        </span>
      ) : (
        text
      )}
    </Button>
  );
}
