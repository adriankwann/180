import * as React from 'react';
import { CardComponent } from '@/components/ui/hero-projectcard';
import { Skeleton } from '@/components/ui/skeleton';
import EmptyCard from '@/components/ui/empty-card';

export const CardGrid: React.FC = () => {
  const cardsData = [
    {
      id: '1',
      title: 'Project 1',
      image: '/emir.jpg',
      description: 'Reconstructing the Prokudin-Gorskii photo collection',
      link: '/project-1',
    },
    {
      id: '2',
      title: 'Project 2',
      image: '/final_proj2/hybrid_cards.jpg',
      description: 'Experimenting with Filters and Frequencies!',
      link: '/project-2',
    },
    {
      id: '3',
      title: 'Project 3',
      image: '/image3.jpg',
      description: 'Coming Soon',
      link: '/project-3',
    },
    // {
    //   id: '4',
    //   title: 'Project 4',
    //   image: '/image4.jpg',
    //   description: 'Coming Soon',
    // },
    // {
    //   id: '5',
    //   title: 'Project 5',
    //   image: '/image5.jpg',
    //   description: 'Coming Soon',
    // },
    // {
    //   id: '6',
    //   title: 'Project 6',
    //   image: '/image6.jpg',
    //   description: 'Coming Soon',
    // },
  ];

  return (
    <>
      <div data-aos="fade-up" className="flex flex-col items-center mb-5 mt-10">
        <h2 className="text-2xl font-semibold text-center text-black dark:text-white">
          Projects
        </h2>
      </div>

      <div
        id="projects"
        className="container mx-auto px-6 md:px-10 lg:px-16 py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {cardsData.map((card) =>
            card.description === 'Coming Soon' ? (
              <EmptyCard
                key={card.id}
                title={card.title}
                image={card.image}
                description={card.description}
              />
            ) : (
              <CardComponent
                key={card.id}
                title={card.title}
                image={card.image}
                description={card.description}
                link={card.link}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
