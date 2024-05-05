/**
 * An Array of routes that are accessible in public
 * This routes do not required authentication
 * @type {string[]}
 */
export const publicRoutes = [
    '/',
    '/news',
    'faq',
    '/new-verification',
    '/new-password'
]

/**
 * An Array of routes that are  not accessible in public
 * This routes do  required authentication
 * @type {string[]}
 */
export const authRoutes = [
    '/login',
    '/sign-up',
   
   
]
/**
 * An Array of Api routes that are accessible everytime
 * This routes does not required authentication
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth"

export const companyRoutes = [
    '/company-dashboard',
    'profile'
]

export const studentRoutes =[
    '/student-dashboard',
    
]