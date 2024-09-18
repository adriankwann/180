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
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import DoublePhoto from '@/components/ui/double_photo';
import { Link as ScrollLink } from 'react-scroll';

export default function Project2() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-950">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Loading Filters and Frequencies...
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
            Project 2
          </h1>
          <p className="text-lg mt-2 text-slate-500 dark:text-slate-300">
            Fun with Filters and Frequencies!
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Separator />

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2 className="text-2xl font-semibold text-left text-black dark:text-white">
              Background
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this project, we explore ways to apply different filtering and
              masking techniques to images. Since this project contains a lot of
              information, I have included an index below that allows you to
              skip to sections you&apos;re interested in!
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-semibold text-left text-black dark:text-white">
              Index
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <ScrollLink
                  to="part1"
                  smooth={true}
                  duration={500}
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  Part 1: Fun with Filters
                </ScrollLink>
                <ul className="list-disc pl-4">
                  <li>
                    <ScrollLink
                      to="part1-section1"
                      smooth={true}
                      duration={500}
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      Part 1.1: Finite Difference Operator
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="part1-section2"
                      smooth={true}
                      duration={500}
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      Part 1.2: Derivative of Gaussian (DoG) Filter
                    </ScrollLink>
                  </li>
                </ul>
              </li>
              <li>
                <ScrollLink
                  to="part2"
                  smooth={true}
                  duration={500}
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  Part 2: Fun with Frequencies
                </ScrollLink>
                <ul className="list-disc pl-4">
                  <li>
                    <ScrollLink
                      to="part2-section1"
                      smooth={true}
                      duration={500}
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      Part 2.1: Image Sharpening
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="part2-section2"
                      smooth={true}
                      duration={500}
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      Part 2.2: Hybrid Images
                    </ScrollLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <Separator />

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part1"
              className="text-2xl font-semibold text-left text-black dark:text-white"
            >
              Part 1: Fun with Filters
            </h2>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this part, we built intuitions about 2D convolutions and
              filtering.
            </p>

            <h3
              id="part1-section1"
              className="text-l font-semibold text-left text-black dark:text-white mt-4"
            >
              Part 1.1: Finite Difference Operator
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              The finite difference operator is a popular tool for image
              processing - it is used to calculate derivatives of an image
              within a finite domain. For this part, we will be using the
              following values:
            </p>

            <div className="flex justify-center mt-4">
              <Latex>
                {`$$ D_x = \\begin{bmatrix} 1 & -1 \\end{bmatrix}, \\quad D_y = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} $$`}
              </Latex>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              We will also be using the cameraman image, as shown here:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj2/cameraman_og.png"
                  alt="Cameraman"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 1.1: Original Cameraman Image
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Our goal is to find the edges of the cameraman image. This is the
              process we take:
            </p>

            <ol className="list-decimal pl-6">
              <li className="text-sm mt-2 text-slate-500 dark:text-slate-300">
                We first convolve our cameraman image with finite distance
                operators D_x and D_y, effectively calculating the partial
                derivative in x and y of the image.
              </li>
              <li className="text-sm mt-2 text-slate-500 dark:text-slate-300">
                Compute the gradient magnitude image.
              </li>
              <li className="text-sm mt-2 text-slate-500 dark:text-slate-300">
                Binarize the gradient magnitude image by selecting an
                appropriate threshold.
              </li>
            </ol>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here are the results!
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/grad_x.jpg',
                description: 'Figure 1.2: Partial Derivative in x',
              }}
              photo2={{
                src: '/final_proj2/grad_y.jpg',
                description: 'Figure 1.3: Partial Derivative in y',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Figure 1.2 and Figure 1.3 show the partial derivatives in x and y,
              respectively. We can see that the edges are clearly visible here.
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/grad_mag.jpg',
                description: 'Figure 1.4: Gradient Magnitude Image',
              }}
              photo2={{
                src: '/final_proj2/binary.jpg',
                description: 'Figure 1.5: Binarized Gradient Magnitude Image',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              It&apos;s clear that after binarizing the gradient magnitude image
              (with threshold = 0.18), the edges become more visible. However,
              there still seems to be a lot of noise in the edges. Specifically,
              edges seem very rough by using the finite difference operator. We
              attempt to fix this in the next part.
            </p>

            <h3
              id="part1-section2"
              className="text-l font-semibold text-left text-black dark:text-white mt-4"
            >
              Part 1.2: Derivative of Gaussian (DoG) Filter
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              As mentioned above, we saw the results were rather noisy. To
              combat this, we apply a smoothing function to the image in the
              form of the Gaussian filter. We first apply the Gaussian filter to
              the cameraman image before repeating the same process as part 1.1,
              i.e: convolving with D_x and D_y respectively.
            </p>
            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here are the partial derivatives in x and y of the blurred image:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/grad_x_blur.jpg',
                description:
                  'Figure 1.6: Partial Derivative in x, blurred image',
              }}
              photo2={{
                src: '/final_proj2/grad_y_blur.jpg',
                description:
                  'Figure 1.7: Partial Derivative in y, blurred image',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              And the gradient magnitude images...
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/grad_mag_blur.jpg',
                description: 'Figure 1.8: New Gradient Magnitude Image',
              }}
              photo2={{
                src: '/final_proj2/binary_blurred.jpg',
                description:
                  'Figure 1.9: New Binarized Gradient Magnitude Image',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              As we can see here in figure 1.9, the edges are now much more
              smooth and doesn&apos;t seem to be impacted by noise as much
              compared to figure 1.5. This clearly illustrates that the Gaussian
              Filter has helped reduce the noise of the edges detected. One
              thing to note is that the threshold used here is 0.08 compared to
              0.18 in part 1.1 - i.e: the threshold used in part 1.1 is much
              higher than the threshold used in part 1.2.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Now, we try and complete the same task but this time only using
              one convolution. Previously, we first convolved with the Gaussian
              filter before convolving with the D_x and D_y operators
              respectively. Now, we can first convolve the Gaussian filter with
              D_x and D_y, obtaining a DoG filter. Then we can just convolve the
              cameraman photo with the new DoG filter. Theoretically, this
              should give us the exact same results!
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here are the DoG filters in x and y, visualized:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/DoG_x.jpg',
                description: 'Figure 1.10: Derivative of Gaussian in x, Filter',
              }}
              photo2={{
                src: '/final_proj2/DoG_y.jpg',
                description: 'Figure 1.11: Derivative of Gaussian in y, Filter',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              One small thing to note is that due to the small kernel size I
              used in my experiment, the displayed filter here is a lot more
              blurry than what appeared on my notebook.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              To verify that the one convolution process is indeed the same as
              the two convolutions process, we can take a look at the final
              binarized images for both processes. I have included Figure 1.9
              again for the sake of comparison.
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/binary_blurred.jpg',
                description: 'Figure 1.9: Final Result, Non-DoG Filter',
              }}
              photo2={{
                src: '/final_proj2/binary_dog.jpg',
                description: 'Figure 1.12: Final Result, DoG Filter',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              We used the same threshold (0.08) as before and we can clearly see
              that it&apos;s the exact same photo!
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl mt-5">
          <Separator />

          <div className="flex flex-col justify-center mb-4 mt-6">
            <h2
              id="part2"
              className="text-2xl font-semibold text-left text-black dark:text-white"
            >
              Part 2: Fun with Frequencies!
            </h2>

            <h3
              id="part2-section1"
              className="text-l font-semibold text-left text-black dark:text-white mt-4"
            >
              Part 2.1: Image Sharpening
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, we derive the unsharp masking technique. In part
              1, we discovered how the Gaussian filter can blur an image and
              make edge detection easier. In this section, we continue to
              explore the use cases of Gaussian filters, which seems to be
              endless!
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here is an image of the Taj Mahal that we&apos;re going to be
              running experiments on:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj2/taj.jpg"
                  alt="Taj Mahal"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.1: Original Taj Mahal Image
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              The Gaussian filter is also known as a low-pass filter, which only
              retains the low frequencies. In order to sharpen an image, we need
              to &apos;boost&apos; the high frequencies. Hence, we need to
              derive a high-pass filter. By subtracting the blurred image from
              the original image, we basically get rid of all low frequencies
              and only retain the high frequencies; this is the high pass filter
              we are looking for!
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              This is the equation we use (alpha is a scaling factor):
            </p>

            <div className="flex justify-center mt-4">
              <Latex>
                {`$$ \\text{Sharpened Image} = \\text{Original Image} + \\alpha \\cdot \\text{High Frequency Image} $$`}
              </Latex>
            </div>
            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here&apos;s the result, using an alpha value of 5:
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj2/sharp_taj.jpg"
                  alt="Sharp Taj Mahal"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.2: Sharpened Taj Mahal, alpha=5
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              As you can see, the patterns and edges on the Taj Mahal are now
              made more obvious. Here&apos;s another example of sharpening,
              applied to a coastline image with a long exposure:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/nature.jpg',
                description: 'Figure 2.3: Coastline Image',
              }}
              photo2={{
                src: '/final_proj2/sharp_nature.jpg',
                description: 'Figure 2.4: Sharpened Coastline',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Here, the results aren&apos;t as obvious. I decided to use a
              smaller alpha of 0.75 as I thought anything above that made the
              image look worse. The obvious differences comes from the sharper
              coastline edges in between the land and the sea. The rocks also
              look more &apos;separted&apos; with the cracks and gaps being
              enhanced too.
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              As evaluation, we can also first blur an image, and then sharpen
              it again by using this technique. Here&apos;s an example of this
              being applied to a photo of my hometown, Shanghai:
            </p>

            {/* triple photo - shanghai */}

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="final_proj2/shanghai.jpeg"
                  alt="Original Shanghai Image"
                  width={400}
                  height={500}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.5: Shanghai Image
                </p>
              </div>

              <div className="flex-none">
                <Image
                  src="final_proj2/blurred_shanghai.jpg"
                  alt="Original Shanghai Image"
                  width={400}
                  height={500}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.6: Shanghai, Blurred with ksize=25, sigma=5
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <div className="flex-none">
                <Image
                  src="final_proj2/resharped_shanghai.jpg"
                  alt="Original Shanghai Image"
                  width={400}
                  height={500}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.7: Shanghai, Resharped with alpha=10, sigma=5
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              There&apos;s a few conclusions here. It is clear that the
              resharped photo&apos;s quality is not as good as the original
              photo, especially when one pays attention to the lights on the
              skyscrapers; they now appear more rough. I also had to use a
              higher alpha value as anything lower than 7.5 would still seem
              relatively blurry. However, this still shows that the sharp
              filtering works, even for a blurry photo!
            </p>

            <h3
              id="part2-section2"
              className="text-l font-semibold text-left text-black dark:text-white mt-4"
            >
              Part 2.2: Hybrid Images
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this section, we attempt to create hybrid images! Hybrid images
              are static images that change in interpretation as a function of
              the viewing distance. The basic idea is that high frequency
              details tend to be more prominent when viewing an image from a
              close distance; on the other hand, low frequencies tend to
              dominate when viewing an image from a far distance.
            </p>

            <Link
              href="http://olivalab.mit.edu/publications/OlivaTorralb_Hybrid_Siggraph06.pdf"
              className="self-center mt-3"
            >
              {' '}
              {/* Added self-center and margin-top */}
              <Button variant="link">Original SIGGRAPH Paper</Button>
            </Link>

            <h3 className="text-sm font-semibold text-left text-black dark:text-white mt-4">
              Tanay and Etai (Failure)
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              The first thing I did was try to create a hybrid image of my
              friends, Tanay and Etai. I thought by taking their LinkedIn
              profile photos, I would have a relatively normalized image of
              each. Here are the original photos:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/tanay.jpeg',
                description: 'Figure 2.8: Tanay',
              }}
              photo2={{
                src: '/final_proj2/etai.jpeg',
                description: 'Figure 2.9: Etai',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              And the hybrid image...
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/hybrid_tanay_etai.jpg',
                description: 'Figure 2.10: Tanay and Etai',
              }}
              photo2={{
                src: '/final_proj2/hybrid_tanay_etai_color.jpg',
                description: 'Figure 2.11: Tanay and Etai, with Color',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Perhaps it is due to the fact that LinkedIn headshots are only
              200px*200px, but even with very large alpha values, I
              couldn&apos;t get the high frequencies image of Etai to appear
              more prominent. I decided to therefore start experimenting with
              larger and more high quality images so hopefully the edges are
              more well defined.
            </p>

            <h3 className="text-sm font-semibold text-left text-black dark:text-white mt-4">
              Who&apos;s the GOAT?
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              It&apos;s gotta be Antony!
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/messi.jpg',
                description: 'Figure 2.12: Messi',
              }}
              photo2={{
                src: '/final_proj2/antony.jpg',
                description: 'Figure 2.13: Antony',
              }}
              height={3}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              And the hybrid image...
            </p>
            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj2/hybrid_antony_messi.jpg"
                  alt="Taj Mahal"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.14: Antony and Messi
                </p>
              </div>
            </div>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              As you can see, the high frequency image now is much more apparent
              than the Tanay and Etai example. I was happy with the way this
              turned out, so I decided to break this down further.
            </p>

            <h3 className="text-sm font-semibold text-left text-black dark:text-white mt-4">
              Breakdown
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              In this subsection, we attempt to analyze the frequencies
              associated with the original, filtered, and the hybrid image. We
              do this by visualizing the 2D Fourier Transformations of the
              Images.
            </p>

            <p className="text-sm mt-4 text-slate-500 dark:text-slate-300 text-center">
              Here are the original image FFTs, after converting images to
              grayscale:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/antony_gray_fft.jpg',
                description: 'Figure 2.15: Original Antony, Gray Scale, FFT',
              }}
              photo2={{
                src: '/final_proj2/messi_gray_fft.jpg',
                description: 'Figure 2.16: Original Messi, Gray Scale, FFT',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-center">
              Here&apos;s the low frequency image of Messi and its FFT:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/low_freq_messi.jpg',
                description: 'Figure 2.17: Low Frequency Messi',
              }}
              photo2={{
                src: '/final_proj2/low_freq_messi_fft.jpg',
                description: 'Figure 2.18: Low Frequency Messi, FFT',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-center">
              Here&apos;s the high frequency image of Antony and its FFT:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/high_freq_antony.jpg',
                description: 'Figure 2.19: High Frequency Antony',
              }}
              photo2={{
                src: '/final_proj2/high_freq_antony_fft.jpg',
                description: 'Figure 2.20: High Frequency Antony, FFT',
              }}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-center">
              And finally, the hybrid image and its FFT:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/hybrid_antony_messi.jpg',
                description: 'Figure 2.14: Antony and Messi',
              }}
              photo2={{
                src: '/final_proj2/hybrid_antony_messi_fft.jpg',
                description: 'Figure 2.21: Antony and Messi, FFT',
              }}
            />

            <h3 className="text-sm font-semibold text-left text-black dark:text-white mt-4">
              Do I have the nuts?
            </h3>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              Everyone knows 2-7o is the worst hand in poker. But when we play
              the 2-7o, everyone plays them like aces. So is 2-7o the same as
              aces?
            </p>

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              For my last two hybrid images, I used photos with different
              backgrounds. I decided for the last hybrid photo I wanted to see
              how a constant environment would affect the image. Here are the
              original images I took:
            </p>

            <DoublePhoto
              photo1={{
                src: '/final_proj2/two_seven.jpg',
                description: 'Figure 2.22: 2-7 Off Suit',
              }}
              photo2={{
                src: '/final_proj2/aces.jpg',
                description: 'Figure 2.23: Aces',
              }}
              height={3}
            />

            <p className="text-sm mt-3 text-slate-500 dark:text-slate-300 text-left">
              And the hybrid image (skio.imread was weird where it automatically
              rotated the image):
            </p>

            <div className="flex justify-center gap-4 mt-8 mb-8">
              <div className="flex-none">
                <Image
                  src="/final_proj2/hybrid_cards.jpg"
                  alt="Hybrid Cards"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-300 mt-3">
                  Figure 2.24: Hybrid Cards
                </p>
              </div>
            </div>

            {showButton && (
              <Button variant="default" className="fixed bottom-4 right-4">
                <ScrollLink to="top" smooth={true} duration={500}>
                  Back to Top
                </ScrollLink>
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
