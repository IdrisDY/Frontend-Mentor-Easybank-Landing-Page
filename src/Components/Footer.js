import React from 'react'
import logo from './images/logo.svg'
import facebookImg from './images/icon-facebook.svg'
import instaImg from './images/icon-instagram.svg'
import twitterImg from './images/icon-twitter.svg'
import pinterestImg from './images/icon-pinterest.svg'
import youtubeImg from './images/icon-youtube.svg'





const Footer = () => {
  return (
    <div className='footer-container'>
       <div className='footer-col1'>
       <img className='easybank-logo' src= {logo}/>

     <div className='logos'>
     <img className='social-logo' src= {facebookImg}/>
     <img className='social-logo' src= {youtubeImg}/>
     <img className='social-logo' src= {twitterImg}/>
     <img className='social-logo' src= {pinterestImg}/>
     <img className='social-logo' src= {instaImg}/>
     


     </div>
       </div>
       <nav className='footer-nav'>
          <ul>
          
 



             <li className='footer-li'>About Us</li>
             <li className='footer-li'> Contact</li>
             <li className='footer-li'>  Blog</li>
          </ul>
       </nav>
       <nav className='footer-nav'>
       <ul>
             <li className='footer-li'>  Careers</li>
             <li className='footer-li'>  Support</li>
             <li className='footer-li'>  Privacy Policy
</li>
          </ul>
       </nav>
       <div className='footer-col4'>
       <button className='req-btn btn-resize'> Request Invite</button>
          <h6>   © Easybank. All Rights Reserved
</h6>
       </div>
    </div>
  )
}

export default Footer