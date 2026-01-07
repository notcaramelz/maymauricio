import React, { useState } from 'react';
import { Play, FileText, Download, ExternalLink } from 'lucide-react';

import bwoodVideo from '../assets/videos/AC.mp4';
import hsVideo from '../assets/videos/FR.mp4';
import smbVideo from '../assets/videos/TRF.mp4';

import brgdImage from '../assets/images/AC.PNG';
import dcgdImage from '../assets/images/FR.PNG';
import smgdImage from '../assets/images/TRC.PNG';

import thumb1 from '../assets/images/th1.png';
import thumb2 from '../assets/images/th2.png';
import thumb3 from '../assets/images/th3.png';

import finance1 from '../assets/images/finance1.png';
import finance2 from '../assets/images/finance2.png';
import finance3 from '../assets/images/finance3.png';

import pptPdf from '../assets/images/ppt.pdf';
import pptTh1 from '../assets/images/pptth1.jpg';
import ppt2Pdf from '../assets/images/ppt2.pdf';
import pptTh2 from '../assets/images/pptth2.jpg';
import ppt3Pdf from '../assets/images/ppt3.pdf';
import pptTh3 from '../assets/images/pptth3.jpg';
interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  type: 'video' | 'image' | 'document' | 'spreadsheet';
  videoUrl?: string;
  description?: string;
  documentUrl?: string;
  externalUrl?: string;
}

// Demo data with placeholder images
const projects: Project[] = [
  // REELS
  {
    id: 1,
    title: 'Sample Clip 1',
    category: 'Reels',
    thumbnail: thumb1,
    videoUrl: bwoodVideo,
    type: 'video'
  },
  {
    id: 2,
    title: 'Sample Clip 2',
    category: 'Reels',
    thumbnail: thumb2,
    videoUrl: hsVideo,
    type: 'video'
  },
  {
    id: 3,
    title: 'Sample Clip 3',
    category: 'Reels',
    thumbnail: thumb3,
    videoUrl: smbVideo,
    type: 'video'
  },
  // GRAPHIC DESIGN
  {
    id: 4,
    title: 'Sample Graphics 1',
    category: 'Graphic Design',
    thumbnail: brgdImage,
    type: 'image'
  },
  {
    id: 5,
    title: 'Sample Graphics 2',
    category: 'Graphic Design',
    thumbnail: dcgdImage,
    type: 'image'
  },
  {
    id: 6,
    title: 'Sample Graphics 3',
    category: 'Graphic Design',
    thumbnail: smgdImage,
    type: 'image'
  },
  // FINANCE
  {
    id: 7,
    title: 'Achievement 1',
    category: 'Finance',
    thumbnail: finance1,
    type: 'image'
  },
  {
    id: 8,
    title: 'Achievement 2',
    category: 'Finance',
    thumbnail: finance2,
    type: 'image'
  },
  {
    id: 9,
    title: 'Achievement 3',
    category: 'Finance',
    thumbnail: finance3,
    type: 'image'
  },
  {
    id: 10,
    title: 'Financial Analysis PDF',
    category: 'Finance',
    thumbnail: pptTh1,
    type: 'document',
    description: 'Comprehensive financial analysis presentation pdf',
    documentUrl: pptPdf,
    externalUrl: '' // Optional: Add your Google Drive link
  },
  {
    id: 11,
    title: 'Performance Analysis PDF',
    category: 'Finance',
    thumbnail: pptTh2,
    type: 'document',
    description: 'Professional performance analysis pdf for unit meeting',
    documentUrl: ppt2Pdf,
    externalUrl: '' // Optional: Add your Google Sheets link
  },
  {
    id: 13,
    title: 'Financial Report PDF',
    category: 'Finance',
    thumbnail: pptTh3,
    type: 'document',
    description: 'Additional financial report sample pdf',
    documentUrl: ppt3Pdf,
    externalUrl: ''
  }
  
];

const categories = ['Reels', 'Graphic Design', 'Finance'];

const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('Reels');

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const handleProjectClick = (project: Project) => {
    if (project.type === 'video') {
      setSelectedVideo(project.videoUrl || null);
    } else if (project.type === 'image') {
      setSelectedImage(project.thumbnail);
    } else if (project.type === 'document' || project.type === 'spreadsheet') {
      setSelectedDocument(project);
    }
  };

  return (
    <section id="projects" className="py-20 bg-purple-50 w-full min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of sample videos and graphic designs that showcase my skills in video editing and creative work — along with notable achievements in the finance sector
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-purple-700 hover:bg-purple-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-white cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay Icon based on type */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.type === 'video' && <Play size={50} strokeWidth={1.5} />}
                  {(project.type === 'document' || project.type === 'spreadsheet') && (
                    <FileText size={50} strokeWidth={1.5} />
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
                <p className="text-purple-600 font-medium mb-2">{project.category}</p>
                {project.description && (
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white text-lg hover:text-gray-300 transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                ✕ Close
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white text-lg hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕ Close
              </button>
              <img
                src={selectedImage}
                alt="Full Preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Document Modal */}
        {selectedDocument && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDocument(null)}
          >
            <div
              className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                onClick={() => setSelectedDocument(null)}
              >
                ✕
              </button>

              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                  <FileText size={48} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedDocument.title}
                </h3>
                {selectedDocument.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedDocument.description}</p>
                )}
              </div>

              <div className="space-y-3">
                {selectedDocument.documentUrl && (
                  <a
                    href={selectedDocument.documentUrl}
                    download
                    className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3.5 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    <Download size={20} />
                    Download {selectedDocument.type === 'spreadsheet' ? 'Spreadsheet' : 'PDF'}
                  </a>
                )}

                {selectedDocument.externalUrl && (
                  <a
                    href={selectedDocument.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink size={20} />
                    Open in {selectedDocument.type === 'spreadsheet' ? 'Google Sheets' : 'Google Drive'}
                  </a>
                )}

                <button
                  onClick={() => setSelectedDocument(null)}
                  className="w-full bg-gray-100 text-gray-700 px-6 py-3.5 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;