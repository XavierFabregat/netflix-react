import logo from '../../assets/netflix-logo.png';
import search from '../../assets/search-icon.svg';
import menu from '../../assets/menu-icon.svg';
import './NavBar.css'
function NavBar () {
  return (
    <div className='nav'>
      <button>
        <img src={menu} alt="menu-icon"/>
        <p>Categories</p>
      </button>
      <img src={logo} alt="netflix-logo"/>
      <button>
        <img src={search} alt="search-icon" />
        <p>Search</p>
      </button>
    </div>
  )
}

export default NavBar;