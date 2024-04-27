'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {  Eye, EyeOff,  Lock,  Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {
    const [isShow, setIshow] = useState<boolean>(false)
  return (
    <section className='flex items-center justify-center w-full min-h-screen px-4 md:px-10'>
      <div className='flex login-signup-bg w-full max-w-4xl h-auto rounded-xl'>
          <div className='flex-[2] hidden md:flex   items-center justify-center p-10'>
            <Image 
                src='./about.svg' 
                alt='side-image' 
                width={100} 
                height={100} 
                className='w-full'
            />
          </div>
          <div className='flex-[1.5] flex flex-col space-y-4 p-10'>
            <div>
                <h1 className='text-lg md:text-xl font-bold text-melanie-800'>Welcome to OJT Connect</h1>
                <p className='text-base md:text-lg font-semibold text-melanie-800'>{`Let's Get Started! `}
                    <Link href='/sign-up' >
                        <span className='underline text-melanie-900 font-bold text-base md:text-lg'>
                             Sign-up here.
                        </span> 
                    </Link>
                </p>
            </div>
            <form className='flex flex-col space-y-3'>
              <Input 
                    type='text' 
                    placeholder='Email Address' 
                    className='login-signup-input'
                    startIcon={Mail}
                    
                />
              <Input 
                    type={isShow ? 'text' : 'password'} 
                    placeholder='Password'
                    className='login-signup-input'
                    startIcon={Lock}
                    endIcon={isShow ? Eye   : EyeOff}
                    click={() => setIshow(prev => !prev)} 
               />
              <div className='flex flex-col space-y-2'>
                <Link href='/forget-password' className='font-semibold text-melanie-900 text-base md:text-lg'>
                    Forget Password?
                </Link>
                <Button 
                    type='submit'
                    variant='outline' 
                    className='login-signup hover:bg-melanie-400 hover:text-melanie-800'>
                        LOGIN
                </Button>
              </div>
            </form>
          </div>
      </div>
    </section>
  )
}

export default Login