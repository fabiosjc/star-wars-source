import React from 'react';
import { Card } from '../components/shared/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => <Card />;

export const LukeCard = () => (
  <Card
    title="Luke Skywalker"
    image="http://www.facetheforce.today/luke"
    linkTo="/linkTo"
    linkSeeMore="/seeMore"
  >
    <p className="generalInfo">
      <strong>Species:</strong> Human <br />
      <strong>Origin</strong>: Tatooine
      <br />
    </p>
    <div className="spaceships">
      <h4>Spaceships</h4>
      <span>
        X-34 Landspeeder, T-16 Skyhopper, X-wing Starfighter, Snowspeeder
      </span>
    </div>
  </Card>
);
