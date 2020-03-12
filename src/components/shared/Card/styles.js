import styled from 'styled-components';

const CardBox = styled.article`
  min-width: 200px;
  background-color: transparent;
  position: relative;
  border-radius: 4px;
  border: 1px solid transparent;
  overflow: hidden;
  box-shadow: 0px 5px 15px rgba(34, 36, 38, 0.06),
    0px 2px 5px rgba(34, 36, 38, 0.02);

  :hover {
    box-shadow: 0 0 2px 1px #2196f3;
    border: 1px solid #2196f3;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: #009898;
  }
`;

const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardImage = styled.div`
  display: flex;
  background: #eaebec;
  background-repeat: no-repeat;
  background-position: 194px 10px;
  width: 100%;
  height: 120px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #dee9ef;
  }

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const CardInfo = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 2;
  background-color: #ffffff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 1.17em !important;
  line-height: 23px !important;
  margin: 0 0 8px 0;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background: #080807;
  margin: 24px -24px 15px;
  padding: 5px;
  text-align: center;
  color: white;
`;

const CardDescription = styled.div`
  flex-grow: 1;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  color: #666;
  overflow: hidden;
  display: block;
`;

const CardLinkButton = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;
  padding: 8px 16px;
  color: #009898;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 40px !important;
  :hover {
    .wrapper-svg svg {
      fill: #00b9b7 !important;
    }
    color: #00b9b7 !important;
  }

  .wrapper-svg svg {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

export {
  CardBox,
  CardLink,
  CardImage,
  CardInfo,
  CardTitle,
  CardDescription,
  CardLinkButton,
};
