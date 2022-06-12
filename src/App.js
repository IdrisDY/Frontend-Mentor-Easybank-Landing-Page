import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Language from './components/Google Work SH/Language';
import Search from './components/Google Work SH/SearchBar';
import Button from './components/Google Work SH/Button';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Heading from './components/Shop';
import Counter from './Sick';
import Post from './Post';
import { Home } from './components/RouterV6/Home';
import Profile from './components/RouterV6/Profile';
import About from './components/RouterV6/About';


function App() {
  const Error = ()=>{
return(<><h1> No such page was found</h1>
<h2> There seems to be an error in the url</h2>
</>
)
  }
  const [login,setLogin] = useState(false)
  return (

// 
<>
<Router>
<nav> 
<ul>
  <li><Link to='/home'> Home Page</Link> </li>
  <li><Link to='/about'> About Page</Link> </li>
  <li><Link to='/profile'> Profile Page</Link> </li>
</ul></nav>
  <Routes>
    <Route  path='home/'  element={<Home/>}/>
    <Route  path='/profile/:user' element={<Profile/>}/>
    <Route  path='/about' element={<About/>}/>
    <Route  path='*' element={<Error/>}/>
  
  </Routes>
</Router>
  Hello world
</>
  );
  
}


   




export default App;
