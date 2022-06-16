import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Work from './Pages/Work';
import Education from './Pages/Education';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/Education' element={<Education />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Work' element={<Work />}/>
        <Route path='/Experience' element={<Experience />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
