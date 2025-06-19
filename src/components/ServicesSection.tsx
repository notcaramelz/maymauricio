import React, { useState } from 'react';
import { Calendar, FileText, DollarSign, Briefcase, FileSpreadsheet, Users, MessageSquare, Image } from 'lucide-react';
export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const services = [{
    title: 'Virtual Assistance',
    icon: <Calendar size={32} />,
    description: 'Calendar management, email management, data entry, and document preparation.'
  }, {
    title: 'Project Management',
    icon: <Briefcase size={32} />,
    description: 'Overseeing projects from inception to completion, ensuring deadlines are met and goals are achieved.'
  }, {
    title: 'Financial Planning',
    icon: <DollarSign size={32} />,
    description: 'Financial advising, planning and management to help achieve your financial goals.'
  }, {
    title: 'Bookkeeping',
    icon: <FileSpreadsheet size={32} />,
    description: 'QuickBooks, financial reporting, invoicing, payroll, tax preparation, and budgeting.'
  }, {
    title: 'Administrative Support',
    icon: <FileText size={32} />,
    description: 'Comprehensive administrative assistance to streamline your operations.'
  }, {
    title: 'Lead Generation',
    icon: <Users size={32} />,
    description: 'Client outreach and lead generation to grow your business.'
  }, {
    title: 'Social Media Support',
    icon: <MessageSquare size={32} />,
    description: 'Social media management and content planning to boost your online presence.'
  }, {
    title: 'Quality Control',
    icon: <Image size={32} />,
    description: 'Quality control of creative assets including graphics and videos.'
  }];
  return <section id="services" className="py-20 bg-purple-50 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I offer a wide range of professional services to help businesses and
            individuals achieve their goals efficiently and effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div className={`p-8 transition-all duration-300 ${hoveredIndex === index ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className={`text-xl font-bold mb-4 text-center ${hoveredIndex === index ? 'text-white' : 'text-gray-800'}`}>
                  {service.title}
                </h3>
                <p className={`text-center ${hoveredIndex === index ? 'text-purple-100' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};