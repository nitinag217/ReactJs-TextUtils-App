import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import TextForm from './Components/TextForm/TextForm';
import About from './Components/About/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#adb5bd';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtilily' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/detailedAbout" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;