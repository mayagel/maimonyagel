import React, { useState, useEffect } from 'react';
import { Cpu, Cloud, Gamepad, Youtube, Github, FileText, ExternalLink } from 'lucide-react';

type Reference = {
  type: 'youtube' | 'ppt' | 'github' | 'link';
  url: string;
  label: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  images: string[];
  first_image?: string;
  achievements: string[];
  details: string;
  technologies: string[];
  references?: Reference[];
};

const iotImages = import.meta.glob('/public/images/projects/iot/group_of_images/*.jpg', { eager: true });
const schedulingImages = import.meta.glob('/public/images/projects/scheduling/group_of_images/*.jpg', { eager: true });
const clashRoyaleImages = import.meta.glob('/public/images/projects/clash-royale/group_of_images/*.jpg', { eager: true });

const renderReferenceIcon = (type: Reference['type']) => {
  switch (type) {
    case 'youtube':
      return <Youtube size={18} className="text-red-500" />;
    case 'ppt':
      return <FileText size={18} className="text-blue-500" />;
    case 'github':
      return <Github size={18} className="text-blue-500" />;
    default:
      return <ExternalLink size={18} className="text-gray-500" />;
  }
};

const projects: Project[] = [
  {
    id: 'iot',
    title: "IOT - Voice Assistance Project",
    description: "Developed an innovative voice assistance system integrating IoT devices for smart home automation.",
    icon: <Cpu size={24} />,
    images: Object.keys(iotImages).map((key) => key.slice('/public'.length)),
    first_image: '/images/projects/iot/POSTER.jpg',
    achievements: [
      "Implemented natural language processing for voice commands",
      "Integrated multiple IoT devices and protocols",
      "Achieved 95% accuracy in voice recognition"
    ],
    details: "This project focused on creating a sophisticated voice assistance system that seamlessly integrates with various IoT devices. The system uses advanced natural language processing to understand and execute complex voice commands, making home automation more intuitive and accessible.",
    technologies: ["Python", "TensorFlow", "MQTT", "Raspberry Pi"],
    references: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=UlPPj5W5egk&ab_channel=IOT_Technion', label: 'Demo Video' },
      { type: 'github', url: 'https://github.com/iotPr/iot.git', label: 'git repository' }
    ]
  },
  {
    id: 'scheduling',
    title: "Online Flexible Busy Time Scheduling",
    description: "Developed an algorithm for optimizing task scheduling on heterogeneous machines with varying availability.",
    icon: <Cloud size={24} />,
    images: Object.keys(schedulingImages).map((key) => key.slice('/public'.length)),
    first_image: '/images/projects/scheduling/giff-explain.gif',
    achievements: [
      "Reduced scheduling conflicts by 40%",
      "Improved resource utilization by 25%",
      "Implemented dynamic scheduling adjustments"
    ],
    details: "This seminar project explored innovative approaches to scheduling tasks across heterogeneous computing resources. The algorithm takes into account varying machine capabilities and availability windows to optimize resource allocation and minimize conflicts.",
    technologies: ["Java", "Algorithm Design", "Data Structures", "Performance Analysis"],
    references: [
      { type: 'ppt', url: 'https://docs.google.com/presentation/d/1wY1RCPP6tZojoMz5UmUEGdhseErZAL5y/edit?usp=sharing&ouid=102749786836587109022&rtpof=true&sd=true', label: 'Presentation Slides' }
    ]
  },
  {
    id: 'clash-royale',
    title: "Clash Royale Causal Analysis",
    description: "Conducted comprehensive data analysis of Clash Royale gameplay patterns and strategic decisions.",
    icon: <Gamepad size={24} />,
    images: Object.keys(clashRoyaleImages).map((key) => key.slice('/public'.length)),
    achievements: [
      "Analyzed over 10,000 game matches",
      "Identified key winning strategies",
      "Created predictive models for game outcomes"
    ],
    details: "This data management project involved analyzing vast amounts of Clash Royale gameplay data to uncover patterns and causal relationships between player decisions and match outcomes. The analysis provided valuable insights into effective gaming strategies.",
    technologies: ["Python", "Pandas", "SQL", "Machine Learning"],
    references: [
      { type: 'github', url: 'https://github.com/Av0cat0/Clash-Royale-Causal-analysis.git', label: 'git repository' },
      { type: 'ppt', url: '/ppt/projects/clash/Research_Proposal.pdf', label: 'Research Proposal (PDF)'}
    ]
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const currentProject = projects.find(p => p.id === activeProject)!;
  // const [imgSrc, setImgSrc] = useState('/images/projects/scheduling/giff-explain.gif');
  const [firstImageSrc, setFirstImageSrc] = useState(currentProject.first_image);
  useEffect(() => {
    setFirstImageSrc(currentProject.first_image); // reset on project change
  }, [currentProject]);
  
  useEffect(() => {
    if (firstImageSrc && firstImageSrc.endsWith('.gif')) {
      const timer = setTimeout(() => {
        setFirstImageSrc(firstImageSrc.replace('.gif', '.jpg')); // switch to JPG
      }, 4000);
  
      return () => clearTimeout(timer);
    }
  }, [firstImageSrc]);

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
        {firstImageSrc && (
        <img
          key={22}
          src={firstImageSrc}
          alt={`${currentProject.title} screenshot`}
          className="w-full max-w-md h-auto rounded-lg shadow-sm mx-auto"
        />
      )}
          <div className="grid grid-cols-3 gap-4 p-6">
            {currentProject.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${currentProject.title} screenshot ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-sm"
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

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-2">
                {currentProject.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>

            {currentProject.references && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">References:</h3>
                <ul className="space-y-2">
                  {currentProject.references.map((ref, index) => (
                    <li key={index} className="flex items-center gap-2 text-blue-600 text-sm hover:underline">
                      {renderReferenceIcon(ref.type)}
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
