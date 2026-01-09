import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    return () => clearTimeout(fadeTimeout);
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-container">
        <div className="loading-logo-wrapper">
          <img 
            src={`${import.meta.env.BASE_URL}images/header/logo.png`} 
            alt="مدرسة الحكمة الخاصة - Al Hikmah Private School" 
            className="loading-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;