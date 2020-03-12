import React, { useState, useEffect } from 'react';
import { Card } from '../shared/Card';
import { CharacterService } from '../../services/CharacterService';
import { CharacterInfo } from './CharacterInfo/';
import GridLoader from 'react-spinners/GridLoader';
import { LoadingContainer, MainListStyle } from './styles';
import { Button } from '../shared/Button';

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

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
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
    <MainListStyle className="main-list">
      <h2>Characters</h2>

      <section className="pagination">
        <Button onClick={evt => previousPage(evt)} disabled={!previousLink}>
          Previous
        </Button>
        <Button onClick={evt => nextPage(evt)} disabled={!nextLink}>
          Next
        </Button>
      </section>

      <LoadingContainer className="loader-container" isLoading={isLoading}>
        <GridLoader
          color={'#222'}
          loading={isLoading}
          size={15}
          style={{ display: 'block', margin: '0 auto', borderColor: 'red' }}
        />
      </LoadingContainer>
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
            <CharacterInfo character={character} isLoading={isLoading} />
          </Card>
        ))}
      </section>
      <section className="pagination">
        <Button onClick={evt => previousPage(evt)} disabled={!previousLink}>
          Previous
        </Button>
        <Button onClick={evt => nextPage(evt)} disabled={!nextLink}>
          Next
        </Button>
      </section>
    </MainListStyle>
  );
};
