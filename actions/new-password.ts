"use server"
import {newPasswordSchema } from '@/Types/FormTypes'
import { getPasswordTokenByToken } from '@/data/password-reset-token'
import { getUserByEmail } from '@/data/user'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import db from '@/lib/db'

export const newPassword = async (values:z.infer<typeof newPasswordSchema>, token: string | null) => {
        if(!token){
           return {error:'No token found'} 
        }

        const validatedFields = newPasswordSchema.safeParse(values)

        if(!validatedFields.success){
            return{error:'Reset Password Failed'}
        }

        const{password} = validatedFields.data

        const existingToken = await getPasswordTokenByToken(token)

        if(!existingToken){
            return {error:'Invalid token'}
        }

        const hasExpired = new Date(existingToken.expires) < new Date()

        if(hasExpired){
            return {error:'Expired Token!'}
        }

        const existingUser = await getUserByEmail(existingToken.email)

        if(!existingUser){
            return {error:'Email does not exist!'}
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        await db.user.update({
            where:{id:existingUser.id},
            data:{
                password:hashPassword
            }
        })

        await db.passwordResetToken.delete({
            where:{id:existingToken.id}
        })

        return {success:'Password Updated!'}

}