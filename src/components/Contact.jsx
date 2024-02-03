import React from 'react'

const Contact = () => {
  return (
    <>
    <section id="contact" className='pb-16 md:mx-28 '>
      <div className='container '>
        <h2 className='text-heading font-[700] text-[2.5rem] mb-8'>
          Get in touch
        </h2>
        <div className='md:flex justify-between items-center'>
          <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
          <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27431.
          914826384334!2d76.63255306222077!3d30.74680055635684!2m3!1f0!2f0!3f0!3m2!
          1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe555e7bf2e91%3A0xffb409b433075d3!2sKharar
          %2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1704649940509!5m2!1sen!2sin" 
          width="600" height="450" className='border-0 w-full h-full' allowFullScreen="" loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='w-full  md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center
          rounded-lg bg-contactColor  px-4 lg:px-8 py-8'>
            <form className='w-full'>
              <div className='mb-5'>
                <input
                required
                type='text'
                placeholder='Enter your name'
                className='w-full p-3  focus:outline rounded-[5px] '>
                </input>
              </div>
              <div className='mb-5'>
                <input
                required
                type='email'
                placeholder='Enter your Email'
                className='w-full p-3 focus:outline rounded-[5px]'>
                </input>
              </div>
              <div className='mb-5'>
                <input
                required
                type='text'
                placeholder='Subject'
                className='w-full p-3 focus:outline rounded-[5px]'>
                </input>
              </div>
              <div className='mb-5'>
                <textarea
                required
                type='text'
                rows={3}
                placeholder='Write your message'
                className='w-full p-3 focus:outline rounded-[5px]'>
                </textarea>
              </div>
              <button className='w-full p-3 focus:outline rounded-[5px] bg-btnColor 
              text-white hover:bg-headingColor'>
                Send Message
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
      
    </>
  )
}

export default Contact
