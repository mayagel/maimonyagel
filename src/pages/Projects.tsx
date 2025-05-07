import React, { useState } from 'react';
import { Cpu, Cloud, Gamepad } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  images: string[];
  achievements: string[];
  details: string;
  technologies: string[];
};

// Corrected glob paths - relative to 'src'
const iotImages = import.meta.glob('public/images/projects/iot/*.jpg', { eager: true });
const schedulingImages = import.meta.glob('public/images/projects/scheduling/*.jpg', { eager: true });
const clashRoyaleImages = import.meta.glob('public/images/projects/clash-royale/*.jpg', { eager: true });



const projects: Project[] = [
  {
    id: 'iot',
    title: "IOT - Voice Assistance Project",
    description: "Developed an innovative voice assistance system integrating IoT devices for smart home automation.",
    icon: <Cpu size={24} />,
    images: Object.keys(iotImages),
    achievements: [
      "Implemented natural language processing for voice commands",
      "Integrated multiple IoT devices and protocols",
      "Achieved 95% accuracy in voice recognition"
    ],
    details: "This project focused on creating a sophisticated voice assistance system that seamlessly integrates with various IoT devices. The system uses advanced natural language processing to understand and execute complex voice commands, making home automation more intuitive and accessible.",
    technologies: ["Python", "TensorFlow", "MQTT", "Raspberry Pi"]
  },
  {
    id: 'scheduling',
    title: "Online Flexible Busy Time Scheduling",
    description: "Developed an algorithm for optimizing task scheduling on heterogeneous machines with varying availability.",
    icon: <Cloud size={24} />,
    images: Object.keys(schedulingImages),
    achievements: [
      "Reduced scheduling conflicts by 40%",
      "Improved resource utilization by 25%",
      "Implemented dynamic scheduling adjustments"
    ],
    details: "This seminar project explored innovative approaches to scheduling tasks across heterogeneous computing resources. The algorithm takes into account varying machine capabilities and availability windows to optimize resource allocation and minimize conflicts.",
    technologies: ["Java", "Algorithm Design", "Data Structures", "Performance Analysis"]
  },
  {
    id: 'clash-royale',
    title: "Clash Royale Causal Analysis",
    description: "Conducted comprehensive data analysis of Clash Royale gameplay patterns and strategic decisions.",
    icon: <Gamepad size={24} />,
    images: Object.keys(clashRoyaleImages),
    achievements: [
      "Analyzed over 10,000 game matches",
      "Identified key winning strategies",
      "Created predictive models for game outcomes"
    ],
    details: "This data management project involved analyzing vast amounts of Clash Royale gameplay data to uncover patterns and causal relationships between player decisions and match outcomes. The analysis provided valuable insights into effective gaming strategies.",
    technologies: ["Python", "Pandas", "SQL", "Machine Learning"]
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  const currentProject = projects.find(p => p.id === activeProject)!;

  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Projects</h1>
        
        {/* Project Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-2 flex space-x-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeProject === project.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  {project.icon}
                  <span className="font-medium">{project.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-2 gap-4 p-6">
            {currentProject.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${currentProject.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
          
          <div className="p-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600">{currentProject.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900">{currentProject.title}</h2>
            </div>
            
            <p className="text-gray-600 mb-6">{currentProject.details}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-2">
                {currentProject.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;