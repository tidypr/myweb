import Form from '@/components/common/Form';

import FormInput from '@/components/common/FormInput';
import FormTextArea from '@/components/common/FormTextArea';
import SubmitButton from '@/components/common/SubmitButton';
import { createPostAction } from '@/server/post.actions';

export default function CreateBlogPostpage() {
  return (
    <section className='w-full items-center justify-center'>
      <h1>CreatePostpage</h1>
      <Form action={createPostAction}>
        <div className='space-y-4'>
          {/* 제목 입력 */}
          <FormInput
            name='title'
            label='제목'
            placeholder='제목을 입력하세요'
          />

          {/* 내용 입력 */}
          <FormTextArea
            name='content'
            label='내용'
            placeholder='내용을 입력하세요'
            rows={20}
          />
        </div>
        <div className='mt-4 flex items-center justify-end'>
          <SubmitButton text='작성' />
        </div>
      </Form>
    </section>
  );
}
