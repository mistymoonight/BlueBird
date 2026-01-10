import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import Detail1 from './pages/Detail1';
import Detail2 from './pages/Detail2';
import Detail3 from './pages/Detail3';
import Detail4 from './pages/Detail4';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail1" element={<Detail1 />} />
        <Route path="/detail2" element={<Detail2 />} />
        <Route path="/detail3" element={<Detail3 />} />
        <Route path="/detail4" element={<Detail4 />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Use import.meta.env.BASE_URL for correct routing on GitHub Pages
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
