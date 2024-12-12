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
            Project 6
          </h1>
          <p className="text-lg mt-2 text-slate-500 dark:text-slate-300">
            Neural Radiance Fields
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Separator />

          <h2 className="text-2xl font-bold text-black dark:text-white mt-4">
            Part 1: Fit a Neural Field to a 2D Image
          </h2>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            Neural radiance fields represent 3D spaces; however, in order to
            setup our understanding to build NeRF, we first try and tackle a 2D
            example in this section.
          </p>

          <h3 className="text-lg font-bold text-black dark:text-white mt-4">
            Network
          </h3>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            First, we would need to create an Multilayer Perceptron network with
            Sinusoidal Positional Encoding that takes in the 2-dim pixel
            coordinates, and output the 3-dim pixel colors. Here is the MLP
            network architecture:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/mlp_img.jpg"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                MLP network architecture
              </p>
            </div>
          </div>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            And here&apos;s the positional encoding:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/positional_encoding.png"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Positional Encoding
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-black dark:text-white mt-4">
            Dataloader
          </h3>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            Next, we implement a Dataloader that randomly sample N pixels at
            every iteration for training. This is due to the fact that large
            images may causes GPU memory limit issues. The dataloader returns
            both the N * 2 2D coordinates and N * 3 3D colors of the pixels.
          </p>

          <h3 className="text-lg font-bold text-black dark:text-white mt-4">
            Loss Function, Optimizer, and Metric
          </h3>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            We use the MSE as our loss function between the predicted color and
            the groundtruth color. I also use the Adam optimizer to train the
            network with a learning rate of 1e-2, with 3000 iterations and a
            batch size of 10k.
          </p>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            MSE is a easy metric to calculate and hence we use it as our loss
            function. However, the Peak signal-to-noise ratio (PSNR) is a much
            better metric and judging the quality of the reconstruction of an
            image. Here&apos;s the equation for PSNR:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/psnr_eq.png"
                alt="MLP"
                width={300}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                PSNR Equation
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-black dark:text-white mt-4">
            Hyperparameter Tuning
          </h3>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            The first thing I tried changing was the learning rate. Here are the
            PSNR results for different learning rates:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/rate_vs_psnr.png"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Learning Rate vs. PSNR
              </p>
            </div>
          </div>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            The second thing I tried changing was L, the maximum frequency for
            positional encoding.
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/L_vs_psnr.png"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Max Frequency vs. PSNR
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-black dark:text-white mt-4">
            Results - First Image
          </h3>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            Here are the input images I used:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/im1.jpg"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Input Image
              </p>
            </div>
          </div>

          <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
            For the first image, I used a learning rate of 1e-2 and L=10. I
            achieved a PSNR of 27.02. Here are a few snapshots I took during the
            training process:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_image_iter_0.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 0
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_image_iter_7.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 7
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_image_iter_50.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 50
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_image_iter_100.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 100
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_image_iter_500.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 500
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_image_iter_1000.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 1000
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_image_final.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 3000 (Final)
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-black dark:text-white mt-4">
            Hyperparameter Tuning and Results - Second Image
          </h3>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/im2.jpg"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Second Image
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Again, I varied the learning rate first. Here are the PSNR curves
            for different learning rates:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/rate_vs_psnr_dog.png"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Learning Rate vs. PSNR
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Following this, I chose a learning rate of 1e-3. Then, I
            experimented with different max frequencies.
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/L_vs_psnr_dog.png"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Max Frequency vs. PSNR
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Finally, I chose a max frequency of 30. This gave me a PSNR of
            28.48. Here&apos;s the PSNR curve:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/psnr_final_dog.png"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                PSNR Curve for Dog Image
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Finally, here are some snapshots I took during the training process:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_dog_image_iter_0.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 0
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_dog_image_iter_7.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 7
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_dog_image_iter_50.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 50
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_dog_image_iter_100.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 100
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_dog_image_iter_500.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 500
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_dog_image_iter_1000.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 1000
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="https://ak-cs180.s3.us-east-2.amazonaws.com/eval_dog_image_final.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Iteration 3000 (Final)
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Part 2: Fit a Neural Radiance Field from Multi-view Images
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Now we can start using a neural radiance field to represent a 3D
            space. We use the lego scene from the original NeRF paper.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
