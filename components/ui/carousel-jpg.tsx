"use client";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the type for each item in the image data array
interface ImageDataItem {
  name: string;
  image: string;
  displacements: { type: string; x: number; y: number }[];
}

// Define the props type for the Carousel component
interface CarouselJPGSProps {
  imageData: ImageDataItem[];
}

// Update the component to accept typed props
export default function Carousel_JPGS({ imageData }: CarouselJPGSProps) {
  return (
    <div className="mx-auto max-w-xs">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {imageData.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={350}
                    height={350}
                    className="rounded-md"
                  />
                  <h3 className="text-lg font-bold mt-2">{item.name}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    {item.displacements.map((disp, idx) => (
                      <p key={idx}>
                        Offset for {disp.type}: ({disp.x}, {disp.y})
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
