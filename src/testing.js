
// testing how to use forms

import React from "react"
/*class Work extends React.Component{
    constructor(props){
        super(props)
        this.state ={username:""}
    }
    myChangeHandler = (event)=>{
        this.setState({username: event.target.value})
    }
    render(){
        return(
            <form>
            <h1>Hello {this.state.username} </h1>
            <p> Enter your name:</p>
            <input type = "text"
            onChange = {this.myChangeHandler}/>
            
            
            </form>
        )
    }
}

class Work extends React.Component{
    constructor(props){
        super(props)
        this.state ={username:""}
    }
    myChangeHandler = (event)=>{
        this.setState({username: event.target.value})
    }
    render(){
        let head = ""
        if(this.state.username){
            head = <h1> Hello {this.state.username}</h1>
        }
else{ head = ""}
        return(
            <form>
           {head}
            <p> Enter your name:</p>
            <input type = "text"
            onChange = {this.myChangeHandler}/>
            </form>

        )
    }
}
// testing how to submit forms

class Work extends React.Component{
    constructor(props){
        super(props)
        this.state ={username:"", age:null,}
    }
    mySubmitHandler = (event) => {
        event.preventDefault()
        alert("you are submitting" + this.state.username)
    }
    myChangeHandler = (event)=>{
        this.setState({username: event.target.value})
    }
    render(){
        return(
            <form onSubmit = {this.mySubmitHandler}>
        <h1>  Hello {this.state.username}</h1>
            <p> Enter your name, and Submit</p>
            <input type = "text"
            onChange = {this.myChangeHandler}/>

            <input type = "submit"/>
            </form>
          

// validating form input using if statements

class Work extends React.Component{
    constructor(props){
        super(props)
        this.state ={username:"",age:null,}
    }
    myChangeHandler = (event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age"){
            if ( !Number(val)){
                alert("Put a number there nigga")
            }
        }
        this.setState({[nam]:val})
    }
    render(){
       
       
 

        return(
            <form>
        <h1> Hello {this.state.username} {this.state.age}</h1>
            <p> Enter your name:</p>
            <input type = "text" name = "username"
            onChange = {this.myChangeHandler}/>
            <input type = "text" name="age" onChange = {this.myChangeHandler}/>
            </form>
            
        )
    }
}
  
 //textarea React value of textarea is placed in a value attribute

 class Work extends React.Component{
     constructor(props){
         super(props)
         this.state = {
             description:" the textarea is used inside the value attribute"
         }
        }
         myChangeHandler = (event) => {
              this.setState({description: event.target.value})
         }
        
        render(){
            return(
                <form>
                    <textarea value={this.state.description} onMouseOver={this.myChangeHandler}/>
                </form>
            )
        }
     }

     // using select/dropdown box in react
     class Work extends React.Component{
         constructor(props){
            super(props)
            this.state={ myCar:"Ford"}
         }
         render(){
             return(
                 <form> 
                     <select> 
                         <option value = "Ford"> Ford</option>
                         <option value = "Nissan" > Nissan</option>
                         <option value = "Toyota"> Toyota</option>
                     </select>
                 </form>
             )
         }
         
     }
     */

// using CSS in React (inline styling and CSS stylesheet), u can create an object for the style(mystyle) and refer to it in the necessary tag(h1)
// u can also use modules(example 3) remeber to import fr
// <p className = {styles.bigblue}> </p> 
class Work extends React.Component{
    render(){
        const mystyle = {
            color:"blue",
            padding:"10px",
            border:"2px black solid",
            innerWidth:"200px",
            backgroundColor:" darkgrey"
        }
        return(
            <div>
                <h1 style= {{color:"red", backgroundColor:"lightgrey"}}>Hello Style!</h1>

                <p style={mystyle}> a lonely night the weekend </p>
           
            </div>
        )
    }
}
// using SASS files 
//install npm  install node-sass
//create sass file with extension .scss
// example below
/*
$mycolor:ReactDOM;
h1{
    color:$mycolor;
}
*/

export default Work