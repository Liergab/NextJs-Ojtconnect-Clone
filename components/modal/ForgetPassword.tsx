"use client"
import React, { useEffect, useTransition } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {  Mail } from 'lucide-react'
import {useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPassword } from '@/Types/FormTypes'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import toast from 'react-hot-toast'
import { reset } from '@/actions/reset'

type formFields = z.infer<typeof resetPassword>

const ForgetPassword = ({setIsOpen}:{setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<formFields>({
    resolver: zodResolver(resetPassword),
    defaultValues: {
      email:''
    },
  })
  const onSubmit = async(values:formFields) => {
    startTransition(async() => {
      const result = await reset(values);
      if(result){
        if (result.error) {
          toast.error(result.error!);
        } else if(result.success) {
          toast.success(result.success!)
          form.reset()
        }
      }
     })
  }

  useEffect(() => {
    if(form.formState.errors.email){
      toast.error(form.formState.errors.email.message!);
    } 
  }, [form.formState.errors]);


  return (
    <div className='flex flex-col items-start justify-center w-fulll h-80 px-4 md:px-20 gap-4'>
        <p className='text-base md:text-2xl  font-bold'>Forget Password</p>
        <p className=' text-sm md:text-lg font-semibold'>{`Are you sure you want to reset your password?
            A confirmation email will be sent to your registered email address.`}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col w-full gap-6 '>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email Address" {...field}  
                        className='login-signup-input' 
                        startIcon={Mail} 
                  />
                </FormControl>
                </FormItem>
                )}
            />
            <div className='w-full flex justify-between'>
              <Button 
                disabled={isPending}
                variant='outline'
                type='submit' className='rounded-xl'>
                {isPending ? 'Sending to your email'  : 'Send reset password'}
              </Button>
                <Button 
                    type='button'
                    variant='outline' 
                    onClick={() => setIsOpen(false)}  className='rounded-xl'>
                    Cancel
                </Button>
            </div>
        </form>
        </Form>
    </div>
  )
}

export default ForgetPassword
