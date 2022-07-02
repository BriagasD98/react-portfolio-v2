import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import ErrorPage from './Components/ErrorPage';

import coverImage from './Assets/Cover/cityconnectblue.jpg';

function App() {
  return (
    // <div style={{ backgroundImage: `url(${ coverImage })` }}>
    <Router>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }}/> */}
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
    // </div>
  );
}

export default App;
