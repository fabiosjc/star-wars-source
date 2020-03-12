import styled from 'styled-components';

const StarshipContainer = styled.div`
  .starship-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    background: #fff;
  }

  h3 {
    margin-bottom: 1em;
  }

  .general-info {
    padding: 3em;
  }

  @media screen and (max-device-width: 1200px) {
    h3 {
      margin-bottom: 1em;
    }

    .starship-details {
      display: block;

      img {
        width: 100%;
        object-fit: cover;
        object-position: top;
      }
    }

    .general-info {
      padding: 3em;
    }
  }
`;

export { StarshipContainer };
