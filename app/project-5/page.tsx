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

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-3">
            1.3: One-Step Denoising
          </h3>
          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            In this section, we use a pretrained model to denoise the images. We
            have access to a UNet that maps between x_0 and x_t pairs of images,
            which as a reminder are the original image and the noisy image at
            timestep t. We essentially recover the gaussian noise added between
            x_0 and x_t, and subtract it all from x_t in one go (hence, the name
            one-step denoising). Taking the same noisy images at t = 250, 500,
            750, we now yield these results:
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

          <div className="flex justify-center gap-4 mt-8 mb-2">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/cleaned_250.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=250, one-step denoised
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/cleaned_500.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=500, one-step denoised
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/cleaned_750.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=750, one-step denoised
              </p>
            </div>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Compared to the classical approach, the one-step denoising method is
            clearly a lot better. We still see a dropoff in quality as more
            noise was added (we lost details in t=750 compared to t=250).
          </p>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-3">
            1.4: Iterative Denoising
          </h3>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Diffusion models were designed to be denoised iteratively, not all
            in one step. Hence, in this section, we attempt to implement just
            that.
          </p>
          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Suppose that we start at t=1000. We could go from 1000 and iterative
            1000 times until we hit zero. However, this is slow and requires a
            lot of compute. In reality, we can make the process shorter and
            cheaper by just skipping a few steps at a time. In our case, we
            start at step 990, and skip 30 steps each time.
          </p>
          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Given that t is our current step, and t&apos; is our desired next
            step, we can compute the next image x_t&apos; as follows:
          </p>

          <div className="flex justify-center mt-4">
            <Latex>{`$x_{t'} = \\frac{\\sqrt{\\bar{\\alpha}_{t'} \\beta_t}}{1 - \\bar{\\alpha}_t} x_0 + \\frac{\\sqrt{\\alpha_t (1 - \\bar{\\alpha}_{t'})}}{1 - \\bar{\\alpha}_t} x_t + v_\\sigma$`}</Latex>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Here are the intermediate images we see while running iterative
            denoising:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/iter_denoise_time_690.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=690
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/iter_denoise_time_540.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=540
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/iter_denoise_time_390.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=390
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/iter_denoise_time_240.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=240
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/iter_denoise_time_90.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                t=90
              </p>
            </div>
          </div>

          <p className="text-sm mt-5 text-slate-500 dark:text-slate-300 text-left">
            And here are all the denoising methods&apos; results we have seen:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-2">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Campanile
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/blur_filtered.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Classical Denoise
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/clean_one_step.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                One-Step Denoise
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/iter_cleaned.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iterative Denoise
              </p>
            </div>
          </div>
          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            We are still missing details in the iterative denoise approach;
            however, one can clearly see that the background is much more clear
            compared to one-step denoising. We also retain the shape of the
            Campanile much better.
          </p>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-3">
            1.5: Diffusion Model Sampling
          </h3>
          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            In this section, we use the same iterative denoising function we
            just used; however, instead of starting at timestep 10, we start at
            timestep 0 which is effectively pure noise. We then use the prompt
            &quot;a high quality photo&quot; to see what type of images the
            model now generates. Here are the results:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-2">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_1.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 1
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_2.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 2
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_3.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 3
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_4.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 4
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_5.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 5
              </p>
            </div>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Some of these images look ok, such as sample 2 and sample 4.
            However, the others seem to be quite bad. We attempt to address this
            in the next section.
          </p>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-3">
            1.6: Classifer Free Guidance
          </h3>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            In order to improve the quality of the images we generated, we use
            Classifier Free Guidance to help. Essentially, we now not only
            compute a conditional noise estimate, but also an unconditional one.
            We then formulate our overall noise estimation to be:
          </p>

          <div className="flex justify-center mt-4">
            <Latex>{`$\\epsilon = \\epsilon_u + \\gamma (\\epsilon_c - \\epsilon_u)$`}</Latex>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Where gamma is the scale variable we&apos;re interested in. When
            gamma = 0, we use the unconditional noise estimate, and when gamma =
            1, we use the conditional noise estimate. However, things become
            interested when we use gamma {'>'} 1, as that causes the image
            generation to become better.
          </p>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            Here are five samples using CFG and a gamma value of 7.
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_cfg_1.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 1, CFG
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_cfg_2.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 2, CFG
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_cfg_3.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 3, CFG
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_cfg_4.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 4, CFG
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/sample_cfg_5.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sample 5, CFG
              </p>
            </div>
          </div>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            We can see that the images look much better now.
          </p>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-3">
            1.7: Image-to-image Translation
          </h3>

          <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
            We now use the iterative denoise function with CFG defined above to
            gradually generate images that become closer and closer to our
            source image. We do this by adding t timesteps with of noise, then
            passing that back into our CFG iterative denoise function.
            Theoretically, as the t we choose get's higher and higher, we get
            closer and closer to our original image. Since we still have a
            strided timestep system, we elect to use the following indices:{' '}
            {'['}1, 3, 5, 7, 10, 20{']'}. Here are the results:
          </p>

          <h4 className="text-md font-semibold text-left text-black dark:text-white mt-3">
            Campanile
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_sdedit_1.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 1
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_sdedit_3.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 3
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_sdedit_5.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 5
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_sdedit_7.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 7
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_sdedit_10.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 10
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_sdedit_20.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 20
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Campanile
              </p>
            </div>
          </div>

          <h4 className="text-md font-semibold text-left text-black dark:text-white mt-3">
            Dog
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dogs_sdedit_1.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 1
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dogs_sdedit_3.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 3
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dogs_sdedit_5.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 5
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dogs_sdedit_7.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 7
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dogs_sdedit_10.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 10
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dogs_sdedit_20.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 20
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Dog
              </p>
            </div>
          </div>

          <h4 className="text-md font-semibold text-left text-black dark:text-white mt-3">
            Shoe
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/shoe_sdedit_1.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 1
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/shoe_sdedit_3.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 3
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/shoe_sdedit_5.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 5
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/shoe_sdedit_7.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 7
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/shoe_sdedit_10.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 10
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/shoe_sdedit_20.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                i_start = 20
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/shoe.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Shoe
              </p>
            </div>
          </div>

          <h3 className="text-md font-semibold text-left text-black dark:text-white mt-3">
            1.7.1: Editing Hand-Drawn and Web Images
          </h3>
        </div>
        <div />
      </div>
    </div>
  );
}
