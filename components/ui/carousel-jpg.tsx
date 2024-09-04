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

const small_image_data = [
  {
    name: "Monastery",
    image: "/monastery.jpg",
    displacements: [
      { type: "Green", x: 2, y: -3 },
      { type: "Red", x: 2, y: 3 },
    ],
  },
  {
    name: "Tobolsk",
    image: "/tobolsk.jpg",
    displacements: [
      { type: "Green", x: 2, y: 3 },
      { type: "Red", x: 3, y: 6 },
    ],
  },
  {
    name: "Cathedral",
    image: "/cathedral.jpg",
    displacements: [
      { type: "Green", x: 2, y: 5 },
      { type: "Red", x: 3, y: 12 },
    ],
  },
];

export default function Carousel_JPGS() {
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
          {small_image_data.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-2"> {/* Reduced padding */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={350} // Adjusted width for smaller size
                    height={350} // Adjusted height for smaller size
                    className="rounded-md" // Optional: add rounded corners
                  />
                  <h3 className="text-lg font-bold mt-2">{item.name}</h3> {/* Reduced margin-top */}
                  <div className="text-sm text-gray-500 mt-1"> {/* Reduced margin-top */}
                    {item.displacements.map((disp, idx) => (
                      <p key={idx}>
                        Offset for {disp.type}: ({disp.x}, {disp.y})
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}a
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
