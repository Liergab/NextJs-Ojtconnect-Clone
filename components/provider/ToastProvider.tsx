'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: React.ReactNode
}
const ToastProvider = ({ children }: ProvidersProps) => {
  return (
    <>
    <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
    {children}
  </>
  )
}

export default ToastProvider
