import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

function Nav() {

  const [rangeValue , setRange] = useState('')

  
    const inputChange = () =>{
      const rangeInput = document.querySelector('.rangeInput');
      console.log(rangeInput)

      const changeFontSize = document.querySelector('.App')
      changeFontSize.style.fontSize = rangeValue+'px'

      setRange(rangeInput.value)
    }

  
  return (
    <div className='nav-container' >
      <img src={logo} alt=""></img>
      <div className='nav-elements'>
          
          
         <input type='range' className='rangeInput' min={1} max={50}  value={rangeValue} onChange={inputChange}></input>
        
        <ul>
        
         <li><Link to={'/*'}>O nas</Link></li> 
         <li> <Link to={'/oferta'}>Oferta</Link></li>
         <li><Link to={'/wypozyczalnia'}>Wypożyczalnia</Link></li>
          <li><Link to={'/ksiazki'}>Książki</Link></li>
          <li><a href='#kontakt'>Kontakt</a></li>
          <li><Link to={'/message'}><i className="fa-solid fa-envelope fa-2xl"></i></Link></li>
      

        </ul>
      </div>
    </div>
  )
}

export default Nav