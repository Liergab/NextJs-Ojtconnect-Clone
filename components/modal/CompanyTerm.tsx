import React from 'react'

const CompanyTerm = () => {
  return (
    <div>
        <p className='text-base md:text-2xl font-bold mb-6'>Company Responsibilities:</p>
        <p className='mb-4 text-xs md:text-base'>{`1.Provide Intern with the necessary resources,
         guidance, and supervision to fulfill their internship requirements effectively.`}
        </p>
        <p className='mb-4 text-xs md:text-base'>{`2.Adhere to the terms outlined in any Memorandum of Agreement,
            Evaluation Forms, or other mandatory documents provided by student or the relevant
            educational institution.`}
        </p>
        <p className='mb-4 text-xs md:text-base'>{`3.Implement measures to ensure the intern's well-being throughout 
        the internship period, including but not limited to providing a safe working environment 
        and assigning a designated supervisor or mentor.`}
        </p>
        <p className='mb-6 text-xs md:text-base'>{`By checking the box below, Company acknowledges that they have read and
         understood the terms of this Agreement and agree to fulfill their responsibilities outlined herein.`}
        </p>
        
      
    </div>
  )
}

export default CompanyTerm
