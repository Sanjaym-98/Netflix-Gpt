import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-full aspect-video pt-[28%] sm:pt-[22%] md:pt-[20%] px-4 sm:px-12 md:px-24 absolute text-white bg-gradient-to-r from-black z-10 pointer-events-none'>
        <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold line-clamp-2 sm:line-clamp-none'>{title}</h1>
        <p className='hidden sm:block py-3 md:py-6 text-sm md:text-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/4 line-clamp-3 md:line-clamp-none'>{overview}</p>
        <div className='flex flex-wrap gap-2 mt-3 sm:mt-0 pointer-events-auto'>
            <button className='bg-white text-black text-sm sm:text-base py-2 px-4 sm:p-4 sm:px-8 md:p-5 md:px-10 rounded-lg bg-opacity-50 hover:bg-opacity-80' >▶ Play</button>
            <button className='bg-white text-black text-sm sm:text-base py-2 px-4 sm:p-4 sm:px-8 md:p-5 md:px-10 rounded-lg bg-opacity-50 hover:bg-opacity-80'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle