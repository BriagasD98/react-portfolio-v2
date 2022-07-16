import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <main>
      <div className='container navbar'>
        {/* <h1 className='header'>DAVID BRIAGAS</h1> */}
      <Nav></Nav>
      </div>
      <AnimatedRoutes />
    </main>
  );
}

export default App;
