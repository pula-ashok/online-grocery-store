import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='flex flex-col items-center gap-3 border rounded-lg p-2 md:p-6 hover:scale-105 transition-all ease-in-out hover:shadow-lg cursor-pointer'>
        <Image width={500} height={200} className='h-[200px] w-[200px] object-contain' alt='' src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product?.images[0]?.url}/>
        <h2 className='font-bold text-lg'>{product?.name}</h2>
        <div className='flex gap-3'>
            <h2 className='font-bold text-lg'>${product?.sellingPrice}</h2>
            <h2 className={`font-bold text-lg ${product?.sellingPrice && 'line-through text-gray-500'}`}>${product?.mrp}</h2>
        </div>
        <p>Testing product</p>
        <Button variant={'outline'} className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
    </div>
  )
}

export default ProductItem