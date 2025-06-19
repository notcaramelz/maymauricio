import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const experiences = [{
    title: 'Project Manager',
    company: 'Noah Creatives Agency',
    period: '2025-Present',
    description: 'Generate qualified leads by identifying churches in need of creative services, initiating outreach through email and social media to present tailored solutions, ensuring all graphic and video content aligns with church branding, and reviewing financial statements to monitor budgets, assess profitability, and support strategic decisions.'
  }, {
    title: 'Unit Manager',
    company: 'Manulife Philippines',
    period: '2025-Present',
    description: 'Manage and lead a team in delivering high-quality financial services by ensuring operational efficiency, customer satisfaction, and executing strategic initiatives that drive performance aligned with company goals.'
  }, {
    title: 'Unit Head',
    company: 'AXA Philippines',
    period: '2023-2024',
    description: 'Leading a team to deliver high-quality financial services by ensuring operational efficiency, customer satisfaction, and driving strategic initiatives aligned with company goals.'
  }, {
    title: 'Financial Advisor',
    company: 'Sun Life of Canada',
    period: '2019-2022',
    description: 'Provide expert financial planning and insurance solutions by analyzing clients’ financial situations, identifying risks, recommending tailored coverage and wealth management strategies, staying updated on market trends, and building long-term client relationships through proactive guidance and personalized service.'
  }, {
    title: 'Branch Manager',
    company: 'CGS Solid Aircon & Ref., Inc.',
    period: '2011-2016',
    description: 'Oversee daily branch operations and lead a high-performing team to ensure service excellence, utilizing QuickBooks for comprehensive financial management, while driving sales growth, analyzing market trends, and positioning the branch as a leader in car and residential air conditioning solutions.'
  }, {
    title: 'Administrative Assistant',
    company: 'ER Venzon Construction',
    period: '2010-2011',
    description: 'Provide administrative support by organizing office records, assisting project managers with documentation, sourcing materials and equipment for construction projects, monitoring inventory, tracking purchasing expenses, and helping manage payroll accounts for construction workers.'
  }, {
    title: 'Service Crew',
    company: "McDonald's Balanga",
    period: '2006-2008',
    description: 'Delivered exceptional customer service in a fast-paced dining environment by accurately taking orders, handling transactions, preparing food safely, maintaining cleanliness, resolving issues promptly, and contributing to efficient operations and a positive dining experience through strong communication and teamwork.'
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