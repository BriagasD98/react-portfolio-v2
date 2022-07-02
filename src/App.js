import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <Router>
      <h1>David Briagas</h1>
      <nav>
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
    </Router>
  );
}

export default App;
