import axios from 'axios';
import { STAR_WARS_API } from '../constants/hosts';

const CharacterService = {
  fetch: async page => {
    return await axios.get(`${STAR_WARS_API}/people/?page=${page}`);
  },

  fetchStarShips: async character => {
    let promises = [];
    let starships = [];
    character.starships.map(url => promises.push(axios.get(url)));
    const response = await axios.all(promises).then(resp => {
      return resp;
    });

    response.map(resp => starships.push(resp.data));

    return starships;
  },

  fetchDetails: async character => {
    let promises = [];
    promises.push(axios.get(character.homeworld));
    character.species.map(url => promises.push(axios.get(url)));

    try {
      const [homeworldResp, speciesResp] = await axios.all(promises);
      const result = {
        homeworld: homeworldResp && homeworldResp.data.name,
        species: speciesResp && speciesResp.data.name,
      };

      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { CharacterService };
