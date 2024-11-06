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
          Loading...
        </h2>
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <div id="top" className="p-8 bg-white dark:bg-slate-950 min-h-screen">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Project 5
          </h1>
          <p className="text-lg mt-2 text-slate-500 dark:text-slate-300">
            Fun with Diffusion Models
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Separator />
          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Part A
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this project, we aim to experiment with diffusion models.
            </p>
          </div>

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-xl font-semibold text-left text-black dark:text-white"
            >
              Part 0. Setup
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, we use the pretrained DeepFloyd model to run a
              few tests. We are given 3 text prompts to start with. I used a
              seed of 420 and set num_inference_steps to 20 initially. Here are
              some of the results, with the prompts listed below:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/oil_painting.jpg"
                  alt="Oil Painting"
                  width={250}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  An oil painting of a snowy mountain village
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/man_with_hat.jpg"
                  alt="Man With Hat"
                  width={250}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  A man wearing a hat
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/rocket_ship.jpg"
                  alt="Rocket Ship"
                  width={250}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  A rocket ship
                </p>
              </div>
            </div>

            <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
              I think the second prompt, &quot;a man wearing a hat&quot;,
              generated the most realistic photo. The other two images generated
              looked like cartoons and can be easily deduced that it was not
              real. To be fair, however, we didn&apos;t tell the model to
              generate a realistic one. However, the rocket ship especially just
              looks like an emoji. It is important to note that for each of the
              images, the image did include everything the prompt contained,
              even if it was cartoon-ish.
            </p>

            <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
              Next, I increased the number of inference steps to 100. Here are
              those results:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/oil_painting_100.jpg"
                  alt="Oil Painting"
                  width={250}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  An oil painting of a snowy mountain village
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/man_with_hat_100.jpg"
                  alt="Man With Hat"
                  width={250}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  A man wearing a hat
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/rocket_ship_100.jpg"
                  alt="Rocket Ship"
                  width={250}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  A rocket ship
                </p>
              </div>
            </div>

            <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
              Again, the man with hat prompt generated the most realistic image.
              It also seemed to have improved compared to the previous example.
              The rocket ship also has improved, goingn from an emoji to
              something in the sky. However, the oil painting in my opinoin
              regressed compared to the previous example. It seems like
              DeepFloyd does a good job of generating realistic images of
              people, but not scenary. Interestingly, it generated realistic
              scenary behind the man wearing a hat. I wonder if there was an
              emphasis on generating pictures of humans in the training data.
            </p>

            <div className="flex flex-col justify-center mb-4 mt-6">
              <Separator />

              <h2
                id="part1"
                className="text-xl font-semibold text-left text-black dark:text-white mt-3"
              >
                Part 1. Sampling Loops
              </h2>

              <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
                In this section, we will write our own sampling loops to begin
                generating images using the pretrained DeepFloyd model.
              </p>

              <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-3">
                1.1: Implementing the Forward Process
              </h3>

              <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
                In this section, we will implement the forward process of
                diffusion, which is the process of progressively adding more and
                more noise to the image. This is formally defined by:
              </p>

              <div className="flex justify-center mt-4">
                <Latex>{`$q(x_t | x_0) = \\mathcal{N}(x_t ; \\sqrt{\\bar{\\alpha}} x_0, (1 - \\bar{\\alpha}_t) \\mathbf{I})$`}</Latex>
              </div>

              <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
                In our case, we compute it as follows:
              </p>

              <div className="flex justify-center mt-4">
                <Latex>{`$x_t = \\sqrt{\\bar{\\alpha}_t} x_0 + \\sqrt{1 - \\bar{\\alpha}_t} \\epsilon \\quad \\epsilon \\sim \\mathcal{N}(0, 1)$`}</Latex>
              </div>

              <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
                This is how we get the noisy image at timestep t with regard to
                the original image x_0. Here are some samples of the forward
                process:
              </p>

              <div className="flex justify-center gap-4 mt-8 mb-8">
                <div className="flex-none">
                  <Image
                    src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile.jpg"
                    alt="250"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                  <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                    Original Campenile
                  </p>
                </div>

                <div className="flex-none">
                  <Image
                    src="https://ak-cs180.s3.us-east-2.amazonaws.com/t_250.jpg"
                    alt="250"
                    width={150}
                    height={200}
                    className="rounded-md"
                  />
                  <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                    t=250
                  </p>
                </div>

                <div className="flex-none">
                  <Image
                    src="https://ak-cs180.s3.us-east-2.amazonaws.com/t_500.jpg"
                    alt="500"
                    width={150}
                    height={200}
                    className="rounded-md"
                  />
                  <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                    t=500
                  </p>
                </div>

                <div className="flex-none">
                  <Image
                    src="https://ak-cs180.s3.us-east-2.amazonaws.com/t_750.jpg"
                    alt="750"
                    width={150}
                    height={200}
                    className="rounded-md"
                  />
                  <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                    t=750
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-3">
              1.2: Classical Denoising
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here, we attempt to denoise the images from above using classical
              methods. Specifically, we will be using Gaussian blur filtering to
              try and remove the noise added. Here are the results, using a
              sigma value of 2 and a kernel size of 5x5.
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-2">
              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/t_250.jpg"
                  alt="250"
                  width={150}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  t=250, noisy
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/t_500.jpg"
                  alt="500"
                  width={150}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  t=500, noisy
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="https://ak-cs180.s3.us-east-2.amazonaws.com/t_750.jpg"
                  alt="750"
                  width={150}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  t=750, noisy
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/denoised_t_250.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=250, denoised
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/denoised_t_500.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=500, denoised
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/denoised_t_750.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=750, denoised
              </p>
            </div>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            As one can see, classical methods don&apos;t work well for denoising
            these images. In the next few sections, we will implement a better
            method.
          </p>
        </div>
        <div />
      </div>
    </div>
  );
}
