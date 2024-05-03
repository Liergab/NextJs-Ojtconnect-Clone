"use server"
import { getUserByEmail } from "@/data/user"
import { sendPasswordResetEmail } from "@/lib/mail"
import { generatePasswordToken } from "@/lib/tokens"
import { resetPassword } from "@/Types/FormTypes"
import * as z  from "zod"

export const reset = async(values:z.infer<typeof resetPassword>) => {
  const validatedFields = resetPassword.safeParse(values)

  if(!validatedFields.success){
    return{error:'Invalid Email'}
  }

  const {email} = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if(!existingUser){
    return {error:'Email not found!'}
  }

  const passwordResetToken = await generatePasswordToken(email)

  await sendPasswordResetEmail(passwordResetToken?.email!, passwordResetToken?.token!)

  return{success:'Reset Email Sent!'}
}