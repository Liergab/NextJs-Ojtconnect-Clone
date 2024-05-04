"use client"
import { logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import {useCurrentUser} from '@/hooks/useCurrentUser'
import React from 'react'

const StudentDashboard = () => {
 const user = useCurrentUser()
 
  return (
    <div>
      <h1>StudentDashboard</h1>
      <h1>{JSON.stringify(user)}</h1>
     
        <Button onClick={() => logout()} type='submit' variant='outline'>sign out</Button>
    
  </div>
  )
}

export default StudentDashboard