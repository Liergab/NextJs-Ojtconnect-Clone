/**
 * An Array of routes that are accessible in public
 * This routes do not required authentication
 * @type {string[]}
 */
export const publicRoutes = [
    '/',
    '/news',
    '/faq'
]

/**
 * An Array of routes that are  not accessible in public
 * This routes do  required authentication
 * @type {string[]}
 */
export const authRoutes = [
    '/login',
    '/sign-up',
   
    // '/company-dashboard'
]
/**
 * An Array of Api routes that are accessible everytime
 * This routes does not required authentication
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth"

export const Default_LOGIN_REDIRECT= '/student-dashboard'