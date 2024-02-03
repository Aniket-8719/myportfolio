import React from 'react'
import CountUp from 'react-countup'

const Numbers = () => {
  return (
    <>
      <section id='Number' className='mx-[90px]'>
      <div className='flex flex-col justify-between sm:gap-16 text-center mt-10
    md:flex-row  md:mt-20'>
      
      <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[40px] md:text-end'>
          <CountUp start={0} end={6} duration={2} suffix="+"/>
        </h2>
        <h4 className='text-headingColor font-[700] text-[18px] '>Years of experience</h4>
      </div>

      <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[40px] md:text-end'>
          <CountUp start={0} end={100} duration={2} suffix="%"/>
        </h2>
        <h4 className='text-headingColor font-[700] text-[18px] '>Success Rate</h4>
      </div>

      <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[40px] md:text-end'>
          <CountUp start={0} end={139} duration={2} suffix="+"/>
        </h2>
        <h4 className='text-headingColor font-[700] text-[18px] '>Happy Clients</h4>
      </div>

      <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[40px] md:text-end'>
          <CountUp start={0} end={122} duration={2} suffix="+"/>
        </h2>
        <h4 className='text-headingColor font-[700] text-[18px] '>Project Completed</h4>
      </div>

     
      

    </div>
    </section>
    </>
  
  )
}

export default Numbers
