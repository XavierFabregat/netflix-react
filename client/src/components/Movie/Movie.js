import add from '../../assets/btn-add.svg'
import './Movie.css'
const Movie = ({ image, title }) => {
  return (
    <div className='movie'>
      <img src={image} alt="movie-poster" draggable="false"/>
      <h5>{title}</h5>
      <div className="details">
        <button className="toggleWishList">
          <img src={add} alt ="add-to-my-list"/>
        </button>
      </div>
    </div>
  )
}

export default Movie;