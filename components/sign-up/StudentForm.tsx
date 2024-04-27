import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Eye, EyeOff, Lock, Mail, RectangleEllipsis } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { SignUpForm } from '@/Types/FormTypes'
import toast from 'react-hot-toast'

type formFields = z.infer<typeof SignUpForm>

const StudentForm = () => {
  const [isShow, setIshow] = useState<boolean>(false)
  const [isConfirmPasShow , setIsConfirmPasShow] = useState<Boolean>(false)
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<formFields>({
        resolver: zodResolver(SignUpForm),
        defaultValues: {
          firstname :'',
          role      :'STUDENT',
          lastname  :'',
          email     :'',
          password  :'',
          password_confirmation:''
        },
      })

      const onSubmit = (data:formFields) => {
        try {
          if(!isAgree){
            toast.error('Please agree in terms')
          }else{
            console.log(data)
            form.reset()
          }
        } catch (error) {
          console.log(error)
        }
       
       
      }


    useEffect(() => {
      if(form.formState.errors.firstname){
        toast.error(form.formState.errors.firstname.message!);
      }
      if(form.formState.errors.lastname){
        toast.error(form.formState.errors.lastname.message!);
      }
      if(form.formState.errors.email){
        toast.error(form.formState.errors.email.message!);
    }
      if (form.formState.errors.password) {
        toast.error(form.formState.errors.password.message!);
      }
      if(form.formState.errors.password_confirmation){
        toast.error(form.formState.errors.password_confirmation.message!);
      }
    }, [form.formState.errors]);

  return (
    <div>
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2' >
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="FirstName" {...field}  
                        className='login-signup-input' 
                        startIcon={RectangleEllipsis} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                    <Input 
                        type='text' 
                        placeholder='LastName' {...field}
                        className='login-signup-input'
                        startIcon={RectangleEllipsis}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type='text' 
                        placeholder='Email Address' {...field} 
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
                        placeholder='Password'  {...field}
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
                        placeholder='Cofirm Password'  {...field}
                        className='login-signup-input' 
                        startIcon={Lock}
                        endIcon={isConfirmPasShow ? Eye   : EyeOff}
                        click={() => setIsConfirmPasShow(prev => !prev)} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='flex flex-col p-2 gap-2 '>
                <div className='flex gap-2 items-center'>
                  <Checkbox 
                    className='border-2 border-melanie-900 w-5 h-5 rounded-[4px]' 
                    checked={isAgree}
                    onCheckedChange={() => setIsAgree(!isAgree)} />
                  <label
                    className="term-condition-label text-xs"
                    onClick={() => setIsOpen(prev => !prev)}
                  >
                    Accept terms and conditions
                  </label>
                </div>
               
                <Button 
                  type='submit' 
                  variant='outline'
                  className='login-signup hover:bg-melanie-400 hover:text-melanie-80 w-full'>
                  SIGN UP
                </Button>
              </div>
            </form>
        </Form>
            {isOpen && <h1>Modal for term and condition</h1>}
    </div>
  )
}

export default StudentForm