import React, { Fragment, useState, useEffect } from 'react';
import { CharacterService } from '../../services/CharacterService';
import { Starships } from './Starships';

export const CharacterInfo = ({ character }) => {
  const [homeworld, setHomeworld] = useState('Unknown');
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getDetails(character);

    return () => {
      setHomeworld(null);
      setSpecies(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character]);

  const getDetails = async character => {
    const result = await CharacterService.fetchDetails(character);
    const starshipsResult = await CharacterService.fetchStarShips(character);

    if (result) {
      const { homeworld = 'Desconhecido', species = 'Desconhecido' } = result;

      setHomeworld(homeworld);
      setSpecies(species);
      setStarships(starshipsResult);
    }
  };

  return (
    <Fragment>
      <p className="generalInfo">
        <strong>Specie:</strong> {species} <br />
        <strong>Origin</strong>: {homeworld}
        <br />
      </p>
      <div className="spaceships">
        <h4>Spaceships</h4>
        <Starships starships={starships} />
      </div>
    </Fragment>
  );
};
