'use client'
import {useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { newPasswordSchema } from '@/Types/FormTypes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { newPassword } from '@/actions/new-password'

type formFields = z.infer<typeof newPasswordSchema>

const NewPassword = () => {
    const [isShow, setIshow] = useState<boolean>(false)
    const [isConfirmPasShow , setIsConfirmPasShow] = useState<Boolean>(false)
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const form = useForm<formFields>({
      resolver: zodResolver(newPasswordSchema),
      defaultValues: {
        password:'',
        password_confirmation:''
      },
    })
    const onSubmit = async(values:formFields) => {
      startTransition(async() => {
        const result = await newPassword(values, token);
        if(result){
          if (result.error) {
            toast.error(result.error!);
          } else if(result.success) {
            toast.success(result.success!)
            form.reset()
            router.push('/login')
          }
        }
       })
    }
  
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='w-full max-w-2xl bg-melanie-500 min-h-96 rounded-xl flex flex-col justify-center items-center gap-10'>
        <h1 className='text-2xl font-bold text-melanie-900'>Reset You Password!</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col w-full max-w-96 gap-6 '>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                      <Input
                        type={isShow ? 'text' : 'password'} 
                        placeholder="Password" {...field}  
                        className='login-signup-input' 
                        startIcon={Lock} 
                        endIcon={isShow ? Eye   : EyeOff}
                        click={() => setIshow(prev => !prev)}
                  />
                </FormControl>
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                      <Input
                        type={isConfirmPasShow ? 'text' : 'password'} 
                        placeholder="Confirm Paasword" {...field}  
                        className='login-signup-input' 
                        startIcon={Lock} 
                        endIcon={isConfirmPasShow ? Eye   : EyeOff}
                        click={() => setIsConfirmPasShow(prev => !prev)} 
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
                {isPending ? 'Saving Password'  : 'Reset password'}
              </Button>
              <Link href='/login'>
                <Button type='button' variant='outline' className='rounded-xl'>
                    Back to Login
                </Button>
              </Link>
            </div>
        </form>
        </Form>
      </div>
    </div>
  )
}

export default NewPassword

