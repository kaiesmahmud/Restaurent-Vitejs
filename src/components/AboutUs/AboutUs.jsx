import React from 'react'
//Image
import images from '../../constants/images';

const AboutUs = () => (
    <section id='about' className='mt-10 pt-10  mb-10 bg-fixed capitalize relative w-full' >
      <div className=' absolute inset-0  z-[-10] flex justify-center items-center'>
        <img src={images.G} alt="g" className='w-[300px]  '/>
      </div>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        <div className='mx-10 md:p-0 flex flex-col items-end pr-1'>
          <h1 className='mt-10 mb-7 tracking-wider uppercase text-4xl lg:text-[50px]  font-serif font-thin text-orange-300'>About us</h1>
          <div>
            <img src={images.spoon} alt="spoon img" />
          </div>
          <p className='my-5 text-xs md:text-sm lg:text-base  opacity-75 font-extralight text-end'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint id repudiandae est quas esse maxime voluptas aspernatur voluptate nemo! Labore aut culpa provident consequuntur numquam voluptates dolorem qui omnis beatae?</p>
          <div>
            <button className='text-xs md:text-sm lg:text-base px-5 py-3 bg-orange-200 text-black mt-5'>Explore more</button>
          </div>
        </div>
        <div>
          <img src={images.knife} alt="knife" className='w-[50px] md:w-[130px] lg:w-full' />
        </div>
        <div className='mx-10 md:p-0'>
          <h1 className='mt-10 mb-7 tracking-wider uppercase text-4xl lg:text-[50px]  font-serif font-thin text-orange-300'>Our History</h1>
          <img src={images.spoon} alt="spoon img" />
          <p className=' my-5 text-xs md:text-sm lg:text-base  opacity-75 font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint id repudiandae est quas esse maxime voluptas aspernatur voluptate nemo! Labore aut culpa provident consequuntur numquam voluptates dolorem qui omnis beatae?</p>
          <button className='text-xs md:text-sm lg:text-base  px-5 py-3 bg-orange-200 text-black mt-5'>Explore more</button>
        </div>
      </div>
    </section>
  );


export default AboutUs