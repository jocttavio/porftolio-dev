'use client'
import React, {useRef} from 'react'
import { Details } from './Details'
import {motion, useScroll } from 'framer-motion'
export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <section>
      <h2 className='font-bold text-8xl mb-32 w-full text-center' >Experience</h2>
      <div className='w-[75%] mx-auto relative'  ref={ref}>
        <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' style={{ scaleY: scrollYProgress }} />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details position="Software Engineer" company="Tech Corp" companyLink="https://techcorp.com" time="Jan 2020 - Present" address="Mountain View, CA" work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature." />
        <Details position="Intern" company="Facebook" companyLink="https://facebook.com" time="Summer 2021" address="Menlo Park, CA" work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature." />

        <Details position="Software Developer" company="Amazon" companyLink="https://amazon.com" time="2020-2021" address="Seattle, WA" work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability." />

        <Details position="Software Developer Intern" company="Microsoft" companyLink="https://microsoft.com" time="Summer 2019" address="Redmond, WA" work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component." />

        <Details position="Teaching Assistant" company="MIT" companyLink="https://mit.edu" time="Fall 2018" address="Massachusetts Ave, Cambridge, MA" work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments." />
        </ul>


      </div>
    </section>
  )
}
