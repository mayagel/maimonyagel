import React from 'react';
import { GraduationCap, BookOpen, Code } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600">
            My academic background and relevant coursework.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md p-8 border border-blue-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-16 -left-16 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
            
            <div className="relative flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <GraduationCap size={32} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Technion - Israel Institute of Technology
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  B.Sc in Computer Science · Graduation Year 2025
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-blue-600" />
                    Relevant Coursework
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Object-Oriented Programming (OOP)', 
                      'Algorithms and Data Structures', 
                      'Complexity Theory'
                    ].map((course, index) => (
                      <li key={index} className="bg-white px-4 py-3 rounded-md shadow-sm border border-gray-100 text-gray-700">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Code size={18} className="text-blue-600" />
                    Technical Experience
                  </h4>
                  <p className="text-gray-600">
                    Developed projects using Python, and gained hands-on experience with VS Code.
                    Considered the most demanding degree of all possible degrees in Israel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;