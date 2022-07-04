import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useHref } from 'react-router-dom'
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className='container navbar'>
      <h1 className='header'>DAVID BRIAGAS</h1>
      <Nav></Nav>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    {/* <Footer></Footer> */}
    </Router>
    
  );
}

export default App;
