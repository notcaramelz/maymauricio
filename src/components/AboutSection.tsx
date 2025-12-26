import React from 'react';
import mayyImage from '../assets/mayyy.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              We are a <span className="font-semibold">team</span> of seasoned{" "}
              <span className="italic font-medium bg-purple-100 text-purple-700 px-2">
                management, financial, and operations professionals
              </span>
              , focused on delivering{" "}
              <span className="font-semibold">
                structured, dependable solutions
              </span>{" "}
              that support long-term business growth.
            </p>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              With over{" "}
              <span className="italic font-medium bg-purple-100 text-purple-700 px-2">
                five years of hands-on experience
              </span>{" "}
              across financial services, virtual assistance, and bookkeeping,
              we bring clarity, discipline, and precision to every engagement—
              helping clients thrive in{" "}
              <span className="font-semibold">
                fast-moving and evolving environments
              </span>.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-100 shadow-xl">
                <img
                  src={mayyImage}
                  alt="Team Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-purple-600 text-white py-2 px-6 rounded-full shadow-lg text-sm md:text-base font-semibold">
                5+ Years Experience
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


