'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import MerchandiseCard from '@/components/card/merchandiseCard';
export default function MerchandiseSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section className="overflow-hidden w-full mx-auto py-8">
      <Carousel
        plugins={[plugin.current]}
        className="w-full  mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselPrevious className="left-0.5 min-[1600px]:hidden max-sm:hidden z-10" />
        <CarouselNext className="right-0.5 min-[1600px]:hidden max-sm:hidden z-10" />
        <CarouselContent className="py-4">
          {Merchs.map((merch) => {
            return (
              <CarouselItem
                className="basis-auto min-[374px]:min-w-80 min-[400px]:min-w-96"
                key={merch.id}
              >
                <MerchandiseCard merch={merch} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

const Merchs = [
  {
    id: 1,
    name: 'Merchandise 1',
    desc: 'Lorem ipsum dolor sit amet, consectet',
    image: 'https://source.unsplash.com/random/200x200?merchandise',
    price: 10232,
    varient: [
      { stock: 25, color: 'red', size: 'xl', price: 100, suk: '3d3q2es2' },
      { stock: 3, color: 'blue', size: 'l', price: null, suk: '3d3dqs2' },
      { stock: 7, color: 'pink', size: 'l', price: 100, suk: '3xed3s2' },
      { stock: 10, color: 'red', size: 'xxl', price: 100, suk: '3d3sxdw2' },
    ],
  },
  {
    id: 2,
    name: 'Merchandise 2',
    desc: 'Lorem ipsum dolor sit amet, consectet',
    image: 'https://source.unsplash.com/random/200x200?merchandise',
    price: 10,
    varient: [
      { stock: 25, color: 'red', size: 'xl', price: 100, suk: '3d3q2es2' },
      { stock: 3, color: 'blue', size: 'l', price: 100, suk: '3d3dqs2' },
      { stock: 7, color: 'pink', size: 'm', price: 100, suk: '3xed3s2' },
      { stock: 10, color: 'red', size: 'xxl', price: null, suk: '3d3sxdw2' },
    ],
  },
  {
    id: 3,
    name: 'Merchandise 3',
    desc: 'Lorem ipsum dolor sit amet, consectet',
    image: 'https://source.unsplash.com/random/200x200?merchandise',
    price: 10,
    varient: [
      { stock: 25, color: 'red', size: 'xl', price: 100, suk: '3d3q2es2' },
      { stock: 3, color: 'blue', size: 'l', price: 100, suk: '3d3dqs2' },
      { stock: 7, color: 'pink', size: 'm', price: 100, suk: '3xed3s2' },
      { stock: 10, color: 'red', size: 'xxl', price: null, suk: '3d3sxdw2' },
    ],
  },
  {
    id: 4,
    name: 'Merchandise 4',
    desc: 'Lorem ipsum dolor sit amet, consectet',
    image: 'https://source.unsplash.com/random/200x200?merchandise',
    price: 10,
    varient: [
      { stock: 25, color: 'red', size: 'xl', price: 100, suk: '3d3q2es2' },
      { stock: 3, color: 'blue', size: 'l', price: 100, suk: '3d3dqs2' },
      { stock: 7, color: 'pink', size: 'm', price: 100, suk: '3xed3s2' },
      { stock: 10, color: 'red', size: 'xxl', price: null, suk: '3d3sxdw2' },
    ],
  },
  {
    id: 5,
    name: 'Merchandise 5',
    desc: 'Lorem ipsum dolor sit amet, consect',
    image: 'https://source.unsplash.com/random/200x200?merchandise',
    price: 10,
    varient: [
      { stock: 25, color: 'red', size: 'xl', price: 100, suk: '3d3q2es2' },
      { stock: 3, color: 'blue', size: 'l', price: 100, suk: '3d3dqs2' },
      { stock: 7, color: 'pink', size: 'xl', price: 100, suk: '3xed3s2' },
      { stock: 10, color: 'red', size: 'xxl', price: null, suk: '3d3sxdw2' },
    ],
  },
  {
    id: 6,
    name: 'Merchandise 6',
    desc: 'Lorem ipsum dolor sit amet, consectet',
    image: 'https://source.unsplash.com/random/200x200?merchandise',
    price: 10,
    varient: [
      { stock: 25, color: 'red', size: 'xl', price: 100, suk: '3d3q2es2' },
      { stock: 3, color: 'blue', size: 'l', price: 100, suk: '3d3dqs2' },
      { stock: 7, color: 'pink', size: 'm', price: 100, suk: '3xed3s2' },
      { stock: 10, color: 'red', size: 'xxl', price: null, suk: '3d3sxdw2' },
    ],
  },
];
