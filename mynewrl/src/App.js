import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/auth" exact element={<Auth/>} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;