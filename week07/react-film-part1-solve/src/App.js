
import './App.css';
import { FilmListing } from './components/FilmListing';
import { FilmDetails } from './components/FilmDetails';
import TMDB from './API/TMDB'

function App() {
  const films = TMDB.films
  return (
    <div className="film-library">
      
      <FilmListing  films={films}  />
  
      <FilmDetails  films={TMDB.films}  />
  </div>
  );
}

export default App;
