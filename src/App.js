import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'

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
