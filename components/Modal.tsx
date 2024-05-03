import {
    AlertDialog,
    AlertDialogContent,
  } from "@/components/ui/alert-dialog"

import React from "react"
  
function Modal({ children, open}:{children:React.ReactNode, open:boolean}) {
    return (
      <AlertDialog open={open}>
      <AlertDialogContent className="bg-melanie-200 w-full max-w-[90%] md:max-w-3xl h-96" style={{borderRadius:'10px'}}>
        <div className="overflow-auto p-2">
         {children}
        </div>
      </AlertDialogContent>
    </AlertDialog>
    )
  }
  export default Modal