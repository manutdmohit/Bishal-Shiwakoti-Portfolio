'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaNetworkWired, FaLock } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* About Content */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <motion.div
            className="relative w-48 h-48 md:w-56 md:h-56"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.jpg"
              alt="Bishal Shiwakoti"
              className="rounded-full shadow-lg"
              fill
              objectFit="cover"
            />
          </motion.div>

          {/* About Text & Skills */}
          <motion.div
            className="flex-1 space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I'm **Bishal Shiwakoti**, a **Network and Security Support
              Engineer** at FirstWave ASX. I specialize in securing network
              infrastructures, implementing cybersecurity measures, and ensuring
              robust email security using **Cisco ESA**.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="flex items-center gap-4 p-4 dark:bg-gray-800 shadow-md">
                <FaNetworkWired
                  size={30}
                  className="text-blue-600 dark:text-blue-400"
                />
                <span className="text-gray-900 dark:text-white font-medium">
                  Network Security
                </span>
              </Card>
              <Card className="flex items-center gap-4 p-4 dark:bg-gray-800 shadow-md">
                <FaLock
                  size={30}
                  className="text-green-600 dark:text-green-400"
                />
                <span className="text-gray-900 dark:text-white font-medium">
                  Cybersecurity
                </span>
              </Card>
              <Card className="flex items-center gap-4 p-4 dark:bg-gray-800 shadow-md">
                <FaShieldAlt
                  size={30}
                  className="text-red-600 dark:text-red-400"
                />
                <span className="text-gray-900 dark:text-white font-medium">
                  Threat Mitigation
                </span>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
