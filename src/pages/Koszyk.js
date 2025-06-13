import React from 'react'

function Koszyk({zamowione}) {

  const data = new Date
  const dzisDzien = data.getUTCDate()
  const dzisMiesiac = data.getMonth()
  const dzisRok = data.getFullYear()
  const pelnaData = `${dzisDzien+20} - ${dzisMiesiac+1} - ${dzisRok}`
  return (
    <div className='zamowienie-container'>
      <div className='wybrane-container'>

           {zamowione.map( (item,index) => {
        return(
          <div className='zamowiona-sztuka' key={index}>
           <p>Numer katalogowy : {item.id}</p>
           <p>Autor : {item.author}</p>
           <p>Data wypożyczenia : {dzisDzien}-{dzisMiesiac}-{dzisRok} </p>
           <p>Data oddania : {pelnaData}</p>
          <img src={item.download_url} alt={item.author}></img>

          </div>
        )
      })}

      </div>

      <div className='zamowienie-dane'>
        <p>Imie i Nazwisko : <input placeholder='dane czytelnika'></input></p>
        <p>Ilość książek : {zamowione.length}</p>
        <p>Data wypożyczenia : {dzisDzien}-{dzisMiesiac}-{dzisRok} </p>
        <p>Data oddania : {pelnaData}</p>
        <button>Wypożycz</button>
      </div>
     
    </div>
  )
}

export default Koszyk