import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/ItemListContainer.jsx'
import CartWidget from './components/CartWidget.jsx'
import NavBar from './components/NavBar.jsx'


function App() {
const saludo = "Bienvenido a mi ecommerce";
  return (
    <>

     <NavBar />
      <Container saludo={saludo} />
    </>
  )
}

export default App
