import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingContent from './Components/Landing-Content';
import EasybankProps from './Components/EasybankProps';


function App() {
  return (
<>
   <div className='App'> 
   
   
   <div className='container'>
   <LandingContent/>
   <EasybankProps></EasybankProps>
   </div>
   </div>
</>
  );
  
}


   




export default App;
