import React from 'react'
import headerOne from '../img/header_one.jpg'
import headerTwo from '../img/header_two.jpg'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-one'>
          <h1>Kids</h1>
          {/* <img src={headerOne} alt='header-img'></img> */}
      </div>

      <div className='header-two'>
          <h1>Adult</h1>
          {/* <img src={headerTwo} alt='header-img'></img> */}
      </div>

      
    </div>
  )
}

export default Header