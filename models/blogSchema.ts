import * as z from 'zod';
import { ZodSchema } from 'zod';

// BlogSchema 스키마 정의
export const BlogSchema: ZodSchema = z.object({
  title: z
    .string()
    .nonempty({ message: '제목은 필수입니다.' })
    .min(2, { message: '제목을 입력하세요' })
    .max(50, { message: '제목은 50자 이내로 입력하세요' }),
  content: z
    .string()
    .nonempty({ message: '내용은 필수입니다.' })
    .min(2, { message: '내용을 입력하세요' }),
  // tags: z.array(z.string()).optional(),
  // thumbnail: z.string().optional(),
  // publishedAt: z.date().optional(),
  // updatedAt: z.date().optional(),
});