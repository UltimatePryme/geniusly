import React from 'react'
import planetIcon from '../assets/exploreIcon.png'

function Fax() {
  return (
    <section className='bg-cool-green w-full flex flex-col justify-center items-center'>
        <div className=' flex  py-10 items-center '>
            <h1 className=' font-poppins text-3xl'>Explore our planet</h1>
            <img src={planetIcon} alt="" className="" />
        </div>
        <div className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white w-full h-auto p-10 rounded-2xl mb-6 hover:drop-shadow-xl hover:-translate-y-3 hover:ease-in-out'>
            <div className='px-12 mx-10'>
                <h2 className=' text-2xl font-poppins text-omo-pink font-bold pb-5'>Discovery Plans</h2>
                <p>Our ready-made lesson plans make it easy for kids to learn in an orderly pattern through our curicullum.</p>
            </div>
            <div className='px-12 mx-10 flex flex-col items-center justify-center mt-8'>
                <button className='bg-omo-yellow font-poppins text-xl px-7 py-3 rounded-full w-auto hover:bg-omo-pink hover:text-yellow-100'>Explore Now</button>
            </div>
        </div>

        <div className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white w-full h-auto p-10 rounded-2xl mb-6 hover:drop-shadow-xl hover:-translate-y-3 hover:ease-in-out'>
            <div className='px-12 mx-10'>
                <h2 className=' text-2xl font-poppins text-omo-purple font-bold pb-5'>Games</h2>
                <p>Our ready-made lesson plans make it easy for kids to learn in an orderly pattern through our curicullum.</p>
            </div>
            <div className='px-12 mx-10 flex flex-col items-center justify-center mt-8'>
                <button className='bg-omo-yellow font-poppins text-xl px-7 py-3 rounded-full w-auto hover:bg-omo-pink hover:text-yellow-100'>Explore Now</button>
            </div>
        </div>

        <div className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white w-full h-auto p-10 rounded-2xl mb-6 hover:drop-shadow-xl hover:-translate-y-3 hover:ease-in-out'>
            <div className='px-12 mx-10'>
                <h2 className=' text-2xl font-poppins text-omo-pink font-bold pb-5'>Exercises</h2>
                <p>Fun topics available with hands-on learning.</p>
            </div>
            <div className='px-12 mx-10 flex flex-col items-center justify-center mt-8'>
                <button className='bg-omo-yellow font-poppins text-xl px-7 py-3 rounded-full w-auto hover:bg-omo-pink hover:text-yellow-100'>Explore Now</button>
            </div>
        </div>

        <div className=' container mx-auto sm:mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white w-full h-auto p-10 rounded-2xl mb-6 hover:drop-shadow-xl hover:-translate-y-3 hover:ease-in-out'>
            <div className='px-12 mx-10'>
                <h2 className=' text-2xl font-poppins text-omo-purple font-bold pb-5'>Workboard</h2>
                <p>We have printeable workboards that alow you to learm easily.</p>
            </div>
            <div className='px-12 mx-10 flex flex-col items-center justify-center mt-8'>
                <button className='bg-omo-yellow font-poppins text-xl px-7 py-3 rounded-full w-auto hover:bg-omo-pink hover:text-yellow-100'>Explore Now</button>
            </div>
        </div>
    </section>
  )
}

export default Fax