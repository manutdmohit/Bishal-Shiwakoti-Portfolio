'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  FaNetworkWired,
  FaEnvelopeOpenText,
  FaShieldAlt,
  FaBug,
  FaLaptopCode,
} from 'react-icons/fa';

const projects = [
  {
    title: 'Network Security Enhancement',
    icon: (
      <FaNetworkWired
        className="text-blue-500"
        aria-label="Network Security Icon"
        size={40}
      />
    ),
    description:
      'Led the management of network security infrastructure, improving system resilience and reducing vulnerabilities by 30%.',
  },
  {
    title: 'Email Security Implementation',
    icon: (
      <FaEnvelopeOpenText
        className="text-green-500"
        aria-label="Email Security Icon"
        size={40}
      />
    ),
    description:
      'Implemented Cisco ESA email security solutions, reducing phishing incidents by 30% within six months.',
  },
  {
    title: 'Threat Mitigation Strategies',
    icon: (
      <FaShieldAlt
        className="text-yellow-500"
        aria-label="Threat Mitigation Icon"
        size={40}
      />
    ),
    description:
      'Developed comprehensive cybersecurity strategies that improved threat detection by 40%.',
  },
  {
    title: 'Incident Response Optimization',
    icon: (
      <FaBug
        className="text-red-500"
        aria-label="Incident Response Icon"
        size={40}
      />
    ),
    description:
      'Reduced average incident response time by 40%, ensuring faster resolution of vulnerabilities.',
  },
  {
    title: 'Cybersecurity Awareness Training',
    icon: (
      <FaLaptopCode
        className="text-purple-500"
        aria-label="Cybersecurity Training Icon"
        size={40}
      />
    ),
    description:
      'Created training materials for clients, increasing cybersecurity awareness by 50%.',
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-8 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="mt-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of impactful projects in network security and
          cybersecurity.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full w-full flex flex-col items-center justify-center p-6 shadow-lg bg-white dark:bg-gray-800">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <CardContent className="text-gray-700 dark:text-gray-300 text-left">
                  {project.description}
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
