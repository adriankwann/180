'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/ui/navbar';
import Carousel_JPGS from '@/components/ui/carousel-jpg';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const small_image_data = [
  {
    name: 'Monastery',
    image: '/monastery.jpg',
    displacements: [
      { type: 'Green', x: 2, y: -3 },
      { type: 'Red', x: 2, y: 3 },
    ],
  },
  {
    name: 'Tobolsk',
    image: '/tobolsk.jpg',
    displacements: [
      { type: 'Green', x: 2, y: 3 },
      { type: 'Red', x: 3, y: 6 },
    ],
  },
  {
    name: 'Cathedral',
    image: '/cathedral.jpg',
    displacements: [
      { type: 'Green', x: 2, y: 5 },
      { type: 'Red', x: 3, y: 12 },
    ],
  },
];

export default function Project1() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          setLoading(false);
          return 100;
        }
        return prevProgress + 20;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-950">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Loading Prokudin-Gorskii...
        </h2>
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="p-8 bg-white dark:bg-slate-950 min-h-screen">
        {/* Centered Title */}
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Project 1
          </h1>
          <p className="text-lg mt-2 text-slate-500 dark:text-slate-300">
            Images of the Russian Empire: Coloring the Prokudin-Gorskii Photo
            Collection
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Separator />

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Background
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              The Prokudin-Gorskii photo collection is an early series of color
              photographs captured by Russian photographer Sergei Mikhailovich
              Prokudin-Gorskii from 1909 to 1915. Commissioned by Tsar Nicholas
              II, Prokudin-Gorskii used a pioneering technique involving a
              special camera that took three black-and-white photos through red,
              green, and blue filters, which were then combined to create
              full-color images. His work vividly documented the diverse
              landscapes, cultures, and everyday life of the Russian Empire,
              providing a rare glimpse into early 20th-century Russia. The
              collection is celebrated as a significant achievement in
              photography, showcasing the rich cultural heritage of the era in
              vibrant detail.
            </p>
          </div>

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Overview
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              The goal of this assignment is to take the digitized
              Prokudin-Gorskii glass plate images and, using image processing
              techniques, automatically produce a color image with as few visual
              artifacts as possible. In order to do this, you will need to
              extract the three color channel images, place them on top of each
              other, and align them so that they form a single RGB color image.
              To see more examples of the Prokudin-Gorskii collection, please
              visit the Library of Congress website.
            </p>

            <Link
              href="http://www.loc.gov/exhibits/empire/making.html"
              className="self-center mt-3"
            >
              {' '}
              {/* Added self-center and margin-top */}
              <Button variant="link">Library of Congress</Button>
            </Link>
          </div>

          <div className="flex flex-col justify-center mb-10 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Final Results
            </h2>
          </div>

          {/* Two Carousels with Titles Inline */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Small Images Carousel */}
            <div className="flex flex-col items-center w-full max-w-md lg:w-1/2">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Small Images
              </h3>
              <Carousel_JPGS imageData={small_image_data} />
            </div>

            {/* Large Images Carousel */}
            <div className="flex flex-col items-center w-full max-w-md lg:w-1/2">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Large Images
              </h3>
              <Carousel_JPGS imageData={small_image_data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
