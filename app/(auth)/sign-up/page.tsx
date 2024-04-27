'use client'
import CompanyForm from '@/components/sign-up/CompanyForm'
import StudentForm from '@/components/sign-up/StudentForm'
import ToggleSignUp from '@/components/sign-up/Toggle-signup'
import Image from 'next/image'
import Link from 'next/link'
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
    <section className='flex items-center justify-center w-full min-h-screen px-4 md:px-10'>
      <div className='flex login-signup-bg w-full max-w-6xl h-auto rounded-xl'>
          <div className='flex-[2] hidden md:flex items-center justify-center p-10 '>
            <Image src='./about.svg' alt='side-image' width={100} height={100} className='w-full'/>
          </div>
          <div className='flex-[1.3] flex flex-col gap-4 w-full py-10 px-6 sm:px-10'>
            <div className='w-full border-2 border-melanie-800 bg-melanie-700 rounded-xl flex items-center justify-around py-2 px-4'>
              <ToggleSignUp handleToggle={handleToggle} activeToggle={activeToggle} />
            </div>
            <div>
                <h1 className='text-lg md:text-xl font-bold text-melanie-800'>Welcome to OJT Connect</h1>
                <p className='text-base md:text-lg font-semibold text-melanie-800'>{`Let's Get Started! `}
                    <Link href='/login' >
                        <span className='underline text-melanie-900 font-bold text-base md:text-lg'>
                             Login here.
                        </span> 
                    </Link>
                </p>
            </div>
            {is_StudentShow && <StudentForm/>}
            {is_CompanyShow && <CompanyForm/>}
          </div>
      </div>
    </section>
  )
}

export default SignIn