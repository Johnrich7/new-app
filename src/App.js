
import './App.css';
import MoviesCard from './MoviesCard.jsx';
import SearchIcon from './Search.svg'
import { useEffect, useState} from 'react';

/* 3b9cf697*/

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=70558f1d'
/*const movie = {
  "Title": "The Batman",
  "Year": "2022",
  "imdbID": "tt1877830",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
}*/

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerms, setSearchTerms] = useState('')

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }
 
  useEffect(() => {
      searchMovies()
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovies(searchTerms);
    }
  };
  

  return (
    <div className='p-16 flex justify-center items-center flex-col'>
      <h1 className='text-5xl tracking-wider text-[#f9d3b4] w-fit font-Roboto font-semibold justify-center items-center'>TamilRockers</h1>
      
      <div className='search w-1/2 mt-16 mx-0 mb-8 flex items-center justify-center py-6 px-7 rounded-3xl bg-customBackground shadow-[5px_5px_7px_#1c1d1f,-5px_-5px_7px_#222527]'>
        <input className='flex-1 border-none text-2xl font-Raleway font-medium pr-4 outline-none text-[#a1a1a1] bg-customBackground'
          placeholder='Search for movies'
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img className='w-8 h-8 cursor-pointer'
          src={SearchIcon}
          alt='Search'
          onClick={(e) => searchMovies(searchTerms)}
        />
      </div>

      {movies?.length > 0
          ? (
            <div className="w-full mt-12 flex justify-center items-center flex-wrap">
              {movies.map((movie) => (
                <MoviesCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="w-full mt-12 flex justify-center items-center">
              <h2 className='text-xl text-[#f9d3b4] font-Raleway'>No Movies found</h2>
            </div>
        )}
        
      


    </div>
  )
}

export default App;
