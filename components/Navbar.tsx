'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()

  const news =  pathname === '/news'
  const faq =  pathname === '/faq'
  const home = pathname === '/'

  return (
    <div className='flex justify-between items-center mt-32'>
        <div className='flex items-center w-full max-w-80 gap-4'>
            <Image 
                src='./logo.svg'
                alt='logo' 
                width={100} 
                height={100} 
                className='w-14' 
            />
            <h1 className='text-xl font-bold text-melanie-700'>OJT CONNECT</h1>
        </div>
        <div className='flex items-center justify-end space-x-10 w-full max-w-3xl text-melanie-900 font-bold text-xl'>
            <Link href={`${news}` && `${faq}` ?'/#home' :'#home'} className={cn('hover:underline cursor-pointer',{'underline font-extrabold text-melanie-950': home})}>
              HOME
            </Link>
            <Link href={`${news}` && `${faq}` ?'/#discover' :'#discover'}  className='hover:underline cursor-pointer'>
              DISCOVER
            </Link>
            <Link href={`${news}` && `${faq}` ?'/#about' :'#about'} className='hover:underline cursor-pointer'>
              ABOUT
            </Link>
            <Link href='/news' className={cn('hover:underline cursor-pointer',{'underline font-extrabold text-melanie-950': news})}>
              NEWS
            </Link>
            <Link href='/faq' className={cn('hover:underline cursor-pointer',{'underline font-extrabold text-melanie-950': faq})}>
              FAQ
            </Link>
            <Link href={`${news}` && `${faq}` ?'/#contact' :'#contact'} className='hover:underline cursor-pointer'>
              CONTACT US
            </Link>
        </div>

        
    </div>
  )
}

export default Navbar