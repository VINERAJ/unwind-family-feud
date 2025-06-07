import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Game from './Game';
import './App.css';

function Home() {
  const navigate = useNavigate();
  return (
    <body class="family-feud">
    <div class="logo-container">
      UNWIND FAMILY <span>FEUD</span>
    </div>
    <div class="start-button">
      <button class="start-button" onClick={() => navigate('/game')}>START</button>
    </div>
  </body>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
      // <body class="family-feud">
      //   <div class="logo-container">
      //     UNWIND FAMILY <span>FEUD</span>
      //   </div>
      //   <div class="start-button">
      //     <button class="start-button" onClick={() => navigate('/game')}>START</button>
      //   </div>
      // </body>
  );
}

export default App;
