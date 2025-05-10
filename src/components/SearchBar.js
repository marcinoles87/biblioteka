import React, { useState } from 'react'

function SearchBar({datas , setArraybook , getData , primaryBooks}) {

  console.log(datas)

  const [bookName , setbookName] = useState('');
  const [year , setYear] = useState('');

  const handleSearch = () => {

    const data = [...datas]
    const searchBook = data.filter(data => data.author.includes(bookName) && data.id.includes(year))
    console.log(searchBook)
    setArraybook(searchBook)
    getData()
    
    if(bookName===''){

      alert('brak rezultatów , prosze o ponowne wprowadzenie danych')
      let searchBarName = document.querySelector('.searchBarName');
      console.log(searchBarName)
      searchBarName.classList.toggle('alertStyle')
      console.log(datas)
      setArraybook(primaryBooks)
    }
  }


  return (
    <div className='search-container'>
      <h1>Wyszukiwanie ksiazek</h1>
      <input placeholder='search by book name' className='searchBarName' onChange={ e => setbookName(e.target.value)}></input>
      <input placeholder='search by year ' onChange={ e => setYear(e.target.value)}></input>
      <button onClick={handleSearch}>Wyszukaj</button>
      
      
      </div>
  )
}

export default SearchBar