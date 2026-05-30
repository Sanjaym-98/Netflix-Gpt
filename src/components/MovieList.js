import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log("tite",title)
    console.log("movies",movies)
    return (
        <div className='px-3 sm:px-6'>
            <h1 className='text-lg sm:text-2xl md:text-3xl py-2 sm:py-4 text-white'>{title}</h1>

            <div className='flex overflow-x-auto scrollbar-hide -mx-1 sm:mx-0'>
                <div className='flex'>
                    {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList