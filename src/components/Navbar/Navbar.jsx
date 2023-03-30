import React, { useState } from 'react'
//icons
import { GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Navbar = () =>{
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='z-10 sticky top-0 flex flex-row lg:gap-5 justify-between items-center backdrop-blur-3xl text-white lg:px-5 lg:py-1 select-none'>
      <div className='w-[100px] flex justify-start items-center'>
        <p className='text-4xl p-5  font-extralight select-none cursor-pointer'>Res<span className='text-cyan-300'>2</span>rentz</p>
      </div>
      <div className=' hidden lg:flex flex-col lg:flex-row lg:gap-8 capitalize'>
        <div className='p-3 hover:text-gray-400 transition-colors'><a href="#home">Home </a></div>
        <div className='p-3 hover:text-gray-400 transition-colors'><a href="#about">about </a></div>
        <div className='p-3 hover:text-gray-400 transition-colors'><a href="#menu">menu </a></div>
        <div className='p-3 hover:text-gray-400 transition-colors'><a href="#awards">awards </a></div>
        <div className='p-3 hover:text-gray-400 transition-colors'><a href="#contact">contact </a></div>
      </div>
      <div className='hidden lg:flex flex-col lg:flex-row lg:gap-3 capitalize'>
        <div className='p-3 hover:text-orange-200 hover:border-b hover:border-orange-500 transition-colors'><a href="/">Log in / register </a></div>
        <div className='p-3 hover:text-orange-200 hover:border-b hover:border-orange-500 transition-colors'><a href="/">book table </a></div>
      </div>
{/* ----------Small Screen----------- */}
      <div className='flex flex-col lg:hidden  '>
        {
          !toggleMenu &&
          <div className='flex text-2xl justify-end p-5 '>
            <GiHamburgerMenu onClick={()=> setToggleMenu(true)} className="hover:text-yellow-200 cursor-pointer z-20"/>
          </div>
        }
       {
        toggleMenu &&
        <div className='w-[100vw] h-[100vh] absolute left-0 top-0 z-10 backdrop-blur-2xl  transition-all ease-in duration-200 font-extralight font-serif'>
          <div className='flex text-4xl justify-end p-5 text-yellow-100 z-20'>
            <MdOutlineRestaurantMenu className=' cursor-pointer hover:text-yellow-200' onClick={()=> setToggleMenu(false)}/>
          </div>
          <div className='flex flex-col items-center capitalize' onClick={()=> setToggleMenu(false)}>
            <div className='p-3 hover:text-gray-300 transition-colors'><a href="#home">Home </a></div>
            <div className='p-3 hover:text-gray-500 transition-colors'><a href="#about">about </a></div>
            <div className='p-3 hover:text-gray-500 transition-colors'><a href="#menu">menu </a></div>
            <div className='p-3 hover:text-gray-500 transition-colors'><a href="#awards">awards </a></div>
            <div className='p-3 hover:text-gray-500 transition-colors'><a href="#contact">contact </a></div>
            <div className='p-3 hover:text-gray-500 transition-colors'><a href="/">Log in / register </a></div>
            <div className='p-3 hover:text-gray-500 transition-colors'><a href="/">book table </a></div>
          </div>
        </div>
        }
      </div>

    </nav>
  )
  }


export default Navbar;