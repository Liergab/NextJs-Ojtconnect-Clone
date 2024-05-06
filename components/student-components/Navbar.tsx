'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { CircleUser,  LayoutDashboard, Mail, Menu, Search } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import Image from 'next/image'


const StudentNavbar = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
  
  
    const handleCloseMenu = () => {
      setOpen(false);
    };
  return (
    <div className='fixed w-full'>
        <div className='flex w-full items-center justify-center space-x-20 bg-melanie-300 py-4'>
            <div>
                <Image src='/Logo.svg' alt='logo' width={100} height={100} className='w-10' />
            </div>
            <div className='w-full max-w-96'>
                <Input 
                    type='text'
                    placeholder='Search here..'
                    className='max-w-96 login-signup-input'
                    startIcon={Search}
                    
                />
            </div>
            <div className='flex items-center justify-center space-x-10'>
                <LayoutDashboard size={30}/>
                <Mail size={32}/>
                <div onClick={handleCloseMenu} className='flex'>
                    <DropdownMenu>
                        <DropdownMenuTrigger disabled={isOpen}> 
                            <Menu size={32}/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-melanie-700'>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem >
                                <CircleUser/>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>    
            </div>    
        </div> 
    </div>
  )
}

export default StudentNavbar
