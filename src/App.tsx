import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import FavouritesPage from './pages/FavouritesPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={SearchPage}/>
        <Route path='/fav' Component={FavouritesPage}/>
      </Routes>
    </div>
  );
}

export default App;
