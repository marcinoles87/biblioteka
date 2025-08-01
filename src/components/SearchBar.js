import React, { useEffect, useState } from 'react'

function SearchBar({datas , setArraybook , getData , primaryBooks , setPrimaryBooks}) {

  console.log(datas)

  const [bookName , setbookName] = useState('');
  const [id , setId] = useState('');
  const [books , addBook] = useState([]);
  const [book , setBook] = useState('');
  const [year , setYear] = useState('')

  const inputSearch = document.querySelector('.inputBook')
  const inputYear = document.querySelector('.inputYear')


console.log(datas.length)

 const handleAddbook = () => {
  
      books.push({

        name:book,
        year:year,
    })

    inputSearch.value='';
    inputYear.value='';

    setBook('')
    setYear('')

    }

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

  
    
  return (
    <div className='search-container'>
      <div class="search-book">
        <h1>Wyszukiwanie książek</h1>
      <input placeholder='search by book name' className='searchBarName' onChange={ e => setbookName(e.target.value)}></input>
      <input placeholder='search by id ' onChange={ e => setId(e.target.value)}></input>
      <button onClick={handleSearch}>Wyszukaj</button>
      
      </div>
      

      <div className='addBook-container'>
        <h1>Dodaj książke</h1>
       <input className='inputBook' placeholder='nazwa książki' onChange={ e => setBook(e.target.value)}></input>
       <input className='inputYear' placeholder='rok wydania' onChange={ e => setYear(e.target.value)}></input>
       <button onClick={handleAddbook}>Dodaj do biblioteki</button>
        {books.map( (item,index) => {
          return(
            <div className='newBooks' key={index}>
              
            <p>{index+datas.length}.book name : {item.name} , year : {item.year}</p>
            <p> </p>
            </div>
          )
        })}
      </div>

      </div>
  )
}

export default SearchBar