import Building from '@/components/Building'
import Footer from '@/components/Footer'
import React from 'react'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const News = () => {
  return (
    <section className='w-full '>
      <div className='px-4 md:px-14 min-h-screen'>
        <h1 className='text-4xl text-melanie-600 font-bold mt-24'>Latest News</h1>
        <div className=' flex  flex-col px-6 md:px-20 mt-24'>
          <h1 className='text-xl font-semibold'>
            For press opportunities please email us at 
            <span className='text-melanie-600 underline cursor-pointer'> info@ojtconnect.com</span>
          </h1>
          <div className='mt-32 mb-20'>
            <BentoGrid className="max-w-[1500px] mx-auto">
            {data.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.date}
                thumbnail={item.thumbnail}
                link={item.link}
                className=''
              />
            ))}
          </BentoGrid>
          </div>
        </div>
      </div>
      <Building/>
      <Footer/>
    </section>
  )
}

export default News

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const data = [
  {
      title:'Providing equal employment opportunities to Filipino college students with OJT Connect | ANC',
      date : 'Mar 13, 2024',
      description:'Business Roadshow: Stanley Palisada talks to Romel Romero, Tech Founder of OJT Connect.',
      thumbnail: "https://www.youtube.com/embed/xNIaqdNqa5Y?si=Q4-KjBTf-D7nuvbp",
      link:'https://youtu.be/xNIaqdNqa5Y?si=YbVpUyqtlNZOBEbw'

  },
  {
      title:'OJT Connect, inilunsad sa Pilipinas',
      date : 'Mar 13, 2024',
      description:`Inilunsad na sa Pilipinas ang OJT Connect, isang platform 
                   para sa mga naghahanap ng internship. Alamin ang mga detalye ng platform na 
                   ito kay Romel Romero, founder ng Good Day Communications`,
      thumbnail:'https://www.youtube.com/embed/ZSNTz7y6sUs?si=FPkjA5bxUaf3SEvK',
      link:'https://youtu.be/ZSNTz7y6sUs?si=3umdpScjMZBAohY5'
  },
  {
      title:'REPORMA: OJT sa Pinas at Overseas',
      date : 'Feb 5, 2024',
      description:'Digital platform para sa mga graduate na gustong mag-OJT sa mga kumpanyang lokal at overseas',
      thumbnail:"https://www.youtube.com/embed/KLtaTi6PHag?si=19QHnzhd6mQUulPg" ,
      link:'https://youtu.be/KLtaTi6PHag?si=_hPHR-QENHcyddDB'
  },
  {
      title:'Soon-to-be-launched website OJT Connect seeks to bridge gap between graduates and employers | ANC',
      date : 'Dec 29, 2023',
      description:'Business Roadshow: A Filipino-founded platform seeks to help students find their chosen career path.',
      thumbnail:"https://www.youtube.com/embed/gX-ZHNg1r30?si=xJdO8BXtmQkS2OkN" ,
      link:'https://www.youtube.com/watch?v=gX-ZHNg1r30'
  },
  {
      title:'To-be-launched OJT Connect seeks to connect students, companies | ANC',
      date : 'Dec 29, 2023',
      description:`Market Edge: Stanley Palisada talks to OJT Connect tech founder 
                   Romel Romero in their bid to bridge the gap between students and employers.`,
      thumbnail:"https://www.youtube.com/embed/VzyOqDa4A0g?si=5yHks5bzVEEawUPX",
      link:'https://youtu.be/VzyOqDa4A0g?si=-6RCbRElQ-wY_seD'
  },
 
 
  {
      title:'Connecting Student  with potential employers',
      date : 'Dec 4 2023',
      description:'Connecting dreams to reality. That is the vision of this Filipino-made platform which connects local students and graduates with employers here and abroad.',
      thumbnail:'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpupunisan%2Fvideos%2F224349500687028%2F&show_text=false&width=560&t=0',
      link:'https://fb.watch/rlWhZCZQVU/'
  },

]
