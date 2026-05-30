import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_IMG } from '../utils/constants'

const GptSearch = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <div className="fixed inset-0 -z-10">
                <img
                  className="w-full h-full object-cover"
                  src={BACKGROUND_IMG}
                  alt=""
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch