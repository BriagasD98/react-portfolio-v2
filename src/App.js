import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Nav from './Components/Nav';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <main>
      <div className='container navbar'>
      <Nav></Nav>
      </div>
      <AnimatedRoutes />
    </main>
  );
}

export default App;
