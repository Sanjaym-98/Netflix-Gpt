import React, { useEffect, useState } from 'react'
import { API_GET_OPTIONS, VIDEO_DATA_URL } from '../utils/constants';
import { addMovieTrailer } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const UseMovieTrailer = (movieId) => {
    const dispach = useDispatch()
    const movieTrailer = useSelector((store)=>store.movies.movieTrailer)
    console.log("movietrailer",movieTrailer)
    // const 
    const movieData = useSelector((store) => store.movies?.movieTrailer);
    const trailerId = movieData?.key
    const getMovieVideo = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;


        let response = await fetch(url, API_GET_OPTIONS)
        let data = await response.json();
        let filteredData = data?.results?.filter((movie) => movie.type === "Trailer");
        let trailer = filteredData?.length ? filteredData[0] : data?.results[0];
        dispach(addMovieTrailer(trailer))
        //  setTrailerId(trailer.key)

    }
    useEffect(() => {
      !movieTrailer &&  getMovieVideo()
    }, [movieId])
    return trailerId;

}

export default UseMovieTrailer