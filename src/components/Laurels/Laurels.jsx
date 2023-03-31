import React from 'react'
// components
import AwardCard from './AwardCard';
import SubHeadings from '../SubHeadings/SubHeadings';
//constants
import  data from './../../constants/data'
import images from '../../constants/images';

const Laurels = () => (
    <div id='awards' className='flex flex-col lg:flex-row gap-10 p-5'>
      <div className='flex flex-col items-center lg:items-start'>
        <SubHeadings title="Awards & recognition" />
        <h1 className=' mb-7 tracking-wider capitalize text-3xl lg:text-5xl   font-serif font-thin text-orange-300 '>Our Laurels</h1>
        <div className='flex flex-wrap justify-center items-center'>
          {
            data?.awards.map((award, i) => (
              <AwardCard award={award} key={i} />
            ))
          }
        </div>
      </div>
      <div className='w-[80%] lg:w-[70%] flex justify-center items-center'>
        <img src={images.laurels} alt="laurels img" className='w-full md:w-[80%] lg:w-[50%] hover:scale-[95%] transition-all ease-in duration-200' />
      </div>
    </div>
  );


export default Laurels  