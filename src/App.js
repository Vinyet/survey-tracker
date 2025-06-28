import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginButton from './components/LoginButton';
import Programas from './pages/Programas';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <LoginButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programas" element={<Programas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
