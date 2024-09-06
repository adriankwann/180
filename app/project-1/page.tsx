'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/ui/navbar';
import Carousel_JPGS from '@/components/ui/carousel-jpg';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Footer from '@/components/ui/footer';

const small_image_data = [
  {
    name: 'Monastery',
    image: '/final_proj1/monastery_crop.jpg',
    displacements: [
      { type: 'Green', x: 2, y: -3 },
      { type: 'Red', x: 2, y: 3 },
    ],
  },
  {
    name: 'Tobolsk',
    image: '/final_proj1/tobolsk_crop.jpg',
    displacements: [
      { type: 'Green', x: 2, y: 3 },
      { type: 'Red', x: 3, y: 6 },
    ],
  },
  {
    name: 'Cathedral',
    image: '/final_proj1/cathedral_crop.jpg',
    displacements: [
      { type: 'Green', x: 2, y: 5 },
      { type: 'Red', x: 3, y: 12 },
    ],
  },
];

const large_image_data = [
  {
    name: 'Emir',
    image: '/final_proj1/emir_crop.jpg',
    displacements: [
      { type: 'Green', x: 21, y: 50 },
      { type: 'Red', x: 40, y: 105 },
    ],
  },
  {
    name: 'Church',
    image: '/final_proj1/church_crop.jpg',
    displacements: [
      { type: 'Green', x: 4, y: 25 },
      { type: 'Red', x: -4, y: 58 },
    ],
  },
  {
    name: 'Harvesters',
    image: '/final_proj1/harvesters_crop.jpg',
    displacements: [
      { type: 'Green', x: 14, y: 59 },
      { type: 'Red', x: 11, y: 122 },
    ],
  },
  {
    name: 'Icon',
    image: '/final_proj1/icon_crop.jpg',
    displacements: [
      { type: 'Green', x: 16, y: 39 },
      { type: 'Red', x: 23, y: 89 },
    ],
  },
  {
    name: 'Lady',
    image: '/final_proj1/lady_crop.jpg',
    displacements: [
      { type: 'Green', x: 8, y: 57 },
      { type: 'Red', x: 12, y: 120 },
    ],
  },
  {
    name: 'Melons',
    image: '/final_proj1/melons_crop.jpg',
    displacements: [
      { type: 'Green', x: 10, y: 88 },
      { type: 'Red', x: 12, y: 178 },
    ],
  },
  {
    name: 'Onion Church',
    image: '/final_proj1/onion_church_crop.jpg',
    displacements: [
      { type: 'Green', x: 23, y: 52 },
      { type: 'Red', x: 35, y: 108 },
    ],
  },

  {
    name: 'Sculpture',
    image: '/final_proj1/sculpture_crop.jpg',
    displacements: [
      { type: 'Green', x: -11, y: 33 },
      { type: 'Red', x: -27, y: 140 },
    ],
  },

  {
    name: 'Self Portrait',
    image: '/final_proj1/self_portrait_crop.jpg',
    displacements: [
      { type: 'Green', x: 28, y: 78 },
      { type: 'Red', x: 36, y: 175 },
    ],
  },

  {
    name: 'Three Generations',
    image: '/final_proj1/3_gen_crop.jpg',
    displacements: [
      { type: 'Green', x: 15, y: 57 },
      { type: 'Red', x: 9, y: 112 },
    ],
  },

  {
    name: 'Train',
    image: '/final_proj1/train_crop.jpg',
    displacements: [
      { type: 'Green', x: -2, y: 40 },
      { type: 'Red', x: 29, y: 85 },
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

          <Separator />

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

          <Separator />

          <div className="flex flex-col mb-4 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Process
            </h2>

            {/* Flex container for the first sentence and image */}
            <div className="flex flex-col lg:flex-row justify-between items-start mt-3 gap-4">
              {/* First sentence on the left */}
              <div className="flex-1">
                <p className="text-sm text-slate-500 dark:text-slate-300 text-left mb-0">
                  We start by loading the images into three color channels: R,
                  G, and B. We align the red and green channels to the blue one,
                  independently. We then combine the three channels into a
                  single image, which is the final result. For small images, we
                  use an exhaustive search between (-15, 15) for both x and y to
                  find the best alignment.
                </p>
                <br></br>
                <h3 className="text-l font-semibold text-left text-black dark:text-white mt-1 mb-1">
                  Metric Selection
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-300 text-left">
                  The first thing we need to do is to select a metric. Simple
                  metrics include measuring the Euclidean distances between two
                  images, or the normalized cross-correlation. I used the latter
                  initially to align the images. An example of an image aligned
                  using NCC is located on the right-hand side.
                </p>
                <br></br>
                <p className="text-sm text-slate-500 dark:text-slate-300 text-left">
                  However, NCC (and other simple metrics) can be sensitive to
                  other factors like brightness. Some of the images in our
                  dataset have different brightness levels across different
                  channels; hence, we need a more robust metric that
                  doesn&apos;t involve comparing pixels directly.
                </p>
              </div>

              {/* Image on the right side */}
              <div className="flex-none lg:ml-4 mt-3 lg:mt-0">
                <Image
                  src="/cathedral_ncc.jpg"
                  alt="Cathedral aligned using NCC"
                  width={300} // Adjust the width as needed
                  height={200} // Adjust the height as needed
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-2">
                  Figure 1: Cathedral image aligned using NCC
                </p>
              </div>
            </div>

            {/* Continue the text below the first image */}
            <div className="mt-3">
              <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
                Hence, I elected to use Structural Similarity in
                skimage.metrics. This detects objects and edges in the photos
                rather than relying on pixel values; in theory, this will help
                us align the images better. For the rest of the project, I used
                SSIM instead of NCC.
              </p>
            </div>

            {/* Flex container for the last two images, centered */}
            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/emir_ncc.jpg" // Replace with the path to your first image
                  alt="First image example"
                  width={300} // Adjust the width as needed
                  height={200} // Adjust the height as needed
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2: Emir aligned with NCC
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="/emir.jpg" // Replace with the path to your second image
                  alt="Second image example"
                  width={300} // Adjust the width as needed
                  height={200} // Adjust the height as needed
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 3: Emir aligned with SSIM
                </p>
              </div>
            </div>
            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              As one can see, NCC struggles with this photo as the brightness
              levels vary across color channels. SSIM produces a much better
              result.
            </p>

            <h3 className="text-l font-semibold text-left text-black dark:text-white mt-4 mb-1">
              Image Pyramid
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left mb-0">
              For large images, we can&apos;t use exhaustive search as it is too
              computationally expensive. Hence, we elect to implement an
              coarse-to-fine image pyramid from scratch. This involves rescaling
              our original images to a smaller size and aligning them first. A
              small shift in the smaller image corresponds to a larger shift in
              the original image, cutting out much of the search process.
            </p>
            <br></br>
            <p className="text-sm text-slate-500 dark:text-slate-300 text-left">
              In addition, I elected to decrease the search range as we go from
              coarse to fine. This is because of two reasons:
            </p>
            <p className="text-sm mt-2 text-slate-500 dark:text-slate-300 text-left">
              1. As we go from coarse to fine, the images are already roughly
              aligned. Hence, we don&apos;t need to search as much.
            </p>
            <p className="text-sm mt-2 text-slate-500 dark:text-slate-300 text-left">
              2. np.roll gets exponentially slower as the alignment range
              increases. Hence, we need to decrease the search range to keep the
              runtime manageable.
            </p>

            <h3 className="text-l font-semibold text-left text-black dark:text-white mt-4 mb-1">
              Attempted Border Cropping
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left mb-0">
              After computing the alignemnt and aligning the images, there are
              several borders that can be cropped out. For example, the original
              photos had black and white borders on the side of the images; in
              addition, there now exists color borders as after we shift certain
              channels, the edges may not be lined up anymore. Hence, I
              attempted to resolve this by detecting these borders using edge
              detection.
            </p>
            <br></br>
            <p className="text-sm text-slate-500 dark:text-slate-300 text-left">
              I decided to use Canny edge detection with a gaussian blur as I
              saw in the documentation of cv2.canny. However, I wasn&apos;t sure
              exactly what to do with this.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/edges.png"
                  alt="Edge detected image"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4: Harvesters, Canny Edges
                </p>
              </div>
            </div>

            <p className="text-sm mt-2 text-slate-500 dark:text-slate-300 text-left">
              I decided to use a naive approach. I first set a few thresholds
              for where I would search for borders. For example, in order to
              detect the left border, I set the x range to [0, im_size[0]//6], a
              completely arbitrary number that I estimated. I did the same for
              the right, top, and bottom ones.
            </p>
            <p className="text-sm mt-2 text-slate-500 dark:text-slate-300 text-left">
              This allowed me to crop the white borders out; however, I was
              unable to figure out a better way to crop out all borders. I
              suspect that a more complicated algorithm was necessary for this
              task, or it involves the use of some clever masking.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/harvesters.jpg"
                  alt="No crop harvesters"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 5: Harvesters, Original
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="/final_proj1/harvesters_crop.jpg"
                  alt="Cropped harvesters"
                  width={290}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 6: Harvesters, Cropped
                </p>
              </div>
            </div>
          </div>

          <Separator />
          <div className="flex flex-col justify-center mb-10 mt-6">
            <h2 className="text-2xl font-semibold text-center text-black dark:text-white">
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
              <Carousel_JPGS imageData={large_image_data} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
