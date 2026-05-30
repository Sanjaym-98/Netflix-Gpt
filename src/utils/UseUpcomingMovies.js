import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addUpcomingMovies } from './movieSlice'
import { API_GET_OPTIONS, NOW_PLAYING_URL, TOP_RATED_URL, UPCOMING_URL } from './constants'

const UseUpcomingMovies = () => {
  const dispatch = useDispatch()
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

  const getUseUpcomingMovies =async()=>{
    const data = await fetch(UPCOMING_URL,API_GET_OPTIONS)
    const repsonse =await data.json()
    dispatch(addUpcomingMovies(repsonse.results))

  }
  useEffect(() =>   {
   !upcomingMovies && getUseUpcomingMovies()
  }, [])
}

export default UseUpcomingMovies