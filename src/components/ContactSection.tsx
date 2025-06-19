import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or need assistance? Feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-purple-50 p-8 rounded-xl shadow-md max-w-xl w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold">Phone</h4>
                  <p className="text-gray-600">+63 917 102 9023</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold">Email</h4>
                  <p className="text-gray-600">mayjonalynloyloy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold">Location</h4>
                  <p className="text-gray-600">
                    Malolos City, Bulacan, Philippines
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Follow Me
              </h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/may-jonalyn-mauricio-a41bb579/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
