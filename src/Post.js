import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Post = () => {
   const {id} = useParams()
   // key value pair of route path info
  const query = new URLSearchParams( useLocation().search)
  const first =  query.get('first')
  return (
    <>

<div>id is ={id} {first}</div>
<nav> 
<ul>
  <li> </li>
</ul>
</nav>
    </>
  )
}

export default Post