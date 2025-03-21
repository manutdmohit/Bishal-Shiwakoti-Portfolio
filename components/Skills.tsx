'use client';

import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaLock,
  FaEnvelope,
  FaBug,
  FaUserShield,
} from 'react-icons/fa';

const skills = [
  { icon: <FaShieldAlt size={30} />, title: 'Network Security', level: '90%' },
  { icon: <FaLock size={30} />, title: 'Cybersecurity', level: '85%' },
  {
    icon: <FaEnvelope size={30} />,
    title: 'Email Security (Cisco ESA)',
    level: '80%',
  },
  { icon: <FaBug size={30} />, title: 'Threat Mitigation', level: '88%' },
  {
    icon: <FaUserShield size={30} />,
    title: 'Incident Response',
    level: '87%',
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills List */}
        <div className="mt-8 space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-blue-600 dark:bg-blue-400 h-3 rounded-full"
                  style={{ width: skill.level }}
                  initial={{ width: '0%' }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
