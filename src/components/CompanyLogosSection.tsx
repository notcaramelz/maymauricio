import React, { useState, useEffect } from 'react';

// Import company logos
import axaLogo from '../assets/images/logos/axa-logo.png';
import cgsLogo from '../assets/images/logos/cgs-logo.png';
import ervenzonLogo from '../assets/images/logos/ervenzon-logo.png';
import manulifeLogo from '../assets/images/logos/manulife-logo.png';
import sunlifeLogo from '../assets/images/logos/sunlife-logo.png';
import pelvicLogo from '../assets/images/logos/pelvic-logo.png';
import wccLogo from '../assets/images/logos/wcc-logo.png';
import ncaLogo from '../assets/images/logos/nca-logo.png';

export const CompanyLogosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const companies = [
    { name: 'Manulife Philippines', logo: manulifeLogo },
    { name: 'AXA Philippines', logo: axaLogo },
    { name: 'Sunlife of Canada Philippines Inc.', logo: sunlifeLogo },
    { name: 'CGS Solid Aircon & Ref., Inc.', logo: cgsLogo },
    { name: 'ER Venzon Construction', logo: ervenzonLogo },
    { name: 'Pelvic Relief ', logo: pelvicLogo },
    { name: 'World Changers Corner', logo: wccLogo },
    { name: 'Noah Creatives Agency', logo: ncaLogo },
  ]; 

  // Auto-scroll with smooth animation
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % companies.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused, companies.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
  };

  // Get all slides with their positions for 3D carousel
  const getCarouselSlides = () => {
    return companies.map((company, index) => {
      const position = (index - currentIndex + companies.length) % companies.length;
      return { ...company, index, position };
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto mb-8 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry-leading organizations to deliver excellence
          </p>
        </div>

        {/* Desktop 3D Carousel - Auto-rotating */}
        <div 
          className="hidden md:block relative h-96 perspective-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-3d">
            {getCarouselSlides().map((company, idx) => {
              const angle = (company.position * 360) / companies.length;
              const isActive = company.position === 0;
              
              return (
                <div
                  key={company.index}
                  className="carousel-item"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(400px)`,
                    opacity: company.position <= 2 ? 1 : 0.3,
                  }}
                  onClick={() => goToSlide(company.index)}
                >
                  <div className={`card-3d ${isActive ? 'active' : ''}`}>
                    <div className="card-content">
                      <div className="logo-container">
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`}
                          className="company-logo"
                        />
                      </div>
                      <p className="company-name">{company.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="nav-arrow left"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="nav-arrow right"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Mobile Carousel - Smooth Slide */}
        <div 
          className="md:hidden relative"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="mobile-carousel">
            <div 
              className="mobile-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {companies.map((company, index) => (
                <div key={index} className="mobile-slide">
                  <div className="mobile-card">
                    <div className="mobile-logo-container">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="mobile-logo"
                      />
                    </div>
                    <p className="mobile-company-name">{company.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="mobile-nav-arrow left"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="mobile-nav-arrow right"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Interactive Dots Indicator */}
        <div className="dots-container">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill"
              style={{ width: `${((currentIndex + 1) / companies.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            {currentIndex + 1} / {companies.length}
          </p>
        </div>
      </div>

      <style>{`
        /* Desktop 3D Carousel */
        .perspective-container {
          perspective: 1500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-3d {
          position: relative;
          width: 320px;
          height: 280px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-item {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .card-3d {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          transition: all 0.5s ease;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .card-3d:hover {
          box-shadow: 0 25px 70px rgba(147, 51, 234, 0.3);
          transform: scale(1.05);
        }

        .card-3d.active {
          border-color: #9333ea;
          box-shadow: 0 30px 80px rgba(147, 51, 234, 0.4);
        }

        .card-content {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .logo-container {
          width: 100%;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .company-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: none;
          transition: all 0.4s ease;
        }

        .card-3d:hover .company-logo {
          transform: scale(1.1);
        }

        .company-name {
          text-align: center;
          font-weight: 600;
          color: #374151;
          font-size: 16px;
          line-height: 1.4;
        }

        /* Navigation Arrows */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #9333ea, #7e22ce);
          color: white;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4);
          transition: all 0.3s ease;
          z-index: 100;
        }

        .nav-arrow:hover {
          transform: translateY(-50%) scale(1.15);
          box-shadow: 0 15px 40px rgba(147, 51, 234, 0.5);
        }

        .nav-arrow.left {
          left: 20px;
        }

        .nav-arrow.right {
          right: 20px;
        }

        /* Mobile Carousel */
        .mobile-carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        .mobile-track {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-slide {
          min-width: 100%;
          padding: 0 20px;
        }

        .mobile-card {
          background: white;
          border-radius: 24px;
          padding: 40px 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          border: 2px solid #e9d5ff;
        }

        .mobile-logo-container {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .mobile-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .mobile-company-name {
          text-align: center;
          font-weight: 700;
          color: #1f2937;
          font-size: 18px;
          line-height: 1.4;
        }

        /* Mobile Navigation Arrows */
        .mobile-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #9333ea, #7e22ce);
          color: white;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(147, 51, 234, 0.4);
          transition: all 0.3s ease;
          z-index: 50;
        }

        .mobile-nav-arrow:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 10px 25px rgba(147, 51, 234, 0.5);
        }

        .mobile-nav-arrow.left {
          left: 10px;
        }

        .mobile-nav-arrow.right {
          right: 10px;
        }

        /* Dots Indicator */
        .dots-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 50px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d8b4fe;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dot:hover {
          background: #c084fc;
          transform: scale(1.3);
        }

        .dot.active {
          width: 48px;
          border-radius: 6px;
          background: linear-gradient(135deg, #9333ea, #7e22ce);
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4);
        }

        /* Progress Bar */
        .progress-container {
          margin-top: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .progress-bar-bg {
          width: 100%;
          height: 6px;
          background: #e9d5ff;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #9333ea, #7e22ce);
          border-radius: 10px;
          transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
        }

        .progress-text {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          margin-top: 12px;
          font-weight: 500;
        }

        /* Animations */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .nav-arrow.left {
            left: 10px;
          }
          .nav-arrow.right {
            right: 10px;
          }
          .nav-arrow {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .perspective-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};