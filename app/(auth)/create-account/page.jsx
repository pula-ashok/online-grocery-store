'use client'
import { registerUser } from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

const CreateAccount = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router=useRouter()
  const onCreateAccount=()=>{
    console.log(username,email,password)
    registerUser(username,email,password).then(res=>{
      console.log(res?.data?.user)
      console.log(res?.data?.jwt)
      sessionStorage.setItem('user',JSON.stringify(res?.data?.user))
      sessionStorage.setItem('jwt',JSON.stringify(res?.data?.jwt))
      toast.success('Account created successfully')
      router.push('/')
    }).catch(err=>toast.error(err.message))
  }
  return (
    <div className='flex justify-center items-baseline my-10'>
      <div className='flex flex-col items-center justify-center  p-10 bg-slate-100 border-gray-200'>
        <Image src={'/logo.png'} alt='logo' width={200} height={200} className=''/>
        <h2 className='font-bold text-3xl'>Create an Account</h2>
        <h2 className='text-gray-500'>Enter your Email and Password to create an account</h2>
        <div className='flex flex-col gap-5 mt-7 w-full'>
          <Input placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
          <Input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <Input type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
          <Button onClick={onCreateAccount} disabled={!username || !email || !password}>Create an Account</Button>
          <p>Already have an account? <Link href={'/sign-in'} className='text-blue-500'>click here to Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount