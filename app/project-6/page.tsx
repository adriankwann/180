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

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-4">
            Part 2.1: Create Rays from Cameras
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Before continuing, we need to define a few conversion functions for
            pixels.
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            The first step is to create a Camera to World Coordinate Conversion.
            Here is the formulation of how to do World to Camera conversion, and
            we will be doing the inverse of this process:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/w2c.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                W2C
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            The matrix above is the w2c or extrinsic matrix.
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            The second thing we need to do is a Pixel to Camera Coordinate
            Conversion. Here&apos;s the formulation:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/p2c.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Pixel to Camera
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="final_proj/K.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                K: Intrinsic Matrix
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Finally, we define a Pixel to Ray conversion, which yields the ray
            origin and ray direction.
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/ray_o.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Ray Origin
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="final_proj/ray_dir.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Ray Direction
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-4">
            Part 2.2: Sampling
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            In part 1, we randomly sampled on a single image to get the pixel
            color and pixel coordinates. Now given a task of sampling N rays, I
            implemented to first sample M images, and then sample N // M rays
            from every image.
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            In this section, we also implement a Sampling Points along Rays
            function. Essentially, given a ray, we have to convert it into a
            point in 3D space. We essentially uniformly create some samples
            along the ray and set this to t, with some perturbation to allow for
            more varying point locations. We then define x = R_o + R_d * t.
          </p>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-4">
            Part 2.3: Putting the Dataloading All Together
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            In this section, we need to write a dataloader that randomly sample
            pixels from multiview images, and return ray origin, ray direction
            and pixel colors from the dataloader. Here are the visualizations:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/sample_rays.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Sampling 100 rays
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="final_proj/random_rays_one_img.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Random rays from first image
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="final_proj/top_left.png"
                alt="MLP"
                width={250}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Random rays from top left of first image
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-4">
            Part 2.4: Neural Radiance Field
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Here&apos;s the architecture of the network we are using:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/nerf_mlp.png"
                alt="MLP"
                width={500}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                MLP
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Compared to part 1, there are a few changes. First, the network is
            now a lot deeper as our task has gotten considerably harder. We
            return both a density and the color, and we use a sigmoid function
            to get the color to fall in between 0 and 1, and use the ReLU
            function to get the density to be positive. We still use the
            positional encoding function defined in part 1; however, we now need
            to encode the ray direction alongside the coordinates, using a max
            frequency L of 4 and 10 respectively. Note that we inject the
            encoded ray direction by concating after the split to predict color;
            this seems to have a positive effect on our training results.
          </p>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-4">
            Part 2.5: Volumetric Rendering
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            The volume rendering equation is:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/volrend.png"
                alt="MLP"
                width={350}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Volrend
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-4">
            Results
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            I trained the model for 1500 steps, with a batch size of 10k and
            learning rate of 5e-4. I achieved a final validation PSNR of 23.64.
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Here are the training and validation PSNR curves:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/train_psnr_nerf.png"
                alt="MLP"
                width={350}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Training PSNR
              </p>
            </div>

            <div className="flex-none">
              <Image
                src="final_proj/val_psnr_nerf.png"
                alt="MLP"
                width={350}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Validation PSNR (every 100 steps)
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            Here are some snapshots I took of the training process using the
            first validation image:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/val_ims_nerf.png"
                alt="MLP"
                width={900}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Training Progress
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-3">
            And finally, here&apos;s the novel view video:
          </p>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <div className="flex-none">
              <Image
                src="final_proj/nerf_video.gif"
                alt="MLP"
                width={200}
                height={200}
                className="rounded-md"
              />
              <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                Novel View
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
