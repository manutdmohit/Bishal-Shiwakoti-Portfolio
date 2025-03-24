'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  FaShieldAlt,
  FaLock,
  FaEnvelope,
  FaBug,
  FaExclamationTriangle,
} from 'react-icons/fa';

const skills = [
  {
    icon: <FaShieldAlt size={40} className="text-blue-500" />,
    title: 'Network Security',
    description:
      'Expert in securing network infrastructures and mitigating threats. Ensuring robust protection against unauthorized access and cyber threats.',
  },
  {
    icon: <FaLock size={40} className="text-green-500" />,
    title: 'Cybersecurity',
    description:
      'Proficient in implementing cybersecurity measures and incident response. Specialized in threat analysis and risk management.',
  },
  {
    icon: <FaEnvelope size={40} className="text-red-500" />,
    title: 'Email Security (Cisco ESA)',
    description:
      'Specialized in advanced email security solutions using Cisco ESA. Preventing phishing, spam, and malware attacks effectively.',
  },
  {
    icon: <FaBug size={40} className="text-yellow-500" />,
    title: 'Threat Mitigation',
    description:
      'Skilled in identifying and mitigating potential security threats. Implementing proactive measures to minimize vulnerabilities.',
  },
  {
    icon: <FaExclamationTriangle size={40} className="text-purple-500" />,
    title: 'Incident Response',
    description:
      'Experienced in managing and responding to security incidents efficiently. Ensuring quick recovery and minimal disruption during cyber attacks.',
  },
];

const Skills = () => {
  return (
    <section className="py-16 px-6 md:px-8 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="mt-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          My Expertise in Cybersecurity
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I specialize in securing networks, preventing cyber threats, and
          ensuring robust protection against potential attacks.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full w-full flex flex-col items-center justify-center p-6 shadow-lg bg-white dark:bg-gray-800">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <CardContent className="text-gray-700 dark:text-gray-300 text-left">
                  {skill.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
