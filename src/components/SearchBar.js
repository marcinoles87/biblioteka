import React, { useState } from 'react'

function SearchBar({datas , setArraybook}) {

  console.log(datas)

  const [bookName , setbookName] = useState('');
  const [year , setYear] = useState('');

  const handleSearch = () => {


    const data = [...datas]
    const author = bookName
    const searchBook = data.filter(data => data.author.includes(bookName))
    console.log(searchBook)
    setArraybook(searchBook)

  }


  return (
    <div className='search-container'>
      <h1>Wyszukiwanie ksiazek</h1>
      <input placeholder='search by book name' onChange={ e => setbookName(e.target.value)}></input>
      <input placeholder='search by year ' onChange={ e => setYear(e.target.value)}></input>
      <button onClick={handleSearch}>Wyszukaj</button>
      
      
      </div>
  )
}

export default SearchBar