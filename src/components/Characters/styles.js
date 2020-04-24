import styled from 'styled-components';

const MainListStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;

  h2 {
    margin-bottom: 0.5.rem;
  }

  .search-not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    font-size: x-large;
    color: #777;
  }
`;

const LoadingContainer = styled.div`
  width: 80%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: calc(100% - 10vh);
  left: 0;
  top: 10vh;
  width: 100%;
  background: ${props => (props.isLoading ? '#eee' : 'transparent')};
  z-index: ${props => (props.isLoading ? 1 : -1)};
`;

const SearchBox = styled.div`
  .shadow {
    box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.3);
  }

  fieldset {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.368);
  }

  input {
    line-height: 2.5rem;
    text-indent: 1rem;
    width: 67%;
    border: 1px solid #ccc;
    background: #f7f8fa;
    font-size: 1rem;
    color: #333333;
  }

  @media (max-width: 768px) {
    input {
      width: 64%;
    }
  }

  button {
    line-height: 2.5rem;
    background: #2196f3;
    color: white;
    border: 1px solid;
    border-radius: 3px;
    width: 30%;
    font-size: 1rem;
    margin-left: 1rem;
    padding: 0 0.5rem;
  }
`;

export { MainListStyle, LoadingContainer, SearchBox };
