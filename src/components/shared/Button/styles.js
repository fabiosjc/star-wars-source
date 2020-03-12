import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  background: #f5f5f5;
  border: 2px solid #666;
  border-radius: 4px;
  font-weight: 700;
  padding: 8px 18px !important;
  color: #333;

  :hover {
    background: #fff;
  }

  ${props =>
    props.disabled &&
    css`
      background: #efefef;
      color: #999;
      border: 1px solid #999;

      :hover {
        background: #eee;
        cursor: not-allowed;
      }
    `}
`;

export { ButtonWrapper };
