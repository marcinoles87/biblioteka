import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Koszyk from './Koszyk'

function Wypozyczalnia({datas,setZamowione}) {


let  [ choosen , setChoosen] = useState([])
let [ isActive , setActive] = useState(false)

const setKoszyk = (item) =>{

 setChoosen(old => [...old , item])
 setActive(true)
}

useEffect ( () => {
   setZamowione(choosen)
})



  return (
    <div className='wypozyczalnia-container'>
              <h1>Wyszukaj swoją ulubioną ksiązkę z pośród tysiąca ...</h1>

              <div className='koszyk' style={{backgroundColor:isActive ? 'rgb(50, 245, 79)' : 'red'}}>
                <Link to={'/koszyk'}>{choosen.length} <i className="fa-solid fa-cart-shopping"></i></Link>
              </div>
    
        
       
      

      <div className='info'>
     

      <div className='books-all'>
        {datas?
        datas.map( (item,key) => {
          return(
          
            <div className='arrayBook-container' key={key} onClick={ () => setKoszyk(item)}

            >
                <div className='card'>
              
                  <div className='book-flip-front'>
                    <img src={item.download_url} alt={item.author} ></img>
                  </div>

                  <div className='book-flip-back'>
                    <h3>{item.id}.{item.author}</h3>
                  </div>

                </div>

          </div>
            
        
            
          )
          
        })
        :'' }
      </div>
      </div>
    </div>
  )
  }


export default Wypozyczalnia