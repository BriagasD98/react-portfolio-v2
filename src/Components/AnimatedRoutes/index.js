import React from 'react'
import {Routes, Route, useLocation } from 'react-router-dom'
import Contact from '../Contact';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import ErrorPage from '../ErrorPage';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes