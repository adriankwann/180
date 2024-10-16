'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/ui/navbar';
import { Progress } from '@/components/ui/progress';
import Footer from '@/components/ui/footer';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import DoublePhoto from '@/components/ui/double_photo';

export default function Project4() {
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
          Loading Mosaics...
        </h2>
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div id="top" className="p-8 bg-white dark:bg-slate-950 min-h-screen">
        {/* Centered Title */}
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Project 4
          </h1>
          <p className="text-lg mt-2 text-slate-500 dark:text-slate-300">
            Image Warping and Mosaicing
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Separator />

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Background
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this project, we aim to produce mosaics/panoramas by using
              projective warping and homographies.
            </p>
          </div>
          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-xl font-semibold text-left text-black dark:text-white"
            >
              Part 1. Shooting the Images
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here are the three sets of images that I used to create my
              mosaics.
            </p>

            <h3 className="text-md font-semibold mt-3 text-slate-500 dark:text-slate-300 text-left">
              Set 1: Stinson Beach
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              I took these photos around a month and a half ago having seen this
              project ahead of time. I didn&apos;t exactly know how to shoot
              them properly (by really concentrating on fixing the center of
              projection); however, the results still look good as it is a
              relatively non-detailed mosaic. I believe it serves are a good
              introduction to this project.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/IMG_1766.jpg"
                  alt="Stinson Beach, Left"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 1.1: Stinson Beach, Left
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/IMG_1767.jpg"
                  alt="Stinson Beach, Middle"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 1.2: Stinson Beach, Middle
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/IMG_1768.jpg"
                  alt="Stinson Beach, Right"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 1.3: Stinson Beach, Right
                </p>
              </div>
            </div>

            <h3 className="text-md font-semibold mt-3 text-slate-500 dark:text-slate-300 text-left">
              Set 2: TBD
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              TBD
            </p>

            <h3 className="text-md font-semibold mt-3 text-slate-500 dark:text-slate-300 text-left">
              Set 3: TBD
            </h3>

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              TBD
            </p>

            <Separator />
          </div>
          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-xl font-semibold text-left text-black dark:text-white"
            >
              Part 2. Recovering Homographies
            </h2>

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, we will recover the homographies from (parameters
              of the transformation) between each pair of images. In order to do
              so, the first step is to manually label correspondences between
              each pair of images. I did this using the correspondence tool.
              Here&apos;s an example of a labelled image:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/labelled_stinson.png"
                  alt="Stinson Beach, Labelled"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 1.4: One Labelled Pair of Stinson Beach
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              For the Stinson Beach example, the correspondences were quite
              difficult to label as the images were relatively dark with minimal
              detail. However, we&apos;re not ready to solve for H.
            </p>

            <Latex>
              {`
                Given two sets of corresponding points \\((x_i, y_i)\\) from the first image and \\((x'_i, y'_i)\\) from the second image, we aim to compute the homography matrix \\( H \\) such that:

                \\[
                \\begin{pmatrix}
                x'_i \\\\
                y'_i \\\\
                1
                \\end{pmatrix}
                = H
                \\begin{pmatrix}
                x_i \\\\
                y_i \\\\
                1
                \\end{pmatrix}
                \\]

                where \\( H \\) is a 3x3 matrix.

                To compute \\( H \\), we solve the system of linear equations:

                \\[
                A h = b
                \\]

                    The unknown vector \\( h \\) consists of the 8 unknown parameters of the homography matrix \\( H \\):

                \\[
                h = 
                \\begin{pmatrix}
                h_1 \\\\
                h_2 \\\\
                h_3 \\\\
                h_4 \\\\
                h_5 \\\\
                h_6 \\\\
                h_7 \\\\
                h_8
                \\end{pmatrix}
                \\]


                For each pair of corresponding points \\((x_i, y_i)\\) and \\((x'_i, y'_i)\\), the matrix \\( A \\) has two rows. These rows are constructed as follows:

                \\[
                A = 
                \\begin{pmatrix}
                x_1 & y_1 & 1 & 0 & 0 & 0 & -x_1 x'_1 & -y_1 x'_1 \\\\
                0 & 0 & 0 & x_1 & y_1 & 1 & -x_1 y'_1 & -y_1 y'_1 \\\\
                x_2 & y_2 & 1 & 0 & 0 & 0 & -x_2 x'_2 & -y_2 x'_2 \\\\
                0 & 0 & 0 & x_2 & y_2 & 1 & -x_2 y'_2 & -y_2 y'_2 \\\\
                \\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots & \\vdots \\\\
                x_n & y_n & 1 & 0 & 0 & 0 & -x_n x'_n & -y_n x'_n \\\\
                0 & 0 & 0 & x_n & y_n & 1 & -x_n y'_n & -y_n y'_n \\\\
                \\end{pmatrix}
                \\]


                The corresponding entries for \\( b \\) are:

                \\[
                b = 
                \\begin{pmatrix}
                x'_1 \\\\
                y'_1 \\\\
                x'_2 \\\\
                y'_2 \\\\
                \\vdots \\\\
                x'_n \\\\
                y'_n
                \\end{pmatrix}
                \\]

                The homography matrix \\( H \\) is then obtained by appending a 1 and reshaping \\( h \\) into a 3x3 matrix:

                \\[
                H = 
                \\begin{pmatrix}
                h_1 & h_2 & h_3 \\\\
                h_4 & h_5 & h_6 \\\\
                h_7 & h_8 & 1
                \\end{pmatrix}
                \\]
                `}
            </Latex>

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              Given that we have 8 unknowns, we only need 4 correspondences to
              solve the equation sufficiently. However, in practice, this causes
              issues as there isn&apos;t enough information 4 points can encode.
              Hence, we aim to label more points (~10), and use a minimum norm
              least squares solver to approximate each missing value.
            </p>
          </div>

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-xl font-semibold text-left text-black dark:text-white"
            >
              Part 3. Warping the Images.
            </h2>
            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              {' '}
              In this section, we take the homographies calculated from the
              previous section and use them to warp images. The process involves
              a few key steps:{' '}
            </p>{' '}
            <ol className="text-sm mt-1 mb-3 text-slate-500 dark:text-slate-300 text-left">
              {' '}
              <li>
                {' '}
                <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
                  {' '}
                  1. First, we calculate the bounding box of the output (warped)
                  image by applying the homography matrix H to the corners of
                  the original image. This defines the area where interpolation
                  will occur.{' '}
                </p>{' '}
              </li>{' '}
              <li>
                {' '}
                <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
                  {' '}
                  2. Next, we use inverse warping to find the corresponding
                  coordinates in the input image for each pixel in the output
                  image, applying the inverse of the homography matrix H_inv.
                </p>{' '}
              </li>{' '}
              <li>
                {' '}
                <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
                  {' '}
                  3. Finally, since the mapped coordinates are often decimal
                  values, we apply linear interpolation to estimate the pixel
                  values in the output image by combining the surrounding pixel
                  information from the input image.{' '}
                </p>{' '}
              </li>{' '}
            </ol>
          </div>
          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-xl font-semibold text-left text-black dark:text-white"
            >
              Part 4. Image Rectification
            </h2>
            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, we will use the homography computation and the
              warp image function above to help us rectify images.
            </p>

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              In order to do this, we first label around the corners of the
              object in the image - this will act as one set of keypoints. The
              other set of key points will be simplify defined as a normal
              rectangle (or square). For example, knowing that my tv has an
              aspect ratio of 16:9, I used [[0, 0], [1600, 0], [0, 900], [1600,
              900]] as the second set of key points.
            </p>

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              We then compute the homography matrix between the two sets of
              points (object labelled points and desired shape points). We can
              then warp the image using the homography matrix and the warp image
              function defined above.
            </p>

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              Here are two examples:
            </p>

            <DoublePhoto
              photo1={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/IMG_2018.jpg',
                description: 'Figure 4.1: TV',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/tv_warped.jpg',
                description: 'Figure 4.2: Rectified TV',
              }}
            />

            <DoublePhoto
              photo1={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/IMG_2025.jpg',
                description: 'Figure 4.3: EDC Box',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/edc.jpg',
                description: 'Figure 4.4: Rectified EDC Box',
              }}
            />

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              We&apos;re now ready to start building mosaics!
            </p>
          </div>

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-xl font-semibold text-left text-black dark:text-white"
            >
              Part 5. Image Mosaics
            </h2>
            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, we will use the image rectification and the warp
              image function above to help us generate mosaics.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
