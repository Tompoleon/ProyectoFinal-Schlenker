import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CartWidget from './components/CartWidget.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import RoutesConfig from './Routes'; 
import './FirebaseConfig.js';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <NavBar />
    <RoutesConfig  />
    <Footer />

    </>
  )
}

export default App
