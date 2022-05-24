import MovieList from "../movieList/MovieList";
import { useEffect, useState } from "react";
import './Dashboard.css'

function Dashboard () {
  const [discoveryMovies, setDiscoveryMovie] = useState([]);
  const [wishlistMovies, setWishlistMovies] = useState([]);
  const [actionMovies, setActionMovie] = useState([]);

  useEffect(() => {
    requestDiscoveryMovies();
    requestActionMovies();
    requestWishlist();
  }, []);


  async function requestDiscoveryMovies() {
    const result = await fetch(
     'https://movied.herokuapp.com/discover'
    );
    const json = await result.json();
    setDiscoveryMovie(json);
  }

  async function requestActionMovies() {
    const result = await fetch(
     'https://movied.herokuapp.com/categories/28'
    );
    const json = await result.json();
    setActionMovie(json);
  }

  async function requestWishlist() {
    const result = await fetch(
      'http://localhost:5050/movie'
    );
    const json = await result.json();
    setWishlistMovies(json);
  }

  return (
    <div className="dashboard">
      <MovieList movies={wishlistMovies} wishlist={wishlistMovies} title="My List" setWishlistMovies={setWishlistMovies} key="1"></MovieList>
      <MovieList movies={discoveryMovies} wishlist={wishlistMovies} title="Discover" setWishlistMovies={setWishlistMovies} key="2"></MovieList>
      <MovieList movies={actionMovies} wishlist={wishlistMovies} title="Action" setWishlistMovies={setWishlistMovies} key="3"></MovieList>
    </div>
  )
}

export default Dashboard;