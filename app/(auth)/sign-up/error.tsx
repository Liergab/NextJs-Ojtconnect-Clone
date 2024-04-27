'use client'
import { Button } from '@/components/ui/button'
import React from 'react'


const SignUpError = ({error, reset}:{error:Error, reset: () => void}) => {
  return (
    <div>
       <h2>Something went wrong!</h2>
       <h2>Error:{error.message}</h2>
       <Button onClick={reset}>Try Again</Button>
    </div>
  )
}

export default SignUpError 
