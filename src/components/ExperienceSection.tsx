import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const experiences = [{
    title: 'Project Manager',
    company: 'Noah Creatives Agency',
    period: '2025-Present',
    description: 'Managing creative projects and ensuring timely delivery of quality work.'
  }, {
    title: 'Unit Manager',
    company: 'Manulife Philippines',
    period: '2025-Present',
    description: 'Leading a team of financial advisors and managing unit operations.'
  }, {
    title: 'Unit Head',
    company: 'AXA Philippines',
    period: '2023-2024',
    description: 'Oversaw team operations and financial advisory services.'
  }, {
    title: 'Financial Advisor',
    company: 'Sun Life of Canada',
    period: '2019-2022',
    description: 'Provided financial planning and advisory services to clients.'
  }, {
    title: 'Branch Manager',
    company: 'CGS Solid Aircon & Ref., Inc.',
    period: '2011-2016',
    description: 'Managed branch operations, sales, and customer service.'
  }, {
    title: 'Administrative Assistant',
    company: 'ER Venzon Construction',
    period: '2010-2011',
    description: 'Provided administrative support to the construction team.'
  }, {
    title: 'Service Crew',
    company: "McDonald's Balanga",
    period: '2006-2008',
    description: 'Provided customer service and food preparation.'
  }];
  const education = [{
    degree: 'Bachelor of Science in Business Administration',
    major: 'Major in Management',
    institution: 'Bataan Peninsula State University',
    year: '2010'
  }];
  return <section id="experience" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button type="button" className={`px-6 py-3 text-lg font-medium rounded-l-lg ${activeTab === 'experience' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-purple-50'} border border-purple-200`} onClick={() => setActiveTab('experience')}>
              Work Experience
            </button>
            <button type="button" className={`px-6 py-3 text-lg font-medium rounded-r-lg ${activeTab === 'education' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-purple-50'} border border-purple-200`} onClick={() => setActiveTab('education')}>
              Education
            </button>
          </div>
        </div>
        {activeTab === 'experience' ? <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-purple-200"></div>
              {/* Experience Items */}
              {experiences.map((exp, index) => <div key={index} className="relative pl-12 pb-10">
                  {/* Circle on Timeline */}
                  <div className="absolute left-0 top-1.5 w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center">
                    <Briefcase size={14} className="text-white" />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.title}
                      </h3>
                      <span className="text-purple-600 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-gray-600 mb-3">{exp.company}</h4>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>)}
            </div>
          </div> : <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-xl text-purple-600 mb-3">{edu.major}</h4>
                <div className="flex justify-between flex-wrap">
                  <p className="text-gray-700 font-medium">{edu.institution}</p>
                  <p className="text-gray-600">Graduated: {edu.year}</p>
                </div>
              </div>)}
          </div>}
      </div>
    </section>;
};