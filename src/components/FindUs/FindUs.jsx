import React from 'react'
import SubHeadings from '../SubHeadings/SubHeadings';
//Image
import images from '../../constants/images';

const FindUs = () => (
    <div className='min-h-[100vh] capitalize m-0 lg:mx-20 flex flex-col lg:flex-row items-center justify-center'>
    <div className='p-5 lg:w-[65%] '>
      <SubHeadings title='chase the new flavor '/>
      <h1 className='mt-10 mb-7 tracking-wider uppercase text-6xl lg:text-[100px]  font-serif font-thin text-orange-300'>The key to find dinings</h1>
      <p className=' opacity-75 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam, at molestiae dolorum iure distinctio explicabo quae accusamus quasi sapiente odit reprehenderit reiciendis suscipit quidem magnam dolor vero blanditiis sunt.</p>
      <button className='px-5 py-3 bg-orange-200 text-black mt-5'>Explore Menu</button>
    </div>
    <div className='w-[80%] md:w-[50%] lg:w-[50%] flex items-center justify-center'>
      <img src={images.welcome} alt="welcome"  className='hover:scale-[95%] transition-all ease-in duration-200'/>
    </div>
  </div>
  );


export default FindUs