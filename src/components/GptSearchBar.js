import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import OpenAI from "openai";
import { API_GET_OPTIONS, OPEN_ROUTER_KEY } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {
  const dispach = useDispatch()
  const [loading, setLoading] = useState(false)
  const searchText = useRef()
  const langKey = useSelector((store) => store.config.lang)
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: OPEN_ROUTER_KEY,
    dangerouslyAllowBrowser: true,
  });
  const searchTmdbMovie = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;

    let result = await fetch(url, API_GET_OPTIONS)

    let data = await result.json();
    let movieData = data.results;
    return movieData

  }
  const handleGptSearch = async () => {
    setLoading(true)
    try {
      const completion = await openai.chat.completions.create({

        model: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        messages: [
          {
            role: "system",
            content: `
          You are a movie recommendation system.

          Recommend movies based on the user's query.

          Only give:
          - movie names
          - comma separated
          - maximum 5 movies

          Do not give explanations.
        `
          },
          {
            role: "user",
            content: searchText.current.value
          }
        ],
      });


      let gptResult = completion?.choices[0]?.message.content.split(',');
      const promisesArray = gptResult.map((movie) => searchTmdbMovie(movie))
      let moviesResult = await Promise.all(promisesArray);
      dispach(addGptMovieResults(moviesResult))
      setLoading(false)
    } catch (err) {
      console.error("GPT search failed:", err);
      

    } finally {
      setLoading(false)
    }
  };
  return (
    <div className='pt-[8%] flex justify-center rounded-md'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='m-4  py-2 px-4 bg-red-700 col-span-3 text-white rounded-lg' onClick={() => handleGptSearch()}>{lang[langKey].search}</button>
      </form>
      {loading == true ? <p className='text-white'>Please wait while we fetch your movies, sit back and relax!</p> : null}

    </div>
  )
}

export default GptSearchBar