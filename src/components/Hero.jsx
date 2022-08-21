import React from 'react'
import planetHero from '../assets/planetHero.png'

function Hero() {
  return (
    <section className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  items-center p-10'>
        <div>
            <img src={planetHero} alt="a planet" className='w-full px-6' />
        </div>
        <div className='flex flex-col items-start'>
            <h1 className='font-poppins text-6xl font-black py-6 text-start leading-normal'>An <span className=' text-omo-purple '>amazing</span> planet of 
             <span className=' text-omo-green'> discovery</span> for 
             <span className=' text-omo-pink'> kids</span>.
             </h1>
            <p className=' font-poppins text-2xl font-normal mb-10 text-start leading-normal'>Here you would learn everything there is to know. Art, Math, interedting myths and legends, History, science and technology. In the most fun way.</p>
            <button className='bg-omo-yellow font-poppins text-xl px-7 py-3 rounded-full w-auto hover:bg-omo-pink hover:text-yellow-100'>Get Started</button>
        </div>
    </section>
  )
}

export default Hero