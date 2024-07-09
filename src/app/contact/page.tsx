import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ContactButtonProps {
  href: string;
  icon: IconType;
  label: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, icon: Icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="text-xl" />
    </a>
  )
}

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <p className="mb-6">Feel free to reach out to me through any of these platforms:</p>
        <div className="flex justify-center space-x-4">
          <ContactButton 
            href="mailto:katbiewer@yahoo.com" 
            icon={FaEnvelope} 
            label="Email"
          />
          <ContactButton 
            href="https://www.linkedin.com/in/katherine-biewer/" 
            icon={FaLinkedin} 
            label="LinkedIn"
          />
          <ContactButton 
            href="https://github.com/boonits" 
            icon={FaGithub} 
            label="GitHub"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage