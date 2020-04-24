import React, { useState, useEffect, Fragment } from 'react';
import { Card } from '../shared/Card';
import { CharacterService } from '../../services/CharacterService';
import { CharacterInfo } from './CharacterInfo/';
import GridLoader from 'react-spinners/GridLoader';
import { LoadingContainer, MainListStyle, SearchBox } from './styles';
import { Button } from '../shared/Button';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [previousLink, setPreviousLink] = useState(null);
  const [nextLink, setNextLink] = useState(null);
  const [search, setSearch] = useState();

  async function fetchData({ search, page }) {
    setIsLoading(true);
    const response = await CharacterService.fetch({ search, page });
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
    fetchData({ search, page });

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

  const onSearch = () => {
    fetchData({ search, page });
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const renderCharacters = () => {
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  const paginationButtons = () => {
    return (
      (previousLink || nextLink) && (
        <section className="pagination">
          <Button onClick={evt => previousPage(evt)} disabled={!previousLink}>
            Previous
          </Button>
          <Button onClick={evt => nextPage(evt)} disabled={!nextLink}>
            Next
          </Button>
        </section>
      )
    );
  };

  return (
    <MainListStyle className="main-list">
      <h2>Characters</h2>

      <SearchBox>
        <fieldset className="flex-container shadow">
          <input
            id="searchField"
            type="text"
            className="search-field"
            placeholder="Search by character"
            value={search}
            onChange={event => setSearch(event.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Search Field"
          />
          <button onClick={onSearch}>Search</button>
        </fieldset>
      </SearchBox>

      <LoadingContainer className="loader-container" isLoading={isLoading}>
        <GridLoader
          color={'#222'}
          loading={isLoading}
          size={15}
          style={{ display: 'block', margin: '0 auto', borderColor: 'red' }}
        />
      </LoadingContainer>
      <div>
        {characters.length === 0 ? (
          <div className="search-not-found">Search not found</div>
        ) : (
          <Fragment>
            {paginationButtons()}
            <section className="grid cards">{renderCharacters()}</section>
            {paginationButtons()}
          </Fragment>
        )}
      </div>
    </MainListStyle>
  );
};
