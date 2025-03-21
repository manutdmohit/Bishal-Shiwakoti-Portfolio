'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaEnvelope, FaLock } from 'react-icons/fa';

const projects = [
  {
    title: 'Network Security Infrastructure',
    description:
      'Enhanced system resilience and reduced vulnerabilities by 30%.',
    icon: (
      <FaShieldAlt size={40} className="text-blue-600 dark:text-blue-400" />
    ),
  },
  {
    title: 'Email Security Implementation',
    description: 'Reduced phishing incidents by 30% using Cisco ESA.',
    icon: (
      <FaEnvelope size={40} className="text-green-600 dark:text-green-400" />
    ),
  },
  {
    title: 'Cybersecurity Strategy Development',
    description: 'Improved threat detection capabilities by 40%.',
    icon: <FaLock size={40} className="text-red-600 dark:text-red-400" />,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col items-center justify-center p-6 dark:bg-gray-800 shadow-md">
                <CardHeader>{project.icon}</CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
