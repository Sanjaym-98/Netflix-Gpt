import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies, addTopRatedMovies } from './movieSlice'
import { API_GET_OPTIONS, NOW_PLAYING_URL, TOP_RATED_URL } from './constants'

const UseTopRatedMovies = () => {
  const dispatch = useDispatch()
const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const getTopRatedMoviess =async()=>{
    const data = await fetch(TOP_RATED_URL,API_GET_OPTIONS)
    const repsonse =await data.json()
    dispatch(addTopRatedMovies(repsonse.results))

  }
  useEffect(() =>   {
    !topRatedMovies && getTopRatedMoviess()
  }, [])
}

export default UseTopRatedMovies