'use client';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Name & Job Title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Bishal Shiwakoti</h2>
            <p className="text-gray-400 text-sm mt-2">
              Network & Security Support Engineer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 md:mt-0">
            <ul className="flex space-x-6 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="mt-6 md:mt-0 flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61574213761720"
              target="_blank"
            >
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://www.instagram.com/bcwakoti" target="_blank">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bishalshiwakoti/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; {currentYear} Bishal Shiwakoti. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
