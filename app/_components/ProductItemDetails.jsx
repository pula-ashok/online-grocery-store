'use client'
import { Button } from '@/components/ui/button'
import { LoaderCircle, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { addToCart } from '../_utils/GlobalApi'
import { toast } from 'sonner'
import { UpdateCartContext } from '../_context/UpdateCartContext'

const ProductItemDetails = ({product}) => {
  const [productToalPrice, setProductToalPrice] = useState(product?.sellingPrice?product?.sellingPrice:product?.mrp)
  const [quantity, setQuantity] = useState(1)
  const jwt=sessionStorage.getItem('jwt')
  const user=JSON.parse(sessionStorage.getItem('user'))
  const router=useRouter()
  const [loading, setLoading] = useState(false)
  const {updateCart,setUpdateCart}=useContext(UpdateCartContext)
  const addingCart=()=>{
    setLoading(true)
      if(!jwt){
        setLoading(false)
        router.push('/sign-in')
      }
      const data={
        data:{
          quantity,
          amount:(quantity*productToalPrice).toFixed(2),
          // products:product.id,
          // users_permissions_users:user.id,
          userid:user.id
        }
      }
    addToCart(data, JSON.parse(jwt))
      .then((res) => {
        toast.success("Product added to cart successfully");
        // router.push("/cart");
        setUpdateCart(!updateCart)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.error?.message);
      });
  }
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
              <div className='flex gap-3 items-center'>
                <div className='flex p-2 border gap-10 items-center px-5'>
                    <button disabled={quantity===1} onClick={()=>setQuantity(quantity-1)}>-</button>
                    <h2>{quantity}</h2>
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
                <h2 className='text-2xl font-bold'>${(quantity * productToalPrice).toFixed(2)}</h2>
              </div>
                <Button onClick={()=>addingCart()} disabled={loading}><ShoppingBasket/>{loading?<LoaderCircle className='animate-spin'/>: 'Add To Cart'}</Button>
             </div>
             <h2><span className='font-bold'>Category: </span>{product?.categories[0]?.name}</h2>
        </div>
    </div>
  )
}

export default ProductItemDetails