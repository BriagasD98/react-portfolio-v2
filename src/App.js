import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useHref } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <h1>DAVID BRIAGAS</h1>
      <nav style={{ width: "100%" }}>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/portfolio'> Portfolio </Link>
      </nav>
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
