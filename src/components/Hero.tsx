import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/images/profile.jpg"
              alt="Yagel Maimon"
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Yagel Maimon</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-blue-600 mt-2">
              Software Engineer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Full-stack developer specializing in distributed systems and Big Data solutions.
            Passionate about scalable architecture and implementing robust solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#experience"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md transition-all border border-gray-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#experience" aria-label="Scroll down">
          <ChevronDown size={32} className="text-gray-400" />
        </a>
      </div>
      
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100 to-blue-50 rounded-tr-full opacity-70 -z-10"></div>
    </section>
  );
};

export default Hero;