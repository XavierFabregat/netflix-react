import MovieList from "../movieList/MovieList";
import { useEffect, useState } from "react";
import './Dashboard.css'

function Dashboard () {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    requestMovies();
  }, [])


  async function requestMovies() {
    const result = await fetch(
     'https://movied.herokuapp.com/discover'
    );
    const json = await result.json();
    setMovie(json);
  }
  return (
    <div className="dashboard">
      <MovieList movies={movies}></MovieList>
    </div>
  )
}

export default Dashboard;