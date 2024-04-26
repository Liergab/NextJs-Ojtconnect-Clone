'use client'
import CompanyForm from '@/components/sign-up/CompanyForm'
import StudentForm from '@/components/sign-up/StudentForm'
import ToggleSignUp from '@/components/sign-up/Toggle-signup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState } from 'react'



const SignIn = () => {
  const [is_StudentShow, setStudentShow] = useState<boolean>(true)
  const [is_CompanyShow, setCompanyShow] = useState<boolean>(false)
  const [activeToggle, setActiveToggle] = useState<string>('student');

  const handleToggle = (toggle:string) => {
      setStudentShow(false);
      setCompanyShow(false);
      setActiveToggle(toggle);
    
      if (toggle === 'student') setStudentShow(true);
      else if (toggle === 'company') setCompanyShow(true);
      
    };

  return (
    <section className='flex items-center justify-center w-full min-h-screen'>
      <div className='flex bg-melanie-900 w-full max-w-4xl h-auto rounded-xl'>
          <div className='flex-1 bg-red-200 flex items-center justify-center p-10'>
            <Image src='./about.svg' alt='side-image' width={100} height={100} className='w-full'/>
          </div>
          <div className='flex-1 bg-green-300 p-10'>
            
            <ToggleSignUp handleToggle={handleToggle} activeToggle={activeToggle} />
           {is_StudentShow && <StudentForm/>}
           {is_CompanyShow && <CompanyForm/>}
          </div>
      </div>
    </section>
  )
}

export default SignIn