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
              1.0. Setup
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
            Theoretically, as the t we choose gets higher and higher, we get
            closer and closer to our original image. Since we still have a
            strided timestep system, we elect to use the following indices:{' '}
            {'['}1, 3, 5, 7, 10, 20{']'}. Here are the results:
          </p>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-5">
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

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-3">
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

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-3">
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

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            The above process works really well when we have a nonrealistic
            image and want to convert it into a realistic one. We have two ways
            of generating non-realistic images:
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            1. Searching the Internet
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            2. Hand-drawing
          </p>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Here are some examples!
          </p>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-3">
            Car: Web Image
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_sdedit_realistic_1.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_sdedit_realistic_3.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_sdedit_realistic_5.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_sdedit_realistic_7.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_sdedit_realistic_10.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_sdedit_realistic_20.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_og.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Car
              </p>
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-3">
            Building: Drawn Image
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/building_sdedit_realistic_1.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/building_sdedit_realistic_3.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/building_sdedit_realistic_5.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/building_sdedit_realistic_7.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/building_sdedit_realistic_10.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/building_sdedit_realistic_20.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/building.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Drawn Building
              </p>
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-3">
            Tree: Drawn Image
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/tree_sdedit_realistic_1.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/tree_sdedit_realistic_3.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/tree_sdedit_realistic_5.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/tree_sdedit_realistic_7.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/tree_sdedit_realistic_10.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/tree_sdedit_realistic_20.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/tree.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Drawn Tree
              </p>
            </div>
          </div>

          <h3 className="text-md font-semibold text-left text-black dark:text-white mt-3">
            1.7.2: Inpainting
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            In this section, we use the iterative denoising with CFG function
            for another use case: inpainting. We define a mask, where if the
            mask is 0, we use the original image; if the mask is 1, we fill it
            with a new generated image. Here are the results:
          </p>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-5">
            Campanile
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_inprint_mask.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Campanile Mask
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_inprint_to_replace.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Hole to Fill
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_inprinted.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Result
              </p>
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-3">
            Car
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/m240_og.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Car
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/m240_inprint_mask.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Car Mask
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/m240_inprint_to_replace.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Hole to Fill
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/m240_inprinted.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Result
              </p>
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-3">
            Dog
          </h4>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog.jpg"
                alt="250"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Dog
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_inprint_mask.jpg"
                alt="500"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Dog Mask
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_inprint_to_replace.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Hole to Fill
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_inprinted.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Result
              </p>
            </div>
          </div>

          <h3 className="text-md font-semibold text-left text-black dark:text-white mt-3">
            1.7.3: Text-Conditional Image-to-image Translation
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            So far, we have been using &quot;a high quality photo&quot; as our
            prompt. This is done so that we can generate random samples. Earlier
            on, we did image-to-image translation, where for example, we went
            from the Campanile to something completely random. What if we want
            to make it so that it wasn&apos;t random? We can use
            text-conditional image-to-image translation to achieve that. As t
            gets smaller, we should see that image getting more and more similar
            to the prompt, and further away from the original. Here are the
            results:
          </p>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Campanile, Prompt: A Rocket Ship
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_txt_conditioned_1.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_txt_conditioned_3.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_txt_conditioned_5.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_txt_conditioned_7.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_txt_conditioned_10.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campanile_txt_conditioned_20.jpg"
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

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Car, Prompt: A Pencil
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_txt_conditioned_1.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_txt_conditioned_3.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_txt_conditioned_5.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_txt_conditioned_7.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_txt_conditioned_10.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_txt_conditioned_20.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/car_og.jpg"
                alt="750"
                width={150}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Original Car
              </p>
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Dog, Prompt: A Man Wearing a Hat
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_txt_conditioned_1.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_txt_conditioned_3.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_txt_conditioned_5.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_txt_conditioned_7.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_txt_conditioned_10.jpg"
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
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/dog_txt_conditioned_20.jpg"
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
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            I personally found the car and pencil example to be particularly
            interesting. At one point, we can see both of them, where the pencil
            is in the car as the model tries to figure out which one to
            include/exclude. Similarly, we had a intermediate photo in the third
            example where the dog was wearing the hat!
          </p>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-8">
            1.8: Visual Anagrams
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            In this section, we attempt to create visual anagrams, which are
            images that combine two different prompts in interesting ways. In
            our case, when we flip the image by 180 degrees, we should see the
            other prompt come out. Here are the results:
          </p>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Prompt 1: An oil painting of people around a campfire
          </h4>
          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-2">
            Prompt 2: An oil painting of an old man
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campfile_old_man.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/campfile_old_man.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
                style={{ transform: 'scaleY(-1)' }}
              />
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Prompt 1: City skyline of skyscrapers
          </h4>
          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-2">
            Prompt 2: A large crowd of people
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/skyline_people.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/skyline_people.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
                style={{ transform: 'scaleY(-1)' }}
              />
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Prompt 1: A mountain in the distance
          </h4>
          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-2">
            Prompt 2: A deep underground cave
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/cave_mountain.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/cave_mountain.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
                style={{ transform: 'scaleY(-1)' }}
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-8">
            1.9: Hybrid Images
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            In this section, we create hybrid images, which should display one
            image from far away and another image when class. This is done by
            using highpass and lowpass filters as lowpass frequencies dominate
            as we move further and further away from the image and vice versa.
          </p>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Prompt 1/Lowpass: A lithograph of a skull
          </h4>
          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-2">
            Prompt 2/Highpass: A lithograph of waterfalls
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/hybrid_waterfall_skull.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Prompt 1/Lowpass: A pencil
          </h4>
          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-2">
            Prompt 2/Highpass: A realistic photo of a skyscraper
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/hybrid_pencil_skyscraper.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>

          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-8">
            Prompt 1/Lowpass: A lithograph of a mountain
          </h4>
          <h4 className="text-sm font-semibold text-center text-black dark:text-white mt-2">
            Prompt 2/Highpass: A lithograph of a dog
          </h4>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/hybrid_dog_mountain.jpg"
                alt="250"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
            Part B
          </h2>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            In this section, we aim to train our own diffusion model to produce
            new images based off of the MNIST dataset.
          </p>

          <h3 className="text-xl font-semibold text-left text-black dark:text-white mt-8">
            Part 1: Training a Single-Step Denoising UNet
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            We first start with implementing a simple one-step denoiser.
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-4">
            <div className="text-center text-sm inline-block">
              <Latex>{`$L = \\mathbb{E}_{z,x} \\| D_{\\theta}(z) - x \\|^2$`}</Latex>
            </div>

            <p className="text-sm text-center text-slate-500 dark:text-slate-300">
              <span>
                <Latex>{`$z$`}</Latex> = noisy image,{' '}
              </span>
              <span>
                <Latex>{`$x$`}</Latex> = image,{' '}
              </span>
              <span>
                <Latex>{`$D_{\\theta}(z)$`}</Latex> = denoised image.
              </span>
            </p>
          </div>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-4">
            1.1 Implementing the UNet
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            We first implement the UNet architecture.
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/basic_unet.png"
                alt="250"
                width={650}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                UNet Architecture
              </p>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            And here are the UNet operations used above:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/unet_ops.png"
                alt="250"
                width={650}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                UNet Operations
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-4">
            1.2: Using the UNet to Train a Denoiser
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            We then use the UNet to train a denoiser. In order to do so, we pass
            in training pairs (z, x), where z is the noisy MNIST image, and x is
            the clean MNIST image. For each clean image x, we can create our z
            noisy image by doing the following:
          </p>
          <div className="flex justify-center gap-4 mt-4 mb-4">
            <div className="text-center text-sm inline-block">
              <Latex>{`$z = x + \\sigma \\epsilon, \\ \\text{where} \\ \\epsilon \\sim N(0, \\mathbb{I}).$`}</Latex>
            </div>
          </div>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Sigma here defines how much noise we want to add to the original
            clean image. Here is a visualization demonstrating that:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/viz_sigmas.png"
                alt="250"
                width={650}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Different Noising Processes
              </p>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Note that in reality, we are batching these operations together with
            respect to the training batch size. Hence, we&apos;re computing
            multiple noisy images at once. Now that we have our training pairs,
            we can start training.
          </p>

          <h4 className="text-md font-semibold text-left text-black dark:text-white mt-4">
            1.2.1 Training
          </h4>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Here, we start training the model. Here are the parameters we are
            using:
          </p>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Batch size: 256
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Number of epochs: 5
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Optimizer: Adam with learning rate of 1e-4
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Number of Hidden Dimensions = 128 for UNet
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/training_loss.png"
                alt="250"
                width={650}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Training Loss for Single Step Denoiser
              </p>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            And here are the results:
          </p>

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/first_epoch_viz.png',
              description: '1st Epoch',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/final_epoch_viz.png',
              description: '5th Epoch',
            }}
          />

          <h4 className="text-md font-semibold text-left text-black dark:text-white mt-4">
            1.2.2 Out-of-Distribution Testing
          </h4>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Now, we use different sigma values for our test set to see how well
            our model can generalize.
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/out_of_dist.png"
                alt="250"
                width={650}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Results on digits from the test set with varying noise levels.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-left text-black dark:text-white mt-4">
            Part 2: Training a Diffusion Model
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Now, we&apos;re ready to train the full diffusion model. In the
            previous section, we solved for this equation:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-4">
            <div className="text-center text-sm inline-block">
              <Latex>{`$L = \\mathbb{E}_{z,x} \\| D_{\\theta}(z) - x \\|^2$`}</Latex>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Now, we solve for this equation:
          </p>
          <div className="flex justify-center gap-4 mt-4 mb-4">
            <div className="text-center text-sm inline-block">
              <Latex>{`$L = \\mathbb{E}_{\\epsilon, z} \\| \\epsilon_{\\theta}(z) - \\epsilon \\|^2$`}</Latex>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Essentially, we previously predicted the image. Now, we predict the
            noise added at each step. These are equivalent.
          </p>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            However, we saw in part A that doing one-step denoising is not a
            good idea. Instead, we should use iterative denoising. In part A,
            given that we were generating more complicated images, we did T=1000
            iterations. Now, we do T=300, since we&apos;re only generating MNIST
            digits.
          </p>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            We first define our betas and alphas just like in part A, where when
            t is close to 0, alpha_bar is close to 1, and when t is close to T,
            alpha_bar is close to 0. Our final objective is:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-4">
            <div className="text-center text-sm inline-block">
              <Latex>{`$L = \\mathbb{E}_{\\epsilon, x_0, t} \\| \\epsilon_{\\theta}(x_t, t) - \\epsilon \\|^2.$`}</Latex>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-4">
            2.1 Adding Time Conditioning to UNet
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            The first modification we need to do is add time conditioning to our
            original UNet architecture. We first define a new block, the Fully
            Connected Block (FCBlock), to do so.
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/FCBlock.png"
                alt="250"
                width={650}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Fully Connected Block
              </p>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            And here is the updated UNet architecture, incorporating FCBlocks.
          </p>
          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/TimeConditionalUNet.png"
                alt="250"
                width={650}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Time Conditional UNet
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-4">
            2.2 Training the UNet
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Here&apos;s the training algorithm we use:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/TimeTrainingAlg.png"
                alt="250"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Training Algorithm For Time Conditional UNet
              </p>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            And here are the parameters we use:
          </p>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Batch size: 128
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Number of epochs: 20
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Optimizer: Adam with initial learning rate of 1e-3 and exponential
            learning rate decay scheduler with gamma=0.1^(1.0/num_epochs).
          </p>
          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            - Number of Hidden Dimensions: 64
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/time_ddpm_training_loss.png"
                alt="250"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Training Loss For Time Conditional UNet
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-4">
            2.3 Sampling from the UNet
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Now we need to test how well our UNet is able to generate new
            samples. Here&apos;s the algorithm we use:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/TimeSampling.png"
                alt="250"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sampling Algorithm For Time Conditional UNet
              </p>
            </div>
          </div>

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/time_ddpm_samples_epoch_5.png',
              description: 'Samples, Epoch=5',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/time_ddpm_samples_epoch_20.png',
              description: 'Samples, Epoch=20',
            }}
          />

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            As one can see, it does a OK job at generating new samples. However,
            it&apos;s likely that the model doesn&apos;t have a good
            understanding of different digits just yet. Hence, we need to also
            condition on the class of each digit in order to make this as robust
            as possible.
          </p>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-4">
            2.4 Adding Class-Conditioning to UNet
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            As mentioned above, in order to give us more control over what we
            generate, we can add one more condition: the class of each digit.
            However, we should still allow the model to generate without the
            class condition; hence, we implement a dropout rate of 0.1, where we
            occasionally drop the class condition and set it to a zero vector.
            Otherwise, we set it to a one-hot vector of length 10 (the number of
            classes we have here).
          </p>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Here&apos;s the training algorithm we use:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/ClassTraining.png"
                alt="250"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Training Algorithm For Class Conditional UNet
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/class_ddpm_training_loss.png"
                alt="250"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Training Loss For Class Conditional UNet
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-left text-black dark:text-white mt-4">
            2.5 Sampling from the Class-Conditioned UNet
          </h3>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            We use the same sampling process here, albeit adding the class
            condition. In addition, we also add classifier-free guidance from
            part A in order to improve the results. Here&apos; the sampling
            algorithm we use:
          </p>

          <div className="flex justify-center gap-4 mt-4 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/ClassSampling.png"
                alt="250"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sampling Algorithm For Class Conditional UNet
              </p>
            </div>
          </div>

          <p className="text-sm text-left text-slate-500 dark:text-slate-300 mt-3">
            Here&apos;s the results:
          </p>

          <DoublePhoto
            photo1={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/class_ddpm_samples_epoch_5.png',
              description: 'Samples, Epoch=5',
            }}
            photo2={{
              src: 'https://ak-cs180.s3.us-east-2.amazonaws.com/class_ddpm_samples_epoch_20.png',
              description: 'Samples, Epoch=20',
            }}
          />
        </div>
        <div />
      </div>

      <Footer />
    </div>
  );
}
