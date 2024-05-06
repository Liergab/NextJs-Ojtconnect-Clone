'use client'
import { logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import Link from 'next/link'
import React from 'react'

const Profile = () => {

  const user = useCurrentUser()

 
  return (
    <div>
    <h1>Profile</h1>
    <Link href='/company-dashboard'>Company Dashboard</Link>
    <h1>{user?.name}</h1>
    <h1>{user?.email}</h1>

    <Button type='button' variant='outline' onClick={() => logout()}>Logout</Button>
    </div>

  )
}

export default Profile