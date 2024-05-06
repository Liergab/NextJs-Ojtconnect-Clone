'use client'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import React from 'react'


const StudentProfile = () => {
    const user = useCurrentUser()
  return (
    <div>
      <h1>StudentProfile</h1>
      {user?.name}
    </div>
  )
}

export default StudentProfile
