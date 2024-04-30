import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Lock } from 'lucide-react'

const ForgetPassword = ({setIsOpen}:{setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className='flex flex-col items-start justify-center w-fulll h-80 px-4 md:px-20 gap-4'>
        <p className='text-base md:text-2xl  font-bold'>Forget Password</p>
        <p className=' text-sm md:text-lg font-semibold'>{`Are you sure you want to reset your password?
            A confirmation email will be sent to your registered email address.`}
        </p>
        <Input type='text' placeholder='Email Address'  className='login-signup-input' startIcon={Lock} />
        <div className='w-full flex flex-row-reverse'>
            <Button 
                variant='outline' 
                onClick={() => setIsOpen(false)}>
                Cancel
            </Button>
        </div>
    </div>
  )
}

export default ForgetPassword
