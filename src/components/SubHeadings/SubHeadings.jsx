import React from 'react'
//Image
import images from '../../constants/images';

const SubHeadings = ({title}) => {
  return (
    <div>
        <p className=' font-extralight text-lg font-serif tracking-widest'>{title}</p>
        <img src={images.spoon} alt="spoon img" />
    </div>
  )
}

export default SubHeadings