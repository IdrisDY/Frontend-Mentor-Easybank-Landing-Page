import React from "react";
import money from './images/image-currency.jpg' 
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import confetti from './images/image-confetti.jpg'

const Latest= ()=>{

    return(
         <div><h1 className="arti">Latest Articles</h1>

         <div className="card">
           <div className="cards"><div  className="pic"><img className="image" src={money}/></div>
           <div  className="white"><br/><p >By Claire Robinson</p><br/>
  <h3>Receive money in any<br/> currency with no fees</h3><br/>
 <p className="parag">The world is getting smaller and<br/> we’re becoming more mobile. So<br/> why should you be 
  forced to only<br/> receive money in a single …</p></div></div>


           <div className="cards"><div  className="pic"><img className="image" src={restaurant}/></div>
           <div  className="white"><br/><p>By Wilson Hutton</p><br/>
  <h3>Treat yourself without<br/> worrying about money</h3><br/>
  <p className="parag">Our simple budgeting feature<br/> allows you to separate out your<br/> spending and set 
  realistic limits<br/> each month. That means you …</p></div></div>


           <div className="cards"><div  className="pic"><img className="image" src={plane}/></div>
           <div  className="white"><br/><p>By Wilson Hutton</p><br/>
  <h3>Take your Easybank card<br/> wherever you go</h3><br/>
 <p className="parag"> We want you to enjoy your travels.<br/> This is why we don’t charge any<br/> fees on purchases 
  while you’re<br/> abroad. We’ll even show you …</p></div></div>


           <div className="cards"><div  className="pic"><img className="image" src={confetti}/></div>
           <div  className="white"><br/><p> By Claire Robinson</p><br/>
  <h3>Our invite-only Beta<br/> accounts are now live!</h3><br/>
  <p className="parag">After a lot of hard work by the<br/> whole team, we’re excited to launch<br/> our closed beta. 
  It’s easy to request<br/> an invite through the site ...</p></div></div>
         </div>
         
         
         </div>
    )
}
export default Latest