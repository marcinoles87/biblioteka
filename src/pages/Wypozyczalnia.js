import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Wypozyczalnia({datas}) {

const [clicked , setClicked] = useState()


console.log(clicked)



  console.log(datas)
  return (
    <div className='wypozyczalnia-container'>
              <h1>Wyszukaj swoją ulubioną ksiązkę z pośród tysiąca ...</h1>

      <div className='clicked-container'>
        {clicked ? 
        clicked.map( (item,key) => {
          return(
            <>
                <div className='arrayBook-container' key={key} onClick={() => {setClicked(item)}}>
                  <h3>{item.id}.{item.author}</h3>
                  <img src={item.download_url} alt={item.author}></img>
            </div>
            </>
          )
        })
         : ''}
        
       
      </div>

      <div className='info'>
     

      <div className='books-all'>
        {datas?
        datas.map( (item,key) => {
          return(
          
            <div className='arrayBook-container' key={key} onClick={() => {setClicked(item)}}>
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