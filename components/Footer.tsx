"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'


const Footer = () => {
    const [email, setEmail] = useState<string>("")

    const handleClick = (e:any) => {
        e.preventDefault()

        if(email === ""){
            return;
        }
        alert(email)

        setEmail('')
    }
    
  return (
    <section className='w-full flex items-center justify-center  min-h-[500px]  gap-20'>
            <div className='flex-1 flex flex-col gap-2'>
                <h1 className='text-3xl font-bold text-melanie-600 text-center'>Subscribe</h1>
                <p className='text-center'>Subscribe our Newsletter to stay updated</p>
                <form action="" className='flex flex-col gap-2'>
                    <Input 
                        type='text' 
                        placeholder='Email Address' className='border-2 border-melanie-700 rounded-[6px]' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Button 
                        variant='outline' className='subscribe-button hover:bg-melanie-600 hover:text-melanie-200 shadow-xl'
                        onClick={handleClick}
                    >
                        submit
                    </Button>
                </form> 
            </div>
            <div className='flex-1  flex items-center justify-center'>
                <Image src='./footer-logo.svg' alt='footer-logo' width={100} height={100} className='w-52'/>
            </div>
            <div className='flex-1 flex flex-col gap-4 '>
                <h1 className='text-3xl font-bold text-melanie-600 text-center'>Follow us on Social Media</h1>
                <div className='flex items-center justify-between px-20'>
                    <Image src='./fb.svg' alt='fb' width={100} height={100} className='w-16'/>
                    <Image src='./insta.svg' alt='insta' width={100} height={100} className='w-16'/>
                    <Image src='./linkedin.svg' alt='linkedin' width={100} height={100} className='w-16'/>
                </div>
                <p className='text-center'>Email us at <span>info@ojtconnect.com</span></p>
            </div>
     
    </section>
  )
}

export default Footer
