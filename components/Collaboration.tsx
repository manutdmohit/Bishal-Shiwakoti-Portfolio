'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMessageCircle } from 'react-icons/fi';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
};

const Collaboration = () => {
  return (
    <motion.section
      id="collaboration"
      className="relative flex justify-center items-center py-20 px-6 md:px-8 bg-gray-100 dark:bg-gray-900 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // Re-triggers animation when 30% is visible
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl"></div>

      <motion.div
        className="relative max-w-4xl mx-auto p-10 md:p-14 rounded-2xl shadow-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/10"
        variants={fadeInUp}
      >
        {/* Animated Icon */}
        <motion.div
          className="flex justify-center items-center w-16 h-16 mx-auto bg-blue-500/20 dark:bg-blue-400/20 rounded-full shadow-md"
          variants={fadeInScale}
        >
          <FiMessageCircle className="text-blue-600 dark:text-blue-400 text-4xl" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Interested in Collaborating?
        </motion.h2>

        {/* Message */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mt-4 text-left"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Let's discuss network security strategies or explore potential
          collaborations. Feel free to reach out!
        </motion.p>

        {/* Contact Button */}
        <motion.div
          className="mt-6"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2"
          >
            <FiMessageCircle className="text-xl" />
            <Link href="/contact">Let’s Connect</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Collaboration;
