import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import bcrypt from 'bcryptjs'
import { LoginFormSchema } from "@/Types/FormTypes"
import { getUserByEmail, getUserById } from "@/data/user"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./lib/db"
 
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
    ] ,
    events:{
        async linkAccount({user}){
          await db.user.update({
            where:{id:user.id},
            data:{
              emailVerified: new Date()
            }
          })
        }
      },
      callbacks:{
     
        async signIn({user,account}){
          if(account?.provider !== 'credentials') return true
          const existingUser = await getUserById(user.id!)
          if(!existingUser || !existingUser.emailVerified){
            return false
          }
          return true
        },
        async session({token, session}){
          
    
          if(token.sub && session.user){
            session.user.id = token.sub;
          }
    
          if(token?.role && session.user){
            session.user.role = token.role 
          }
         
          return session
         
        },
        async jwt({token}) {
          if(!token.sub) return token;
    
          const existingUser = await getUserById(token.sub)
    
          if(!existingUser) return token;
          token.role = existingUser.role;
        
          return token
        }
      },
      adapter:PrismaAdapter(db),
      jwt: { maxAge: 365 * 24 * 60 * 60 },
      session:{strategy:'jwt'},
} satisfies NextAuthConfig