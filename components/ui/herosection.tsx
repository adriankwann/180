'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 text-black dark:bg-slate-950 dark:text-white">
      {/* Centering the content with side padding */}
      <div className="container mx-auto px-6 md:px-10 lg:px-16 grid items-center gap-6 md:gap-10 lg:grid-cols-2">
        {/* Left Side - Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-black dark:text-white md:text-5xl lg:text-6xl">
            CS180: Computer Vision
          </h1>
          <p className="max-w-[600px] text-gray-700 dark:text-gray-400 md:text-xl lg:text-base xl:text-xl">
            Adrian Kwan
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/project-1">
              <Button>Project 1</Button>
            </Link>
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
    </section>
  );
}
