import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LayoutGridIcon, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
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
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
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