import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-elements'>
        <ul>
          
         <li><Link to={'/onas'}>O nas</Link></li> 
         <li> <Link to={'/oferta'}>Oferta</Link></li>
         <li><Link to={'/wypozyczalnia'}>Wypożyczalnia</Link></li>
          <li><Link to={'/ksiazki'}>Książki</Link></li>
         
          
        </ul>
      </div>
    </div>
  )
}

export default Nav