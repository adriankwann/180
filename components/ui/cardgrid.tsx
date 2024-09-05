import * as React from 'react';
import { CardComponent } from '@/components/ui/hero-projectcard';
import Link from 'next/link';

export const CardGrid: React.FC = () => {
  const cardsData = [
    {
      title: 'Project 1',
      image: '/emir.jpg',
      description: 'Reconstructing Prokudin-Gorskii Images!',
    },
    {
      title: 'Project Beta',
      image: '/image2.jpg',
      description: 'Description of Project Beta',
    },
    {
      title: 'Project Gamma',
      image: '/image3.jpg',
      description: 'Description of Project Gamma',
    },
    {
      title: 'Project Delta',
      image: '/image4.jpg',
      description: 'Description of Project Delta',
    },
    {
      title: 'Project Epsilon',
      image: '/image5.jpg',
      description: 'Description of Project Epsilon',
    },
    {
      title: 'Project Zeta',
      image: '/image6.jpg',
      description: 'Description of Project Zeta',
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Link href="/project-1">
            <CardComponent
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
