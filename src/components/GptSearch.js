import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_IMG } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img src={BACKGROUND_IMG}></img>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch