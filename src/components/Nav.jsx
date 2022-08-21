import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <nav className=' container mx-auto sm:mx-auto flex items-center justify-between p-10'>
      <img src={logo}/>
      <div className='flex'>
        <a href="#"><p className=' font-poppins text-xl font-semibold pr-10'>Home</p></a>
        <a href="#"><p className=' font-poppins text-xl font-normal pr-10'>Games</p></a>
        <a href="#"><p className=' font-poppins text-xl font-normal pr-10'>Explore</p></a>
        <a href="#"><p className=' font-poppins text-xl font-normal pr-10'>Stories</p></a>
      </div>
      <div className='flex'>
        <button className='border-2 border-black font-poppins text-xl px-5 py-3 rounded-full w-32 mr-4 hover:bg-omo-purple hover:text-black hover:border-white'>Log in</button>
        <button className='bg-omo-yellow font-poppins text-xl px-5 py-3 rounded-full w-32 hover:bg-omo-pink hover:text-yellow-100'>Log in</button>
      </div>
    </nav>
  )
}

export default Nav