import {Link} from 'react-router-dom'
 function Language(){
   return(
      <div className ="text">
      <h2> Google Offered in</h2>
<ul> 
<li>Home</li>
<li>About</li>
<Link to ="/search"> <li>Search</li></Link>
<Link to ="/heading"> <li>Heading</li></Link>
</ul>

   </div>
 
   )
}
export default Language