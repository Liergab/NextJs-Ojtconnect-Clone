import { UserRole } from "@prisma/client";
import NextAuth,{ DefaultSession } from "next-auth"
import { type DefaultJWT } from "next-auth/jwt";

export type UserTypes = {
  // Properties you want in your User. I would advise against using the whole prisma user object.
  id: string;
  email: string ;
  name : string, 
  role : 'ADMIN' | 'STUDENT' | 'COMPANY'
  createdAt: Date;
};

export type ExtendedUser  = DefaultSession["user"] & UserTypes

declare module "next-auth" {
    interface Session {
      user:ExtendedUser
    }
  }

  
  type ExtendedJWT = DefaultJWT & UserTypes;
  declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT extends ExtendedJWT {
    role?: 'ADMIN' | 'STUDENT' | 'COMPANY',
   
    }
  }


  