import React from "react";
import money from './images/image-currency.jpg' 
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import confetti from './images/image-confetti.jpg'

const Latest= ()=>{

    return(
         <div className="cast"><h1 className="arti">Latest Articles</h1>

         <div className="card">
           <div className="cards"><div  className="pic"><img className="image" id = "picture1" src={money}/></div>
           <div  className="white"><p className="parag" >By Claire Robinson</p>
  <h3 className="h3-new-font">Receive money in any currency with no fees</h3>
 <p className="parag">The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p></div></div>


           <div className="cards"><div  className="pic"><img className="image" src={restaurant}/></div>
           <div  className="white"><p className="parag">By Wilson Hutton</p>
  <h3 className="h3-new-font">Treat yourself without worrying about money</h3>
  <p className="parag">Our simple budgeting and feature allows you to separate out your spending and set 
  realistic limits each month. That means you …</p></div></div>


           <div className="cards"><div  className="pic"><img className="image" src={plane}/></div>
           <div  className="white"><p className="parag">By Wilson Hutton</p>
  <h3 className="h3-new-font">Take your Easybank card wherever you go</h3>
 <p className="parag"> We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …</p></div></div>


           <div className="cards"><div  className="pic"><img className="image" src={confetti}/></div>
           <div  className="white"><p className="parag"> By Claire Robinson</p>
  <h3 className="h3-new-font">Our invite-only Beta accounts are now live!</h3>
  <p className="parag">After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...</p></div></div>
         </div>
         
         
         </div>
    )
}
export default Latest