import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CreateAccount = () => {
  return (
    <div className='flex justify-center items-baseline my-10'>
      <div className='flex flex-col items-center justify-center  p-10 bg-slate-100 border-gray-200'>
        <Image src={'/logo.png'} alt='logo' width={200} height={200} className=''/>
        <h2 className='font-bold text-3xl'>Create an Account</h2>
        <h2 className='text-gray-500'>Enter your Email and Password to create an account</h2>
        <div className='flex flex-col gap-5 mt-7 w-full'>
          <Input placeholder='Username'/>
          <Input type='email' placeholder='Email'/>
          <Input type='password' placeholder='Password'/>
          <Button>Create an Account</Button>
          <p>Already have an account? <Link href={'/sign-in'} className='text-blue-500'>click here to Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount