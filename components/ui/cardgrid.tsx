import * as React from 'react';
import { CardComponent } from '@/components/ui/hero-projectcard';

export const CardGrid: React.FC = () => {
  const cardsData = [
    {
      id: '1', // Unique ID for key
      title: 'Project Alpha',
      image: '/image1.jpg',
      description: 'Description of Project Alpha',
    },
    {
      id: '2', // Unique ID for key
      title: 'Project Beta',
      image: '/image2.jpg',
      description: 'Description of Project Beta',
    },
    {
      id: '3', // Unique ID for key
      title: 'Project Gamma',
      image: '/image3.jpg',
      description: 'Description of Project Gamma',
    },
    {
      id: '4', // Unique ID for key
      title: 'Project Delta',
      image: '/image4.jpg',
      description: 'Description of Project Delta',
    },
    {
      id: '5', // Unique ID for key
      title: 'Project Epsilon',
      image: '/image5.jpg',
      description: 'Description of Project Epsilon',
    },
    {
      id: '6', // Unique ID for key
      title: 'Project Zeta',
      image: '/image6.jpg',
      description: 'Description of Project Zeta',
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <CardComponent
            key={card.id} // Use the unique ID as the key
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
