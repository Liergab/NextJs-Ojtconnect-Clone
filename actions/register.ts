"use server"
import { LoginFormSchema, SignUpForm, SignUpFormCompany } from '@/Types/FormTypes'
import db from '@/lib/db'
import * as z from 'zod'
import bcrypt from 'bcrypt'

type Role = 'ADMIN' | 'STUDENT' | 'COMPANY';

export const registerStudent = async(values: z.infer<typeof SignUpForm>) =>{
    try {
        const existingEmail = await db.user.findUnique({where:{email:values.email}})

        if(existingEmail){
            return {error:'Email already used!'}
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(values.password, salt)
    
        const userStudent = await db.user.create({
            data:{
                email    :  values.email,
                name     : `${values.firstname} ${values.lastname}`,
                role     :  values.role as Role,
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

export const registerCompany = async(values: z.infer<typeof SignUpFormCompany>) =>{

    try {
        const existingEmail = await db.user.findUnique({where:{email:values.email}})

        if(existingEmail){
            return {error:'Email already used!'}
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(values.password, salt)
    
        const userStudent = await db.user.create({
            data:{
                email    :  values.email,
                name     :  values.name,
                address  :  values.address,
                role     :  values.role as Role,
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