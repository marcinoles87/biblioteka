import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

function Nav() {
  return (
    <div className='nav-container' >
      <img src={logo} alt=""></img>
      <div className='nav-elements'>
        
        <ul>
        
         <li><Link to={'/*'}>O nas</Link></li> 
         <li> <Link to={'/oferta'}>Oferta</Link></li>
         <li><Link to={'/wypozyczalnia'}>Wypożyczalnia</Link></li>
          <li><Link to={'/ksiazki'}>Książki</Link></li>
          <a href='#kontakt'>Kontakt</a>
         
          
        </ul>
      </div>
    </div>
  )
}

export default Nav