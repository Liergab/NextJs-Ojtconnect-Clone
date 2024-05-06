'use client'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { UserTypes } from '@/next-auth'
import Link from 'next/link'

import { useEffect, useState } from 'react'


const CompanyDashboard = () => {

  const user = useCurrentUser()

  
  return (
    <div>
      <h1>CompanyDashboard</h1>
      <Link href='/company-dashboard/profile'> profile </Link>
      <h1>{user?.name}</h1>
      <h1>{user?.role}</h1>
      
    </div>

  )
}

export default CompanyDashboard