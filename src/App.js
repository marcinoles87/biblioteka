
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import Datas from '../src/backend/Data.json'
import Onas from './pages/Onas';
import Wypozyczalnia from './pages/Wypozyczalnia';
import Ksiazki from './pages/Ksiazki';
import Oferta from './pages/Oferta'
import Footer from './components/Footer';
import Info from './components/Info';



function App() {

  
  const [primaryBooks , setPrimaryBooks] = useState([])
  const [arrayBook , setArraybook] = useState([])
  const [arrayBookFlag , setArraybookFlag] = useState(false)
  const [scrollY, setScrollTop] = useState(0);

  
  
 


const handleScroll = () => {

   const y = window.pageYOffset

   setScrollTop(y)

   console.log(scrollY)

    const navElement = document.querySelector('.nav-container')


   if(scrollY => 150){
    navElement.classList.add('nav-scrolly')
   }
}





 
const getData = () =>{
  setPrimaryBooks(arrayBook)
}
  useEffect( () => {

    axios('https://picsum.photos/v2/list')
    .then( response => 
      setArraybook(response.data),
      setArraybookFlag(true),
    )

  },[])

  

  


  return (
    <div className="App" >


      <Routes>

        <Route path='*' element={
          <>
          <Nav></Nav>
          <Main></Main>
          <Header></Header>
          <Info></Info>
          <SearchBar datas={arrayBook} setArraybook={setArraybook} getData={getData} primaryBooks={primaryBooks} setPrimaryBooks={setPrimaryBooks}></SearchBar>
         

          <div className='book-container' >

          
          {arrayBookFlag ? 
          arrayBook.map( (item,index) =>{
            return(
              
                <div className='arrayBook-container' key={index}>
                  <h3>{item.id}.{item.author}</h3>
                  <img src={item.download_url} alt={item.author}></img>
                </div>
            
            )
          }):  <div className='circle-loader'>
            <p>Loading</p>
          </div>}
          
          {/* {Datas.map( (item,index) => {
            return(
            
            <div className='data-container' key={index}>
                <p>Użytkownik :{item.name}</p>
                <p>Wiek : {item.age} , adres :{item.adres}</p>
                <p>Wypożyczona ksiązka : {item.ksiażka}</p>
                <p>Data wypożyczenia : {item.dataWypo}</p>
              </div>
              
            
            
             
            ) 
          }
            )} */}

</div>

                      <Footer></Footer>


            
          </>
        
        }>

          

      

        </Route>

        <Route path='/onas' element={<Onas></Onas>}/>
        <Route path='/wypozyczalnia' element={<Wypozyczalnia datas={arrayBook}></Wypozyczalnia>}/>
        <Route path='/oferta' element={<Oferta></Oferta>}/>
        <Route path='/ksiazki' element={<Ksiazki ></Ksiazki>}/>
      


      </Routes>
      
    </div>
  );
}

export default App;
