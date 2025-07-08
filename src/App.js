
import { Link, Route, Routes } from 'react-router-dom';
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
import News from './components/News';
import newsImg from './img/b1.png'
import Rodzice from './pages/Rodzice';
import Jubileusz from './pages/Jubileusz';
import Kadra from './pages/Kadra';
import Standardy from './pages/Standardy';
import Zapisy from './pages/Zapisy';
import Koszyk from './pages/Koszyk';
import Rodzina from './img/rodzina.png';
import Sport from './img/sport.jpg';
import Plastyka from './img/plastyka.jpg';
import Druzyna from './img/kadra.jpg';
import Podroz from './img/podroz.jpg'
import Spotkania from './pages/Spotkania';
import Edukacja from './pages/Edukacja';
import Warsztaty from './pages/Warsztaty';
import Message from './components/Message';



function App() {
  
  const [primaryBooks , setPrimaryBooks] = useState([])
  const [arrayBook , setArraybook] = useState([])
  const [arrayBookFlag , setArraybookFlag] = useState(false)
  const [news , setNews] = useState('');
  const [zamowione , setZamowione] = useState([]);

const actual = [

  
  
          {
              routeId: "Kultura",
              title: " Kultura dziś i jutro..." ,
              descirption : " informacje na temat  wydarzen kulturalnych...  " ,
              imgUrl : Plastyka,
              info : 'Naczelną zasadą wszystkich działań podejmowanych przez pracowników i współpracowników Samorządowego Przedszkola „Pod Modrzewiem” nr 111 jest działanie dla dobra dziecka i w jego najlepszym interesie. Każdy pracownik i współpracownik ... wiecej pod ' ,
              
          },
  
          {
              routeId: "jubileusz",
              title: "Zajęcia Sportowe " ,
              descirption : "informacje o zajęciach sportowych " ,
              imgUrl : Sport,
              info : 'Już wkrótce w naszym przedszkolu rozpoczną sie obchody 60-lecia , więcej informacji pod linkiem ',
  
          },
  
         
  
  
          {
              routeId: "rodzice",
              title: "Rodzina wspolczesna" ,
              descirption : "Informacje na temat rodziny " ,
              imgUrl : Rodzina,
              info : `Rekrutacja na rok 2025 , przejdż do zakładki REKRUTACJA na stronie głównej  ` ,
              
  
              
          },

           {
              routeId: "rodzice",
              title: "Podróże" ,
              descirption : "Informacje na temat podróży w regionie... " ,
              imgUrl : Podroz,
              info : `Z nami możesz kolejny raz zwiedzić niesamowite miejsca godne polecenia   ` ,
              
  
              
          },
  
          {
              routeId: "kadra",
              title: "Kadra" ,
              descirption : "Kadra naszego przedszkola " ,
              imgUrl : Druzyna,
              link : ''
              
              
          },
  
          
      ]

  
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
    <div className="App">


      <Routes>

        <Route path='*' element={
          <>
          <Nav></Nav>
          <Main></Main>
          <Header></Header>
          
          <div className='home'>
                      <i className="fa-solid fa-house fa-2xl"></i>

          </div>

          <div className='news-container'>

            {actual.map( (item,index) => {
              return(
                
                <div className='news-item' key={index}>
                  <h3>{item.title}</h3>
                  <img src={item.imgUrl} alt={item.title}></img>
                  <p>{(item.descirption).slice(0,30)}...</p>
                  <button><Link to={'/'+item.routeId}>{item.title}</Link></button>
                </div>
              
              )
            })}
          </div>

          <Info></Info>
          <SearchBar datas={arrayBook} setArraybook={setArraybook} getData={getData} primaryBooks={primaryBooks} setPrimaryBooks={setPrimaryBooks}></SearchBar>
         

          <div className='book-container' >

          
          {arrayBookFlag ? 
          arrayBook.map( (item,index) =>{
            return(
              
                <div className='arrayBook-container' key={index}>
                  <h3>{item.id}.{item.author}</h3>
                  <img src={item.download_url} alt={item.author} onClick={() => setNews(item.item)}></img>
                </div>
            
            )
          }):  <div className='circle-loader'>
            <p>Loading</p>
          </div>}
          
          </div>

          
          <Footer></Footer>


            
        </>
        
        }>

          

      

        </Route>

        <Route path='/onas' element={<Onas></Onas>}/>
        <Route path='/wypozyczalnia' element={<Wypozyczalnia datas={arrayBook} setZamowione={setZamowione}></Wypozyczalnia>}/>
        <Route path='/oferta' element={<Oferta></Oferta>}/>
        <Route path='/ksiazki' element={<Ksiazki ></Ksiazki>}/>
        <Route path='/news' element={<News></News>}/>
        <Route path='/rodzice' element={<Rodzice></Rodzice>}/>
        <Route path='/jubileusz' element={<Jubileusz></Jubileusz>}/>
        <Route path='/kadra' element={<Kadra></Kadra>}/>
        <Route path='/standardy' element={<Standardy></Standardy>}/>
        <Route path='/zapisy' element={<Zapisy></Zapisy>}/>
        <Route path='/spotkania' element={<Spotkania></Spotkania>}/>
        <Route path='/edukacja' element={<Edukacja></Edukacja>}/>
        <Route path='/warsztaty' element={<Warsztaty></Warsztaty>}/>
        <Route path='/koszyk' element={<Koszyk zamowione={zamowione}></Koszyk>}/>
        <Route path='/message' element={<Message></Message>}/>



      </Routes>
      
    </div>
  );
}

export default App;
