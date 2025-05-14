'use client';
// import { useFormState } from 'react-dom'; // react 18버전
import { useActionState } from 'react'; // react 19버전
import { useEffect } from 'react';
import { toast } from 'sonner';

import { actionFunction } from '@/types/types';

const initialState = {
  message: '',
};

export default function Form({ action, children }: FormContainerProps) {
  const [state, formAction] = useActionState(action, initialState);
  console.log(state)

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

type FormContainerProps = {
  action: actionFunction;
  children: React.ReactNode;
};
