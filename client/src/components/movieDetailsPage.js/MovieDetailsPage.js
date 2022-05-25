import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './movieDetailsPage.css'
import Rating from "../rating/rating";
import UserRating from "../userRating/UserRating";

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
    if (movieIsInMyList) {
      setMovieIsInMyList(false);
      deleteMovie(movie);
    }
    else {
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
          <div className="ratings">
            <div className="popularRating">
              <span className="popularRatignSpan">Popular Rating: </span>
              <div className="ratingElementWrapper">
                <Rating rating={movie.vote_average}/>
              </div>
            </div>
            <div className="userRating">
              <span className="userrRatignSpan">Your Rating: </span>
              <UserRating id={movie.id}></UserRating>
            </div>
          </div>
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