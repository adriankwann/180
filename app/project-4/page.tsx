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
              Part A
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
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/im_left.jpg"
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
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/im_middle.jpg"
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
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/im_right.jpg"
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
              Set 2: Oakland to SF
            </h3>

            <DoublePhoto
              photo1={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/im_left_sf.jpg',
                description: 'Figure 1.4: Oakland',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/im_right_sf.jpg',
                description: 'Figure 1.5: SF',
              }}
            />

            <h3 className="text-md font-semibold mt-3 text-slate-500 dark:text-slate-300 text-left">
              Set 3: Berkeley
            </h3>

            <DoublePhoto
              photo1={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/im_left_berk.jpg',
                description: 'Figure 1.6: Berkeley 1',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/im_right_berk.jpg',
                description: 'Figure 1.7: Berkeley 2',
              }}
            />

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
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/tv.jpg',
                description: 'Figure 4.1: TV',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/tv_warped.jpg',
                description: 'Figure 4.2: Rectified TV',
              }}
            />

            <DoublePhoto
              photo1={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/edc_rescale.jpg',
                description: 'Figure 4.3: EDC Box',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/warped_edc.jpg',
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
            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              My approach was as follows: I first chose a photo to be the
              &quot;plane&quot;, where all the other photos would be warped into
              via the labelled correspondences. After warping one image to the
              plane of the other, I then found the corners of the warped image
              and the other image, and made a mask for each. Here&apos;s an
              example of that:
            </p>

            <DoublePhoto
              photo1={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/warped_left.jpg',
                description: 'Figure 5.1: Warped Left Image onto Center Image',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mask_left.jpg',
                description: 'Figure 5.2: Mask for the Warped Left Image',
              }}
            />
            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              I then generated a blend/feathered mask for each of the original
              masks. This is done by using bwdist, which computes the distance
              transform of each mask. For areas where there is no overlap
              between the masks, we simply set the blend mask to 1. For areas
              where there exists an overlap, we use the distance transform to
              create a gradient such that the blending will be smooth.
              Here&apos;s an example of that:
            </p>

            <DoublePhoto
              photo1={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mask_l.jpg',
                description:
                  'Figure 5.3: Bwdist Mask for the Warped Left Image',
              }}
              photo2={{
                src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mask_m.jpg',
                description:
                  'Figure 5.4: Bwdist Mask for the Non-Warped Center Image',
              }}
            />

            <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
              Finally, I used these masks to blend the warped image onto the
              original image. Here are the mosaics I created:
            </p>

            <h3 className="text-md font-semibold mt-3 text-slate-500 dark:text-slate-300 text-left">
              Mosaic 1: Stinson Beach
            </h3>
            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/final_mosaic.jpg"
                  alt="Stinson Beach Mosaic"
                  width={600}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 5.5: Stinson Beach Mosaic
                </p>
              </div>
            </div>

            <h3 className="text-md font-semibold mt-3 text-slate-500 dark:text-slate-300 text-left">
              Mosaic 2: Oakland to SF
            </h3>
            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/mosaic_sf_small.jpg"
                  alt="Oakland SF Mosaic"
                  width={500}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 5.6: Oakland to SF Mosaic
                </p>
              </div>
            </div>

            <h3 className="text-md font-semibold mt-3 text-slate-500 dark:text-slate-300 text-left">
              Mosaic 3: Berkeley
            </h3>
            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/mosaic_berk_small.jpg"
                  alt="Oakland SF Mosaic"
                  width={500}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 5.7: Berkeley Mosaic
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
            Part B
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            In this section, we attempt to automatically find the
            correspondences between images and using those to create our
            mosaics.
          </p>

          <h2
            id="part1"
            className="text-xl font-semibold text-left text-black dark:text-white"
          >
            Harris Points
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            The first step is to compute the Harris corner points for each
            image. I decided to not tweak the parameters (min_distance, sigma)
            as I allowed ANMS to filter the points out later. Here&apos;s the SF
            image with Harris corner points, along with the Harris matrix:
          </p>

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/harris_corners_with_im.jpg',
              description: 'Figure 6.1: SF Image with Harris Corner Points',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/harris.jpg',
              description: 'Figure 6.2: Harris Matrix',
            }}
          />

          <h2
            id="part2"
            className="text-xl font-semibold text-left text-black dark:text-white"
          >
            ANMS (Automatic Non-Maximal Suppression)
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            Clearly, we have way too many points right now (there&apos;s a total
            of around 42000). Hence, we need to suppress most of them. Here, we
            use ANMS, which essentially calculates the minimum distance to a
            stronger point for each point. This is known as the suppression
            radius, and we can filter based on either a threshold value or with
            the top N number of points. Here&apos;s the SF image with points
            after ANMS:
          </p>

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/adms.jpg',
              description: 'Figure 6.3: SF Image with ANMS Points, r=24',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/harris_corners_with_im_nip.jpg',
              description: 'Figure 6.4: SF Image with ANMS Points, N=100',
            }}
          />

          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            Note that here, a lot of points are in the sky as there happened to
            be quite a lot of aliasing. In addition, there are a lot of points
            in general if we only use thresholding; however, this turns out to
            not be an issue as when we feature match, we eliminate quite a few
            of the points.
          </p>

          <h2
            id="part3"
            className="text-xl font-semibold text-left text-black dark:text-white"
          >
            Feature Extraction
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            Once we have the points, we need to extract features from each point
            so that we can match them later on. At each of our remaining
            interest points, we sample a 40 by 40 pixel window around it and
            then sample every 5 pixels. This is done to reduce chances of
            aliasing. Here are a few examples of features extracted from the SF
            image:
          </p>
          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/feature1.jpg"
                alt="Feature 1"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Feature 1
              </p>
            </div>
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/feature2.jpg"
                alt="Feature 2"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Feature 2
              </p>
            </div>
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/feature3.jpg"
                alt="Feature 2"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Feature 3
              </p>
            </div>
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/feature4.jpg"
                alt="Feature 2"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Feature 4
              </p>
            </div>
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/feature5.jpg"
                alt="Feature 2"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Feature 5
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-left text-black dark:text-white">
            Feature Matching
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            We have now extracted a feature for each of our interest points. We
            now do the same thing for our right image which leaves us with two
            feature sets.
          </p>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            Our next step is to match the features between the left and right
            images. We do this by using nearest neighbors; however, we need to
            try and distinguish between correct and incorrect guesses. The way
            we do so is use Lowe&apos;s trick, which computes the ratio between
            the error of the 1st NN and the error of the 2nd NN; in theory, if
            it&apos;s a correct match, the ratio should be small. I decided to
            use a threshold of 0.8 for the ratio, and a K-d tree to speed up the
            nearest neighbor calculations. Here are some examples:
          </p>
          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/feature_matching.jpg',
              description: 'Features Matched',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/feature_matching_with_rejected.jpg',
              description: 'Features Matched with Rejected Points (Green)',
            }}
          />
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            We can see that the feature matching has eliminated most if not all
            the points in the sky. However, there are points matched incorrectly
            as some points in the left image would not show up in the right
            image due to the change in FOV. The next section attempts to address
            these problems:
          </p>

          <h2 className="text-xl font-semibold text-left text-black dark:text-white">
            RANSAC
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            RANSAC is an iterative algorithm used to estimate parameters of a
            mathematical model from a dataset that contains both inliers (data
            points that fit the model) and outliers (noise or incorrect data).
            In our case, we are using a 4-point RANSAC algorithm, where the
            &quot;model&quot; is our computed homography matrix. In short, we
            want to find the homography matrix that causes the least amount of
            outliers, where an outlier is defined as a point that exceeds a
            certain error threshold. We do this by selecting a random subset of
            4 points from the left image and right image, computing the
            homography matrix between them, and constantly checking if this
            improves upon our previous guess. Here are the matches after running
            RANSAC:
          </p>
          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/ransac.jpg"
                alt="Feature 2"
                width={500}
                height={400}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Features Matched after RANSAC
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-left text-black dark:text-white">
            Final Results
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            Here are the mosaics computed, both manually and automatically:
          </p>

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mosaic_sf_small.jpg',
              description: 'Mosaic: SF, Manual',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mosaic_sf_auto.jpg',
              description: 'Mosaic: SF, Auto',
            }}
            width={400}
            height={200}
          />

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mosaic_berk_small.jpg',
              description: 'Mosaic: Berkeley, Manual',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mosaic_berk_auto.jpg',
              description: 'Mosaic: Berkeley, Auto',
            }}
            width={400}
            height={200}
          />

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/final_mosaic.jpg',
              description: 'Mosaic: Stinson Beach, Manual',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/mosaic_beach_auto.jpg',
              description: 'Mosaic: Stinson Beach, Auto',
            }}
            width={400}
            height={200}
          />

          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            As seen here, there isn&apos;t too much of a difference between the
            manual and automatic mosaics. This is therefore a good result as we
            can see that the features are matched correctly.
          </p>

          <h2 className="text-xl font-semibold text-left text-black dark:text-white">
            Conclusion
          </h2>
          <p className="text-sm mt-3 mb-3 text-slate-500 dark:text-slate-300 text-left">
            The coolest thing I learned during this project was RANSAC. It is
            surprising to me that the algorithm works well, as it seems very
            brute force (we don&apos;t iterate on previous mistakes, like
            gradient descent).
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
