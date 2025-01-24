import { Button } from '@/components/ui/button'
import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductItemDetails = ({product}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product?.images[0]?.url} alt='product' width={300} height={300} className='bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg'/>
        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-bold'>{product?.name}</h2>
            <h2 className='text-sm text-gray-500'>{product?.description}</h2>
            <div className='flex gap-3'>
                <h2 className='font-bold text-lg'>${product?.sellingPrice}</h2>
                <h2 className={`font-bold text-lg ${product?.sellingPrice && 'line-through text-gray-500'}`}>${product?.mrp}</h2>
             </div>
             <h2 className='font-medium text-lg'>Quantity : {product?.itemQuantiyType}</h2>
             <div className='flex flex-col items-baseline gap-3'>
                <div className='flex p-2 border gap-10 items-center px-5'>
                    <button>-</button>
                    <h2>1</h2>
                    <button>+</button>
                </div>
                <Button><ShoppingBasket/> Add To Cart</Button>
             </div>
             <h2><span className='font-bold'>Category: </span>{product?.categories[0]?.name}</h2>
        </div>
    </div>
  )
}

export default ProductItemDetails