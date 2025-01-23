import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const Slider = ({sliderList}) => {
  return (
    <Carousel>
        <CarouselContent>
            {sliderList.map((slider,index)=>
            <CarouselItem key={index}>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+slider?.image[0]?.url} alt='slider' width={1000} height={400} className='w-full h-[200px] md:h-[400px] rounded-2xl object-cover'/>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
  <CarouselNext />
    </Carousel>
  )
}

export default Slider