import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=1fed1340';

// const movie1 = {
//     "Title": "Snowfall",
//     "Year": "2017-",
//     "imdbID": "tt6439752",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYzdhNDE0YTItNGJiMi00YzYyLTk0YTktODViNTU3Njk1MWY4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? 
        (
          <div className="container">
            {
              movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))
            }
          </div>
        ) :
        (
          <div className="empty">
            <h2>No movies found...</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
