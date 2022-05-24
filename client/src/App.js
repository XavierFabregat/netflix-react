import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <div className='page-wrapper'>
      <NavBar></NavBar>
      <Dashboard classname="dashboard"></Dashboard>
    </div>
  );
}

export default App;
