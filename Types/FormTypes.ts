import { z } from "zod";

export const SignUpForm = z.object({
    firstname: z.string().min(2, {
      message: "Firstname must be at least 2 characters.",
    }),
    role: z.string(),
    lastname: z.string().min(2, {
      message: "Lastname must be at least 2 characters.",
    }),
    email    : z.string().email(),
    password : z.string().min(8,{ message: 'Invalid Password'}).max(12),
    password_confirmation :z.string()
}).refine((data) => data.password === data. password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  })

export const SignUpFormCompany = z.object({
    name: z.string().min(2, {
      message: "Company must be at least 2 characters.",
    }),
    role: z.string(),
    address: z.string().min(2, {
      message: "Address must be at least 2 characters.",
    }),
    email    : z.string().email('Must a Valid email'),
    password : z.string().min(8,{ message: 'Invalid Password'}).max(12),
    password_confirmation :z.string()
}).refine((data) => data.password === data. password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  })

  export const LoginFormSchema = z.object({
    email    : z.string().email('Must a Valid email'),
    password : z.string().min(8,{ message: 'Invalid Password'}).max(12),
  })