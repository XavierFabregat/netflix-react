import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import MovieDetailsPage from './components/movieDetailsPage.js/MovieDetailsPage';
import NavBar from './components/nav-bar/NavBar';
import { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('28,Action');
  return (
    <div className='page-wrapper'>
      <NavBar setSelectedGenre={setSelectedGenre}></NavBar>
      <Routes>
        <Route path='/' element={<Dashboard selectedGenre={selectedGenre}/>}/>
        <Route path=':id' element={<MovieDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
