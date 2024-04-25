import Navbar from '@/components/Navbar'
import React from 'react'

const LayoutHomePage = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black backgoundGradient [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className='w-full min-h-screen z-50'>
        <div className='w-full min-h-screen md:container flex flex-col '>
          <Navbar />
          {children}
        </div>
      </div>
   </div>
  )
}

export default LayoutHomePage