import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { BriefcaseBusiness, Eye, EyeOff, Lock, Mail, MapPin} from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpFormCompany } from '@/Types/FormTypes'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { z } from 'zod'

type formFields = z.infer<typeof SignUpFormCompany>
const CompanyForm = () => {
  const [isShow, setIshow] = useState<boolean>(false)
  const [isConfirmPasShow , setIsConfirmPasShow] = useState<Boolean>(false)
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<formFields>({
    resolver: zodResolver(SignUpFormCompany),
    defaultValues: {
      company   :'',
      role      :'COMPANY',
      address   :'',
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
  if(form.formState.errors.company){
    toast.error(form.formState.errors.company.message!);
  }
  if(form.formState.errors.address){
    toast.error(form.formState.errors.address.message!);
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
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type='text' {...field}
                        placeholder='Company Name' 
                        className='login-signup-input'
                        startIcon={BriefcaseBusiness}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type='text' 
                        placeholder='Address' {...field}
                        className='login-signup-input'
                        startIcon={MapPin}
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
                    onClick={() => setIsAgree(!isAgree)} />
                  
                  <label
                    className="term-condition-label text-xs"
                    onClick={() => setIsOpen(prev => !prev)}
                  >
                    Accept terms and conditions for company
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

export default CompanyForm