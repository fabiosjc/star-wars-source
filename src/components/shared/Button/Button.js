import React from 'react';
import { ButtonWrapper } from './styles';

export const Button = ({ children, onClick, disabled }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};
