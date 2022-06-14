import React from 'react'
import Mockup from './images/image-mockups.png'

const LandingContent = () => {
  return (
    <section className='mockups'>
    <div className='mockup-div' >

<img src={Mockup} alt ='#' className='mockup-img' />
    </div>

    <div className='intro-div'>
    <div className = 'intro-content'>
    <h1 class ='head-text'>   Next generation digital banking</h1>
<p className='intro-text-body'>   Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.
</p>
<button className='req-btn'> Request Invite</button>


    </div>

    </div>

    </section>
  )
}

export default LandingContent