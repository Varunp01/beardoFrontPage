import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Poster from './Poster/Poster'
import Products from './Products/Products'
import Trending from './Trending/Trending'
import Timer from './Timer/Timer'
import Footer from './Footer/Footer'
import Links from './Links/Links'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Poster></Poster>
    <Products></Products>
    <Trending></Trending>
    <Timer></Timer>
    <Links></Links>
    <Footer></Footer>
    </>
  )
}

export default App
