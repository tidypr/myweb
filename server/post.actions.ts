'use server';
import { BlogSchema } from "@/models/blogSchema";
// import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import db from '@/lib/db';

export const readAllPostAction = async () => {
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return posts;
};

export const createPostAction = async (
  prevState: { message: string },
  formData: FormData,
) => {

  try {
    const rawData = Object.fromEntries(formData.entries());
    const validatedData = BlogSchema.parse(rawData);

    await db.post.create({
      data: { ...validatedData }
    })
    // console.log(validatedData)
    // await saveAccount(rawData);
    // revalidatePath('/accountbook');
    
    // return {
    //   message: '게시글 작성 성공',
    // };
  } catch (error) {
    console.log(error)
    return {
      message: '게시글 작성 실패',
    }
    // throw new Error('Failed to create post');
  } finally {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    redirect('/blog');
  }

  // const res = await fetch('http://localhost:3000/api/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({ title, content }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // if (!res.ok) {
  //   throw new Error('Failed to create post');
  // }
};

// const saveAccount = async (data: any) => {
//   const res = await fetch('http://localhost:3000/api/accountbook', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!res.ok) {
//     throw new Error('Failed to create post');
//   }
// };
