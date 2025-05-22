import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import CopyAddress from './CopyAddress';
import SendMail from './SendMail';
// export default function CopyAddress({ address }) {

export default function Contact() {
  return (
    <div className='mx-auto flex flex-col gap-4 mb-12'>
      <p className='flex w-full items-center justify-center text-gray-600 dark:text-gray-400'>
        연락처
      </p>

      <div className='rounded-lg border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex items-center'>
            <div className='mr-4 flex h-10 w-10 hover: items-center justify-center rounded-full bg-gray-100 hover:bg-gray-400 dark:bg-gray-700'>
              <Mail className='h-5 w-5 text-gray-700 dark:text-gray-300' />
            </div>
            <CopyAddress title='Email' address='tidypr@gmail.com' />
          </div>

          <div className='flex items-center'>
            <div className='mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-400 dark:bg-gray-700'>
              <Link
                href='https://github.com/tidypr'
                target='_blank'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5 text-gray-700 dark:text-gray-300' />
              </Link>
            </div>
            <CopyAddress title='Github' address='github.com/tidypr' />
          </div>
        </div>
      </div>
      <SendMail />
    </div>
  );
}
