import React, { useEffect, useRef, useState } from 'react'
// components
import SubHeadings from '../SubHeadings/SubHeadings';
//constants
import images from '../../constants/images';
//framer motion
import { motion } from 'framer-motion'
//css
import './gallery.css'

const Gallery = () =>{
  const carousel = useRef();
  // const [width, setWidth] = useState(0);
  // useEffect(()=>{
  //   console.log("scrollwidth: ",carousel.current.scrollWidth)
  //   console.log("offsetWidth: ",carousel.current.offsetWidth)
  //   setWidth(2300 - carousel.current.offsetWidth)
  // }, []);
  
  const galleryImg = [images.gallery04, images.gallery02, images.gallery03, images.gallery04, images.gallery03, images.gallery02, images.gallery03, images.gallery04]
  return(
    <div className='flex flex-col lg:flex-row items-center justify-center w-full'>
      <div className='min-w-[50%] flex flex-col  justify-center items-center p-5 lg:items-start'>
        <SubHeadings title="Instagram" />
        <h1 className=' mb-7 tracking-wider capitalize text-3xl lg:text-5xl   font-serif font-thin text-orange-300 '>Photo Gallery</h1>
        <p className='text-xs lg:text-sm opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est, temporibus natus tempora aliquam inventore praesentium ex cupiditate explicabo quibusdam a asperiores quisquam laudantium id, eaque veritatis beatae, ipsa velit.</p>
        <div>
            <button className='text-xs md:text-sm lg:text-base px-5 py-3 bg-orange-200 text-black mt-5'>Explore more</button>
          </div>
      </div>
      
      <motion.div 
        ref={carousel} 
        whileTap={{cursor:"grabbing"}} 
        className='carousel cursor-grab p-5 max-w-[85%]  mx-auto overflow-hidden'>
        <motion.div 
        drag='x'
        // dragConstraints={{ right:0 , left: -width}}
        dragConstraints={{ right:0 , left: -2000}}
        className='inner-carousel flex gap-10'>
          {
            galleryImg.map((img, i) =>{
              // setCount(i)
              return (
              <motion.div key={i} className="item  min-w-[250px] ">
                <img src={img} alt="gallery images" className=' rounded-lg pointer-events-none' />
              </motion.div>
            )})
          
          }
        </motion.div>
      </motion.div>
    </div>
  )}


export default Gallery