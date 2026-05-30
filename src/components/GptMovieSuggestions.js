import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const movieData = useSelector((store)=>store.gpt.gptMovies);
    if(!movieData) return null;
                    console.log("jds",movieData)

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-60 rounded-lg'>
        <div>
            {movieData.map((movie)=>(
                <MovieList key={movie[0]?.id} title={movie[0]?.title} movies={movie}/>
            ))}
        </div>
    </div>
  )
}

export default GptMovieSuggestions