'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaNetworkWired,
  FaLock,
  FaBug,
  FaLaptopCode,
} from 'react-icons/fa';

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
        <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Image */}
          <motion.div
            className="relative w-48 h-48 md:w-56 md:h-56"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
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
              In today's fast-paced technological landscape, I am deeply
              fascinated by the dynamic intersection of connectivity and
              security. My journey as a **Network and Security Support
              Engineer** has allowed me to explore this passion extensively.
              With a **Bachelor's degree in Electronics and Communications
              Engineering** as my foundation, I have dedicated over **four
              years** to mastering IT and cybersecurity—constantly pushing
              myself to learn and adapt to new challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              One of my most impactful projects involved implementing **advanced
              email security measures** using **Cisco ESA**, which resulted in a
              **30% reduction in phishing incidents** across client networks
              within just six months. Tackling such challenges and finding
              effective solutions is what drives my enthusiasm for
              cybersecurity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Before stepping into this role, I worked as an **Information
              Technology Support Officer** at **Bailey Nelson**, where I
              enhanced my troubleshooting expertise while providing direct user
              support. Additionally, my experience as an **Assistant Department
              Manager** at **Woolworths Supermarkets** strengthened my
              leadership and teamwork skills—qualities that continue to shape my
              approach in the cybersecurity domain.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Beyond work, I am committed to continuous learning. Currently, I
              am expanding my skill set through **SOC analyst training on
              TryHackMe**, diving deeper into cybersecurity analysis and threat
              detection. The ever-evolving nature of cybersecurity keeps me
              motivated—there is always something new to explore and master.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
              If you're interested in discussing **network security strategies**
              or potential collaborations, feel free to connect with me via
              email!
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
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
              <Card className="flex items-center gap-4 p-4 dark:bg-gray-800 shadow-md">
                <FaBug
                  size={30}
                  className="text-yellow-600 dark:text-yellow-400"
                />
                <span className="text-gray-900 dark:text-white font-medium">
                  Incident Response
                </span>
              </Card>
              <Card className="flex items-center gap-4 p-4 dark:bg-gray-800 shadow-md">
                <FaLaptopCode
                  size={30}
                  className="text-purple-600 dark:text-purple-400"
                />
                <span className="text-gray-900 dark:text-white font-medium">
                  Email Security (Cisco ESA)
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
