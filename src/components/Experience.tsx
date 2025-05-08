import React from 'react';
import { CalendarClock, Server, GitBranch, Database, Activity } from 'lucide-react';

const techKeywords = [
  'React', 'Redux', 'JavaScript', 'TypeScript', 'NodeJS', 'Python', 'SQL', 'C\\+\\+',
  'Docker', 'Kubernetes', 'Jest', 'Git', 'Grafana', 'Splunk', 'Apache Spark', 'CI/CD'
];

const highlightTechnologies = (text: string): React.ReactNode => {
  const pattern = new RegExp(`\\b(${techKeywords.join('|')})\\b`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    techKeywords.some(keyword => new RegExp(`^${keyword}$`, 'i').test(part)) ? (
      <strong key={i} className="font-semibold text-gray-800">{part}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};

const ExperienceCard: React.FC<{
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  icon?: React.ReactNode;
}> = ({ title, company, period, responsibilities, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
          {icon || <CalendarClock size={24} />}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-700 font-medium">{company}</span>
            <span className="text-gray-500 text-sm">• {period}</span>
          </div>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-gray-600 flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{highlightTechnologies(responsibility)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Intel',
      period: '2021-2025',
      icon: <Server size={24} />,
      responsibilities: [
        'Developing large-scale distributed systems, implementing scalable and robust full-stack solutions using React, Redux, NodeJS, and Python.',
        'Migrating Big Data solutions from Splunk to Apache Spark, improving database infrastructure.',
        'Enhancing CI/CD workflows using Git Actions, Docker, and Kubernetes, ensuring seamless deployment and monitoring.',
        'Conducting end-to-end testing with Jest and improving software quality.',
        'Extracting insights from large datasets using Python, SQL, and C++.',
        'Utilizing real-time monitoring tools such as Grafana to ensure system reliability.',
      ],
    },
    {
      title: 'Data Engineering',
      company: 'Israeli Defense Forces Intelligence Unit 9900',
      period: '2015-2018',
      icon: <Database size={24} />,
      responsibilities: [
        'Built and optimized Python scripts to process, analyze, and integrate large datasets.',
        'Designed models based on SQL queries and SDE layers, issuing actionable intelligence reports.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-gray-600">
            A summary of my professional journey and the impact I've made.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              responsibilities={experience.responsibilities}
              icon={experience.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;