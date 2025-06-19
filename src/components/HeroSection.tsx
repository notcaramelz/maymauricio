import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const titles: string[] = ['Virtual Assistant', 'Project Manager', 'Bookkeeper'];

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [titleIndex, setTitleIndex] = useState<number>(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex flex-col justify-center items-center px-4 pt-20"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          May Jonalyn Mauricio
        </h1>

        <div className="h-12 mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 font-semibold animate-fade-in">
            Professional {titles[titleIndex]}
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experienced and results-oriented professional based in Malolos City,
          Bulacan, Philippines
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a
            href="#services"
            className="px-8 py-3 bg-white text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-1"
          >
            View Services
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 animate-bounce cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} className="text-purple-600" />
      </a>
    </section>
  );
};
