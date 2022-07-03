import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useHref } from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <h1>DAVID BRIAGAS</h1>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    {/* <Footer></Footer> */}
    </Router>
    
  );
}

export default App;
