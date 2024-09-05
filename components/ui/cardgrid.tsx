import * as React from 'react';
import { CardComponent } from '@/components/ui/hero-projectcard'; // Adjust the import path as necessary

export const CardGrid: React.FC = () => {
  const cardsData = [
    {
      id: '1',
      title: 'Project Alpha',
      image: '/image1.jpg',
      description: 'Description of Project Alpha',
    },
    {
      id: '2',
      title: 'Project Beta',
      image: '/image2.jpg',
      description: 'Description of Project Beta',
    },
    {
      id: '3',
      title: 'Project Gamma',
      image: '/image3.jpg',
      description: 'Description of Project Gamma',
    },
    {
      id: '4',
      title: 'Project Delta',
      image: '/image4.jpg',
      description: 'Description of Project Delta',
    },
    {
      id: '5',
      title: 'Project Epsilon',
      image: '/image5.jpg',
      description: 'Description of Project Epsilon',
    },
    {
      id: '6',
      title: 'Project Zeta',
      image: '/image6.jpg',
      description: 'Description of Project Zeta',
    },
  ];

  return (
    <div
      id="projects"
      className="container mx-auto px-6 md:px-10 lg:px-16 py-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <CardComponent
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
