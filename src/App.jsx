import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import LoadingScreen from './components/LoadingScreen';
import LoginModal from './components/LoginModal';
import { AdminProvider } from './context/AdminContext';
import Home from './pages/Home';
import GoalsValues from './pages/GoalsValues';
import Admissions from './pages/Admissions';
import Branches from './pages/Branches';
import Careers from './pages/Careers';
import './styles/styles.css';
import './App.css';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AdminProvider>
      <div className={`App ${location.pathname === '/goals-values' ? 'goals-values-page' : ''}`} dir="rtl">
        <LoginModal />
        {isLoading && <LoadingScreen />}
        <SEO />
        {!isLoading && (
          <>
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
          </>
        )}
      </div>
    </AdminProvider>
  );
}

export default App;
