"use client"; // Ensure this component is treated as a client component

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/ui/navbar";
import Carousel_JPGS from "@/components/ui/carousel-jpg";
import { Progress } from "@/components/ui/progress"; // Import your Progress component

export default function Project1() {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [progress, setProgress] = useState(0); // State to manage progress value

  useEffect(() => {
    // Simulate a loading progress
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          setLoading(false); // Set loading to false once progress is complete
          return 100;
        }
        return prevProgress + 10; // Increment progress by 10
      });
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(progressInterval); // Cleanup the interval on component unmount
  }, []);

  if (loading) {
    // Render progress bar while loading
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Loading...
        </h2>
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  // Render the main content once loading is complete
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
            Images of the Russian Empire: Coloring the Prokudin-Gorskii Photo Collection
          </p>
        </div>

        {/* Content with Margins */}
        <div className="mx-auto max-w-4xl">
          <Separator />

          {/* Subtitle for the Carousel */}
          <div className="flex justify-center mb-4 mt-6">
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
              <Carousel_JPGS />
            </div>

            {/* Large Images Carousel */}
            <div className="flex flex-col items-center w-full max-w-md lg:w-1/2">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Large Images
              </h3>
              <Carousel_JPGS />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
