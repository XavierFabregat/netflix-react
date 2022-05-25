import { useEffect, useState } from 'react';
import logo from '../../assets/netflix-logo.png';
import search from '../../assets/search-icon.svg';
import menu from '../../assets/menu-icon.svg';
import './NavBar.css'


function NavBar ({ setSelectedGenre }) {
  const [allGenres, setGenres ] = useState([]);
  const [searchMovies, setSearchMovies ] = useState([]);
  const [isGenreVisible, setIsGenreVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    getGenres();
  }, []);

  function handleCategory () {
    setIsSearchVisible(false);
    setIsGenreVisible(!isGenreVisible);
  }

   function handleSearchButton () {
    setIsGenreVisible(false);
    setIsSearchVisible(!isSearchVisible);
  }

  function handleChange (event) {
    setSelectedGenre(event.target.value);
  }

  function handleSearchInput(event) {
    getSearchMovies(event.target.value);
  }

  async function getSearchMovies(searchInput) {
    const result = await fetch(
     `https://movied.herokuapp.com/search?q=${searchInput}`
    );
    const json = await result.json();
    setSearchMovies(json);
  }


  async function getGenres() {
    const result = await fetch(
     'https://movied.herokuapp.com/categories'
    );
    const json = await result.json();
    setGenres(json);
  }

  return (
    <nav className='nav'>
      <div className='categories'>
        <button onClick = {handleCategory}>
          <img src={menu} alt="menu-icon"/>
          <p>Categories</p>
        </button>
        <select id="genre" className={isGenreVisible ? '' : 'hidden'} onChange={handleChange}>
          {allGenres.map((genre) => {
            return <option value={[genre.id, genre.name]}>{genre.name}</option>
          })}
        </select >
      </div>
      <img src={logo} alt="netflix-logo"/>
      <div className='search'>
        <input type='text' className={isSearchVisible ? '' : 'hidden'} onChange={handleSearchInput}/>
        <button onClick={handleSearchButton}>
          <img src={search} alt="search-icon" />
          <p>Search</p>
        </button>
        {
        searchMovies.length && isSearchVisible && 
        <ul>
          {searchMovies.map((movie) => {
            return <li>{movie.title}</li>
          })}
        </ul>
        }
      </div>
    </nav>
  )
}

export default NavBar;