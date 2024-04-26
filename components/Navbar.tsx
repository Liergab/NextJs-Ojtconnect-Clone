'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  
  
  const handleCloseMenu = () => {
    setOpen(false);
  };


  const pathname = usePathname()

  const news =  pathname === '/news'
  const faq =  pathname === '/faq'
  const home = pathname === '/'

  return (
    <div className='flex justify-between items-center mt-8 md:mt-32'>
        <div className='flex items-center w-full max-w-80 gap-4'>
            <Image 
                src='./logo.svg'
                alt='logo' 
                width={100} 
                height={100} 
                className='w-10 md:w-14' 
            />
            <h1 className='text-lg md:text-xl font-bold text-melanie-700'>OJT CONNECT</h1>
        </div>
        <div className='hidden lg:flex items-center justify-end space-x-3 lg:space-x-10 w-full max-w-3xl text-melanie-900 font-bold text-xl'>
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
        
         
       
        {/* mobile */}
        <div>
          <div className='flex flex-col items-center justify-center lg:hidden'>
            <DropdownMenu>
            <DropdownMenuTrigger > 
              <Hamburger toggled={isOpen} toggle={setOpen} color='#6b303e' size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-melanie-700'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleCloseMenu}>
                <Link href={`${news}` && `${faq}` ?'/#home' :'#home'} className={cn('hover:underline cursor-pointer',{'underline font-extrabold text-melanie-950': home})}>
                  HOME
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCloseMenu}>
                <Link href={`${news}` && `${faq}` ?'/#discover' :'#discover'}  className='hover:underline cursor-pointer'>
                 DISCOVER
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCloseMenu}>
                <Link href={`${news}` && `${faq}` ?'/#about' :'#about'} className='hover:underline cursor-pointer'>
                  ABOUT
               </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCloseMenu}>
                <Link href='/news' className={cn('hover:underline cursor-pointer',{'underline font-extrabold text-melanie-950': news})}>
                  NEWS
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCloseMenu}>
                <Link href='/faq' className={cn('hover:underline cursor-pointer',{'underline font-extrabold text-melanie-950': faq})}>
                    FAQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCloseMenu}>
                <Link href={`${news}` && `${faq}` ?'/#contact' :'#contact'} className='hover:underline cursor-pointer'>
                  CONTACT US
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>

        
    </div>
  )
}

export default Navbar