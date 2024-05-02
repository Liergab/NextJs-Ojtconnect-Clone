import NextAuth,  { type DefaultSession } from "next-auth"
import authConfig from "@/auth.config"
import {PrismaAdapter} from '@auth/prisma-adapter'
import db from "./lib/db"
import { getUserById } from "@/data/user"

export const { auth, handlers, signIn, signOut } = NextAuth({
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
      console.log(user)
      console.log({account})
      if(account?.provider !== 'credentials') return true
      const existingUser = await getUserById(user.id!)
      if(!existingUser || !existingUser.emailVerified){
        return false
      }
      return true
    },
    async session({token, session}){
      console.log({sessiomToken:token})

      if(token.sub && session.user){
        session.user.id = token.sub;
      }

      if(token.role && session.user){
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
  session:{strategy:'jwt'},
 ...authConfig
})