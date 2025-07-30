import React from 'react';
export const SkillsSection = () => {
  const technicalSkills = [{
    name: 'Sales Force',
    percentage: 85
  },{
    name: 'MailChimp',
    percentage: 75
  },{
    name: 'Google Workspace',
    percentage: 95
  },{
    name: 'Microsoft Team',
    percentage: 92
  },{
    name: 'Microsoft Office',
    percentage: 95
  },{
    name: 'Trello',
    percentage: 87
  }
  // ,{
  //   name: 'Discord',
  //   percentage: 95
  // },{
  //   name: 'Slack',
  //   percentage: 95
  // },{
  //   name: 'QuickBooks Desktop and Online',
  //   percentage: 95
  // }, {
  //   name: 'Canva Pro',
  //   percentage: 94
  // }, {
  //   name: 'CapCut',
  //   percentage: 85
  // }, {
  //   name: 'Zoom',
  //   percentage: 97
  // }, {
  //   name: 'Loom',
  //   percentage: 95
  // }, {
  //   name: 'Google Meet',
  //   percentage: 98
  // },{
  //   name: 'ChatGPT',
  //   percentage: 95
  // }
];
  const softSkills = ['Calendar and Schedule Management', 'Email management and inbox organization', 'Data entry and database management', 'File organization and cloud storage', 'Document preparation and formatting', 'Graphic Design & Video Editing (Shortform)'];
  return <section id="skills" className="py-20 bg-purple-50 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've developed a diverse set of skills throughout my professional
            career.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Digital Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-purple-600 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{
                  width: `${skill.percentage}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-600 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-600 mr-3"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};