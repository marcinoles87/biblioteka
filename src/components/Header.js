import React from 'react'
import headerOne from '../img/header_one.jpg'
import headerTwo from '../img/header_two.jpg'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-one'>
          <img src={headerOne} alt='header-img'></img>
      </div>

      <div className='header-one'>
          <img src={headerTwo} alt='header-img'></img>
      </div>

      
    </div>
  )
}

export default Header