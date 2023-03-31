import React from 'react'

const MenuItem = ({title, price, tags}) => {
  return (
    <div className='py-2 border-b mb-5 '>
      <div className='flex items-center justify-start gap-5'>
        <div className=' w-52 text-orange-400 font-serif font-extralight'>
          <p>{title}</p>
        </div>
        <div className='w-10 border-white border-t'/>
        <div>
          <p className='text-green-500'>{price}</p>
        </div>
      </div>
      <p className='text-xs font-extralight'>{tags}</p>
    </div>
  )
}

export default MenuItem