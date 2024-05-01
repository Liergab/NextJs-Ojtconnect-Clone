import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import bcrypt from 'bcryptjs'
import { LoginFormSchema } from "@/Types/FormTypes"
import { getUserByEmail } from "@/data/user"
 
export default { 
    providers: [
        Credentials({
            async  authorize(credentials){

                const valiatedFields = LoginFormSchema.safeParse(credentials)
                if(valiatedFields.success){
                    const {email, password} = valiatedFields.data

                    const user = await getUserByEmail(email)
                    if(!user || !user.password) return null

                    const passwordMatch = await bcrypt.compare(password, user.password)

                    if(passwordMatch) return user
                }

                return null
            }
        })
    ] 
} satisfies NextAuthConfig