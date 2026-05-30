import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store)=>store.movies?.nowPlayingMovies);
  const popular = useSelector(((store)=> store.movies?.popularMovies));
  const topRated = useSelector(((store)=> store.movies?.topRatedMovies));
  const upcoming = useSelector(((store)=> store.movies?.upcomingMovies));
  return (
    <div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={nowPlaying}/>
            <MovieList title={"Popular Movies"} movies={popular}/>
      <MovieList title={"Top Rated"} movies={topRated}/>
      <MovieList title={"Upcoming"} movies={upcoming}/>
      <MovieList title={"NowPlaying"} movies={nowPlaying}/>
      <MovieList title={"NowPlaying"} movies={nowPlaying}/>

      </div>
    </div>
  )
}

export default SecondaryContainer