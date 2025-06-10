import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Koszyk from './Koszyk'

function Wypozyczalnia({datas,setZamowione}) {

const [clicked , setClicked] = useState(true)
let  [ choosen , setChoosen] = useState([])

console.log(choosen)

const setKoszyk = (item) =>{

 setChoosen(old => [...old , item])
 setZamowione(choosen)

}



  return (
    <div className='wypozyczalnia-container'>
              <h1>Wyszukaj swoją ulubioną ksiązkę z pośród tysiąca ...</h1>

              <div className='koszyk'><Link to={'/koszyk'}>{choosen.length}</Link></div>

      <div className='clicked-container'>
        {clicked ? 
            <>
                <div className='arrayBook-container'>
                  <h3>{clicked.id}.{clicked.author}</h3>
                  <img src={clicked.download_url} alt={clicked.author}></img>
            </div>
            </>
          
         : ''}
        
       
      </div>

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