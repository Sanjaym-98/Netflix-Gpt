import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movies,posterPath}) => {
if(!posterPath) return null
  return (
    <div className='w-28 sm:w-36 md:w-44 lg:w-48 flex-shrink-0 pr-2 sm:pr-4'>
        <img
          className='w-full rounded-sm'
          alt="movie Card"
          src={IMG_CDN_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard