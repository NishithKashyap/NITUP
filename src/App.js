import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home/Home'
import Products from './pages/Home/Product';
import MensProducts from './pages/MensProducts/MensProducts';
import WomensProducts from './pages/WomensProducts/WomensProducts';

function App() {
  return (
    <Router>
      <Header />
      <main className = 'py-3'>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/products' element={<Products />} ></Route>   
          <Route path='/mens' element={<MensProducts />}></Route>
          <Route path='/womens' element={<WomensProducts />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router> 
  );
}

export default App;
