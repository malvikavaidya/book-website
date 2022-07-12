// import logo from './logo.svg';

import React, {useState} from 'react'
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home'
import Romance from './components/pages/Romance'
import Fantasy from './components/pages/Fantasy'
import Thriller from './components/pages/Thriller'
import Other from './components/pages/Other'
import About from './components/pages/About'
import Books from './components/pages/Books'
import Addreview from './components/pages/Addreview'
import Auth from './components/authentication/AuthProvider'
import Login from './components/pages/Login'


function App() {
  const [name, setName] = useState("")

  
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/books' element={<Books/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/romance' element={<Romance/>}/>
        <Route exact path='/fantasy' element={<Fantasy/>}/>
        <Route exact path='/thriller' element={<Thriller/>}/>
        <Route exact path='/other' element={<Other/>}/>
        <Route exact path='/add_review' element={<Addreview/>}/>
        <Route exact path='/login_review' element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
    
  );
}

export default App;
