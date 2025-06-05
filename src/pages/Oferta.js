import React from 'react'
import { Link } from 'react-router-dom'

import zapisy from '../img/zapisy.png'

function Oferta() {
  return (
    <div className='oferty-container'>

      <h2>Zobacz co mamy do zaoferowania i wybierz jedną z opcji...</h2>

      <div className='lista-container'>

        <div className='oferta-container'>
          <Link to={'/zapisy'}>
          <img src={zapisy} alt=''></img>
          <h4>Jak sie zapisać</h4>
          </Link>
        </div>

        

        

      </div>
    </div>
  )
}

export default Oferta