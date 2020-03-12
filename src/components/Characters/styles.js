import styled from 'styled-components';

const MainListStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
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

export { MainListStyle, LoadingContainer };
