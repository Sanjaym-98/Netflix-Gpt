import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from './movieSlice'
import { API_GET_OPTIONS, POPULAR_URL } from './constants'

const UsePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    const getUsePopularMovies = async () => {
        const data = await fetch(POPULAR_URL, API_GET_OPTIONS)
        const repsonse = await data.json()
        dispatch(addPopularMovies(repsonse.results))

    }
    useEffect(() => {
        !popularMovies && getUsePopularMovies()
    }, [])
}

export default UsePopularMovies