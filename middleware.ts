import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
    Default_LOGIN_REDIRECT} from '@/routes'


const {auth} = NextAuth(authConfig)

 
export default auth((req) => {
   const {nextUrl} = req

   const isLoggedIn = !!req.auth

   

   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
   const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

   if(isApiAuthRoute){
    return;
   }

   if(isAuthRoute){
    if(isLoggedIn){
        return Response.redirect(new URL('/student-dashboard', nextUrl))
    }
    return;
   }
   
   if(!isLoggedIn && !isPublicRoutes){
    return Response.redirect(new URL('/login', nextUrl))
   }
   return;
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher:['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}