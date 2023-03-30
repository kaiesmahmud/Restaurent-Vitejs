import React from 'react'
//Image
import images from '../../constants/images';

const SubHeadings = ({title}) => {
  return (
    <div>
        <p>{title}</p>
        <img src={images.spoon} alt="spoon img" />
    </div>
  )
}

export default SubHeadings