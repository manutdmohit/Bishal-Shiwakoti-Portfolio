'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 mt-4">
        <Image
          src="/network-bg.jpg"
          alt="Network Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
        <div className="absolute inset-0 bg-black opacity-40 dark:opacity-80"></div>{' '}
        {/* Adjusting opacity for better contrast */}
      </div>

      {/* Content Container (Left Side) */}
      <div className="relative z-10 text-center md:text-left md:w-1/2">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bishal Shiwakoti
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium text-white dark:text-gray-400 mt-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Network and Security Support Engineer
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-white dark:text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          CCNA & CompTIA Security+ certified | Expert in Cisco ESA and email
          security | Specializing in network security infrastructure and threat
          mitigation
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button variant="default" size="lg">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </div>

      {/* Image Container (Right Side) */}
      <motion.div
        className="relative z-10 mt-10 md:mt-0 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Image
          src="/profile.jpg"
          alt="Bishal Shiwakoti"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
