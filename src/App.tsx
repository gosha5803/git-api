import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import FavouritesPage from './pages/FavouritesPage';
import NavBar from './components/NavBar';
import './App.css'
import AppRouter from './components/AppRouter';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
    </div>
  );
}

export default App;
