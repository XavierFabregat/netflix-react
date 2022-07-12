import MovieList from "../movieList/MovieList";
import { useEffect, useState } from "react";
import './Dashboard.css'

function Dashboard ({ selectedGenre, wishlistMovies, setWishlistMovies }) {
  const [discoveryMovies, setDiscoveryMovie] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);

  useEffect(() => {
    requestDiscoveryMovies();
  }, []);
  
  useEffect(() => {   
    if (!wishlistMovies) {
      requestWishlist();
    }
  }, [wishlistMovies]); //eslint-disable-line

  useEffect(() => {
    requestGenreMovies(selectedGenre.split(',')[0]);
  }, [selectedGenre]);

  async function requestDiscoveryMovies() {
    const result = await fetch(
     'https://movied.herokuapp.com/discover'
    );
    const json = await result.json();
    setDiscoveryMovie(json);
  }

  async function requestGenreMovies(id) {
    const result = await fetch(
     `https://movied.herokuapp.com/categories/${id}`
    );
    const json = await result.json();
    setGenreMovie(json);
  }

  async function requestWishlist() {
    const result = await fetch(
      'https://fakeflix-react.herokuapp.com/movie'
    );
    const json = await result.json();
    setWishlistMovies(json);
  }

  return (
    wishlistMovies && 
    <div className="dashboard">
      <MovieList movies={wishlistMovies} wishlist={wishlistMovies} title="My List" setWishlistMovies={setWishlistMovies} key="1"></MovieList>
      <MovieList movies={discoveryMovies} wishlist={wishlistMovies} title="Discover" setWishlistMovies={setWishlistMovies} key="2"></MovieList>
      <MovieList movies={genreMovie} wishlist={wishlistMovies} title={selectedGenre.split(',')[1]} setWishlistMovies={setWishlistMovies} key="3"></MovieList>
    </div>
  )
}

export default Dashboard;