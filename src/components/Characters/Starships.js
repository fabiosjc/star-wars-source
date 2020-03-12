import React from 'react';
import { StarshipList } from './styles';

export const Starships = ({ starships = [] }) => {
  return (
    <StarshipList>
      {starships.map(starship => {
        return (
          <li key={starship.url}>
            <a href={starship.url}>{starship.name}</a>
          </li>
        );
      })}
    </StarshipList>
  );
};
