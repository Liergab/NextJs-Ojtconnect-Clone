"use server"
import { LoginFormSchema } from '@/Types/FormTypes'
import { signIn } from '@/auth'
import db from '@/lib/db'
import { Default_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import * as z from 'zod'

export const login = async(values: z.infer<typeof LoginFormSchema>) =>{

    const {email, password} = values
    try {
      await signIn('credentials',{
            email, 
            password,
            redirectTo:Default_LOGIN_REDIRECT
        })

    } catch (error) {
        if(error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSignin":
                    return {error:'Invalid Credentials'}
                default:
                    return {error:'something went wrong'};
            }

        } 
        throw error;
    }
}