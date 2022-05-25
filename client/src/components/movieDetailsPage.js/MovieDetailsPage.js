import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './movieDetailsPage.css'
import Rating from "../rating/rating";

function MovieDetailsPage ({wishlistMovies, setWishlistMovies}) {
  const [movie, setMovie] = useState('');
  const [movieIsInMyList, setMovieIsInMyList] = useState('');

  const { id } = useParams();


  useEffect(() => {
    getMovie(id);
    getIsMovieInMyList(id);
  }, [id]); 

  

  async function getMovie(id) {
    const result = await fetch(`
      https://movied.herokuapp.com/movie/${id}
    `);
    const json = await result.json();
    setMovie(json);
  }

  const deleteMovie = (movie) => {
    fetch('http://localhost:5050/movie',{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movie),
    });
  }
  const addMovie = (movie) => {
    fetch('http://localhost:5050/movie',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movie),
    });
  }

  function toggleMovie() {
    const movieIndex = wishlistMovies.findIndex(el => el.id === movie.id);
    if (movieIsInMyList) {
      wishlistMovies = [...wishlistMovies.slice(0,movieIndex),...wishlistMovies.slice(movieIndex+1)];
      setMovieIsInMyList(false);
      deleteMovie(movie);
    }
    else {
      wishlistMovies = [movie,...wishlistMovies]
      addMovie(movie);
      setMovieIsInMyList(true);
    }
  }

  async function getIsMovieInMyList(id) {
    const result = await fetch(`http://localhost:5050/movie/${id}`);
    const json = await result.json();
    if (json.length) {
      setMovieIsInMyList(true);
    } else {
      setMovieIsInMyList(false);
    }
  }

  return (
    movie && <div className="detailsPageWrapper">
      <div className="topContainer">
        <div className="imgContainer">
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='movie-poster'/>
        </div>
        <div className="detailsContainer">
          <h1>{movie.title}</h1>
          <h3>{movie.tagline}</h3>
          <div className="prodComp">
            <h3>Porduction Companies: </h3>
            <ul>
              {movie.production_companies && movie.production_companies.map((producitonCompany) => {
                return (<li>{producitonCompany.name}</li>)
              })}
            </ul>
          </div>
          <div className="prodComp">
            <h3>Genres: </h3>
            <ul>
              {movie.genres.map((genre) => {
                return (<li>{genre.name}</li>)
              })}
            </ul>
          </div>
          <Rating rating={movie.vote_average}/>
        </div>
      </div>
      <div className="descripion">
        <p>{movie.overview}</p> 
          {movieIsInMyList
            ? <button className="toggleWishlist" onClick={() => setWishlistMovies(() => toggleMovie())}>Remove From My List</button>
            : <button className="toggleWishlist" onClick={() => setWishlistMovies(() => toggleMovie())}>Add To My List</button>}
      </div>
    </div>
  )
}

export default MovieDetailsPage;