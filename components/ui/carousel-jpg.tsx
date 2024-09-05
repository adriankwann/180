'use client';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { motion } from 'framer-motion';

interface ImageDataItem {
  name: string;
  image: string;
  displacements: { type: string; x: number; y: number }[];
}

interface CarouselJPGSProps {
  imageData: ImageDataItem[];
}

export default function Carousel_JPGS({ imageData }: CarouselJPGSProps) {
  const [selectedImage, setSelectedImage] =
    React.useState<ImageDataItem | null>(null);

  const openModal = (item: ImageDataItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mx-auto max-w-xs">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <motion.div whileHover={{ scale: 1.05 }}>
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
                      className="rounded-md cursor-pointer"
                      onClick={() => openModal(item)}
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
        </motion.div>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.name}
              width={800}
              height={800}
              className="rounded-md"
            />
            {/* <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-blue-300"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
