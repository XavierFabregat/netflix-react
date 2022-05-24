import logo from '../../assets/netflix-logo.png';
import './NavBar.css'
function NavBar () {
  return (
    <div className='nav'>
      <img src={logo} alt="netflix-logo"/>
      <button>
        
        Search
      </button>
    </div>
  )
}

export default NavBar;