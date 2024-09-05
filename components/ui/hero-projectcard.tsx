import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

export function CardComponent({ title, image, description }: CardProps) {
  return (
    <Card className="w-full md:w-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
