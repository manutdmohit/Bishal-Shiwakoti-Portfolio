'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8">
      {/* Name & Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bishal Shiwakoti
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Network & Security Support Engineer at FirstWave ASX
      </motion.h2>

      {/* Short Tagline */}
      <motion.p
        className="mt-4 text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Securing Networks, Mitigating Threats.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link href="#projects">
          <Button variant="default" size="lg">
            View My Work
          </Button>
        </Link>
        <Link href="#contact">
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </Link>
      </motion.div>

      {/* Optional Image */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Image
          src="/profile.jpg" // Change this to an actual profile image
          alt="Bishal Shiwakoti"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
