import React, { useState, useEffect, Fragment } from 'react';
import { Card } from '../shared/Card';
import { CharacterService } from '../../services/CharacterService';
import { CharacterInfo } from './CharacterInfo';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [previousLink, setPreviousLink] = useState(null);
  const [nextLink, setNextLink] = useState(null);

  async function fetchData(page) {
    setIsLoading(true);
    const response = await CharacterService.fetch(page);
    setCharacters(response.data.results);
    setLinks(response.data);
    setIsLoading(false);
  }

  const setLinks = data => {
    setPreviousLink(data.previous);
    setNextLink(data.next);
  };

  useEffect(() => {
    fetchData(page);

    return () => {
      setCharacters([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const previousPage = event => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = event => {
    setPage(page + 1);
  };

  const getImageId = url => {
    return url.substring(
      url.indexOf('people/') + 'people/'.length,
      url.length - 1
    );
  };

  return (
    <div className="main-list">
      <h2>Characters</h2>
      <section className="grid cards">
        {characters.map((character, index) => (
          <Card
            title={character.name}
            image={`https://starwars-visualguide.com/assets/img/characters/${getImageId(
              character.url
            )}.jpg`}
            linkTo="/linkTo"
            linkSeeMore="/seeMore"
            key={character.url}
          >
            <CharacterInfo character={character} />
          </Card>
        ))}
      </section>
      <section className="pagination">
        <button onClick={evt => previousPage(evt)} disabled={!previousLink}>
          Previous
        </button>
        <button onClick={evt => nextPage(evt)} disabled={!nextLink}>
          Next
        </button>
      </section>
    </div>
  );
};
