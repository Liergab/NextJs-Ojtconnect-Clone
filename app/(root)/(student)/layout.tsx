import StudentNavbar from '@/components/student-components/Navbar'
import React from 'react'

const StudentLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='relative w-full min-h-screen '>
    <StudentNavbar/>
    <div className=' w-full px-4 md:px-0 min-h-screen md:container flex flex-col bg-melanie-800'>
        <div className='mt-[72px] flex gap-4 p-4'>
            <div className='flex-1 flex flex-col p-4 h-[calc(100vh-110px)] gap-2'>
                <div className=' flex-1 min-w-40 h-10 bg-melanie-300'>
                    <h1>Calendar</h1>
                </div>
                <div className='flex-1 min-w-40 h-100 bg-melanie-300'>
                    <h1>Calendar</h1>
                </div>
               
            </div>
            <div className='flex-1 flex p-4 bg-melanie-200 h-[calc(100vh-110px)] '>
                {children}
            </div>
            <div className='flex-1'>
                <h1>Book mark</h1>
            </div>
        </div>
    </div>
  </div>
  )
}

export default StudentLayout
