import React from 'react'
import './App.css';

import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Crypto from './Pages/Crypto';
import Exchange from './Pages/Exchange';
import News from './Pages/News';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
import Cryptodetails from './Pages/Subpages/Cryptodetails';
import Signup from './Pages/Signup';


function App() {

  return (
    <>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='crypto' element={<Crypto/>}/>
         <Route path='exchange' element={<Exchange/>} />
         <Route path='news' element={<News/>} />
         <Route path='/login' element={<Login/>} smplified />
         <Route path='crypto/:coinId' element={<Cryptodetails/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='*' element={<ErrorPage/>} />
       </Routes>
    </>
  )
}

export default App



