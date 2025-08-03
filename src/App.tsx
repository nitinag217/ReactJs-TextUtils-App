import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import TextForm from './Components/TextForm/TextForm';

function App() {
  return (
    <>
      <Navbar title='TextUtilily' aboutText='About Us' />
      <div className='container'>
        <TextForm heading={"Enter to text to analyze"} />
      </div>
    </>
  );
}

export default App;