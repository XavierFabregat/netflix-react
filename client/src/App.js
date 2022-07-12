import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import MovieDetailsPage from './components/movieDetailsPage.js/MovieDetailsPage';
import NavBar from './components/nav-bar/NavBar';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('28,Action');
  const [wishlistMovies, setWishlistMovies] = useState([]);

  useEffect(() => {
    requestWishlist();
  }, []);

  async function requestWishlist() {
    const result = await fetch(
      'https://fakeflix-react.herokuapp.com/movie'
    );
    const json = await result.json();
    setWishlistMovies(json);
  }

  return (
    <div className='page-wrapper'>
      <NavBar setSelectedGenre={setSelectedGenre}></NavBar>
      <Routes>
        <Route path='/' element={<Dashboard setWishlistMovies={setWishlistMovies} wishlistMovies = {wishlistMovies}selectedGenre={selectedGenre}/>}/>
        <Route path=':id' element={<MovieDetailsPage setWishlistMovies={setWishlistMovies} wishlistMovies={wishlistMovies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
