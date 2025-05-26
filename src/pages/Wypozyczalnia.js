import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Wypozyczalnia({datas}) {

const [clicked , setClicked] = useState('')



  console.log(datas)
  return (
    <div className='wypozyczalnia-container'>
              <h1>Wyszukaj swoją ulubioną ksiązkę z pośród tysiąca ...</h1>

      <div className='clicked-container'>
        {clicked}
      </div>

      <div className='info'>
     

      <div className='books-all'>
        {datas?
        datas.map( (item,key) => {
          return(
          
            <div className='arrayBook-container' key={key}>
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