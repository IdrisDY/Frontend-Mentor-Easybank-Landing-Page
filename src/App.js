import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingContent from './Components/Landing-Content';
import Navbar from './Components/Navbar';
import Latest from './Components/Latest'

function App() {
  return (
<>
   <div className='App'> 
   
   
   <div className='container'>
  <Navbar/>
  <Latest/> 
   </div>
   </div>
</>
  );
  
}


   




export default App;
