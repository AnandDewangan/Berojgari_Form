import React from 'react';
import './App.css';
import Home from './components/home/home';
import About from './components/About/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewAcc from './components/NewAcc/newAcc';
import Complaints from './components/Complaints/complaints';
import Contact from './components/Contact/contact';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/newUser' element={<NewAcc />}/>
          <Route path='/complaints' element={<Complaints />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
