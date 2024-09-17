'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export function CardComponent({ title, image, description, link }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Card className="w-full md:w-[300px]">
        <Link href={link}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover rounded-md"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
              {description}
            </p>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}
