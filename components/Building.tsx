import Image from 'next/image'
import React from 'react'

const Building = () => {
  return (
    <div className='w-full min-h-[300px] flex items-center justify-center '>
        <Image src='./building.svg' alt='building' width={100} height={100} className='w-11/12 mx-auto bg-cover bg-no-repeat' />
    </div>
  )
}

export default Building