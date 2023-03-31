import React from 'react'
// components
import MenuItem from '../MenuItem/MenuItem';
//constants
import  data from './../../constants/data'
import images from '../../constants/images';

const SpecialMenu = () => (
    <section className='my-10 py-10 capitalize bg-black flex flex-col justify-center items-center min-h-[100vh]'>
      <div className='text-center flex flex-col justify-center items-center'>
        <p className=' capitalize font-extralight text-sm font-serif tracking-widest'>menu that fits your palatte</p>
        <img src={images.spoon} alt="spoon img" />
        <h1 className=' mb-7 tracking-wider uppercase text-3xl   font-serif font-thin text-orange-300'>today's special</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
        {/* --------wines & beer-------------- */}
        <div>
          <p className='text-center text-xl underline underline-offset-[10px] mb-5 font-extralight text-slate-200'>wine & beer</p>
          <div>
            {
              data?.wines.map((wine,i) => (
                <MenuItem key={i} title={wine.title} price={wine.price} tags={wine.tags} />
              ))
            }
          </div>
        </div>
        {/* ---------image ---------------- */}
        <div className='w-[100px] md:w-[200px] lg:w-[300px]'>
          <img src={images?.menu} alt="menu img" className='hover:scale-[95%] transition-all ease-in duration-200'/>
        </div>
        {/* ----------cocktails--------- */}
        <div>
          <p className='text-center text-xl underline underline-offset-[10px] mb-5 font-extralight text-slate-200' >cocktails</p>
          <div>
            {
              data?.cocktails.map((cocktail,i) => (
                <MenuItem key={i} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )

export default SpecialMenu;