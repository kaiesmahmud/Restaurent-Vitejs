import React from 'react'

const AwardCard = ({award: { imgUrl, title, subtitle}}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2  p-5'>
        <img src={imgUrl} alt={title} className="w-[90px]" />
        <p className='text-orange-300'>{title}</p>
        <p className='text-xs font-extralight'>{subtitle}</p>
    </div>
  )
}

export default AwardCard