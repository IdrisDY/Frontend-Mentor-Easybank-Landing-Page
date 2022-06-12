import React,{Component,setState ,useState,componentDidMount,useEffect} from "react"
/*class Counter extends Component{
  state = {
    count:0,
    sick:'true'
  }
  sickLer=()=>{
    this.setState({
      count: this.state.count+1,
      sick:'false'
    })
  }
  render(){
    return(
      <div>
        <h1> ARE YOU SICK?</h1>
        <button type="radio" onClick={this.sickLer}> My symptoms started {this.state.count} days ago</button>
        Do you agree to this <button onClick={this.sickLer}>  {this.state.sick}</button>
      </div>
    )
  }
}

// using useState hooks 
 const Counter = () =>{
   const[count,setCount] = useState(0)
   
   const increment = ()=>{
     setCount(count+1)
     }
   
   return(
     <div>
       <button onClick = {increment}> Clicked {count} times</button>
     </div>
   )
 }
 
 */
 // useEffect hooks
 const Counter = ({login})=>{
   const [count,setCount] = useState(0)
   const [items,setItems] = useState([])
   const increment=()=>{
     setCount(count+1)
   }
   

useEffect( ()=>{
  document.title = `Clicked ${count} times`

  const GetData = async()=>{
const data = await fetch('https://fortnite-api.theapinetwork.com/item/get?id={{paramId}}')
const  items = await data.json()
console.log(items.data)
setItems(items.data)
}
GetData()
},[])






return(
  <h2 onClick={increment}> Clicked {count} times</h2>
)
 }
export default Counter
