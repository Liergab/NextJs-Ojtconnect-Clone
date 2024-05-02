"use server"
import { SignUpForm, SignUpFormCompany } from '@/Types/FormTypes'
import db from '@/lib/db'
import * as z from 'zod'
import bcrypt from 'bcrypt'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'

type Role = 'ADMIN' | 'STUDENT' | 'COMPANY';

export const registerStudent = async(values: z.infer<typeof SignUpForm>) =>{
    try {
        const {firstname,lastname,email,role,password} = values
        
        const existingEmail = await getUserByEmail(email)

        if(existingEmail){
            return {error:'Email already used!'}
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
    
        const userStudent = await db.user.create({
            data:{
                email    :  email,
                name     : `${firstname} ${lastname}`,
                role     :  role as Role,
                password :  hashPassword
            }
        })

        const verificationToken = await generateVerificationToken(userStudent.email!)
        await sendVerificationEmail(verificationToken.email, verificationToken.token)
        return {
            data:userStudent, 
            message:'Confirmation Emai Sent!'
        }
        
        
    } catch (error:any) {
        console.log(error)
        return{error:error}
    }
   
}

export const registerCompany = async(values: z.infer<typeof SignUpFormCompany>) =>{

    try {
        const {name, email, role, password, address} = values

        const existingEmail = await getUserByEmail(email)

        if(existingEmail){
            return {error:'Email already used!'}
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
    
        const userStudent = await db.user.create({
            data:{
                email    :  email,
                name     :  name,
                address  :  address,
                role     :  role as Role,
                password :  hashPassword
            }
        })
    
        return {
            data:userStudent, 
            message:'Succesfully registered!'
        }
        
        
    } catch (error:any) {
        console.log(error)
        return{error:error}
    }
}