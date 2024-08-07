// src/App.js
import React, { useState } from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar title = "WordHelper" aboutText="About WordHelper"/>
    <Alert/>
    <div>
        <Routes>
          <Route path="/" element={<Textform/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </div>
    </Router>
    
    </>
  )
}

export default App;
