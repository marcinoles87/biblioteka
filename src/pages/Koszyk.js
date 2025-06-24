import React, { useState } from 'react'

function Koszyk({zamowione}) {

  const data = new Date
  let dzisDzien = data.getUTCDate()
  let dzisMiesiac = data.getMonth()
  const dzisRok = data.getFullYear()
  const dataCała = `${dzisDzien} - ${dzisMiesiac} - ${dzisRok}`
  const dataOddania = `${dzisDzien+2} - ${dzisMiesiac+1} - ${dzisRok}`

  const [czytelnik , setCzytlenik] = useState('')

  console.log(czytelnik)


  const handleKoszyk = () => {

    // if(dzisDzien<26){
    //   dzisMiesiac = dzisMiesiac+1
    //    
    // }

   alert(`Użytkownik ${czytelnik} wypożyczyl : ${zamowione.length} ksiązki i musi je zwrócic do ${dataOddania}` )

  }
  return (
    <div className='zamowienie-container'>
      <div className='wybrane-container'>

           {zamowione.map( (item,index) => {
        return(
          <div className='zamowiona-sztuka' key={index}>
            <img src={item.download_url} alt={item.author}></img>
           <p>Numer katalogowy : {item.id}</p>
           <p>Autor : {item.author}</p>
           <p>Data wypożyczenia : {dataCała} </p>
           <p>Data oddania : {dataOddania}</p>
          

          </div>
        )
      })}

      </div>

      <div className='zamowienie-dane'>
        <p>Imie i Nazwisko : <input placeholder='dane czytelnika' onChange={ (e) => setCzytlenik(e.target.value)}></input></p>
        <p>Ilość książek : {zamowione.length}</p>
        <p>Data wypożyczenia : {dataCała}</p>
        <p>Data oddania : {dataOddania}</p>
        <button onClick={handleKoszyk}>Wypożycz</button>
      </div>
     
    </div>
  )
}

export default Koszyk