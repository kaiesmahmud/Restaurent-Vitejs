import React, { useRef, useState } from 'react'
//icon
import { BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
//video
import {meal} from '../../constants'

const Intro = () =>{
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef();
  const handlePlayVideo = () => {
    setPlayVideo(!playVideo)
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  }
  return(
    <div className=' relative my-10'>
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
         />
         <div className=' bg-gray-800 bg-opacity-40 absolute inset-0 flex justify-center items-center'>
          <div
            className='border border-cyan-700 rounded-full p-8 cursor-pointer'
            onClick={handlePlayVideo}
          >
            {
              playVideo ? <BsPauseFill className='text-white text-3xl'/> : <BsFillPlayFill className='text-white text-3xl' />
            }
          </div>
         </div>
    </div>
    )
  }


export default Intro