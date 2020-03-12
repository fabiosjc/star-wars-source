import React from 'react';
import { StarshipList } from './styles';
import { Link } from 'react-router-dom';

export const Starships = ({ starships = [] }) => {
  return (
    <StarshipList>
      {starships.map(starship => {
        return (
          <Link
            key={starship.url}
            to={{
              pathname: '/starship',
              data: starship,
            }}
          >
            {starship.name}
          </Link>
        );
      })}
    </StarshipList>
  );
};
