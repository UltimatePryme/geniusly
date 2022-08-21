import React from 'react'
import house from '../assets/houseIcon.png'
import art from '../assets/artIcon.png'
import number from '../assets/numbersIcon.png'

function Cards() {
  return (
    <section className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3  items-center py-10 mb-10'>
        <div className='w-full h-full bg-cool-yellow rounded-3xl relative p-7 flex flex-col justify-center hover:bg-omo-yellow hover:drop-shadow-xl hover:-translate-y-5 hover:ease-in-out'>
            <img src={house} alt="a planet" className=' w-auto h-80 px-6 ' />
            <p className=' font-poppins text-2xl font-normal text-center my-10 px-5' >Home of fun and limitless learning for young minds</p>
        </div>
        <div className='w-full h-full bg-cool-purple rounded-3xl relative p-7 flex flex-col justify-center hover:bg-omo-purple hover:drop-shadow-xl hover:-translate-y-5 hover:ease-in-out'>
            <img src={art} alt="a planet" className=' w-auto h-80 px-6' />
            <p className=' font-poppins text-2xl font-normal text-center my-10 px-5'>Discover your creative side and practice.</p>
        </div>
        <div className='w-full h-full bg-cool-pink rounded-3xl relative p-7 hover:bg-omo-pink hover:drop-shadow-xl hover:-translate-y-5 hover:ease-in-out'>
            <img src={number} alt="a planet" className=' w-auto h-80 px-6' />
            <p className=' font-poppins text-2xl font-normal text-center my-10 px-5'>Find out how much fun numbers can be.</p>
        </div>
    </section>
  )
}

export default Cards