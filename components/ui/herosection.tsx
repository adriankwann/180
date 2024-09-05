'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import { motion } from 'framer-motion'; // Import Framer Motion for animation
import { ChevronDown } from 'lucide-react'; // Import an arrow icon from lucide-react or any other icon library

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 text-black dark:bg-slate-950 dark:text-white flex flex-col items-center justify-center relative">
      {/* Centering the content with adjusted width */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 max-w-5xl grid items-center gap-6 md:gap-10 lg:grid-cols-2">
        {/* Left Side - Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-black dark:text-white md:text-5xl lg:text-6xl">
            CS180: Intro to
          </h1>
          <h1 className="text-4xl font-bold tracking-tighter text-black dark:text-white md:text-5xl lg:text-6xl">
            Computer Vision
          </h1>
          <p className="max-w-[600px] text-gray-700 dark:text-gray-400 md:text-xl lg:text-base xl:text-xl">
            Adrian Kwan
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            {/* Use react-scroll's Link for smooth scrolling */}
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-50} // Optional offset for scrolling position
            >
              <Button>Projects</Button>
            </ScrollLink>
          </div>
        </div>

        {/* Right Side - Framer Motion Animation */}
        <div className="relative h-[400px] overflow-hidden rounded-xl flex items-center justify-center">
          <motion.div
            className="w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
      </div>

      {/* Animated Downward Arrows */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        animate={{
          y: [0, 10, 0], // Bounce effect
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-50} // Optional offset for scrolling position
        >
          <ChevronDown size={30} className="text-black dark:text-white" />
          <ChevronDown
            size={30}
            className="text-black dark:text-white mt-[-12px]"
          />
        </ScrollLink>
      </motion.div>
    </section>
  );
}
