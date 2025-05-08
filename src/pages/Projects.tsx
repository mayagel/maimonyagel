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

const IOT_details = `
<h1>💬 Building Marvin: A Hands-Free Voice Assistant Powered by GPT and IoT</h1>

<section>
  <h2>🧠 Why We Built It</h2>
  <p>
    In this project, we set out to create an accessible, hands-free voice assistant that anyone can talk to —
    powered by ChatGPT. We were inspired by the idea that interacting with powerful AI models like GPT should be
    as easy and natural as having a conversation, especially for people who face challenges with traditional interfaces or simply want a more comfortable, voice-driven experience.
  </p>
</section>

<section>
  <h2>📦 What We Built</h2>
  <p>
    The result is a small device — a compact, Internet-connected box — equipped with a microphone and a speaker.
    The box also includes a colored LED to indicate its status:
  </p>
  <ul>
    <li><strong>Green:</strong> Marvin is idle and listening for the wake word.</li>
    <div className="grid grid-cols-3 gap-4 p-6">
    <img
                key={index}
                src=/images/projects/iot/green-light.jpg
                loading="lazy"
                alt="green-light"
                className="w-48 h-48 object-cover rounded-lg shadow-sm"
              />
              </div>
    <li><strong>Red:</strong> Marvin has detected the wake word ("Marvin") and is loading the necessary resources.</li>
    <img
                key={index}
                src=/images/projects/iot/red-light.jpg
                loading="lazy"
                alt="green-light"
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
    <li><strong>Blue:</strong> The user can now ask a question.</li>
    <img
                key={index}
                src=/images/projects/iot/blue-light.jpg
                loading="lazy"
                alt="green-light"
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
    <li><strong>Red (again):</strong> Marvin is processing and answering.</li>
    <img
                key={index}
                src=/images/projects/iot/red-light.jpg
                loading="lazy"
                alt="green-light"
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
    <li><strong>Green (again):</strong> Marvin returns to idle, ready for the next question.</li>
    <img
                key={index}
                src=/images/projects/iot/green-light.jpg
                loading="lazy"
                alt="green-light"
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
  </ul>
  <p>
    The wake word detection helps reduce unnecessary API requests, saving bandwidth, processing power, and cost — especially important for real-time systems with limited resources like the ESP32.
  </p>
</section>

<section>
  <h2>🚧 Challenges We Faced</h2>
  <ul>
    <li>
      <strong>Wake Word Detection:</strong> We trained a custom model using Edge Impulse to recognize the word “Marvin.”
      This required generating and labeling audio spectrograms for reliable activation.
    </li>
    <li>
      <strong>Audio Processing:</strong> Converting raw microphone input to WAV format in real time and streaming it efficiently to Google’s Speech-to-Text API was tricky due to memory limitations.
    </li>
    <li>
      <strong>Real-Time Response:</strong> Ensuring low-latency interaction was essential for a smooth conversation experience, so we optimized audio chunking and network requests.
    </li>
    <li>
      <strong>Natural Voice Output:</strong> We used I2S-based text-to-speech libraries to send Marvin’s responses to a speaker, managing synchronization and timing issues for seamless playback.
    </li>
  </ul>
</section>

<section>
  <h2>🛠️ Technologies Used</h2>
  <ul>
    <li><strong>ESP32:</strong> Core microcontroller managing all logic and hardware interfaces.</li>
    <li><strong>INMP441 Microphone + I2S Speaker:</strong> For capturing voice input and playing responses.</li>
    <li><strong>Edge Impulse:</strong> For wake-word model training and inference on-device.</li>
    <li><strong>Google Speech-to-Text API:</strong> For converting spoken questions into text.</li>
    <li><strong>OpenAI GPT API:</strong> For generating intelligent, conversational answers.</li>
    <li><strong>TxtToSpeech Library:</strong> For audio synthesis and I2S playback.</li>
    <li><strong>Custom LED Logic:</strong> For intuitive status feedback during conversation flow.</li>
  </ul>
</section>

<section>
  <h2>🎯 Final Thoughts</h2>
  <p>
    Marvin is more than a class project — it’s a step toward making powerful AI more accessible and intuitive.
    The intersection of embedded systems, audio processing, and machine learning made this one of the most
    fulfilling challenges we've tackled. We're proud of how far we pushed the boundaries of what’s possible on a tiny chip.
  </p>
  <p>
    💻 Check out the full project and code on <a href="https://github.com/your-repo-link" target="_blank">GitHub</a>!
  </p>
</section>
`;

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
    details: IOT_details,
    technologies: ["Python", "TensorFlow", "ESPP32", "Arduino", "Google-API", "OpenAI-API", ],
    references: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=UlPPj5W5egk&ab_channel=IOT_Technion', label: 'Demo Video' },
      { type: 'github', url: 'https://github.com/iotPr/iot.git', label: 'git repository' },
      { type: 'ppt', url: 'https://docs.google.com/document/d/1iuSmsHvBlApy0ftigTnnmda4OAv2IQSw/edit?usp=sharing&ouid=102749786836587109022&rtpof=true&sd=true', label: 'project-documentation' }
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
          loading="lazy"
          alt={`${currentProject.title} screenshot`}
          className="w-full max-w-md h-auto rounded-lg shadow-sm mx-auto"
        />
      )}
          <div className="grid grid-cols-3 gap-4 p-6">
            {currentProject.images.map((image, index) => (
              <img
                key={index}
                src={image}
                loading="lazy"
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

            <div
            className="prose prose-xl prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: currentProject.details }}
            ></div>

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
