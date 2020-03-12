import React, { Fragment } from 'react';

import './index.css';

export const Starship = (...props) => {
  const getImageId = url => {
    if (!url) return '';

    return url.substring(
      url.indexOf('starships/') + 'starships/'.length,
      url.length - 1
    );
  };

  const starship = props[0].location.data || {};

  return (
    <Fragment>
      <h3>Starship</h3>
      <div className="starship-details">
        <div className="spaceship-image">
          <img
            alt=""
            src={`https://starwars-visualguide.com/assets/img/starships/${getImageId(
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
      <button onClick={props[0].history.goBack}>Return</button>
    </Fragment>
  );
};
