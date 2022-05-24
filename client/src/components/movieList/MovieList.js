import Movie from "../Movie/Movie";
import './MovieList.css'

function MovieList ({ movies }) {
  return (
    <div>
      <h1>Discover</h1>
      <ul>
        {movies.map((movie) => {
          return <li><Movie
          title = {movie.title}
          image = {`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
          /></li>
        })}
      </ul>
    </div>
  )
}

export default MovieList;