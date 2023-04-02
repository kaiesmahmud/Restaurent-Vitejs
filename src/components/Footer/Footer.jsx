import React from 'react'
//icons
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import SubHeadings from '../SubHeadings/SubHeadings';

const Footer = () => (
    <div className='flex flex-col p-5'>
      {/* ----------------News letter-------------- */}
      <div className='bg-black rounded p-10  flex flex-col justify-center items-center '>
        <SubHeadings title={'NewsLetter'} />
        <h1 className='mt-5 mb-7 tracking-wider uppercase text-3xl lg:text-5xl  font-serif font-thin text-orange-300'>Subscribe here </h1>
        <div className='flex justify-center items-center w-full'>
          <input type="email" name="email" id="email" className=' bg-transparent border-b w-[250px] px-5 m-0 h-10 focus:outline-none' placeholder='youremail@example.com' />
          <button className='px-5 py-2 bg-orange-200 text-black'>subscribe</button>
        </div>

      </div>
      {/* --------------footer------------- */}
      <div className='capitalize flex justify-center items-center gap-2 flex-wrap'>
        <div className='shadow-lg p-3  rounded my-3  bg-black bg-opacity-25 w-full text-center lg:w-[30%] '>
          <h1 className='text-lg text-orange-300 font-serif'>contact us</h1>
          <address>Dhaka, Bangladesh</address>
          <p className='text-xs tracking-widest opacity-60'>+012323423423</p>
          <p className='text-xs tracking-widest opacity-60'>+012323423423</p>
        </div>
        <div className=' shadow-lg p-3  rounded my-3  bg-black bg-opacity-25  flex flex-col justify-center items-center w-full md:w-[50%] lg:w-[35%] '>
          <p className='text-4xl p-5  font-extralight select-none cursor-pointer'>Res<span className='text-orange-400'>2</span>rentz</p>        
          <article className='text-xs tracking-widest text-center'>the best way to find yourself is to love yourself in the service of others</article>
          <hr className='border-white p-3 min-w-[300px] my-3' />
          <div className='flex gap-5 text-xl mb-5'>
            <div className='rounded-full border p-2 bg-black bg-opacity-50 hover:border-cyan-300 hover:text-cyan-500 transition-colors duration-150 ease-in cursor-pointer'>
              <FiFacebook />
            </div>
            <div className='rounded-full border p-2 bg-black bg-opacity-50 hover:border-pink-300 hover:text-pink-500 transition-colors duration-150 ease-in cursor-pointer'>
              <FiInstagram />
            </div>
            <div className='rounded-full border p-2 bg-black bg-opacity-50 hover:border-blue-300 hover:text-sky-500 transition-colors duration-150 ease-in cursor-pointer'>
              <FiTwitter />
            </div>
          </div>
        </div>
        <div className='shadow-lg p-3  rounded my-3  bg-black bg-opacity-25 w-full text-center lg:w-[30%] '>
          <h1 className='text-lg text-orange-300 font-serif'>Working hour</h1>
          <p className='text-xs tracking-widest opacity-60'>Saturday 6am - 3pm</p>
          <p className='text-xs tracking-widest opacity-60'>monday 6am - 3pm</p>
          <p className='text-xs tracking-widest opacity-60'>tuesday 6am - 3pm</p>
          <p className='text-xs tracking-widest opacity-60'>wednesday 6am - 3pm</p>
          <p className='text-xs tracking-widest opacity-60'>thursday 6am - 3pm</p>
        </div>
      </div>
      <hr className=' border-orange-500 opacity-60 my-5'/>
      <footer className='text-xs font-extralight text-center p-5 tracking-wider text-orange-400'>copyright © 2023, Nehal. All Rights reserved</footer>
    </div>
  );


export default Footer