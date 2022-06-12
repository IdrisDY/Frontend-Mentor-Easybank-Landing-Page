import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Profile = () => {
   let nav = useNavigate()
let user = useParams()
let real = user.user
console.log(user)
  return (
    <div> 
    No results yet for {real}<br/>
    Male
    Worker
    <button onClick={()=>nav('/about')}> Change to About Page</button>
    </div>
  )
}

export default Profile