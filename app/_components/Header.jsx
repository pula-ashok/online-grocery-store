'use client'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LayoutGridIcon, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import getCategory from '../_utils/GlobalApi'

const Header = () => {
  const [categoryList, setCategoryList] = useState([])
  useEffect(()=>{
    getCategoryList()
  },[])
  console.log(categoryList)
  const getCategoryList=()=>{
    getCategory().then(res=>setCategoryList(res?.data?.data))
  }
  return (
    <div className='flex justify-between p-5 shadow-md'>
      <div className='flex items-center gap-8'>
        <Image src={'/logo.png'} alt='logo' width={150} height={100}/>
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
                <DropdownMenuItem key={index} className='flex gap-4 items-center cursor-pointer'>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+category?.icon[0]?.url} alt='category' width={30} height={30} className=''/>
                 <h2 className='text-lg'>{category?.name}</h2>
                </DropdownMenuItem>
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
          <ShoppingBag/> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Header