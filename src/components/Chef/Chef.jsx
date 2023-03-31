import React from 'react'
//constants
import images from '../../constants/images';
//components
import SubHeadings from '../SubHeadings/SubHeadings';


const Chef = () =>(
    <div className='flex flex-col lg:flex-row mb-10'>
      <div className='flex justify-center items-center'>
        <img src={images.chef} alt="chef" className='w-[80%] lg:w-[90%] hover:scale-[95%] transition-all ease-in duration-200' />
      </div>
      <div className='p-5 flex flex-col gap-6 w-[90%] justify-center lg:items-start items-center text-center lg:text-start'>
        <SubHeadings title="cheif's word" />
        <h1 className=' mb-7 tracking-wider capitalize text-3xl   font-serif font-thin text-orange-300 '>what we believe in</h1>
        <div className='flex flex-col gap-5 capitalize'>
          <div className='flex flex-col '>
            <img src={images.quote} alt="quote" className='w-10 hover:scale-[95%] transition-all ease-in duration-200' />
            <p className=' opacity-80'>Lorem ipsum dolor, sit amet consecteturpernatur corruptiLoreadipisicing elit. Dolore sint sed ducimus aut numquam aspernatur, illum expedita animi architecto commodi incidunt quae? Provident as doaliquam repellendus reiciendis, maxime accusamus?m ipsumlor sit amet consectetur adipisicing elit. In, ducimus?  </p>
            <div className='flex justify-end'>

            <img src={images.quote} alt="quote" className='w-10 hover:scale-[95%] transition-all ease-in duration-200 rotate-180' />
            </div>

          </div>
          <div>
            <p className='text-orange-300 text-lg font-extralight'>Nehal</p>
            <p className='text-xs '>chef & founder</p>
          </div>
        </div>
      </div>
    </div>
  );

export default Chef