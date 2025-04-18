
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import Datas from '../src/backend/Data.json'
import Onas from './pages/Onas';
import Wypozyczalnia from './pages/Wypozyczalnia';
import Ksiazki from './pages/Ksiazki';
import Oferta from './pages/Oferta'



function App() {

  

  const [datas , setDatas] = useState('')


    const handleFileRead = (e) =>{

      const file = e.target.files[0]
      const reader = new FileReader();
      reader.readAsText(file)


  reader.onload = (e) => {

    const respo = e.target.result

    // setDatas(file)
      console.log(respo)

      
      setDatas(reader.result)
    }

    

   

  }


  return (
    <div className="App">

<input type="file" onChange={handleFileRead} />


      

      <Routes>

        <Route path='*' element={
          <>
          <h1>Biblioteka 2024</h1>
        
          
          
          <Nav></Nav>
          <Main></Main>
          <Header></Header>
          
          {Datas.map( (item,index) => {
            return(
            
            <div className='data-container' key={index}>
                <p>Użytkownik :{item.name}</p>
                <p>Wiek : {item.age} , adres :{item.adres}</p>
                <p>Wypożyczona ksiązka : {item.ksiażka}</p>
                <p>Data wypożyczenia : {item.dataWypo}</p>
              </div>
              
            
            
             
            ) 
          }
            )

            }
          <SearchBar></SearchBar>
          </>
        }>

        </Route>

        <Route path='/onas' element={<Onas></Onas>}/>
        <Route path='/wypozyczalnia' element={<Wypozyczalnia></Wypozyczalnia>}/>
        <Route path='/oferta' element={<Oferta></Oferta>}/>
        <Route path='/ksiazki' element={<Ksiazki></Ksiazki>}/>
      


      </Routes>
      
    </div>
  );
}

export default App;
