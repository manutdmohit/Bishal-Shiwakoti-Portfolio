'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full bg-white dark:bg-gray-900 py-4 px-6 flex justify-between items-center z-50"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      }}
    >
      {/* Logo / Name */}
      <Link href="/">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          Bishal Shiwakoti
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500 transition duration-200  hover:scale-105"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden flex flex-col items-end">
        <button
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <motion.div
          className={`absolute top-14 right-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md w-48 ${
            isMenuOpen ? '' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -50 }}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 0.5,
          }}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-gray-800 dark:text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105 py-2"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Theme Toggle using ShadCN */}
      <ThemeToggle />
    </motion.nav>
  );
};

export default Navbar;
