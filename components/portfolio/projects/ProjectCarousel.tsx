'use client';
import { useEffect, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function ProjectCarousel({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    // <div className='max-w-xs px-4'>
    <div className='w-full px-6'>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className='relative aspect-square overflow-hidden rounded-md'>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    className='object-cover'
                    fill
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='translate-x-2 disabled:hidden' />
        <CarouselNext className='-translate-x-2 disabled:hidden' />
      </Carousel>
      <div className='text-muted-foreground text-xs md:text-sm py-2 text-center'>
        {current} / {count}
      </div>
    </div>
  );
}