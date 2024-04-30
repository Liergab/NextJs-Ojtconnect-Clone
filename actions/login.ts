"use server"
import { LoginFormSchema } from '@/Types/FormTypes'
import db from '@/lib/db'
import * as z from 'zod'

export const login = async(values: z.infer<typeof LoginFormSchema>) =>{
    const validatedFileds = LoginFormSchema.safeParse(values)
  
    if(!validatedFileds.success){
        return{error:'Invalid Credentials'}
    }

    return {success:'Email sent'}
}