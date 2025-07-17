import React, { useState } from 'react'

function SearchBar({datas , setArraybook , getData , primaryBooks , setPrimaryBooks}) {

  console.log(datas)

  const [bookName , setbookName] = useState('');
  const [id , setId] = useState('');
  const [book , addBook] = useState([]);

  const handleSearch = () => {

    // setPrimaryBooks(datas)
    const data = [...datas]
    const searchBook = data.filter(data => data.author.includes(bookName) && data.id.includes(id))
    console.log(searchBook)
    setArraybook(searchBook)
    getData()
    
    if(bookName===''){

      alert('brak rezultatów , prosze o ponowne wprowadzenie danych')
      let searchBarName = document.querySelector('.searchBarName');
      console.log(searchBarName)
      searchBarName.classList.toggle('alertStyle')
      console.log(datas)
      console.log(primaryBooks)
      setArraybook(primaryBooks)
      getData()
    }
  }

  const handleAddbook = () => {
    
  }


  return (
    <div className='search-container'>
      <h1>Wyszukiwanie książek</h1>
      <input placeholder='search by book name' className='searchBarName' onChange={ e => setbookName(e.target.value)}></input>
      <input placeholder='search by id ' onChange={ e => setId(e.target.value)}></input>
      <button onClick={handleSearch}>Wyszukaj</button>
      <label>Dodaj ksiazke <input placeholder='dodaj' ></input></label>
      <button onClick={handleAddbook}>Dodaj do biblioteki</button>

      <div>
        {book.map( (item) => {
          return(
            <>
            <p>{item.title}</p>
            </>
          )
        })}
      </div>
      
      
      </div>
  )
}

export default SearchBar