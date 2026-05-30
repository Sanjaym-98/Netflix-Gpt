import React, { useEffect, useState } from 'react'
import { API_GET_OPTIONS, VIDEO_DATA_URL } from '../utils/constants';
import { addMovieTrailer } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import UseMovieTrailer from '../utils/UseMovieTrailer';

const VideoBackground =  ({ movieId }) => {
    // const [trailerId, setTrailerId]= useState(null)
 let trailerId =  UseMovieTrailer(movieId);
//  trailerId="Qah9sSIXJqk"
    return (
        <div className='w-full overflow-hidden'>
            <iframe
                className='w-full aspect-video max-h-[50vh] sm:max-h-none'
                src={`https://www.youtube.com/embed/6wbMsDmJLCs?si=${trailerId}?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>
    )
};


export default VideoBackground