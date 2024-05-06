"use client"
import { logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { UserTypes } from '@/next-auth'
import React, { useEffect, useState } from 'react'

const StudentDashboard = () => {
  const [data, setData] = useState<UserTypes | null>()
  const user = useCurrentUser()

  useEffect(() => {
   
    if(user){
      setData(user)
    }
  },[user])
  return (
    <div>
      <h1>StudentDashboard</h1>
     <h1>{data?.role}</h1>
     
        <Button onClick={() => logout()} type='submit' variant='outline'>sign out</Button>
    
  </div>
  )
}

export default StudentDashboard