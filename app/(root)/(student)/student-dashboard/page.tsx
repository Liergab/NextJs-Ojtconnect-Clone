import { auth, signOut } from '@/auth'
import React from 'react'

const StudentDashboard = async() => {
  const session = await auth()
  return (
    <div>
      <h1>StudentDashboard</h1>
      <h1>{JSON.stringify(session)}</h1>
      <form action={ async() => {
        "use server"
        await signOut()
      }}>
        <button type='submit'>sign out</button>
      </form>
  </div>
  )
}

export default StudentDashboard