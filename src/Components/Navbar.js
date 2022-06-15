import React from "react"
import { useState } from "react"
import easylogo from './images/logo.svg'
import menu from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'

const Navbar = () =>{

      const[show,setShow] = useState(true)
      

    return(
          <div className="cov"><nav className="navbar">
              <div className="div1"><img src ={easylogo} className= "easylogo" /></div> 
              <div className="div2"><ul className="lis">
                  <li className="sub">Home</li><li className="sub">About</li>
                  <li className="sub">Contact</li><li className="sub">Blog</li>
                  <li className="sub">Careers</li>
                  </ul></div>
               <div className="div3"><div className="grad">Request Invite</div>
          {show? <img src={menu} onClick={()=>setShow(!show)} id ="menu"/>:null}
          
          {!show?  <img src={close} onClick={()=>setShow(!show)}  id ="close"/>:null}
               </div>
              </nav>
              
         {!show?  <div id="dropd"><ul id="lis2">
                <li className="sub2">Home</li><li className="sub2" >About</li>
                <li className="sub2">Contact</li><li className="sub2">Blog</li>
                <li className="sub2">Careers</li>
                </ul></div> :null}
              
              </div>
    )
}
export default Navbar