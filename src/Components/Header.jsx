import React from 'react'
import image from './images/food1.jpg';

function Header() {
  return (
    <div id='main' style={{ backgroundImage:`url(${image})` }}>
        <div className="header">
       <h1>JANEWORLD RESTAURANT</h1>
       <p>EAT <span>DRINK</span> ORDER</p>
       
        </div>
       
       </div>
  )
}

export default Header