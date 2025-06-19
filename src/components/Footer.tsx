import React from 'react';
import { Heart } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">May J. Mauricio</h2>
            <p className="text-gray-400 mt-2">
              Virtual Assistant | Project Manager | Bookkeeper
            </p>
          </div>
         
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} May Jonalyn Mauricio. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-gray-400 text-sm">Made with</span>
            <Heart size={16} className="text-red-500 mx-1" />
            <span className="text-gray-400 text-sm">
              in Malolos City, Philippines
            </span>
          </div>
        </div>
      </div>
    </footer>;
};