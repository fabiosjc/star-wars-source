import React from 'react';
import { Card } from '../components/shared/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <div style={{ maxWidth: '250px', margin: '0 auto 30px;' }}>
    <Card title="Title" image="http://www.facetheforce.today/rey">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nibh
        pretium, dapibus dui aliquam, congue tortor. Phasellus eu est non turpis
        dapibus mattis. Aenean eleifend mi dolor, sit amet feugiat neque finibus
        sit amet. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vivamus commodo auctor velit eu
        bibendum. Morbi libero turpis, commodo fermentum laoreet in, consectetur
        id sapien. Sed fermentum nibh in porttitor pharetra. Cras metus nisl,
        suscipit at mattis et, tincidunt in mauris. In fermentum, ligula ut
        cursus scelerisque, erat ex cursus erat, ut luctus mi ex id purus.
        Nullam vel viverra turpis. Donec venenatis pretium quam eu lacinia.
        Vivamus sem augue, efficitur eget malesuada at, gravida vitae sapien.
      </div>
    </Card>
  </div>
);

export const LukeCard = () => (
  <div style={{ maxWidth: '250px', margin: '0 auto 30px;' }}>
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
  </div>
);
