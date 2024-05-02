'use client'
import { useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { newVerificationToken } from '@/actions/new-verification'
import toast from 'react-hot-toast'

const VerificationToken = () => {

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const onSubmit = useCallback(() => {
        if(!token){
            toast.error('Missing Token')
            return;
        } 
        newVerificationToken(token).then((data) => {
            toast.success('Verified Email')
        })
    },[token])

    useEffect(() => {
        onSubmit()
    },[onSubmit])
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='w-full max-w-2xl bg-melanie-500 min-h-96 rounded-xl flex flex-col justify-center items-center gap-10'>
        <h1>Confirming your verification</h1>
      
        <Link href='/login'>
            <Button variant='outline'> Back to Login</Button>
        </Link>
      </div>
    </div>
  )
}

export default VerificationToken
