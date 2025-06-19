import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import mayyImage from '../assets/mayyy.jpg'; // Adjust the path if needed

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-gray-700 mb-6">
              I am an experienced and results-oriented professional with a
              strong background in management, financial services, virtual
              assistance, and bookkeeping. With over 5 years of experience in
              branch operations, financial reporting, and team leadership, I
              deliver exceptional results for my clients.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              As a dedicated mother of two, I've developed exceptional
              organizational, multitasking, and time management abilities that
              transfer perfectly to my professional services.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-100 shadow-xl">
                <img
                  src={mayyImage}
                  alt="May Jonalyn Mauricio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white py-2 px-6 rounded-full shadow-lg">
                5+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
