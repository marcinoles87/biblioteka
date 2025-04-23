import React from 'react'

function SearchBar() {

  const handleSearch = () => {
    console.log('jestem')
  }


  return (
    <div className='search-container'>
      <h1>Wyszukiwanie ksiazek</h1>
      <input placeholder='search by book name'></input>
      <input placeholder='search by year'></input>
      <button onClick={handleSearch}>Wyszukaj</button>
      
      
      </div>
  )
}

export default SearchBar