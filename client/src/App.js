import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/nav-bar/NavBar';
import { useState } from 'react';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('28,Action');
  return (
    <div className='page-wrapper'>
      <NavBar setSelectedGenre={setSelectedGenre}></NavBar>
      <Dashboard classname="dashboard" selectedGenre={selectedGenre}></Dashboard>
    </div>
  );
}

export default App;
