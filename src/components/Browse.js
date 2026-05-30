import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../utils/UsePopularMovies';
import UseTopRatedMovies from '../utils/UseTopRatedMovies';
import UseUpcomingMovies from '../utils/UseUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);


  useNowPlayingMovies()
  UsePopularMovies()
  UseTopRatedMovies()
  UseUpcomingMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : <>
        <MainContainer />
        <SecondaryContainer /></>}


    </div>
  )
}

export default Browse