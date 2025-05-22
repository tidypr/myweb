import Link from 'next/link';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Terminal from './Terminal';

export default function Intro() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      {/* <div className='grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]'> */}
      <div className='grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center space-y-4'>
          <div className='space-y-3'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
              안녕하세요.
              <br />
              <span className='text-primary'>개발자 박준하 입니다.</span>
            </h1>
            <p className='text-muted-foreground max-w-[600px] md:text-xl'>
              창의적인 솔루션과 사용자 중심 디자인으로 웹 경험을 향상시키는 데
              열정을 가진 개발자입니다.
            </p>
          </div>
          <div className='flex flex-col gap-2 min-[400px]:flex-row'>
            <Button asChild>
              <Link href='#projects'>
                프로젝트 보기 <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='#contact'>연락하기</Link>
            </Button>
          </div>
          <div className='flex items-center gap-4 pt-4'>
            <Link
              href='https://github.com/tidypr'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground'
            >
              <Github className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href='mailto:tidypr@gmail.com'
              className='text-muted-foreground hover:text-foreground'
            >
              <Mail className='h-5 w-5' />
              <span className='sr-only'>Email</span>
            </Link>
          </div>
        </div>
        <Terminal />
      </div>
    </div>
  );
}
