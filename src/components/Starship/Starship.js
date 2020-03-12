import React, { Fragment, useState, useEffect } from 'react';
import GridLoader from 'react-spinners/GridLoader';

import { LoadingContainer } from '../Characters/styles';
import { Button } from '../shared/Button/Button';
import { STAR_WARS_IMAGES } from '../../constants/hosts';
import { StarshipContainer } from './styles';

export const Starship = (...props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const getImageId = url => {
    if (!url) return '';

    return url.substring(
      url.indexOf('starships/') + 'starships/'.length,
      url.length - 1
    );
  };

  const starship = props[0].location.data || {};

  return (
    <StarshipContainer>
      <h2>Starship</h2>
      <LoadingContainer className="loader-container" isLoading={isLoading}>
        <GridLoader
          color={'#222'}
          loading={isLoading}
          size={15}
          style={{ display: 'block', margin: '0 auto', borderColor: 'red' }}
        />
      </LoadingContainer>

      <div className="starship-details">
        <div className="spaceship-image">
          <img
            alt=""
            src={`${STAR_WARS_IMAGES}/starships/${getImageId(
              starship.url
            )}.jpg`}
          />
        </div>
        <div className="general-info">
          <h3>{starship.name}</h3>

          <p>
            <strong>Model</strong>: {starship.model}
          </p>
          <p>
            <strong>Manufacturer</strong>: {starship.manufacturer}
          </p>
          <p>
            <strong>Cost</strong>: {starship.cost_in_credits} credits
          </p>
          <p>
            <strong>Length</strong>: {starship.length}m
          </p>
          <p>
            <strong>Speed</strong>:{starship.max_atmosphering_speed} km/h
          </p>
          <p>
            <strong>Crew</strong>: {starship.crew}
          </p>
          <p>
            <strong>Passengers</strong>: {starship.passengers}
          </p>
          <p>
            <strong>Cargo Capacity</strong>: {starship.cargo_capacity} kg
          </p>
        </div>
      </div>

      <section className="pagination">
        <Button onClick={props[0].history.goBack}>Return</Button>
      </section>
    </StarshipContainer>
  );
};
