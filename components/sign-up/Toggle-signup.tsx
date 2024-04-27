import React, { FC } from 'react'
import { Button } from '../ui/button';

interface TogglePorps{
    handleToggle: (toggle: string) => void;
    activeToggle: string;
  }

const ToggleSignUp:FC<TogglePorps>  = ({handleToggle, activeToggle}) => {
    
    const toggle_button = [
        {
            label:'Student',
            toggle:'student'
        },
        {
            label:'Company',
            toggle:'company'
        },
    ]
  return (
    <>
    {toggle_button.map((tb, index) => (
        <React.Fragment key={index}>
             <Button
                variant='outline'
                onClick={() =>handleToggle(tb.toggle)}
                className={`
                ${activeToggle === tb.toggle ? 'bg-[#db9197] text-[#401720] border border-[#401720] hover:bg-melanie-500' 
                : 'bg-[#f3d8da] text-[#7e3343] hover:bg-melanie-200 hover:text-melanie-950'}
                    rounded-3xl
                    text-xs
                     px-5 md:px-10
                    font-bold
                    h-7
                `}
                >
                    {tb.label}
            </Button>
        </React.Fragment>

    ))}
    </>
  )
}

export default ToggleSignUp