import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Search from './Components/Card/Search/Search';
import { on } from 'events';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Card/Portfolio/AddPortfolio/ListPortfolio/ListPortfolio';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';

function App() {
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
