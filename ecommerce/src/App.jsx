import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CartWidget from './components/CartWidget.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import RoutesConfig from './Routes'; 

function App() {
const saludo = "Bienvenido a mi ecommerce";
  return (
    <>
    <NavBar />
    <RoutesConfig saludo={saludo} />

    </>
  )
}

export default App
