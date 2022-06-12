import React from "react";
import Googlelogo from './Assets/Googlelogo.png'
import Button from "./Button";
import Language from "./Language";
import {useState,useEffect}from 'react'
import { Link } from "react-router-dom";

const Search =()=>{
   const[load, setLoad]= useState(false)
   const[items, setItems]= useState([])

useEffect( ()=>{
  const GetData = async()=>{
const data = await fetch('https://fortnite-api.theapinetwork.com/items/popular')
const  items = await data.json()
console.log(items)
setItems(items.entries)
}
GetData()
},[])

   return(
      <div className="container">
      <nav className="topbar">
         <ul>
            <a> Gmail</a>
             <a> Images</a>
         </ul>
      </nav>
         <div></div>
      <div className="SC">
         <div className="logo">
            <img src= {Googlelogo} />
               </div>
               <div className="searchdiv"> <input id ="search" type= "search"/></div>
            </div>
         
  <div> 
     {items.map((item)=>{
     return (<h3>
     <Link to={`/search/${item.type}`}> {item.name} </Link></h3>)
     })}
  
     </div>
     
      </div>
   )
} 
export default Search