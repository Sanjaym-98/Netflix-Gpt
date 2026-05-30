export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BACKGROUND_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/77c412a9-62ea-48a0-a5ee-466e11e851d5/web/IN-en-20260511-TRIFECTA-perspective_f0af4f75-4cc5-42bd-b0c5-2b65b8b50e03_large.jpg"

export const API_GET_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
  }
};

export const NOW_PLAYING_URL ='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const VIDEO_DATA_URL= 'https://api.themoviedb.org/3/movie/1304313/videos?language=en-US';

export const IMG_CDN_URL= "https://image.tmdb.org/t/p/w500/"

export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';


export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';


export const SUPPORTED_LANGUAGES =[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]



export const OPEN_ROUTER_KEY = process.env.REACT_APP_OPEN_ROUTER_KEY
