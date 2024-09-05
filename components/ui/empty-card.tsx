'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

export default function EmptyCard({ title, description }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Card className="w-full md:w-[300px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Render a skeleton for the content */}
          <Skeleton className="h-40 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          {/* <Skeleton className="h-4 w-3/4" /> */}
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
