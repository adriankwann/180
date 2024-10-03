'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/ui/navbar';
import { Progress } from '@/components/ui/progress';
import Footer from '@/components/ui/footer';
import DoublePhoto from '@/components/ui/double_photo';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Button } from '@/components/ui/button';

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
          Loading Face Morphing...
        </h2>
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  return (
    <>
      <NavBar />

      <div id="top" className="p-8 bg-white dark:bg-slate-950 min-h-screen">
        {/* Centered Title */}
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Project 3
          </h1>
          <p className="text-lg mt-2 text-slate-500 dark:text-slate-300">
            Face Morphing
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Separator />

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Background
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this project, we aim to produce animations of a face morphing
              between my face and someone else&apos;s face. We also compute the
              population mean of faces, as well as extrapolating features to
              create a caricature of myself.
            </p>
          </div>

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-2xl font-semibold text-left text-black dark:text-white"
            >
              Part 1. Defining Correspondences
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this part, we define the keypoints that we will utilize to
              morph faces later.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Growing up, I was always told that I looked very similar to my
              mom. Now that I&apos;ve grown, I personally think the resemblence
              has faded a bit. Time to see whether of not this is true!
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              For this project, I decided to start with the morphing of my face
              to my mother&apos;s. I deliberately chose passport photos as they
              have the same background and dimensions, which would make it
              easier to morph. In addition, I was curious about how smiles could
              affect morphing, so I chose a photo of me not smiling, and a photo
              of my mother smilling.
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj3/me.jpg',
                description: 'Figure 1.1: Me',
              }}
              photo2={{
                src: '/final_proj3/mom.jpg',
                description: 'Figure 1.2: My Mom',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              I initially defined around 32 keypoints for each image, using teh
              correspondence tool. However, after proceeding to the end of this
              project, I decided to use the same keypoint labelling technique as
              used in the Danes dataset (which I&apos;ll show later on). The
              reason for this is because I believe it yields a better result.
              Hence, I labelled 58 points for each photo. I then added the four
              corners such that the Delauney triangle can still be computed
              correctly.
            </p>
            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Finally, I found the mean point set, and then computed the
              Delauney triangle from the mean point set.
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj3/me_tri.jpg',
                description: 'Figure 1.3: Me, with Delauney Triangles',
              }}
              photo2={{
                src: '/final_proj3/mom_tri.jpg',
                description: 'Figure 1.4: Mom, with Delauney Triangles',
              }}
            />
          </div>

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-2xl font-semibold text-left text-black dark:text-white"
            >
              Part 2. Computing the &quot;Mid-way Face&quot;
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Now that we have found the key points, we can begin to morph the
              faces. The first step is to compute the midway face between my mom
              and I.
            </p>
            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Now that we have found the key points, we can begin to morph the
              faces. The first step is to compute the midway face between my mom
              and I.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              To do this, we need to complete a few steps:
            </p>

            <li className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Compute the average shape.
            </li>
            <li className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Finding the inverse affine transformation.
            </li>
            <li className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Cross dissolve the images to yield the midway face.
            </li>

            <h3 className="text-xl font-semibold text-left text-black dark:text-white mt-5">
              Computing the average shape
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              To compute the average shape, we simply take the mean point set of
              my mom and I&apos;s points. The good news is we&apos;ve already
              computed this in the previous step!
            </p>

            <h3 className="text-xl font-semibold text-left text-black dark:text-white mt-5">
              Affine Transformations
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              We loop through each of the triangles in the Delauney
              triangulation derived from the mean point set, and first compute
              the affine transformation from each original triangle to the
              average one. This essentially maps key points from the original
              image to the average one.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              We then take the inverse of this affine transformation, which
              yields a mapping from key points of the average shape to the
              original images. We have two matrices now, one for my image and
              one for my mom&apos;s image.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              This allows us to, given the average shape, find the corresponding
              pixels from the original images to then cross dissolve. Hence, we
              apply this inverse affine transformation to all points in a given
              triangle.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              To find what points are in a triangle (or any polygon), we can use
              skimage.draw.polygon to determine all the pixels that are included
              in the current triangle.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              For each average triangle, we have a point set in my image as well
              as my mom&apos;s image to then interpolate. We are then ready for
              the final step!
            </p>
            <h3 className="text-xl font-semibold text-left text-black dark:text-white mt-5">
              Cross Dissolve
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              To do this, we interpolate the pixel values from my photo as well
              as my mom&apos;s photo for each color channel. We can then average
              them to compute the midway face.
            </p>
            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj3/midway_face.jpg"
                  alt="Midway Face"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.1: Midway Face
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-2xl font-semibold text-left text-black dark:text-white"
            >
              Part 3. The Morph Sequence
            </h2>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Most of the work has now been completed. All we have to do now is to
            generalize our logic above for not only the midway image, but all
            images in between.
          </p>
          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            To do this, we define two parameters: the dissolve fraction, and the
            warp fraction. The warp fraction defines the shape that is computed,
            and the dissolve fraction determines the pixel values that is
            computed. As an example, in the first frame, the warp and dissolve
            fractions should both be 0 as that would keep my original image as
            frame 1. We define the following equations:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <Latex>{`shape = (1 - warp\_frac) * im1\_pts + warp\_frac * im2\_pts`}</Latex>
          </div>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <Latex>{`blended_pixels = (1 - dissolve\_frac) * im1\_interpolated_pixels + dissolve\_frac * im2\_interpolated_pixels`}</Latex>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            We can then run our morph function, this time generalized to all
            steps, setting dissolve_frac and warp_frac to t - the current time,
            where t is between 0 and 1. Here is a 45 frame animation:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="/final_proj3/me_mom_morph_inf.gif"
                alt="Morphing"
                width={300}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Figure 3.1: Morphing between my mom and I
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-2xl font-semibold text-left text-black dark:text-white"
            >
              Part 4. The &quot;Mean face&quot; of a population
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, we will compute the mean face of a population,
              taking faces from the Danes dataset.
            </p>

            <Link
              href="https://web.archive.org/web/20210305094647/http://www2.imm.dtu.dk/~aam/datasets/datasets.html"
              className="self-center mt-3"
            >
              {' '}
              {/* Added self-center and margin-top */}
              <Button variant="link">Danes Dataset</Button>
            </Link>

            <DoublePhoto
              photo1={{
                src: '/final_proj3/dane_1.bmp',
                description: 'Figure 4.1: Danes Dataset Example 1',
              }}
              photo2={{
                src: '/final_proj3/dane_2.bmp',
                description: 'Figure 4.2: Danes Dataset Example 2',
              }}
              width={300}
              height={200}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              The first step of the process is to parse all of the .asf files to
              find the corresponding key points. The Danes dataset all have 58
              labels. We will then add the four corners in order to copmute the
              Delauney triangulation.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj3/labelled_danes.png"
                  alt="Morphing"
                  width={700}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4.3: Danes Dataset with Key Points
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              The dataset contained relative coordinates. We first scale these
              relative coordinates with respect to the image&apos;s height and
              width to find the coordinate locations for key points. After doing
              so, we then compute the average shape of all danes by finding the
              mean point set.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here are some examples of faces being warped into the average
              shape. We set the dissolve fraction to 0 and warp fraction to 1.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj3/original_danes.png"
                  alt="Morphing"
                  width={700}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4.5: Example of Original Danes Faces
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj3/warped_danes.png"
                  alt="Morphing"
                  width={700}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4.6: Warped Faces to the Average Shape
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here is the average face of the population:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj3/avg_dane_face.jpg"
                  alt="Morphing"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4.7: Average Dane Face
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In order to comppute my face warped into the average Dane face
              shape and vice versa, I labelled my image the same way that the
              Danes dataset did. My original image was also too small; hence, I
              used a larger image so that I can crop to the same dimensions as
              the Danes dataset.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="final_proj3/me_hk.jpg"
                  alt="me in hk"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4.8: Me, again
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="final_proj3/dane_warped_into_me.jpg"
                  alt="Dane warped into me"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4.9: Average Dane, warped into my geometry
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="final_proj3/me_warped_into_dane.jpg"
                  alt="Me warped into dane"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 4.10: Me warped into the Average Dane Shape
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              No surprises here: I am definitely not Danish.
            </p>

            <div className="flex flex-col justify-center mb-4 mt-6">
              <h2
                id="part1"
                className="text-2xl font-semibold text-left text-black dark:text-white"
              >
                Part 5. Caricatures: Extrapolating from the mean
              </h2>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, I will attempt to extrapolate features from the
              average Dane&apos;s face to create a Caricature of myself. I will
              be using the same image as above.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              To do this, I will first find the difference between my point set
              and the average dane&apos;s point set. I then define alpha as a
              scalar, where as alpha increases, I will add more of the
              extrapolation to my original image.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Latex>{`diff = my\_pts - avg\_dane\_pts`}</Latex>
              </div>
              <div className="flex-none">
                <Latex>{`caricature\_pts = my\_pts + \alpha * diff`}</Latex>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here are the results:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="final_proj3/caricature_face_neg_0.5.jpg"
                  alt="me in hk"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 5.1: alpha=-0.5
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="final_proj3/caricature_face_0.3.jpg"
                  alt="Dane warped into me"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 5.2: alpha=0.3
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="final_proj3/caricature_face_0.5.jpg"
                  alt="alpha=0.5"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 5.3: alpha=0.5
                </p>
              </div>
            </div>
          </div>
          <h2
            id="part1"
            className="text-2xl font-semibold text-left text-black dark:text-white"
          >
            Part 6. Bells and Whistles
          </h2>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            For this section, I decided to do a morphing between my friends. I
            first labelled each image with the correspondence tool, using the
            same method as the Danes dataset. Here are my friend&apos;s photos:
          </p>

          <DoublePhoto
            photo1={{
              src: 'final_proj3/ethan.jpg',
              description: 'Figure 6.1: Ethan',
            }}
            photo2={{
              src: 'final_proj3/rahil.jpg',
              description: 'Figure 6.2: Rahil',
            }}
          />

          <DoublePhoto
            photo1={{
              src: 'final_proj3/drew.jpg',
              description: 'Figure 6.3: Drew',
            }}
            photo2={{
              src: 'final_proj3/max.jpg',
              description: 'Figure 6.4: Max',
            }}
          />

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            I then ran my morph code between each pair, adding a few constant
            frames in the middle.
          </p>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Here is the end result:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/friends_loop.gif"
                alt="Friend morphing"
                width={300}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Figure 6.5: Morphing between my friends
              </p>
            </div>
          </div>

          <h2
            id="part1"
            className="text-2xl font-semibold text-left text-black dark:text-white"
          >
            Conclusion
          </h2>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            That marks the end of this project - I hope you enjoyed reading
            through it!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
