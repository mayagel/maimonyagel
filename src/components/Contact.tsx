import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

type ContactMethod = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

const ContactCard: React.FC<{ method: ContactMethod }> = ({ method }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md hover:border-blue-100">
      <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-4">
        {method.icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{method.label}</h3>
      {method.href ? (
        <a 
          href={method.href} 
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          target={method.href.startsWith('http') ? '_blank' : undefined}
          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {method.value}
        </a>
      ) : (
        <p className="text-gray-700">{method.value}</p>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '054-5624950',
      href: 'tel:0545624950',
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'maimonyagel@gmail.com',
      href: 'mailto:maimonyagel@gmail.com',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/yagel-maimon/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out if you'd like to discuss potential opportunities or collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} method={method} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;