import { Send } from 'lucide-react';

export default function SendMail() {
  return (
    <div className='rounded-lg border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      <h3 className='mb-4 text-lg font-medium'>Send a Message</h3>
      <form className='space-y-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <label
              htmlFor='name'
              className='mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-1 focus:ring-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700'
              placeholder='Your name'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-1 focus:ring-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700'
              placeholder='Your email'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='message'
            className='mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            Message
          </label>
          <textarea
            id='message'
            rows={3}
            className='w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-1 focus:ring-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700'
            placeholder='Your message'
          ></textarea>
        </div>
        <button
          type='button'
          className='flex items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
        >
          <Send className='h-4 w-4' />
          Send Message
        </button>
      </form>
    </div>
  );
}
