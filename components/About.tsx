'use client';

import {
  FaShieldAlt,
  FaLock,
  FaEnvelope,
  FaBug,
  FaUserShield,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaShieldAlt size={30} />, title: 'Network Security' },
  { icon: <FaLock size={30} />, title: 'Cybersecurity' },
  { icon: <FaEnvelope size={30} />, title: 'Email Security (Cisco ESA)' },
  { icon: <FaBug size={30} />, title: 'Threat Mitigation' },
  { icon: <FaUserShield size={30} />, title: 'Incident Response' },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I am a **Network and Security Support Engineer** at FirstWave ASX,
          specializing in securing network infrastructures, mitigating threats,
          and enhancing email security.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
