import React, { useState } from 'react';
import { PlayIcon } from 'lucide-react';

import bwoodVideo from '../assets/videos/AC.mp4';
import hsVideo from '../assets/videos/FR.mp4';
import smbVideo from '../assets/videos/TRF.mp4';

import brgdImage from '../assets/images/AC.PNG';
import dcgdImage from '../assets/images/FR.PNG';
import smgdImage from '../assets/images/TRC.PNG';

import thumb1 from '../assets/images/th1.png';
import thumb2 from '../assets/images/th2.png';
import thumb3 from '../assets/images/th3.png';

const projects = [
  {
    id: 1,
    title: 'Sample Clip 1',
    category: 'Reels',
    thumbnail: thumb1,
    videoUrl: bwoodVideo,
  },
  {
    id: 2,
    title: 'Sample Clip 2',
    category: 'Reels',
    thumbnail: thumb2,
    videoUrl: hsVideo,
  },
  {
    id: 3,
    title: 'Sample Clip 3',
    category: 'Reels',
    thumbnail: thumb3,
    videoUrl: smbVideo,
  },
  {
    id: 4,
    title: 'Sample Graphics 1',
    category: 'Graphic Design',
    thumbnail: brgdImage,
    videoUrl: '',
  },
  {
    id: 5,
    title: 'Sample Graphics 2',
    category: 'Graphic Design',
    thumbnail: dcgdImage,
    videoUrl: '',
  },
  {
    id: 6,
    title: 'Sample Graphics 3',
    category: 'Graphic Design',
    thumbnail: smgdImage,
    videoUrl: '',
  },
];

const categories = ['All', 'Reels', 'Graphic Design'];

const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-purple-50 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of sample videos and graphics that showcase my work in video editing and creative design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-purple-700 hover:bg-white/20'
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
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white cursor-pointer"
              onClick={() =>
                project.videoUrl
                  ? setSelectedVideo(project.videoUrl)
                  : setSelectedImage(project.thumbnail)
              }
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              {project.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon size={40} />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-purple-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full rounded-xl"
              />
              <button
                className="absolute top-2 right-2 text-white text-xl"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full">
              <img
                src={selectedImage}
                alt="Full Preview"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <button
                className="absolute top-2 right-2 text-white text-xl"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
