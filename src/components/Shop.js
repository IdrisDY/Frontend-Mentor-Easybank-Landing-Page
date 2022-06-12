import React, { useEffect, useState } from "react";
//const Heading = (props)=>{
const Heading = ()=>{
   //const[hello,sethello]=useState("Good morning Chief")
    //const Handle =()=> sethello("Naso brother")

  // return(<h1> Hello Adekunle How are you today?</h1>)
 /* return(
     <div>
        <h1> {props.title}</h1>
   <h1 onClick={Handle}> {hello} </h1>
     </div>
  */

     useEffect(()=>{
        window.scroll(0,0)
     },[])
 const[increment, setIncrement]=useState(0)
 const[decrement, setDecrement]=useState(0)

 const Add=()=> setIncrement(increment+1)
 const Sub=()=> setDecrement(decrement-1)
return(
   <div className="des">
     
   <button class="btn1" onClick = {Add}> I am buying { increment} shoes</button>
   <button class="btn2" onClick = { Sub}> How much is {decrement}  in naira</button>
   </div>
)
  
   

}
export default Heading;