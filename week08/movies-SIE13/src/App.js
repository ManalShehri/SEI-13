import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import NaveBar from './components/NaveBar';
import AllMovies from './components/Allmovies'


function App() {

  return (
    <div className="">
      <NaveBar />
      <AllMovies />
      <Footer />
    </div>
  );
}

export default App;
