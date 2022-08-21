import React from 'react'
import planetMini from '../assets/planetIconMini.png'

function Join() {
  return (
    <section className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3  items-center py-10 mb-10'>
        <div>
           
        </div>
        <div className='p-7 flex flex-col justify-center'>
            <img src={planetMini} alt="a planet" className=' px-6' />
            <p className=' font-poppins text-2xl font-normal text-center my-10 px-5'> <span className='text-omo-pink'>80,000+</span> parents, teachers, and students on board</p>
            <button className='bg-omo-yellow font-poppins text-xl px-7 py-3 rounded-full w-auto hover:bg-omo-pink hover:text-yellow-100'>Join our Planet</button>
        </div>
        <div>
        </div>
    </section>
  )
}

export default Join