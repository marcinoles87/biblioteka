import React from 'react'
import b1 from '../img/b1.png'

function Wypozyczalnia({datas}) {
  console.log(datas)
  return (
    <div className='wypozyczalnia-container'>
              <h1>Wyszukaj swoją ulubioną ksiązkę z pośród tysiąca ...</h1>

      <div className='info'>
     

      <div className='books-all'>
        {datas.map( (item,key) => {
          return(
          
            <div className='arrayBook-container' key={key}>
                  <h3>{item.id}.{item.author}</h3>
                  <img src={item.download_url} alt={item.author}></img>
            </div>
            
        
            
          )
          
        })}
      </div>
      </div>
    </div>
  )
  }


export default Wypozyczalnia