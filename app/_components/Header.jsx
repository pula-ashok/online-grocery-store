'use client'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { CircleUserRound, LayoutGridIcon, Search, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { getCartItems, getCategory } from '../_utils/GlobalApi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UpdateCartContext } from '../_context/UpdateCartContext'

const Header = () => {
  const [categoryList, setCategoryList] = useState([])
  const [totalCartItems, setTotalCartItems] = useState(0)
  const router=useRouter()
  const isLoggedIn=sessionStorage.getItem('jwt')?true:false
  const jwt=JSON.parse(sessionStorage.getItem('jwt'))
  const user=JSON.parse(sessionStorage.getItem('user'))
  const {updateCart,setUpdateCart}=useContext(UpdateCartContext)
  
  useEffect(()=>{
    getCategoryList()
  },[])
  useEffect(()=>{
    cartItems()
  },[updateCart])
  const getCategoryList=()=>{
    getCategory().then(res=>setCategoryList(res?.data?.data))
  }
  const cartItems=async()=>{
   const res=await getCartItems(jwt,user?.id)
   console.log('ashok',res)
   setTotalCartItems(res?.length)
  }
  const onSignOut=()=>{
    sessionStorage.clear()
    router.push('/sign-in')
  }
  return (
    <div className='flex justify-between p-5 shadow-md'>
      <div className='flex items-center gap-8'>
        <Link href={"/"} ><Image src={'/logo.png'} alt='logo' width={150} height={100}/></Link>        
        <DropdownMenu>
          <DropdownMenuTrigger>
          <h2 className='md:flex items-center gap-2 border rounded-full p-2 px-10 bg-slate-200 cursor-pointer hidden'>
            <LayoutGridIcon/> Category
          </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {
              categoryList.map((category,index)=>
                <Link href={`/products-category/${category?.name}`} key={index}>
                <DropdownMenuItem key={index} className='flex gap-4 items-center cursor-pointer'>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+category?.icon[0]?.url} alt='category' width={30} height={30} className=''/>
                 <h2 className='text-lg'>{category?.name}</h2>
                </DropdownMenuItem>
                </Link>
              )
            }
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='md:flex items-center gap-3 border rounded-full p-2 px-5 hidden'>
          <Search/>
          <input type="text" placeholder='Search' className='outline-none'/>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <h2 className='flex items-center gap-2'>
          <ShoppingBasket className='w-7 h-7'/> <span className='bg-primary text-white rounded-full px-2'>{totalCartItems}</span>
        </h2>
      {!isLoggedIn ?  <Link href={'/sign-in'}><Button>Login</Button></Link>:<DropdownMenu>
        <DropdownMenuTrigger><CircleUserRound className='bg-green-100 text-primary p-2 h-12 w-12 rounded-full cursor-pointer'/></DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>My Order</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>onSignOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>}
        
      </div>
    </div>
  )
}

export default Header