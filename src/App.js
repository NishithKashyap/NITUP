import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <Header />
      <main className = 'py-3'>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
        </Routes>
      </main>
      <Footer />
    </Router> 
  );
}

export default App;
