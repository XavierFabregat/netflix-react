import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './movieDetailsPage.css'
import Rating from "../rating/rating";

function MovieDetailsPage () {
  const [movie, setMovie] = useState('');

  const { id } = useParams();


  useEffect(() => {
    getMovie(id);
  }, [id]); 

  async function getMovie(id) {
    const result = await fetch(`
      https://movied.herokuapp.com/movie/${id}
    `);
    const json = await result.json();
    setMovie(json);
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
      </div>
    </div>
  )
}

export default MovieDetailsPage;