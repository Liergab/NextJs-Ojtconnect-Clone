import Building from '@/components/Building'
import Footer from '@/components/Footer'
import React from 'react'

const Faq = () => {
  return (
    <section>
        <div className='min-h-screen mb-20 bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 '>
            <h1 className='text-4xl font-bold text-melanie-600 mt-28'>Frequently Asked Questions</h1>
            <p className='text-xl font-semibold mt-20'>
                If you have any other questions please email us at 
                <span  className='text-melanie-600 underline cursor-pointer'> info@ojtconnect.com</span>
            </p>
            <h1 className='faq-q'>How do I sign up for the platform?</h1>
            <p className='text-lg font-medium mt-10'>
                <span className='text-xl font-bold text-melanie-600'>Student:</span>
                {` Signing up is easy! Just head to our website and click on the "Sign 
                In" button. Follow the prompts to create your account. Don't forget to 
                complete your profile to improve your chances of being invited for an 
                interview.`}
            </p>
            <p className='text-lg font-medium mt-10'>
                <span className='text-xl font-bold text-melanie-600'>Businesses:</span>
                {` Simply visit our website and click on the "Sign In" button. Follow the
                 prompts to create your account. Our team will review your information 
                 to assess your eligibility.`}
            </p>
            <h1 className='faq-q'>Can I apply to multiple internship/OJT opportunities?</h1>
            <p className='faq-a'>
                {`Yes! We highly encourage students to send out multiple internship applications 
                through our platform.`}
            </p>
            <h1 className='faq-q'>Are the internships offered remote or on-site?</h1>
            <p className='faq-a'>
                {`All internships offered through our platform are 100% remote, providing
                 flexibility for students to work from anywhere.`}
            </p>
            <h1 className='faq-q'>What support is available for candidates during their internship?</h1>
            <p className='faq-a'>
                {`Our partnered companies are committed to offering comprehensive support and guidance
                 to interns throughout their journey, including access to resources, mentorship opportunities,
                 and regular check-ins.These companies understand and adhere to the evaluation and internship
                 guidelines specified by each student's university.`}
            </p>
            <h1 className='faq-q'>How does the platform protect my personal data?</h1>
            <p className='faq-a'>
                {`We prioritize the security and privacy of user data and employ stringent measures such as 
                encryption and data protection protocols to safeguard your information.`}
            </p>
            <h1 className='faq-q'>How long will the on-the-job training period be?</h1>
            <p className='faq-a'>
                {`The duration of the internship period varies depending on the required hours per student
                 and the agreement they have with the hiring companies.`}
            </p>
            <h1 className='faq-q'>Will the companies provide certificates of completion and evaluation forms?</h1>
            <p className='faq-a'>
                {`While companies understand the various mandatory requirements needed to fulfill the OJT 
                requirements, we advise clear communication to ensure alignment with students' and schools' expectations.`}
            </p>
            <h1 className='faq-q'>Are there opportunities for full-time employment after completing an internship?</h1>
            <p className='faq-a'>
                {`Yes, there is the possibility of full-time employment for interns who demonstrate exceptional performance
                 and alignment with the organization. We actively support and highlight these transitions whenever possible.`}
            </p>
        </div>
        <Building/>
        <Footer/>
    </section>
  )
}

export default Faq