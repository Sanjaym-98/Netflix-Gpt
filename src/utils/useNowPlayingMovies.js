import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from './movieSlice'
import { API_GET_OPTIONS, NOW_PLAYING_URL } from './constants'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
      const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)

  const getNowPlayingMovies =async()=>{
    const data = await fetch(NOW_PLAYING_URL,API_GET_OPTIONS)
    const repsonse =await data.json()
    dispatch(addNowPlayingMovies(repsonse.results))

  }
  useEffect(() =>   {
   !nowPlayingMovies && getNowPlayingMovies()
  }, [])
}

export default useNowPlayingMovies