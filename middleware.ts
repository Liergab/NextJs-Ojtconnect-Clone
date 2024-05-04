import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
    companyRoutesPrefix, 
    Default_LOGIN_REDIRECT} from '@/routes'


const {auth} = NextAuth(authConfig)

 
export default auth((req) => {
   const {nextUrl} = req

   const isLoggedIn = !!req.auth
   console.log(req.auth?.user.role)
   const isAdmin = req.auth?.user?.role === "COMPANY";
   const isAdminPage = nextUrl.pathname.startsWith(companyRoutesPrefix);

   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
   const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

   if (isAdmin && !isAdminPage) {
    return Response.redirect(new URL(companyRoutesPrefix, nextUrl));
  }

   if(isApiAuthRoute){
    return;
   }
   if(req.auth?.user.role === "ADMIN"){

   }
   if(isAuthRoute){
    if(isLoggedIn){
        return Response.redirect(new URL(Default_LOGIN_REDIRECT, nextUrl))
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