"use server"
import { LoginFormSchema } from '@/Types/FormTypes'
import { signIn } from '@/auth'
import { getUserByEmail } from '@/data/user'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { Default_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import * as z from 'zod'

export const login = async(values: z.infer<typeof LoginFormSchema>) =>{

    const {email, password} = values
    const existingUser = await getUserByEmail(email)

    if(!existingUser || !existingUser.email || !existingUser.password){
        return {error:'Email does not exist'}
    }
    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email)
        await sendVerificationEmail(verificationToken.email, verificationToken.token)
        return {success:'Confirmation Email sent!'}
    }
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