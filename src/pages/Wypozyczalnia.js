import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Koszyk from './Koszyk'

function Wypozyczalnia({datas,setZamowione}) {


let  [ choosen , setChoosen] = useState([])

console.log(choosen)

const setKoszyk = (item) =>{

 setChoosen(old => [...old , item])
 setZamowione(choosen)


}



  return (
    <div className='wypozyczalnia-container'>
              <h1>Wyszukaj swoją ulubioną ksiązkę z pośród tysiąca ...</h1>

              <div className='koszyk'><Link to={'/koszyk'}>{choosen.length} <i class="fa-solid fa-cart-shopping"></i></Link></div>
    
        
       
      

      <div className='info'>
     

      <div className='books-all'>
        {datas?
        datas.map( (item,key) => {
          return(
          
            <div className='arrayBook-container' key={key} onClick={ () => setKoszyk(item)}

            >
                  <h3>{item.id}.{item.author}</h3>
                  <img src={item.download_url} alt={item.author}></img>
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