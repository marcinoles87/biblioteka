
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='*' element={
          <>
          <h1>Biblioteka 2024</h1>
          <Nav></Nav>
          <Header></Header>
          <Main></Main>
          <SearchBar></SearchBar>
          </>
        }>

        </Route>


      </Routes>
      
    </div>
  );
}

export default App;
