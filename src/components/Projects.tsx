import React from 'react';
import { Cpu, Cloud, Gamepad } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  icon: React.ReactNode;
  images: string[];
  achievements: string[];
};

const iotImages = import.meta.glob('/public/images/projects/iot/*.jpg', { eager: true });
const schedulingImages = import.meta.glob('/public/images/projects/scheduling/*.jpg', { eager: true });
const clashRoyaleImages = import.meta.glob('/public/images/projects/clash-royale/*.jpg', { eager: true });

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
      <div className="relative">
        <div className="flex gap-4 p-6">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-1/2 h-48 object-cover rounded-lg shadow-sm"
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-blue-600">{project.icon}</div>
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600">{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "IOT - Voice Assistance Project",
      description: "Developed an innovative voice assistance system integrating IoT devices for smart home automation.",
      icon: <Cpu size={24} />,
      images: Object.keys(iotImages).map((key) => key.slice('/public'.length)),
      achievements: [
        "Implemented natural language processing for voice commands",
        "Integrated multiple IoT devices and protocols",
        "Achieved 95% accuracy in voice recognition"
      ]
    },
    {
      title: "Online Flexible Busy Time Scheduling",
      description: "Developed an algorithm for optimizing task scheduling on heterogeneous machines with varying availability.",
      icon: <Cloud size={24} />,
      images: Object.keys(schedulingImages),
      achievements: [
        "Reduced scheduling conflicts by 40%",
        "Improved resource utilization by 25%",
        "Implemented dynamic scheduling adjustments"
      ]
    },
    {
      title: "Clash Royale Causal Analysis",
      description: "Conducted comprehensive data analysis of Clash Royale gameplay patterns and strategic decisions.",
      icon: <Gamepad  size={24} />,
      images: Object.keys(clashRoyaleImages),
      achievements: [
        "Analyzed over 10,000 game matches",
        "Identified key winning strategies",
        "Created predictive models for game outcomes"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            Showcasing some of my most impactful and innovative work.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;