import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

import zapisy from '../img/zapisy.png'
import spotkanie from '../img/spotkanie.jpg'
import edukacja from '../img/edukacja.jpg'
import warsztaty from '../img/warsztaty.jpg'

function Oferta() {
  return (
    <div className='oferty-container'>

          <Nav></Nav>


      <h2>Zobacz co mamy do zaoferowania i wybierz jedną z opcji...</h2>

      <div className='lista-container'>

        <div className='oferta-container'>
          <Link to={'/zapisy'}>
          <img src={zapisy} alt=''></img>
          <h4>Jak sie zapisać</h4>
          </Link>
        </div>

        <div className='oferta-container'>
          <Link to={'/spotkania'}>
          <img src={spotkanie} alt=''></img>
          <h4>Spotkania i wydarzenia</h4>
          </Link>
        </div>

        <div className='oferta-container'>
          <Link to={'/zapisy'}>
          <img src={edukacja} alt=''></img>
          <h4>Edukacja</h4>
          </Link>
        </div>

        <div className='oferta-container'>
          <Link to={'/zapisy'}>
          <img src={warsztaty} alt=''></img>
          <h4>Warsztaty</h4>
          </Link>
        </div>

    

      </div>
    </div>
  )
}

export default Oferta