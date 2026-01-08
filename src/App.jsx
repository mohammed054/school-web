import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import GoalsValues from './pages/GoalsValues';
import Admissions from './pages/Admissions';
import Branches from './pages/Branches';
import Careers from './pages/Careers';
import './styles/styles.css';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className={`App ${location.pathname === '/goals-values' ? 'goals-values-page' : ''}`} dir="rtl">
      <SEO />
      <Header />
      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals-values" element={<GoalsValues />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/careers" element={<Careers />} />
          {/* Add more routes here */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
