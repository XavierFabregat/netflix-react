import add from '../../assets/btn-add.svg'
import remove from '../../assets/btn-added.svg'
import './Movie.css'
import { Link } from 'react-router-dom'


const Movie = ({ movie, setWishlistMovies, wishlist }) => {

  const deleteMovie = (movie) => {
    fetch('https://fakeflix-react.herokuapp.com/movie',{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movie),
    });
  }
  const addMovie = (movie) => {
    fetch('https://fakeflix-react.herokuapp.com/movie',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movie),
    });
  }

  function toggleMovie() {
    const movieIndex = wishlist.findIndex(el => el.id === movie.id);
    if (movieIndex !== -1) deleteMovie(movie);
    else addMovie(movie);
  }
  
  return (
    <div className='movie'>
      <Link to={`${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="movie-poster" draggable="false"/>
        <h5>{movie.title}</h5>
      </Link>
      <div className="details">
        <button className="toggleWishList" onClick={() => setWishlistMovies((prevState) => {
          toggleMovie()
          const movieIndex = prevState.findIndex(el => el.id === movie.id);
          if (movieIndex !== -1)  {
            wishlist = [...prevState.slice(0,movieIndex),...prevState.slice(movieIndex+1)];
            return wishlist;
          }
          else {
            wishlist = [movie,...prevState]
            return wishlist
          }
        })}>
          {wishlist && <img src={wishlist.some(el => el.id === movie.id) ? remove : add} alt ="add-to-my-list"/>}
        </button>
      </div>
    </div>
  )
}

export default Movie;