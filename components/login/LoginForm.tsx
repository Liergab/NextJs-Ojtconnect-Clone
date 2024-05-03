import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { LoginFormSchema } from '@/Types/FormTypes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { useTransition } from 'react'
import { Button } from '../ui/button'
import Modal from '../Modal'
import ForgetPassword from '../modal/ForgetPassword'
import { useRouter } from 'next/navigation'
import { login } from '@/actions/login'


type formFields = z.infer<typeof LoginFormSchema>

const LoginForm = () => {
    const [isPending, startTransition] = useTransition()
    const [isShow, setIshow] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const router = useRouter()
    
    const form = useForm<formFields>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
          email:'',
          password:''
        },
    })

    const onSubmit = async(values:formFields) => {
       startTransition(async() => {
        const result = await login(values);
        if(result){
          if (result.error) {
            toast.error(result.error!);
          } else if(result.success) {
            toast.success(result.success!)
          }
        }
        
      
       })
    }

    useEffect(() => {
        if(form.formState.errors.email){
          toast.error(form.formState.errors.email.message!);
        }
        if (form.formState.errors.password) {
          toast.error(form.formState.errors.password.message!);
        }
       
      }, [form.formState.errors]);

  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col space-y-3'>
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
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <Input 
                            type={isShow ? 'text' : 'password'} 
                            placeholder='Password' {...field}
                            className='login-signup-input'
                            startIcon={Lock}
                            endIcon={isShow ? Eye   : EyeOff}
                            click={() => setIshow(prev => !prev)} 
                        />
                        </FormControl>
                    </FormItem>
                    )}
                />
                <div className='flex flex-col space-y-2'>
                <div className='font-semibold text-melanie-900 text-base md:text-lg' 
                    onClick={() =>setIsOpen(prev => !prev)}
                >
                    Forget Password?
                </div>
                <Button 
                   type='submit'
                    variant='outline' 
                    className='login-signup hover:bg-melanie-400 hover:text-melanie-800'>
                        LOGIN
                </Button>
              </div>
            </form>
        </Form>
        <Modal open={isOpen}>
           <ForgetPassword setIsOpen={setIsOpen} />
        </Modal>
    </div>
  )
}

export default LoginForm
