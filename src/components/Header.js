import React from 'react'

import heart from '../img/heart.png'
import relaks from '../img/cup_no_back.png'


function Header() {
  return (
    <div className='header-container'>
      <div className='header-one'>
        
        
        <div className='header-one-text'>
          <h4>Serce</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tempore laboriosam eum minus itaque vitae consectetur, eaque quibusdam? Deserunt, quos rem aspernatur nobis nam aperiam natus fugiat. Incidunt, minima nisi?
        </p>
        </div>

        <div className='header-one-img'>
          <img src={heart} alt='zdj1'></img>
        </div>

          
      </div>

     
       <div className='header-one'>

        
        <div className='header-one-img'>
          <img src={relaks} alt='zdj2'></img>
        </div>
        
        
        <div className='header-one-text'>
          <h4>Relaks</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tempore laboriosam eum minus itaque vitae consectetur, eaque quibusdam? Deserunt, quos rem aspernatur nobis nam aperiam natus fugiat. Incidunt, minima nisi?
        </p>
        </div>


          
      </div>

    </div>
  )
}

export default Header