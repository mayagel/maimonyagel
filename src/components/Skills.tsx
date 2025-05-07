import React from 'react';
import { Code, Database, Globe, GitBranch, LineChart, ShieldCheck, Server } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: string[];
};

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all hover:shadow-lg hover:border-blue-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-600">{category.icon}</div>
        <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: <Globe size={24} />,
      skills: ['React', 'Redux', 'JavaScript', 'HTML/CSS'],
    },
    {
      name: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['NodeJS', 'Python', 'C++'],
    },
    {
      name: 'DevOps & CI/CD',
      icon: <GitBranch size={24} />,
      skills: ['Git Actions', 'Docker', 'Kubernetes'],
    },
    {
      name: 'Database & Big Data',
      icon: <Database size={24} />,
      skills: ['SQL', 'NoSQL', 'Apache Spark', 'Splunk'],
    },
    {
      name: 'Data Analysis',
      icon: <LineChart size={24} />,
      skills: ['Python', 'SQL', 'Data Processing', 'Data Integration'],
    },
    {
      name: 'System Monitoring',
      icon: <ShieldCheck size={24} />,
      skills: ['Grafana', 'Real-time Monitoring', 'System Reliability'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600">
            The technologies and tools I've mastered through my professional journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;