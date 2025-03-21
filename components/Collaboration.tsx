'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Collaboration = () => {
  return (
    <section
      id="collaboration"
      className="py-16 px-6 md:px-8 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Interested in Collaborating?
        </motion.h2>

        {/* Message */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's discuss network security strategies or explore potential
          collaborations. Feel free to reach out!
        </motion.p>

        {/* Contact Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3"
          >
            <Link href="/contact">Let’s Connect</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
