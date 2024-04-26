import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const CompanyForm = () => {
  return (
    <div>
        <h1>COmpany</h1>
         <form className=''>
              <Input type='text' placeholder='Email Address' />
              <Input type='password' placeholder='Password' />
              <Button type='submit' variant='outline'>Login</Button>
            </form>
    </div>
  )
}

export default CompanyForm