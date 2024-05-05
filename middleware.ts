import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { publicRoutes, authRoutes, apiAuthPrefix, studentRoutes, companyRoutes, } from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const student = req.auth?.user.role === 'STUDENT'
  const company = req.auth?.user.role === 'COMPANY'
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isStudentRoutes = studentRoutes.some(route => nextUrl.pathname.startsWith(route))
  const isCompanyRoutes = companyRoutes.some(route => nextUrl.pathname.startsWith(route))

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      if (student && !isStudentRoutes) {
        return Response.redirect(new URL(studentRoutes[0], nextUrl))
      } else if (company && !isCompanyRoutes) {
        return Response.redirect(new URL(companyRoutes[0], nextUrl))
      }
    }
    return;
  }

  if (isLoggedIn) {
    if (student && !isStudentRoutes) {
      return Response.redirect(new URL(studentRoutes[0], nextUrl))
    } else if (company && !isCompanyRoutes) {
      return Response.redirect(new URL(companyRoutes[0], nextUrl))
    }
  } else {
    if (!isPublicRoutes) {
      return Response.redirect(new URL('/login', nextUrl))
    }
  }

  return;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}