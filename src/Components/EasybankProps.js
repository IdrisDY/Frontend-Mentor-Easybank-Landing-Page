import React from 'react'
import  budgetImg from './images/icon-budgeting.svg'
import onlineImg from './images/icon-online.svg'
import onboardImg from './images/icon-onboarding.svg'
import apiImg from './images/icon-api.svg'
const EasybankProps = () => {
  return (
    <section className='prop-section'>
<div>
   <h1> Why choose Easybank?</h1>
   <p className='p-props p-width-adjust'>   We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.
</p>
</div>
<div className='sec-row-div'>
   <div className='props'>
   <img src={onlineImg} alt='#'  className='prop-img'/>
   <h3> Online Banking</h3>
   <p className='p-props'>   Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.
</p>
    </div>

    <div className='props'>
   <img src={budgetImg} alt='#'  className='prop-img'/>
   <h3>Simple Budgeting</h3>
   <p  className='p-props'>   See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.
</p>
    </div>

    <div className='props'>
   <img src={onboardImg} alt='#' className='prop-img'/>
   <h3> Fast Onboarding</h3>
   <p className='p-props'>  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
 </p>
    </div>


    <div className='props'>
   <img src={apiImg} alt='#'  className='prop-img'/>
   <h3>Open API </h3>
   <p className='p-props'>   Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.
</p>
    </div>




</div>

    </section>
  )
}

export default EasybankProps