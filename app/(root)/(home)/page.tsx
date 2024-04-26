"use client"
import Building from '@/components/Building'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Home = () => {

  const words = [
    {
      text: "JOIN",
    },
    {
      text: "OJT",
    },
    {
      text: "CONNECT",
    },
    {
      text: "TODAY!",
    },
  ];
  return (
    <section className='flex flex-col'>
      <div id='home' className='flex flex-col md:flex-row'>
        <div className='mt-20 md:mt-40 flex-1 flex flex-col items-center md:items-start space-y-4'>
          <h1 className='text-xl md:text-5xl font-bold text-melanie-700 text-center md:text-left'>A Connection that Leads to a Foundation of Experiences</h1>
          <TypewriterEffectSmooth words={words} />
          <div>
            <Link href='/sign-up'>
              <Button
                variant='outline'
                className='signin-button hover:bg-melanie-600 hover:text-melanie-200 shadow-xl text-xs h-6'
              >
                SIGN IN
              </Button>
            </Link>
          </div>
        </div>
        <div className='md:flex-1 flex items-center justify-center mt-4 md:mt-32'>
          <Image src='./globe.svg' alt='globe' width={100} height={100} className='w-9/12' />
        </div>
      </div>
      <div id='discover' className='min-h-[600px] flex flex-col justify-center items-center w-full mt-10'>
        <div className='bg-white w-full p-4 md:p-10  rounded-xl '>
        <div className='flex justify-center mt-10'>
          <h1 className='text-xl md:text-4xl font-semibold text-melanie-700 text-center '>
            DISCOVER NEW OJT INTERNSHIP
          </h1>
        </div>
        <div className='mt-6 md:mt-20  w-full px-4 md:px-40'>
          <div className='grid grid-flow-col-1 md:grid-cols-2 gap-4 '>
          {testimonials.map((t, index) => {
              return(
                <div key={index} className='border-2 border-slate-700 rounded-xl  p-4 '>
                  <div>
                    <h1>{t.quote}</h1>
                    <h1>{t.name}</h1>
                    <h1>{t.title}</h1>
                  </div>
                </div>
              )
          })}
          </div>
        </div>
        </div>
      </div>
      <div id='about' className='mt-14 min-h-[500px] flex flex-col items-center'>
          <h1  className='text-xl md:text-4xl font-semibold text-melanie-700 mt-10'>ABOUT OJT CONNECT</h1>
          <div className=' flex flex-col md:flex-row bg-melanie-700 h-full min-h-80 w-full max-w-5xl rounded-xl mt-10'>
            <div className='flex-1 flex items-center justify-center p-4'>
              <p className='text-melanie-200 text-sm md:text-base text-justify'>
                {`OJT Connect is a free platform bridging students and aspiring individuals with local and international companies for relevant work experiences. Our mission is to uncover hidden talents particularly from the rural areas of the Philippines, where work opportunities are fewer and less diverse.
                  We want to transform the narrative of its market and showcase their competitiveness as global talent. We empower individuals by providing both a platform and confidence-building support to excel in their on-the-job training journey, ultimately reshaping perceptions and recognizing untapped potential.
                  Checkout our FAQ here to learn more about the platform!`}
              </p>
            </div>
            <div className='flex-1 flex items-center justify-center bg-melanie-200 md:rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-bl-none'>
              <Image src='./about.svg'  alt='about' width={100} height={100} className='w-10/12'/>
            </div>
          </div>
      </div>
      <div className='min-h-[600px] flex flex-col gap-4 md:gap-0 mt-20 md:mt-0 '>
        <div className='flex-1 w-full flex flex-col md:flex-row gap-4  md:gap-2 justify-between items-center px-4 md:px-20'>
          <div className='flex-1 flex flex-col items-center justify-center w-full max-w-96'>
            <h1 className='text-xl md:text-3xl text-melanie-700 font-bold'>Students</h1>
            <p className='text-center text-base md:text-xl'>Create foundational connections with businesses and explore fantastic opportunities.</p>
          </div>
          <div className='flex-1 flex flex-col items-center justify-center  w-full max-w-96'>
            <h1  className='text-xl md:text-3xl text-melanie-700 font-bold'>Businesses</h1>
            <p className='text-center text-base md:text-xl'>Post your job opportunities to our job board and connect with amazing students.</p>
          </div>
        </div>
        <div className='flex-1  w-full flex flex-col gap-4 md:gap-2 md:flex-row items-center  justify-between px-10'>
          <div className='flex-1 flex flex-col items-center justify-center w-full max-w-96'>
            <h1 className='text-xl md:text-3xl text-melanie-700 font-bold  text-center'>Direct Messaging</h1>
            <p className='text-center text-base md:text-xl'>Get in direct contact with students and businesses with our private messaging system.</p>
          </div>
          <div className='flex-1 flex flex-col items-center justify-center w-full max-w-96'>
            <h1 className='text-xl md:text-3xl text-melanie-700 font-bold text-center'>Job Board</h1>
            <p className='text-center text-base md:text-xl'>Post or browse job listings for OJT programs.</p>
          </div>
          <div className='flex-1 flex flex-col items-center justify-center w-full max-w-96'>
            <h1 className='text-xl md:text-3xl text-melanie-700 font-bold text-center'>Verified Businesses</h1>
            <p className='text-center text-base md:text-xl'>All business accounts go through a screening process in order to verify accounts.</p>
          </div>
        </div>
      </div>
     <Building/>
     <div id='contact'>
      <Footer/>
     </div>
   
    </section>
  )
}

export default Home

const testimonials = [
  {
    quote:
    'Assistant Developer (Freelance)',
    name: "Aloha Laundry life",
    title: "3395 South Jones Boulevard",
  },
  {
    quote:
      "Web Developer",
    name: "Wattah Eat",
    title: "Los Angeles, CA",
  },
  {
    quote: "Graphic Dessigner",
    name: "Yu Holding",
    title: "5960 Mission Center Road, Unit B",
  },
  {
    quote:
      "UI/UX Designer",
    name: "Cara mesa",
    title: "330 Rancheros Drive",
  }
];