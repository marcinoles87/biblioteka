import React from 'react'

function Koszyk({zamowione}) {
  return (
    <div>
      <p>Koszyk</p>
      {zamowione.map( (item) => {
        return(
          <>
           <p>{item.id}</p>
           <p>{item.author}</p>
           <p>{item.id}</p>
          </>
        )
      })}
    </div>
  )
}

export default Koszyk