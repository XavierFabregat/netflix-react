import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import './MovieList.css'

function MovieList ({ movies, title, setWishlistMovies, wishlist }) {

  return (
    <div>
      {!movies.length ? (
        <h2>No movies added!</h2>
      ) : (
      <div>
        <h1>{title}</h1>
        <ul>
          {movies.map((movie) => {
            return (<li>
              <Link to={`/${movie.id}`}>
                <Movie
                movie = {movie}
                key = {movie.id}
                setWishlistMovies={setWishlistMovies}
                currentState = {wishlist}
                />
              </Link>
            </li>)
          })}
        </ul>
      </div>
      )}
    </div>
  )
}

export default MovieList;