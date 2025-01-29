'use client'
import { signInUser } from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router=useRouter()
  useEffect(()=>{
    const jwt=sessionStorage.getItem('jwt')
    if(jwt){
      router.push('/')
    }
  },[])
  const onSignInAccount=()=>{
    setLoading(true)
    signInUser(email,password).then(res=>{
      sessionStorage.setItem('user',JSON.stringify(res?.data?.user))
      sessionStorage.setItem('jwt',JSON.stringify(res?.data?.jwt))
      toast.success('Sign In successfully')
      setLoading(false)
      router.push('/')
    }).catch(err=>{setLoading(false);toast.error(err?.response?.data?.error?.message)})
  }
  return (
    <div className='flex justify-center items-baseline my-20'>
      <div className='flex flex-col items-center justify-center  p-10 bg-slate-100 border-gray-200'>
        <Image src={'/logo.png'} alt='logo' width={200} height={200} className=''/>
        <h2 className='font-bold text-3xl'>Sign In</h2>
        <h2 className='text-gray-500'>Enter your Email and Password to Sign In</h2>
        <div className='flex flex-col gap-5 mt-7 w-full'>
          <Input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <Input type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
          <Button onClick={onSignInAccount} disabled={ !email || !password}>{loading?<LoaderIcon className='animate-spin'/>:'Sign In'}</Button>
          <p>Don't have an account? <Link href={'/create-account'} className='text-blue-500'>click here to create an account</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn