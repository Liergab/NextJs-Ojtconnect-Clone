import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { BriefcaseBusiness, Eye, EyeOff, Lock, Mail, MapPin} from 'lucide-react'
import { Checkbox } from '../ui/checkbox'

const CompanyForm = () => {
  const [isShow, setIshow] = useState<boolean>(false)
  const [isConfirmPasShow , setIsConfirmPasShow] = useState<Boolean>(false)
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if(isAgree){
      console.log('agreed in term')
    }else{
      console.log('compant not agree')
    }
  })
  return (
    <div>
          <form className='flex flex-col gap-2' >
              <Input 
                type='text' 
                placeholder='Company Name' 
                className='login-signup-input'
                startIcon={BriefcaseBusiness}
              />
               <Input 
                type='text' 
                placeholder='Address' 
                className='login-signup-input'
                startIcon={MapPin}
              />
              <Input 
                type='text' 
                placeholder='Email Address' 
                className='login-signup-input'
                startIcon={Mail}
              />
              <Input 
                type={isShow ? 'text' : 'password'} 
                placeholder='Password'
                className='login-signup-input' 
                startIcon={Lock}
                endIcon={isShow ? Eye   : EyeOff}
                click={() => setIshow(prev => !prev)} 
              />
               <Input 
                type={isConfirmPasShow ? 'text' : 'password'} 
                placeholder='Cofirm Password'
                className='login-signup-input' 
                startIcon={Lock}
                endIcon={isConfirmPasShow ? Eye   : EyeOff}
                click={() => setIsConfirmPasShow(prev => !prev)} 
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
            {isOpen && <h1>Modal for term and condition</h1>}
    </div>
  )
}

export default CompanyForm